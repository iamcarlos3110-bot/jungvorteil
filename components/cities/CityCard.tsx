// components/cities/CityCard.tsx
import Link from "next/link";
import { City } from "@/types";
import { MapPin, ArrowUpRight } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import { getCityPhoto } from "@/lib/cityAssets";

interface CityCardProps {
  city: City;
  locale?: string;
}

export default function CityCard({ city, locale = "de" }: CityCardProps) {
  const photoUrl = getCityPhoto(city.slug);

  return (
    <Link
      href={`/${locale}/stadt/${city.slug}`}
      className="floating-card group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/40 transition-all duration-300 h-full relative"
    >
      {/* City Photo Banner with Gradient Overlay */}
      <div className="w-full h-36 relative overflow-hidden bg-stone-100 shrink-0">
        <SafeImage
          src={photoUrl}
          alt={city.name_de}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Canton Badge top-right */}
        {city.canton && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider">
            {city.canton}
          </div>
        )}

        {/* Floating City Title inside Image */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 font-black text-lg sm:text-xl drop-shadow-md leading-tight">
            {city.name_de}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 flex items-center justify-between bg-white text-xs font-semibold text-stone-600 mt-auto border-t border-stone-100">
        <div className="inline-flex items-center gap-1.5 text-[#3F5E39] font-bold bg-[#EAF0E5] px-2.5 py-1 rounded-full">
          <MapPin className="w-3.5 h-3.5" />
          <span>{city.offer_count !== undefined && city.offer_count > 0 ? `${city.offer_count} Angebote` : 'Lokale Deals'}</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-[#3F5E39] group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
