import { getPublishedOffers } from '@/lib/api/offers';
import OfferGrid from '@/components/offers/OfferGrid';

export const metadata = {
  title: 'Alle Angebote | JungVorteil',
};

export default async function AngebotePage({ params, searchParams }: { params: Promise<{ locale: string }>, searchParams: Promise<{ category?: string, brand?: string }> }) {
  const { locale } = await params;
  const { category, brand } = await searchParams;
  
  const result = await getPublishedOffers();
  let offers = result.offers;
  
  if (category) {
    offers = offers.filter((o) => o.category?.slug === category);
  }
  if (brand) {
    offers = offers.filter((o) => o.brand?.slug === brand);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {category ? `Angebote: ${category}` : brand ? `Angebote: ${brand}` : 'Alle Vorteile'}
        </h1>
        <p className="text-gray-600 text-lg">Entdecke {offers.length} geprüfte Angebote.</p>
      </div>

      {offers.length > 0 ? (
        <OfferGrid offers={offers} locale={locale} />
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-xl text-gray-500 font-medium">Leider haben wir keine passenden Angebote gefunden.</p>
        </div>
      )}
    </div>
  );
}
