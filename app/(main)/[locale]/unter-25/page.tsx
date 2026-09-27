import { Metadata } from "next";
import { getVerifiedUnderAgeOffers } from "@/services/offers";
import OfferGrid from "@/components/offers/OfferGrid";
import { Sparkles } from "lucide-react";
import AdSlot from "@/components/ads/AdSlot";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Angebote unter 25 Schweiz – Rabatte für junge Leute | JungVorteil",
  description:
    "Alle Angebote und Rabatte für Personen unter 25 Jahren in der Schweiz. Spezielle Tarife, Vergünstigungen und kostenlose Angebote.",
};

export default async function Under25Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  const offers = await getVerifiedUnderAgeOffers(25, 24);

  return (
    <div className="bg-[#F8FAF6] min-h-screen pb-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 mb-12 shadow-inner">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#A3E635]" /> Für alle unter 25 Jahre
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Vorteile &amp; Rabatte Unter 25
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Die besten Jugendtarife wie SBB GA Night, Halbtax Jugend und Gratis-Konten in der Schweiz.
          </p>

          <div className="inline-flex flex-wrap justify-center gap-3 bg-white/10 p-2 rounded-full backdrop-blur-md border border-white/15">
            <Link href={`/${locale}/unter-25`} className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-white text-[#3F5E39] shadow-md">
              Unter 25
            </Link>
            <Link href={`/${locale}/unter-30`} className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all">
              Unter 30
            </Link>
            <Link href={`/${locale}/studentenrabatte`} className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all">
              Studierende
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OfferGrid offers={offers} locale={locale} />

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

