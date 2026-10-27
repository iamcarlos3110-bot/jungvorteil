// lib/stripe.ts
import Stripe from "stripe";

export const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    return null;
  }
  return new Stripe(apiKey, {
    apiVersion: "2025-02-24.acacia" as any,
    appInfo: {
      name: "JungVorteil AutoTheorie",
      version: "1.0.0",
      url: "https://jungvorteil.ch",
    },
  });
};

export const isStripeConfigured = (): boolean => {
  return Boolean(process.env.STRIPE_SECRET_KEY);
};
