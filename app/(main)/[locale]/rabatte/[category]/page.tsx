import { getCategoryBySlug, getOffersByCategory } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import { safeJsonLd } from '@/lib/utils';
import { getCategoryFaqs } from '@/lib/categoryFaqs';
import { HelpCircle, Sparkles } from 'lucide-react';
import Script from 'next/script';

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
  const faqs = getCategoryFaqs(catData.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jungvorteil.ch" },
      { "@type": "ListItem", "position": 2, "name": catData.name_de, "item": `https://jungvorteil.ch/${locale}/rabatte/${catData.slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      
      <div className="bg-[#1C331B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[#A3E635]" /> Kategorie Übersicht
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">{catData.name_de} Rabatte Schweiz</h1>
          {catData.description_de && (
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">{catData.description_de}</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <OfferGrid offers={offers} locale={locale} />

        {/* Category FAQ Section */}
        {faqs.length > 0 && (
          <div className="mt-20 border-t border-gray-200 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="w-12 h-12 rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Häufige Fragen zu {catData.name_de} Rabatten
              </h2>
              <p className="text-gray-600">Alles, was du zu Vergünstigungen und Einlösung wissen musst.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

