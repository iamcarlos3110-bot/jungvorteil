import { getVerifiedFreeOffers } from "@/services/offers";
import OfferGrid from "@/components/offers/OfferGrid";
import { Gift, Sparkles } from "lucide-react";
import AdSlot from "@/components/ads/AdSlot";
import Newsletter from "@/components/Newsletter";

import { generateSwissMetadata } from "@/lib/swissSeo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return generateSwissMetadata({
    title: "Kostenlose Angebote & Gratis-Deals in der Schweiz",
    description: "Finde kostenlose Angebote, Freikarten und gebührenfreie Services für Jugendliche und Studierende in der Schweiz.",
    path: "/gratis",
    locale,
  });
}

export default async function GratisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  const freeOffers = await getVerifiedFreeOffers(24);

  return (
    <div className="bg-[#F8FAF6] min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 mb-12 shadow-inner">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Gift className="w-4 h-4 text-[#A3E635]" /> Kostenlose Vorteile
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Gratis-Angebote Schweiz
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Diese Vorteile kosten dich keinen Rappen – komplett gratis für Jugendliche und Studierende.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OfferGrid offers={freeOffers} locale={locale} />

        <div className="my-16">
          <AdSlot slot="AD_BETWEEN_OFFERS_1" />
        </div>

        <div className="mt-12">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
