// app/api/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { searchOffers } from "@/services/offers";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";

  if (q.trim().length < 2) {
    return NextResponse.json({ offers: [], brands: [] });
  }

  try {
    const offers = await searchOffers(q, 8);
    return NextResponse.json({ offers, query: q });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ offers: [], query: q });
  }
}
