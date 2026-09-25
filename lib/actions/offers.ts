// lib/actions/offers.ts
// Server Actions for offer operations
"use server";

import { incrementOfferView as incrementView } from "@/services/offers";

export async function incrementOfferView(offerId: string): Promise<void> {
  await incrementView(offerId);
}
