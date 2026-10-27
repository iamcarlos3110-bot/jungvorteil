import { NextRequest, NextResponse } from "next/server";
import { getStripe, isStripeConfigured } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const locale = body.locale || "de";
    const origin = req.headers.get("origin") || "https://jungvorteil.ch";

    const stripe = getStripe();

    if (!stripe || !isStripeConfigured()) {
      // If Stripe keys aren't configured yet in environment, return simulated fallback
      return NextResponse.json({
        configured: false,
        simulated: true,
        message: "Stripe API key not configured. Set STRIPE_SECRET_KEY in .env.local and Vercel.",
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "chf",
            unit_amount: 700, // 7.00 CHF
            product_data: {
              name: "AutoTheorie PRO • Schweizer VIP-Pass",
              description: "Zugang zu allen 600 ASA-Theoriefragen, Prüfungsfallen & 100% werbefrei",
              images: [`${origin}/icon.png`],
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/${locale}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/${locale}/premium?canceled=true`,
      metadata: {
        product: "autotheorie_pro",
        tier: "pro",
        locale,
      },
    });

    return NextResponse.json({
      configured: true,
      url: session.url,
      sessionId: session.id,
    });
  } catch (error: any) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
