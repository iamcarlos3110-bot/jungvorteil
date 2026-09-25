"use client";

import React from "react";
import { getDeviceCategory } from "@/lib/utils";
import { Analytics } from "@/lib/analytics";

interface OfferCtaLinkProps {
  offerId: string;
  url: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export default function OfferCtaLink({
  offerId,
  url,
  className,
  children,
  id,
}: OfferCtaLinkProps) {
  const handleClick = () => {
    let utmSource: string | undefined;
    let utmMedium: string | undefined;
    let utmCampaign: string | undefined;

    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      utmSource = searchParams.get("utm_source") || undefined;
      utmMedium = searchParams.get("utm_medium") || undefined;
      utmCampaign = searchParams.get("utm_campaign") || undefined;
    }

    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        offer_id: offerId,
        device_category: getDeviceCategory(),
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
      }),
      keepalive: true,
    }).catch(() => {});

    Analytics.externalClick(offerId, url);
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      onClick={handleClick}
      className={className}
      id={id}
    >
      {children}
    </a>
  );
}
