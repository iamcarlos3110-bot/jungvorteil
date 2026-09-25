import { getCategoryBySlug, getOffersByCategory } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import Script from 'next/script';

// Removed generateStaticParams to avoid build time cookies() issues

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const catData = await getCategoryBySlug(category);
  
  if (!catData) return { title: 'Kategorie nicht gefunden' };
  
  return {
    title: `${catData.name_de} Rabatte Schweiz – JungVorteil`,
    description: catData.description_de || `Entdecke die besten Rabatte und Angebote in der Kategorie ${catData.name_de} für junge Leute in der Schweiz.`
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string, locale: string }> }) {
  const { category, locale } = await params;
  
  const catData = await getCategoryBySlug(category);
  
  if (!catData) {
    notFound();
  }

  const offers = await getOffersByCategory(category);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jungvorteil.ch" },
      { "@type": "ListItem", "position": 2, "name": catData.name_de, "item": `https://jungvorteil.ch/${locale}/rabatte/${catData.slug}` }
    ]
  };

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <div className="bg-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">{catData.icon}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{catData.name_de} Rabatte Schweiz</h1>
          {catData.description_de && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{catData.description_de}</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-full">
          <OfferGrid offers={offers} locale={locale} />
        </div>
      </div>
    </>
  );
}
