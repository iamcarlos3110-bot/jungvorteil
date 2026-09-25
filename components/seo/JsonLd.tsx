import React from "react";
import { Offer } from "@/types";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JungVorteil",
    "url": "https://www.jungvorteil.ch",
    "logo": "https://www.jungvorteil.ch/logo.png",
    "sameAs": [
      "https://www.instagram.com/jungvorteil",
      "https://www.facebook.com/jungvorteil"
    ]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JungVorteil",
    "url": "https://www.jungvorteil.ch",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.jungvorteil.ch/de/suche?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function offerSchema(offer: Offer, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": offer.title_de,
    "description": offer.description_de || offer.title_de,
    "url": url,
    "seller": {
      "@type": "Organization",
      "name": offer.brand?.name ?? "JungVorteil"
    },
    "priceCurrency": "CHF",
    "price": "0.00",
    "validThrough": offer.end_date || undefined,
    "availability": "https://schema.org/InStock"
  };
}
