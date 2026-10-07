import { searchOffers } from '@/lib/api/offers';
import OfferGrid from '@/components/offers/OfferGrid';
import SearchBar from '@/components/search/SearchBar';
import Link from 'next/link';

import { generateSwissMetadata } from "@/lib/swissSeo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  return generateSwissMetadata({
    title: "Suche",
    description: "Suche nach Rabatten, Deals und Vorteilen in der Schweiz.",
    path: "/suche",
    locale,
    noIndex: true,
  });
}

export default async function SearchPage({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<{ q?: string }> }) {
  const { locale } = await params;
  const { q } = await searchParams;
  const query = q || '';
  
  const offers = query ? await searchOffers(query) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Suchen</h1>
        <SearchBar onNavigate={true} locale={locale} placeholder={query || "Suchen..."} />
      </div>

      {query ? (
        <>
          <h2 className="text-xl mb-6">
            Ergebnisse für: <span className="font-bold">{query}</span> ({offers.length})
          </h2>
          {offers.length > 0 ? (
            <OfferGrid offers={offers} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-lg text-gray-600 mb-4">Leider haben wir keine Angebote gefunden, die zu deiner Suche passen.</p>
              <div className="text-sm text-gray-500">
                <p>Beliebte Suchbegriffe:</p>
                <div className="flex gap-2 justify-center mt-2">
                  <Link href={`/${locale}/suche?q=apple`} className="text-[#3F5E39] hover:underline">Apple</Link>
                  <Link href={`/${locale}/suche?q=sbb`} className="text-[#3F5E39] hover:underline">SBB</Link>
                  <Link href={`/${locale}/suche?q=fitness`} className="text-[#3F5E39] hover:underline">Fitness</Link>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-gray-500">
          Gib einen Suchbegriff ein, um nach Angeboten zu suchen.
        </div>
      )}
    </div>
  );
}
