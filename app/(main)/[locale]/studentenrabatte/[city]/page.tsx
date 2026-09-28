import { notFound } from "next/navigation";
import Link from "next/link";
import { getCityBySlug, CITIES } from "@/config/cities";
import { FALLBACK_OFFERS } from "@/services/offers";
import OfferGrid from "@/components/offers/OfferGrid";
import JsonLd, { breadcrumbSchema, itemListSchema } from "@/components/seo/JsonLd";
import { generateSwissMetadata } from "@/lib/swissSeo";
import { GraduationCap, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

interface CityStudentRabatteProps {
  params: Promise<{ locale: string; city: string }>;
}

export async function generateMetadata({ params }: CityStudentRabatteProps) {
  const { locale, city } = await params;
  const cityConfig = getCityBySlug(city);
  if (!cityConfig) return {};

  const cityName = cityConfig[`name_${locale as "de" | "fr" | "it"}`] || cityConfig.name_de;
  const title = `Studentenrabatte in ${cityName} — Vorzüge für Studierende (${cityConfig.canton})`;
  const description = `Verifizierte Studentenrabatte, ÖV-Angebote und Vorteile für Studierende an Hochschulen und Universitäten in ${cityName} (${cityConfig.canton}) sowie schweizweit.`;

  return generateSwissMetadata({
    title,
    description,
    path: `/studentenrabatte/${city}`,
    locale,
  });
}

export default async function CityStudentRabattePage({ params }: CityStudentRabatteProps) {
  const { locale, city } = await params;
  const cityConfig = getCityBySlug(city);

  if (!cityConfig) {
    notFound();
  }

  const cityName = cityConfig[`name_${locale as "de" | "fr" | "it"}`] || cityConfig.name_de;

  // Filter student offers for this city or nationwide
  const studentOffers = FALLBACK_OFFERS.filter(
    (o) =>
      !o.is_demo &&
      (o.student_required || o.tags?.includes("STUDENTEN")) &&
      (o.is_nationwide || o.city?.slug === city)
  );

  const breadcrumbs = [
    { name: "Home", url: `/${locale}` },
    { name: "Studentenrabatte", url: `/${locale}/studentenrabatte` },
    { name: cityName, url: `/${locale}/studentenrabatte/${city}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={itemListSchema(`Studentenrabatte in ${cityName}`, studentOffers, locale)} />

      <main className="min-h-screen bg-stone-50/50 pb-16 pt-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-6">
            <Link href={`/${locale}`} className="hover:text-stone-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${locale}/studentenrabatte`} className="hover:text-stone-900 transition-colors">Studentenrabatte</Link>
            <span>/</span>
            <span className="text-stone-900 font-semibold">{cityName}</span>
          </nav>

          {/* Hero Header */}
          <div className="bg-gradient-to-br from-[#1E331B] via-[#2E4D28] to-[#3F5E39] text-white rounded-3xl p-8 md:p-12 mb-10 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-bold mb-4 backdrop-blur-md">
                <GraduationCap className="w-4 h-4" />
                <span>Kanton {cityConfig.canton}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Studentenrabatte in {cityName}
              </h1>
              <p className="text-stone-200 text-base md:text-lg leading-relaxed">
                Manuell geprüfte Vergünstigungen, Freikarten und ÖV-Tarife für Studierende in {cityName} und dem gesamten Kanton {cityConfig.canton}.
              </p>
            </div>
          </div>

          {/* Verified Guarantee Banner */}
          <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200/80 rounded-2xl mb-8 text-stone-800 text-sm font-medium">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>Alle Angebote werden vor der Veröffentlichung anhand offizieller Schweizer Anbieterinformationen verifiziert.</span>
          </div>

          {/* Offer Grid */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-stone-900 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Verfügbare Rabatte für Studierende in {cityName} ({studentOffers.length})
            </h2>
            <OfferGrid offers={studentOffers} locale={locale} />
          </section>

          {/* Swiss City Interlinking */}
          <section className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-stone-900 mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Studentenrabatte in weiteren Schweizer Städten
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {CITIES.filter((c) => c.slug !== city).map((c) => (
                <Link
                  key={c.slug}
                  href={`/${locale}/studentenrabatte/${c.slug}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-100 hover:bg-[#EAF0E5] hover:border-[#3F5E39]/30 text-stone-800 font-semibold text-sm transition-all duration-150"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#2E4D28]" />
                    {c.name_de}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">{c.canton}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const locales = ["de", "fr", "it"];
  const params: { locale: string; city: string }[] = [];

  locales.forEach((locale) => {
    CITIES.forEach((city) => {
      params.push({ locale, city: city.slug });
    });
  });

  return params;
}
