// app/api/click/route.ts
// Click tracking API - records external link clicks
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const offer_id = body.offer_id || body.offerId;
    const { device_category, utm_source, utm_medium, utm_campaign } = body;

    if (!offer_id) {
      return NextResponse.json({ error: "offer_id required" }, { status: 400 });
    }

    const supabase = await createClient();

    // Record click event
    await supabase.from("click_events").insert({
      offer_id,
      device_category: device_category ?? "unknown",
      referrer: request.headers.get("referer"),
      utm_source,
      utm_medium,
      utm_campaign,
    });

    // Increment click count
    await supabase.rpc("increment_offer_click", { offer_id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Click tracking error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
