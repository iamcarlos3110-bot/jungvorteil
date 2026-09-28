import { getCategoryBySlug, getOffersByCategory } from '@/lib/api/offers';
import { notFound } from 'next/navigation';
import OfferGrid from '@/components/offers/OfferGrid';
import { safeJsonLd } from '@/lib/utils';
import { getCategoryFaqs } from '@/lib/categoryFaqs';
import { getCategoryGuide } from '@/lib/categoryGuides';
import { HelpCircle, Sparkles, BookOpen, Lightbulb, CheckCircle2, ChevronRight } from 'lucide-react';
import Script from 'next/script';
import Link from 'next/link';

import { generateSwissMetadata } from "@/lib/swissSeo";

export async function generateMetadata({ params }: { params: Promise<{ category: string; locale: string }> }) {
  const { category, locale = "de" } = await params;
  const catData = await getCategoryBySlug(category);
  
  if (!catData) return { title: "Kategorie nicht gefunden | JungVorteil" };
  
  return generateSwissMetadata({
    title: `${catData.name_de} Rabatte & Angebote in der Schweiz`,
    description: catData.description_de || `Entdecke verifizierte Rabatte und Angebote in der Kategorie ${catData.name_de} für Jugendliche und Studierende in der Schweiz.`,
    path: `/rabatte/${catData.slug}`,
    locale,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string, locale: string }> }) {
  const { category, locale = "de" } = await params;
  
  const catData = await getCategoryBySlug(category);
  
  if (!catData) {
    notFound();
  }

  const offers = await getOffersByCategory(category);
  const faqs = getCategoryFaqs(catData.slug);
  const guide = getCategoryGuide(catData.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jungvorteil.ch" },
      { "@type": "ListItem", "position": 2, "name": "Kategorien", "item": `https://jungvorteil.ch/${locale}/kategorien` },
      { "@type": "ListItem", "position": 3, "name": catData.name_de, "item": `https://jungvorteil.ch/${locale}/rabatte/${catData.slug}` }
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
        <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      )}
      
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 relative overflow-hidden shadow-inner">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[#A3E635]" /> Kategorie Übersicht Schweiz
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
            {catData.name_de} Rabatte Schweiz
          </h1>
          {catData.description_de && (
            <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto font-normal leading-relaxed">
              {catData.description_de}
            </p>
          )}

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center gap-2 text-xs text-emerald-200 mt-6">
            <Link href={`/${locale}`} className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-emerald-400" />
            <Link href={`/${locale}/kategorien`} className="hover:text-white transition-colors">Kategorien</Link>
            <ChevronRight className="w-3 h-3 text-emerald-400" />
            <span className="text-white font-semibold">{catData.name_de}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Offer Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Verifizierte Angebote in {catData.name_de}
              </h2>
              <p className="text-sm text-gray-500 mt-1">Geprüfte Rabatte, Gutscheine und Vergünstigungen</p>
            </div>
          </div>
          <OfferGrid offers={offers} locale={locale} />
        </div>

        {/* High-Value Original Editorial Guide Section */}
        {guide && (
          <div className="mt-16 bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-12 shadow-sm space-y-8">
            <div className="flex items-center gap-3 pb-6 border-b border-stone-100">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{guide.title}</h2>
                <p className="text-sm text-stone-500">Unabhängige Redaktionsempfehlung von JungVorteil</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {guide.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {guide.sections.map((sec, idx) => (
                <div key={idx} className="bg-[#F8FAF6] p-6 rounded-2xl border border-[#EAF0E5]">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{sec.heading}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{sec.body}</p>
                </div>
              ))}
            </div>

            {/* Pro-Tips Box */}
            {guide.proTips.length > 0 && (
              <div className="bg-gradient-to-r from-emerald-900 to-green-950 text-white rounded-2xl p-6 sm:p-8 mt-6 border border-emerald-800">
                <div className="flex items-center gap-2 font-bold text-emerald-300 mb-4 text-lg">
                  <Lightbulb className="w-5 h-5 text-amber-400" /> Experten-Tipps für maximale Ersparnis
                </div>
                <ul className="space-y-3">
                  {guide.proTips.map((tip, idx) => (
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

        {/* Category FAQ Section */}
        {faqs.length > 0 && (
          <div className="mt-16 border-t border-stone-200 pt-16">
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
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
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
