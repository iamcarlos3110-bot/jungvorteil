import { getCityBySlug, getOffersByCity } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';

// Removed generateStaticParams to avoid build time cookies() issues

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = await getCityBySlug(city);
  
  if (!cityData) return { title: 'Stadt nicht gefunden' };
  
  return {
    title: `Rabatte & Angebote in ${cityData.name_de} | JungVorteil`,
    description: `Lokale Rabatte, Studentenangebote und Vergünstigungen für junge Leute in ${cityData.name_de}.`
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = await getCityBySlug(city);
  
  if (!cityData) {
    notFound();
  }

  const offers = await getOffersByCity(city);

  return (
    <div>
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Rabatte & Angebote in {cityData.name_de} für junge Leute
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Lokale Deals und schweizweite Angebote, die du in {cityData.name_de} einlösen kannst.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <OfferGrid offers={offers} />
      </div>
    </div>
  );
}
