"use client";
import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/types";
import { useState } from "react";

import { getBrandLogo } from "@/lib/brandAssets";

interface BrandCardProps {
  brand: Brand;
  locale?: string;
}

export default function BrandCard({ brand, locale = "de" }: BrandCardProps) {
  const [imgError, setImgError] = useState(false);
  const logo = getBrandLogo(brand.slug, brand.logo_url);

  return (
    <Link
      href={`/${locale}/angebote?brand=${brand.slug}`}
      className="floating-card flex flex-col items-center justify-center p-6 bg-white border border-stone-200/90 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#3F5E39]/40 transition-all duration-300 group"
    >
      <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden mb-3 border border-gray-100 relative p-1">
        {logo && !imgError ? (
          <Image
            src={logo}
            alt={brand.name}
            fill
            unoptimized={typeof logo === "string" && logo.startsWith("http")}
            sizes="64px"
            className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-2xl font-bold text-[#3F5E39]">
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
