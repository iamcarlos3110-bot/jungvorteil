"use client";
import Image from "next/image";
import { cn, formatDate, isExpired, isExpiringSoon, getSavingDisplay, getDeviceCategory } from "@/lib/utils";
import { Offer } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { toggleFavorite } from "@/lib/favorites";
import { Heart, Check, ExternalLink } from "lucide-react";
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

export default function OfferCard({ offer, locale = "de" }: OfferCardProps) {
  const [favorite, setFavorite] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(`jv_fav_${offer.id}`) === "true";
  });
  const [isClient, setIsClient] = useState(false);
  const [coverError, setCoverError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleFavorite(offer.id);
    setFavorite(newState);
  };

  const handleCardClick = () => {
    // Track click analytics
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        offer_id: offer.id,
        device_category: getDeviceCategory(),
      }),
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

  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleCardClick}
      className={cn(
        "floating-card group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-200/90 hover:border-[#3F5E39]/40 h-full cursor-pointer",
        expired && "opacity-75 grayscale-[0.3]",
        expiringSoon && "border-amber-300 ring-2 ring-amber-100"
      )}
    >
      {/* Cover Image Banner */}
      <div className="w-full h-36 bg-gradient-to-br from-[#EAF0E5] via-[#D6E2CE] to-[#3F5E39]/15 overflow-hidden shrink-0 relative z-0">
        {coverImage && !coverError && (
          <Image
            src={coverImage}
            alt={offer.title_de}
            fill
            unoptimized={typeof coverImage === "string" && coverImage.startsWith("http")}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setCoverError(true)}
          />
        )}
        {/* External link indicator */}
        <div className="absolute top-2 left-2 bg-black/30 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow relative z-10 bg-white">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-4 -mt-10">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-stone-200 shadow-md shrink-0 relative p-1 z-20">
            {brandLogo && !logoError ? (
              <Image
                src={brandLogo}
                alt={brandName}
                fill
                unoptimized={typeof brandLogo === "string" && brandLogo.startsWith("http")}
                sizes="48px"
                className="w-full h-full object-contain p-1 bg-white rounded-lg"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-full h-full bg-[#EAF0E5] text-[#3F5E39] rounded-lg flex items-center justify-center font-black text-lg uppercase">
                {brandName.charAt(0)}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 items-end mr-8">
            {offer.is_demo && <Badge tag="DEMO" className="bg-red-100 text-red-700 border border-red-200" />}
            {offer.is_sponsored && <Badge tag="GESPONSERT" />}
            {expiringSoon && <Badge tag="HEUTE" className="bg-amber-100 text-amber-700" />}
          </div>
        </div>

        {/* Favorite Button */}
        {isClient && (
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors z-20 bg-white/90 backdrop-blur-sm shadow-sm border border-gray-100 flex items-center justify-center"
            aria-label="Zu Favoriten hinzufügen"
          >
            <Heart className={cn("w-4 h-4 transition-colors", favorite ? "text-red-500 fill-red-500" : "text-gray-400")} />
          </button>
        )}

        {/* Main Content */}
        <div className="flex-grow flex flex-col gap-2 relative z-10 mt-1">
          {saving && (
            <div className="text-2xl font-black text-green-600 tracking-tight">
              {saving}
            </div>
          )}
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight group-hover:text-[#3F5E39] transition-colors">
            {offer.title_de}
          </h3>
          <p className="text-sm font-medium text-gray-500">{brandName}</p>

          {offer.age_max && (
            <p className="text-xs font-semibold text-[#3F5E39] mt-1">
              Bis {offer.age_max} Jahre
            </p>
          )}
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-2 my-4 relative z-10">
          {offer.is_nationwide && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
              <Check className="w-3 h-3 text-green-500" /> Schweizweit
            </span>
          )}
          {offer.is_online && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
              <Check className="w-3 h-3 text-green-500" /> Online
            </span>
          )}
          {offer.student_required && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">
              <Check className="w-3 h-3 text-green-500" /> Studierende
            </span>
          )}
        </div>

        {/* Expired Overlay */}
        {expired && (
          <div className="absolute inset-0 z-0 bg-white/40 flex items-center justify-center rounded-2xl">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold text-red-600 shadow-sm border border-red-100 rotate-[-5deg]">
              Möglicherweise abgelaufen
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto relative z-10 pt-2 border-t border-gray-50">
          <Button
            fullWidth
            variant={expired ? "outline" : "primary"}
            className="pointer-events-none mb-3 flex items-center justify-center gap-2"
          >
            Angebot ansehen <ExternalLink className="w-3.5 h-3.5" />
          </Button>
          {offer.checked_at && (
            <p className="text-[11px] text-gray-500 text-center font-medium flex items-center justify-center gap-1">
              <Check className="w-3 h-3 text-green-500" /> Geprüft am {formatDate(offer.checked_at)}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}
