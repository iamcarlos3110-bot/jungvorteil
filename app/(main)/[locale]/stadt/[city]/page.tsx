import { getCityBySlug, getOffersByCity } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import { getCityFaqs } from '@/lib/cityFaqs';
import { safeJsonLd } from '@/lib/utils';
import { MapPin, HelpCircle } from 'lucide-react';
import Script from 'next/script';

export const revalidate = 60;

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
  const faqs = getCityFaqs(cityData.name_de, cityData.slug);

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
      <Script id="schema-city-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />

      <div>
        <div className="bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs font-semibold mb-4">
              <MapPin className="w-4 h-4 text-[#A3E635]" /> Stadtführer
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Rabatte & Angebote in {cityData.name_de}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Lokale Deals und schweizweite Angebote für Studierende & junge Leute in {cityData.name_de}.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <OfferGrid offers={offers} />

          {/* City FAQ Section */}
          {faqs.length > 0 && (
            <div className="mt-20 border-t border-gray-200 pt-16">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="w-12 h-12 rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  Häufige Fragen zu Rabatten in {cityData.name_de}
                </h2>
                <p className="text-gray-600">Nützliche Informationen für Jugendliche & Studierende vor Ort.</p>
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
      </div>
    </>
  );
}

