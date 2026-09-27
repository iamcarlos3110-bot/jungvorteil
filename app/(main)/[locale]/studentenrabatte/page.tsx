import { getVerifiedStudentOffers } from "@/services/offers";
import { getAllCities } from "@/services/cities";
import OfferGrid from "@/components/offers/OfferGrid";
import { safeJsonLd } from "@/lib/utils";
import { GraduationCap, Sparkles, MapPin, HelpCircle } from "lucide-react";
import AdSlot from "@/components/ads/AdSlot";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";

export const metadata = {
  title: "Studentenrabatte Schweiz – Geprüfte Vorteile | JungVorteil",
  description: "Finde geprüfte Studentenrabatte in der Schweiz. Apple, Spotify, SBB und mehr mit Studirabatt.",
};

export default async function StudentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale = "de" } = (await params) || {};
  const offers = await getVerifiedStudentOffers(24);
  const cities = await getAllCities();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wer hat Anspruch auf Studentenrabatte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meistens alle an einer anerkannten Hochschule oder Universität immatrikulierten Studierenden mit einem gültigen Legi (Studierendenausweis)."
        }
      },
      {
        "@type": "Question",
        "name": "Brauche ich einen UNiDAYS Account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für einige internationale Marken (wie Apple oder Nike) wird zur Verifizierung ein UNiDAYS oder StudentBeans Account benötigt."
        }
      }
    ]
  };

  return (
    <>
      <script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      
      <div className="bg-[#F8FAF6] min-h-screen pb-20">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 mb-12 shadow-inner">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
            <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#A3E635]" /> Für Studierende & Lernende
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Studentenrabatte Schweiz
            </h1>
            <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Spare Geld mit deiner Legi. Wir sammeln verifizierte Vergünstigungen für Studierende in der Schweiz.
            </p>
          </div>
        </section>

        {/* City Filter Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm flex items-center gap-3 overflow-x-auto scrollbar-none">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#3F5E39]" /> Städte:
            </span>
            {cities.slice(0, 10).map((city) => (
              <Link
                key={city.id}
                href={`/${locale}/stadt/${city.slug}`}
                className="px-3.5 py-1.5 bg-[#F8FAF6] hover:bg-[#EAF0E5] hover:text-[#3F5E39] text-gray-700 text-xs font-bold rounded-full border border-stone-200/60 transition-colors whitespace-nowrap"
              >
                {city.name_de}
              </Link>
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OfferGrid offers={offers} locale={locale} />

          {/* FAQ Section */}
          <div className="mt-20 border-t border-stone-200 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="w-12 h-12 rounded-full bg-[#EAF0E5] text-[#3F5E39] flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Häufige Fragen zu Studentenrabatten
              </h2>
              <p className="text-gray-600">Alles, was du zum Einlösen mit Legi wissen musst.</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Wer hat Anspruch auf Studentenrabatte?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Meistens alle an einer anerkannten Schweizer Hochschule oder Universität immatrikulierten Studierenden mit einem gültigen Legi (Studierendenausweis).
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Brauche ich einen UNiDAYS Account?</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Für einige internationale Marken (wie Apple oder Spotify) wird zur Verifizierung ein UNiDAYS oder StudentBeans Account benötigt. Bei vielen lokalen Anbietern in der Schweiz reicht das Vorzeigen der Legi.
                </p>
              </div>
            </div>
          </div>

          <div className="my-16">
            <AdSlot slot="AD_BETWEEN_OFFERS_1" />
          </div>

          <div className="mt-12">
            <Newsletter />
          </div>
        </div>
      </div>
    </>
  );
}
