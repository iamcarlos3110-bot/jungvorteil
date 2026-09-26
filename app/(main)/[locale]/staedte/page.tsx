import { getAllCities } from "@/services/cities";
import CityCard from "@/components/cities/CityCard";
import { MapPin } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-[60vh]">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF0E5] text-[#3F5E39] text-sm font-semibold mb-4">
          <MapPin className="w-4 h-4" /> Regionale Angebote
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Lokale Angebote nach Stadt</h1>
        <p className="text-lg text-gray-600">
          Wähle deine Stadt in der Schweiz, um spezifische Vergünstigungen vor Ort zu entdecken.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} locale={locale} />
        ))}
      </div>
    </div>
  );
}
