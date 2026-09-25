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
      className="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
    >
      <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-600 transition-colors">
        <MapPin className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" />
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{city.name_de}</p>
        <p className="text-xs text-gray-400 mt-0.5">{city.canton}</p>
      </div>
      {city.offer_count !== undefined && city.offer_count > 0 && (
        <p className="text-xs text-violet-600 font-medium">
          {city.offer_count} Angebote
        </p>
      )}
    </Link>
  );
}
