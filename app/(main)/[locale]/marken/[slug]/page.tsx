import { getBrandBySlug, getOffersByBrand } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import { safeJsonLd } from '@/lib/utils';
import SafeImage from '@/components/ui/SafeImage';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  
  if (!brand) return { title: 'Marke nicht gefunden' };
  
  return {
    title: `${brand.name} Rabatt & Studentenrabatt Schweiz – JungVorteil`,
    description: `Finde alle aktuellen Rabatte und Angebote von ${brand.name} für Jugendliche und Studierende in der Schweiz.`
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = await getBrandBySlug(slug);
  
  if (!brand) {
    notFound();
  }

  const offers = await getOffersByBrand(slug);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": brand.name,
    "url": brand.website_url,
    "logo": brand.logo_url
  };

  return (
    <>
      <script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border mb-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-32 h-32 bg-gray-50 rounded-xl p-4 flex-shrink-0 flex items-center justify-center border relative">
            {brand.logo_url && (
              <SafeImage src={brand.logo_url} alt={brand.name} fill sizes="128px" className="object-contain p-2" />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{brand.name} Rabatte</h1>
            {brand.description_de && (
              <p className="text-gray-600 max-w-2xl">{brand.description_de}</p>
            )}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Alle Angebote von {brand.name}</h2>
        <OfferGrid offers={offers} />
      </div>
    </>
  );
}
