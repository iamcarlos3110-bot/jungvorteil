import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const newsletterSchema = z.object({
  email: z.string().email(),
  locale: z.string().optional().default("de"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, locale } = newsletterSchema.parse(body);

    const supabase = await createClient();

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      locale,
    });

    if (error) {
      // Check for duplicate key constraint error (code 23505 or unique error)
      if (error.code === "23505" || error.message?.includes("unique")) {
        return NextResponse.json({
          success: true,
          message: "Du bist bereits für den Newsletter angemeldet.",
        });
      }
      console.error("Newsletter subscription error:", error);
      return NextResponse.json(
        { error: "Fehler beim Speichern. Bitte versuche es später erneut." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Vielen Dank! Du wurdest erfolgreich für den Newsletter angemeldet.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Server-Fehler. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}
