import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
    }

    const stripe = getStripe();
    if (!stripe) {
      // In dev/simulated mode
      return NextResponse.json({
        paid: true,
        customerEmail: "demo@jungvorteil.ch",
        amountTotal: 700,
        currency: "chf",
      });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      paid: session.payment_status === "paid",
      customerEmail: session.customer_details?.email,
      amountTotal: session.amount_total,
      currency: session.currency,
    });
  } catch (error: any) {
    console.error("Stripe verify error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to verify session" },
      { status: 500 }
    );
  }
}
