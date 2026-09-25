// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

// Simple in-memory rate limiting (resets on server restart)
const submissions = new Map<string, number>();
const RATE_LIMIT_MS = 60 * 1000; // 1 per minute per IP

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0] ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const lastSubmit = submissions.get(ip);
  if (lastSubmit && Date.now() - lastSubmit < RATE_LIMIT_MS) {
    return NextResponse.json(
      { error: "Bitte warte eine Minute, bevor du erneut sendest." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Configure email provider (e.g., Resend, SendGrid, Postmark)
    // For now, log the contact request
    console.log("📬 Kontaktanfrage:", {
      name: data.name,
      email: data.email,
      message: data.message.slice(0, 50) + "...",
      timestamp: new Date().toISOString(),
    });

    submissions.set(ip, Date.now());

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
