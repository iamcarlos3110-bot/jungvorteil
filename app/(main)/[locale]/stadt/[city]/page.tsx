import { getCityBySlug, getOffersByCity } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import { getCityFaqs } from '@/lib/cityFaqs';
import { getCityGuide } from '@/lib/cityGuides';
import { safeJsonLd } from '@/lib/utils';
import { MapPin, HelpCircle, BookOpen, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';
import Script from 'next/script';
import Link from 'next/link';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityData = await getCityBySlug(city);
  
  if (!cityData) return { title: 'Stadt nicht gefunden | JungVorteil' };
  
  return {
    title: `Rabatte & Angebote in ${cityData.name_de} (2026) – Guide & Deals | JungVorteil`,
    description: `Lokale Rabatte, Studentenangebote, ÖV-Tipps und Vergünstigungen für junge Leute in ${cityData.name_de}.`
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string, locale?: string }> }) {
  const { city, locale = "de" } = await params;
  const cityData = await getCityBySlug(city);
  
  if (!cityData) {
    notFound();
  }

  const offers = await getOffersByCity(city);
  const faqs = getCityFaqs(cityData.name_de, cityData.slug);
  const guide = getCityGuide(cityData.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jungvorteil.ch" },
      { "@type": "ListItem", "position": 2, "name": "Städte", "item": `https://jungvorteil.ch/${locale}/staedte` },
      { "@type": "ListItem", "position": 3, "name": cityData.name_de, "item": `https://jungvorteil.ch/${locale}/stadt/${cityData.slug}` }
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
      {faqs.length > 0 && (
        <Script id="schema-city-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      )}

      <div className="bg-[#F8FAF6] min-h-screen pb-20">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 relative overflow-hidden shadow-inner">
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs font-semibold mb-4">
              <MapPin className="w-4 h-4 text-[#A3E635]" /> Stadtführer {cityData.canton && `(Kanton ${cityData.canton})`}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              Rabatte & Angebote in {cityData.name_de}
            </h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Lokale Deals und schweizweite Angebote für Studierende & junge Leute in {cityData.name_de}.
            </p>

            {/* Breadcrumb Navigation */}
            <nav className="flex items-center justify-center gap-2 text-xs text-emerald-200 mt-6">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-emerald-400" />
              <Link href={`/${locale}/staedte`} className="hover:text-white transition-colors">Städte</Link>
              <ChevronRight className="w-3 h-3 text-emerald-400" />
              <span className="text-white font-semibold">{cityData.name_de}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Offers */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Angebote für {cityData.name_de}
            </h2>
            <OfferGrid offers={offers} locale={locale} />
          </div>

          {/* High-Value City Guide */}
          {guide && (
            <div className="mt-16 bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-8">
              <div className="flex items-center gap-3 pb-6 border-b border-stone-100">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{guide.title}</h2>
                  <p className="text-sm text-stone-500">Local Guide von JungVorteil</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {guide.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {guide.highlights.map((item, idx) => (
                  <div key={idx} className="bg-[#F8FAF6] p-6 rounded-2xl border border-[#EAF0E5]">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Local Tips Box */}
              {guide.localTips.length > 0 && (
                <div className="bg-gradient-to-r from-emerald-900 to-green-950 text-white rounded-2xl p-6 sm:p-8 mt-6 border border-emerald-800">
                  <div className="flex items-center gap-2 font-bold text-emerald-300 mb-4 text-lg">
                    <Lightbulb className="w-5 h-5 text-amber-400" /> Insider-Tipps für {cityData.name_de}
                  </div>
                  <ul className="space-y-3">
                    {guide.localTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-emerald-100">
                        <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* City FAQ Section */}
          {faqs.length > 0 && (
            <div className="mt-16 border-t border-stone-200 pt-16">
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
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
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
