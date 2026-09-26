import { getAllCities } from "@/services/cities";
import CityCard from "@/components/cities/CityCard";
import { MapPin, Sparkles } from "lucide-react";
import AdSlot from "@/components/ads/AdSlot";
import Newsletter from "@/components/Newsletter";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Vorteile nach Städten in der Schweiz | JungVorteil",
  description: "Finde lokale Rabatte, Studentenangebote und Vorteile in Zürich, Bern, Basel, Luzern, St. Gallen und weiteren Schweizer Städten.",
};

export default async function StaedtePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const cities = await getAllCities();

  return (
    <div className="bg-[#F8FAF6] min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C331B] via-[#2F5229] to-[#162916] text-white py-16 lg:py-20 mb-12 shadow-inner">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400 rounded-full blur-[100px]"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-lime-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#EAF0E5] text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-[#A3E635]" /> Regionale Angebote Schweiz
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Lokale Vorteile nach Stadt
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Wähle deine Stadt in der Schweiz, um spezifische Vergünstigungen, Studenten-Deals und Events vor Ort zu entdecken.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} locale={locale} />
          ))}
        </div>

        <div className="my-16">
          <AdSlot slot="AD_BETWEEN_OFFERS_1" />
        </div>

        <div className="mt-12">
          <Newsletter />
        </div>
      </div>
    </div>
  );
}
