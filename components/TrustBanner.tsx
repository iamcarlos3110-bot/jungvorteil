import { ShieldCheck, MapPin, Sparkles } from "lucide-react";

export default function TrustBanner() {
  return (
    <div className="bg-[#EAF0E5]/60 border-y border-[#D6E2CE] py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="floating-card flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/40 transition-all duration-300">
          <div className="w-12 h-12 bg-[#EAF0E5] text-[#3F5E39] rounded-xl flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">100% Geprüft</h3>
            <p className="text-xs text-gray-500 mt-0.5">Alle Angebote sind manuell auf Verifizierbarkeit geprüft.</p>
          </div>
        </div>

        <div className="floating-card flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/40 transition-all duration-300">
          <div className="w-12 h-12 bg-[#EAF0E5] text-[#3F5E39] rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">Schweizweite Rabatte</h3>
            <p className="text-xs text-gray-500 mt-0.5">Nationale Partner und regionale Angebote in allen Kantonen.</p>
          </div>
        </div>

        <div className="floating-card flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/40 transition-all duration-300">
          <div className="w-12 h-12 bg-[#EAF0E5] text-[#3F5E39] rounded-xl flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">Für Junge & Studis</h3>
            <p className="text-xs text-gray-500 mt-0.5">Exklusiv zugeschnitten auf Jugendliche und Studierende.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
