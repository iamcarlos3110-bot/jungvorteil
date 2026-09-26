"use client";
import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/types";
import { useState } from "react";
import { getBrandLogo } from "@/lib/brandAssets";
import { ArrowUpRight } from "lucide-react";

interface BrandCardProps {
  brand: Brand;
  locale?: string;
}

// Subtle gradient backgrounds for brand cards — curated for Swiss context
const BRAND_BG_GRADIENTS = [
  { from: "#fafff8", to: "#f0f7ef" },
  { from: "#faf8ff", to: "#f1effe" },
  { from: "#fff8f0", to: "#fef3e2" },
  { from: "#f0f9ff", to: "#e0f2fe" },
  { from: "#fff0f3", to: "#ffe4e6" },
  { from: "#f0fdf4", to: "#dcfce7" },
];

function getBrandBg(name: string) {
  const idx = (name.charCodeAt(0) + (name.charCodeAt(1) ?? 0)) % BRAND_BG_GRADIENTS.length;
  return BRAND_BG_GRADIENTS[idx];
}

export default function BrandCard({ brand, locale = "de" }: BrandCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const logo = getBrandLogo(brand.slug, brand.logo_url);
  const bg = getBrandBg(brand.name);

  return (
    <Link
      href={`/${locale}/angebote?brand=${brand.slug}`}
      className="group relative flex flex-col items-center justify-center p-5 rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: `linear-gradient(145deg, ${bg.from}, ${bg.to})`,
        border: "1px solid rgba(216,227,213,0.8)",
        boxShadow: isHovered
          ? "0 16px 40px rgba(46,77,40,0.15), 0 4px 16px rgba(0,0,0,0.06)"
          : "0 2px 8px rgba(0,0,0,0.04)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease",
        borderColor: isHovered ? "rgba(124,184,122,0.6)" : "rgba(216,227,213,0.8)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo container */}
      <div
        className="relative w-14 h-14 rounded-2xl mb-3 flex items-center justify-center overflow-hidden"
        style={{
          background: "white",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: isHovered ? "0 6px 20px rgba(0,0,0,0.1)" : "0 2px 8px rgba(0,0,0,0.06)",
          transform: isHovered ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
        }}
      >
        {logo && !imgError ? (
          <Image
            src={logo}
            alt={brand.name}
            fill
            unoptimized={typeof logo === "string" && logo.startsWith("http")}
            sizes="56px"
            className="object-contain p-1.5"
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className="text-2xl font-black"
            style={{ color: "#2E4D28" }}
          >
            {brand.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Brand name */}
      <span
        className="font-bold text-sm text-center leading-tight mb-1 transition-colors duration-200"
        style={{ color: isHovered ? "#2E4D28" : "#1c2b18" }}
      >
        {brand.name}
      </span>

      {/* Offer count badge */}
      {brand.offer_count !== undefined && brand.offer_count > 0 && (
        <span
          className="text-[10px] font-black px-2 py-0.5 rounded-full mt-0.5"
          style={{
            background: isHovered ? "rgba(46,77,40,0.12)" : "rgba(0,0,0,0.05)",
            color: isHovered ? "#2E4D28" : "#6b7280",
            transition: "all 0.3s ease",
          }}
        >
          {brand.offer_count} Angebote
        </span>
      )}

      {/* Hover arrow */}
      <div
        className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: isHovered ? "#2E4D28" : "transparent",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scale(1)" : "scale(0.5)",
        }}
      >
        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
      </div>

      {/* Shine overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          backgroundPosition: isHovered ? "100% 0" : "-100% 0",
          transition: "background-position 0.6s ease",
        }}
      />
    </Link>
  );
}
