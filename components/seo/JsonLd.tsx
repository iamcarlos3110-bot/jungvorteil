import React from "react";
import { Offer } from "@/types";
import { safeJsonLd } from "@/lib/utils";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JungVorteil",
    "url": "https://jungvorteil.ch",
    "logo": "https://jungvorteil.ch/logo.png",
    "description": "Schweizer Vorteilsportal für Jugendliche, Lernende und Studierende.",
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
    "url": "https://jungvorteil.ch",
    "inLanguage": ["de-CH", "fr-CH", "it-CH"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jungvorteil.ch/de/suche?q={search_term_string}",
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
      "item": item.url.startsWith("http") ? item.url : `https://jungvorteil.ch${item.url}`
    }))
  };
}

export function itemListSchema(name: string, offers: Offer[], locale: string = "de") {
  // Filter out demo offers from structured data
  const realOffers = offers.filter((o) => !o.is_demo);
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": name,
    "numberOfItems": realOffers.length,
    "itemListElement": realOffers.map((offer, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": offer.title_de,
      "url": `https://jungvorteil.ch/${locale}/angebot/${offer.slug}`
    }))
  };
}

export function offerSchema(offer: Offer, url: string) {
  // Do not emit JSON-LD Offer for demo items
  if (offer.is_demo) return null;

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
    "price": offer.young_price !== null && offer.young_price !== undefined ? String(offer.young_price) : "0.00",
    "validThrough": offer.end_date || undefined,
    "availability": "https://schema.org/InStock",
    "areaServed": {
      "@type": "Country",
      "name": "Schweiz",
      "identifier": "CH"
    }
  };
}
