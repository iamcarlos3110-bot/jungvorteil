// app/[locale]/angebote-unter-30/page.tsx
import { Metadata } from "next";
import { getPublishedOffers } from "@/services/offers";

export const metadata: Metadata = {
  title: "Angebote unter 30 Schweiz – Vorteile für junge Leute | JungVorteil",
  description:
    "Alle Angebote und Rabatte für Personen unter 30 Jahren in der Schweiz. Mobilfunk, Reisen, Fitness, Streaming und mehr.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/de/angebote-unter-30`,
  },
};

export default async function Under30Page() {
  const offersData = await getPublishedOffers({ age: 29, limit: 24 });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Angebote unter 30 Jahren
          </h1>
          <p className="text-[#EAF0E5] text-lg">
            Spezielle Vergünstigungen für junge Leute unter 30 in der Schweiz
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#EAF0E5] text-[#3F5E39] px-4 py-2 rounded-full text-sm font-semibold">
              Unter 25
            </span>
            <span className="bg-[#3F5E39] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Unter 28
            </span>
            <span className="bg-[#EAF0E5] text-[#3F5E39] px-4 py-2 rounded-full text-sm font-semibold">
              Unter 30
            </span>
          </div>
        </div>

        {offersData.offers.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Noch keine Angebote vorhanden
            </h2>
            <p className="text-gray-500">
              Angebote werden über das Admin-Panel hinzugefügt.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {offersData.offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-medium text-gray-500 mb-1">
                  {offer.brand?.name ?? "Anbieter"}
                </p>
                <h3 className="font-bold text-gray-900 mb-3">{offer.title_de}</h3>
                {offer.discount_percent && (
                  <p className="text-green-600 font-bold text-lg">
                    {offer.discount_percent}% Rabatt
                  </p>
                )}
                <a
                  href={`/de/angebot/${offer.slug}`}
                  className="mt-4 block w-full bg-[#3F5E39] text-white text-center py-2.5 rounded-xl text-sm font-semibold hover:bg-[#324B2D] transition-colors"
                >
                  Angebot ansehen
                </a>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
