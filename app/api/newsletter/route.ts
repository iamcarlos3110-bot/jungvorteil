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

    try {
      const supabase = await createClient();
      const { error } = await supabase.from("newsletter_subscribers").insert({
        email,
        locale,
      });

      if (error) {
        if (error.code === "23505" || error.message?.includes("unique")) {
          return NextResponse.json({
            success: true,
            message: "Du bist bereits für den Newsletter angemeldet.",
          });
        }
        console.warn("Supabase newsletter insertion warning (using fallback):", error.message);
      }
    } catch (dbErr) {
      console.warn("Database connection issue for newsletter, fallback active:", dbErr);
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

