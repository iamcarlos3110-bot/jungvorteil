import { getVerifiedFreeOffers } from "@/services/offers";
import OfferGrid from "@/components/offers/OfferGrid";
import { Gift } from "lucide-react";

export const metadata = {
  title: "Kostenlose Angebote & Gratis-Deals Schweiz | JungVorteil",
  description: "Finde alle 100% kostenlosen Angebote, Gratisproben und gebührenfreien Konten für junge Leute in der Schweiz.",
};

export default async function GratisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const freeOffers = await getVerifiedFreeOffers(24);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
          <Gift className="w-4 h-4" /> 100% Gratis
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Kostenlose Angebote</h1>
        <p className="text-lg text-gray-600">
          Diese Vorteile kosten dich keinen Rappen – komplett gratis für Jugendliche und Studierende.
        </p>
      </div>

      {freeOffers.length > 0 ? (
        <OfferGrid offers={freeOffers} locale={locale} />
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-xl text-gray-500 font-medium">Aktuell sind keine weiteren Gratis-Angebote verfügbar.</p>
        </div>
      )}
    </div>
  );
}
