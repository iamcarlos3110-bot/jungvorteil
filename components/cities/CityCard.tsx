// components/cities/CityCard.tsx
import Link from "next/link";
import { City } from "@/types";
import { MapPin } from "lucide-react";

interface CityCardProps {
  city: City;
  locale?: string;
}

export default function CityCard({ city, locale = "de" }: CityCardProps) {
  return (
    <Link
      href={`/${locale}/stadt/${city.slug}`}
      className="floating-card group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl border border-stone-200/90 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/40 transition-all duration-300 text-center"
    >
      <div className="w-12 h-12 bg-[#EAF0E5] rounded-xl flex items-center justify-center group-hover:bg-[#3F5E39] transition-colors">
        <MapPin className="w-6 h-6 text-[#3F5E39] group-hover:text-white transition-colors" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{city.name_de}</p>
        <p className="text-xs text-gray-400 mt-0.5">{city.canton}</p>
      </div>
      {city.offer_count !== undefined && city.offer_count > 0 && (
        <p className="text-xs text-[#3F5E39] font-medium">
          {city.offer_count} Angebote
        </p>
      )}
    </Link>
  );
}
