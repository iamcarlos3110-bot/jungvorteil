"use client";
import React from "react";
import { Offer } from "@/types";
import OfferCard from "./OfferCard";
import { OfferCardSkeleton } from "@/components/ui/Skeleton";
import AdSlot from "@/components/ads/AdSlot";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SearchX } from "lucide-react";

interface OfferGridProps {
  offers: Offer[];
  loading?: boolean;
  adAfter?: number[];
  locale?: string;
  isDemo?: boolean;
}

export default function OfferGrid({ offers, loading, adAfter = [4, 10, 16], locale = "de", isDemo = false }: OfferGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <OfferCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!offers || offers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-12 rounded-3xl min-h-[300px]"
        style={{
          background: "linear-gradient(145deg, #f9fdf8, #f0f7ef)",
          border: "2px dashed rgba(124,184,122,0.3)",
        }}
      >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: "rgba(124,184,122,0.12)", color: "#4a7a42" }}
        >
          <SearchX className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Keine Angebote gefunden.</h3>
        <p className="text-gray-500 max-w-sm text-sm">
          Bitte passe deine Filter an oder versuche es mit anderen Suchbegriffen.
        </p>
      </div>
    );
  }

  const renderItems = () => {
    const items: React.ReactNode[] = [];

    offers.forEach((offer, index) => {
      const displayOffer = isDemo ? { ...offer, is_demo: true } : offer;

      items.push(
        <ScrollReveal key={`offer-${offer.id}`} delay={(index % 3) * 80}>
          <OfferCard offer={displayOffer} locale={locale} />
        </ScrollReveal>
      );

      if (adAfter.includes(index + 1)) {
        items.push(
          <div key={`ad-${index}`} className="md:col-span-2 xl:col-span-3">
            <AdSlot slot="AD_BETWEEN_OFFERS_1" />
          </div>
        );
      }
    });

    return items;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {renderItems()}
    </div>
  );
}
