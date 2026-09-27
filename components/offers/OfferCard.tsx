"use client";
import Image from "next/image";
import Link from "next/link";
import { cn, formatDate, isExpired, isExpiringSoon, getSavingDisplay, getDeviceCategory } from "@/lib/utils";
import { Offer } from "@/types";
import { toggleFavorite } from "@/lib/favorites";
import { Heart, ExternalLink, Check, Clock, Tag, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { getBrandLogo, getOfferCover } from "@/lib/brandAssets";

interface OfferCardProps {
  offer: Offer;
  locale?: string;
}

function getExternalUrl(offer: Offer): string {
  const raw = offer.affiliate_url || offer.external_url;
  if (raw && raw.startsWith("http")) return raw;
  if (offer.brand?.website_url && offer.brand.website_url.startsWith("http")) return offer.brand.website_url;
  return `https://www.google.com/search?q=${encodeURIComponent(
    (offer.brand?.name ? offer.brand.name + " " : "") + offer.title_de + " Schweiz Angebot"
  )}`;
}

// Beautiful gradient fallbacks per brand initial
const GRADIENT_MAP: Record<string, string> = {
  A: "from-purple-500 to-indigo-600",
  B: "from-blue-500 to-cyan-600",
  C: "from-cyan-500 to-teal-600",
  D: "from-teal-500 to-green-600",
  E: "from-green-500 to-emerald-600",
  F: "from-emerald-500 to-lime-600",
  G: "from-lime-500 to-yellow-600",
  H: "from-yellow-500 to-amber-600",
  I: "from-amber-500 to-orange-600",
  J: "from-orange-500 to-red-600",
  K: "from-red-500 to-rose-600",
  L: "from-rose-500 to-pink-600",
  M: "from-pink-500 to-fuchsia-600",
  N: "from-fuchsia-500 to-purple-600",
  O: "from-violet-500 to-indigo-600",
  P: "from-indigo-500 to-blue-600",
  Q: "from-sky-500 to-cyan-600",
  R: "from-cyan-600 to-teal-700",
  S: "from-[#2E4D28] to-[#4a7a42]",
  T: "from-teal-600 to-green-700",
  U: "from-green-600 to-emerald-700",
  V: "from-emerald-600 to-teal-700",
  W: "from-blue-600 to-indigo-700",
  X: "from-indigo-600 to-violet-700",
  Y: "from-violet-600 to-purple-700",
  Z: "from-purple-600 to-fuchsia-700",
};

function getBrandGradient(name: string): string {
  const first = (name?.[0] || "A").toUpperCase();
  return GRADIENT_MAP[first] || "from-[#2E4D28] to-[#4a7a42]";
}

export default function OfferCard({ offer, locale = "de" }: OfferCardProps) {
  const [favorite, setFavorite] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(`jv_fav_${offer.id}`) === "true";
  });
  const [isClient, setIsClient] = useState(false);
  const [coverError, setCoverError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorite(toggleFavorite(offer.id));
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ offer_id: offer.id, device_category: getDeviceCategory() }),
      keepalive: true,
    }).catch(() => {});
  };

  const expired = isExpired(offer.end_date);
  const expiringSoon = !expired && isExpiringSoon(offer.end_date);
  const saving = getSavingDisplay(offer.discount_percent, offer.discount_amount, offer.normal_price, offer.young_price);

  const brandName = offer.brand?.name ?? "JungVorteil";
  const brandLogo = getBrandLogo(offer.brand?.slug, offer.brand?.logo_url);
  const coverImage = getOfferCover(offer.slug, offer.image_url);
  const externalUrl = getExternalUrl(offer);
  const internalUrl = `/${locale}/angebot/${offer.slug}`;
  const gradient = getBrandGradient(brandName);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col bg-white rounded-3xl overflow-hidden h-full",
        "border border-stone-200/80",
        "shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
        "hover:shadow-[0_20px_60px_rgba(46,77,40,0.18),0_8px_24px_rgba(0,0,0,0.08)]",
        "hover:-translate-y-2 hover:scale-[1.01]",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:border-[#7CB87A]/60",
        expired && "opacity-70 grayscale-[0.4]",
        expiringSoon && "ring-2 ring-amber-400/60 ring-offset-1"
      )}
      style={{ transitionDuration: "380ms" }}
    >
      {/* === COVER IMAGE === */}
      <Link href={internalUrl} className="relative w-full h-48 overflow-hidden shrink-0 bg-gradient-to-br from-stone-100 to-stone-200 block">
        {coverImage && !coverError ? (
          <Image
            src={coverImage}
            alt={offer.title_de}
            fill
            unoptimized={coverImage.startsWith("http")}
            sizes="(max-width: 768px) 100vw, 400px"
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              isHovered ? "scale-110" : "scale-100"
            )}
            onError={() => setCoverError(true)}
          />
        ) : (
          <div className={cn("w-full h-full bg-gradient-to-br", gradient, "flex items-center justify-center")}>
            <span className="text-white/30 text-8xl font-black select-none">
              {brandName.charAt(0)}
            </span>
          </div>
        )}

        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )} />

        {expiringSoon && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg animate-pulse">
            <Clock className="w-3 h-3" />
            LÄUFT AB
          </div>
        )}

        {offer.is_sponsored && (
          <div className="absolute top-3 left-3 bg-black/60 text-white/80 text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
            GESPONSERT
          </div>
        )}
      </Link>

      {/* === CARD BODY === */}
      <div className="flex flex-col flex-grow p-5 relative">
        {/* Logo + Favorite row */}
        <div className="flex justify-between items-start mb-3 -mt-9 relative z-10">
          <Link href={internalUrl} className={cn(
            "w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-xl shrink-0 relative block",
            "bg-white flex items-center justify-center"
          )}>
            {brandLogo && !logoError ? (
              <Image
                src={brandLogo}
                alt={brandName}
                fill
                unoptimized={brandLogo.startsWith("http")}
                sizes="56px"
                className="object-contain p-1.5"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className={cn("w-full h-full bg-gradient-to-br", gradient, "flex items-center justify-center rounded-xl")}>
                <span className="text-white font-black text-xl">
                  {brandName.charAt(0)}
                </span>
              </div>
            )}
          </Link>

          {isClient && (
            <button
              onClick={handleFavoriteClick}
              className={cn(
                "p-2.5 rounded-2xl transition-all duration-200 shadow-md border cursor-pointer",
                favorite
                  ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
                  : "bg-white border-stone-200 text-stone-400 hover:text-red-400 hover:border-red-200"
              )}
              aria-label="Zu Favoriten hinzufügen"
            >
              <Heart className={cn("w-4 h-4 transition-all", favorite && "fill-red-500")} />
            </button>
          )}
        </div>

        {saving && (
          <div className="inline-flex items-center gap-1.5 mb-2 self-start">
            <div className={cn(
              "flex items-center gap-1 px-3 py-1 rounded-full text-sm font-black",
              "bg-gradient-to-r from-green-500 to-emerald-600 text-white",
              "shadow-[0_4px_12px_rgba(22,163,74,0.35)]"
            )}>
              <Zap className="w-3.5 h-3.5" />
              {saving}
            </div>
          </div>
        )}

        <h3 className="font-bold text-stone-900 line-clamp-2 leading-snug mb-1 flex-grow text-base group-hover:text-[#2E4D28] transition-colors duration-200">
          <Link href={internalUrl}>{offer.title_de}</Link>
        </h3>

        <p className="text-sm text-stone-500 font-medium mb-3">{brandName}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {offer.is_nationwide && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
              <Check className="w-2.5 h-2.5" /> Schweizweit
            </span>
          )}
          {offer.is_online && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-full">
              <Check className="w-2.5 h-2.5" /> Online
            </span>
          )}
          {offer.student_required && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-violet-700 bg-violet-50 border border-violet-200/80 px-2 py-0.5 rounded-full">
              🎓 Studierende
            </span>
          )}
          {offer.age_max && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
              <Tag className="w-2.5 h-2.5" /> Bis {offer.age_max}J
            </span>
          )}
        </div>

        {expired && (
          <div className="absolute inset-0 z-20 bg-white/50 backdrop-blur-[2px] flex items-center justify-center rounded-3xl">
            <div className="bg-white px-5 py-2.5 rounded-xl text-sm font-black text-red-600 shadow-lg border border-red-100 -rotate-3">
              Möglicherweise abgelaufen
            </div>
          </div>
        )}

        <div className="mt-auto pt-3 border-t border-stone-100 flex flex-col gap-2">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            onClick={handleCtaClick}
            className={cn(
              "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl",
              "font-bold text-sm transition-all duration-300 cursor-pointer",
              expired
                ? "bg-stone-100 text-stone-500 pointer-events-none"
                : "bg-gradient-to-r from-[#2E4D28] to-[#3D6636] text-white shadow-[0_4px_14px_rgba(46,77,40,0.3)] hover:shadow-[0_8px_24px_rgba(46,77,40,0.45)] hover:scale-[1.01] active:scale-95"
            )}
          >
            {expired ? "Abgelaufen" : "Angebot sichern"}
            {!expired && <ExternalLink className="w-3.5 h-3.5" />}
          </a>

          {offer.checked_at && (
            <p className="text-[10px] text-stone-400 text-center font-medium mt-1 flex items-center justify-center gap-1">
              <Check className="w-3 h-3 text-emerald-500" />
              Geprüft {formatDate(offer.checked_at)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

