import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

const RATE_LIMIT_MS = 60 * 1000; // 1 per minute per IP

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const supabase = await createClient();

  // Rate limiting check via Supabase contact_rate_limits table
  try {
    const { data: limitData } = await supabase
      .from("contact_rate_limits")
      .select("last_submit_at")
      .eq("ip", ip)
      .maybeSingle();

    if (limitData?.last_submit_at) {
      const lastSubmitTime = new Date(limitData.last_submit_at).getTime();
      if (Date.now() - lastSubmitTime < RATE_LIMIT_MS) {
        return NextResponse.json(
          { error: "Bitte warte eine Minute, bevor du erneut sendest." },
          { status: 429 }
        );
      }
    }
  } catch {
    // Fallback if table not ready
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "JungVorteil Kontakt <kontakt@jungvorteil.ch>",
          to: ["admin@jungvorteil.ch"],
          subject: `Neue Kontaktanfrage von ${data.name}`,
          html: `<p><strong>Name:</strong> ${data.name}</p>
                <p><strong>E-Mail:</strong> ${data.email}</p>
                <p><strong>Nachricht:</strong></p>
                <p>${data.message.replace(/\n/g, "<br>")}</p>`,
        }),
      });

      if (!res.ok) {
        console.error("Resend email error:", await res.text());
      }
    } else if (process.env.NODE_ENV === "development") {
      console.log("📬 Kontaktanfrage (Dev Mode):", {
        name: data.name,
        email: data.email,
        message: data.message.slice(0, 50) + "...",
        timestamp: new Date().toISOString(),
      });
    }

    // Save contact message to Supabase contact_messages table
    try {
      await supabase.from("contact_messages").insert({
        name: data.name,
        email: data.email,
        message: data.message,
        ip,
        created_at: new Date().toISOString(),
      });
    } catch {
      // Table fallback
    }

    // Upsert rate limit record for IP
    await supabase.from("contact_rate_limits").upsert({
      ip,
      last_submit_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Deine Nachricht wurde gesendet.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Ungültige Eingabe" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server-Fehler" }, { status: 500 });
  }
}
