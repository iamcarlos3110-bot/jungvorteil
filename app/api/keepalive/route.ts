import { NextResponse } from "next/server";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export const revalidate = 0;

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ status: "fallback", message: "Supabase credentials missing" });
  }

  try {
    const supabase = await createClient();
    const { count, error } = await supabase.from("offers").select("id", { count: "exact", head: true });

    if (error) {
      return NextResponse.json({ status: "error", error: error.message }, { status: 500 });
    }

    return NextResponse.json({ status: "ok", count, timestamp: new Date().toISOString() });
  } catch (e: any) {
    return NextResponse.json({ status: "error", error: e.message }, { status: 500 });
  }
}
