import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Publishable (public) values – safe to ship; used as fallback when Vercel env vars are not set.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dgygyyprwdmadjzuviak.supabase.co";
const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_gS0Ig_msnm7Qs8MteFJDsA_2IzeMe4N";

// Pings the Supabase database so the free-tier project is never considered inactive.
export async function GET() {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/categories?select=id&limit=1`, {
      headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      cache: "no-store",
    });
    const body = await res.text();
    return NextResponse.json(
      { status: res.ok ? "ok" : "error", httpStatus: res.status, body: body.slice(0, 200), timestamp: new Date().toISOString() },
      { status: res.ok ? 200 : 502 }
    );
  } catch (e) {
    return NextResponse.json({ status: "error", error: (e as Error).message }, { status: 500 });
  }
}
