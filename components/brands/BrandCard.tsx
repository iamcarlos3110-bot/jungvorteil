"use client";
import Link from "next/link";
import { Brand } from "@/types";
import { useState } from "react";

interface BrandCardProps {
  brand: Brand;
  locale?: string;
}

export default function BrandCard({ brand, locale = "de" }: BrandCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <Link
      href={`/${locale}/angebote?brand=${brand.slug}`}
      className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-purple-200 transition-all group"
    >
      <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden mb-3 border border-gray-100">
        {brand.logo_url && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={brand.logo_url} alt={brand.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" onError={() => setImgError(true)} />
        ) : (
          <span className="text-2xl font-bold text-gray-400">
            {brand.name.charAt(0)}
          </span>
        )}
      </div>
      <span className="font-semibold text-gray-900 text-center">{brand.name}</span>
      {brand.offer_count !== undefined && brand.offer_count > 0 && (
        <span className="text-xs text-gray-500 mt-1">{brand.offer_count} Angebote</span>
      )}
    </Link>
  );
}
