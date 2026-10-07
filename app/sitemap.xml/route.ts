import { NextResponse } from "next/server";
import { CATEGORIES } from "@/config/categories";
import { CITIES } from "@/config/cities";
import { FALLBACK_OFFERS } from "@/services/offers";
import { ARTICLES_DATA } from "@/config/articlesData";
import { getAllBrands } from "@/services/brands";

const BASE_URL = "https://jungvorteil.ch";
const LOCALES = ["de", "fr", "it"] as const;

export const revalidate = 3600; // 1 hour cache

interface SitemapItem {
  path: string;
  priority: number;
  changeFreq: string;
  lastMod?: string;
}

export async function GET() {
  const now = new Date().toISOString();

  const items: SitemapItem[] = [
    // Core Static Pages
    { path: "", priority: 1.0, changeFreq: "daily" },
    { path: "/studentenrabatte", priority: 0.95, changeFreq: "daily" },
    { path: "/unter-30", priority: 0.9, changeFreq: "daily" },
    { path: "/unter-25", priority: 0.9, changeFreq: "daily" },
    { path: "/gratis", priority: 0.9, changeFreq: "daily" },
    { path: "/kategorien", priority: 0.85, changeFreq: "weekly" },
    { path: "/marken", priority: 0.85, changeFreq: "weekly" },
    { path: "/staedte", priority: 0.85, changeFreq: "weekly" },
    { path: "/magazin", priority: 0.85, changeFreq: "daily" },
    { path: "/ueber-uns", priority: 0.7, changeFreq: "weekly" },
    { path: "/redaktionelle-richtlinien", priority: 0.7, changeFreq: "weekly" },
    { path: "/unternehmen", priority: 0.7, changeFreq: "weekly" },
    { path: "/kontakt", priority: 0.4, changeFreq: "monthly" },
    { path: "/datenschutz", priority: 0.3, changeFreq: "monthly" },
    { path: "/impressum", priority: 0.3, changeFreq: "monthly" },
    { path: "/nutzungsbedingungen", priority: 0.3, changeFreq: "monthly" },
  ];

  // Categories
  CATEGORIES.forEach((cat) => {
    items.push({ path: `/rabatte/${cat.slug}`, priority: 0.85, changeFreq: "daily" });
  });

  // Cities & City Student Discounts
  CITIES.forEach((city) => {
    items.push({ path: `/stadt/${city.slug}`, priority: 0.8, changeFreq: "daily" });
    items.push({ path: `/studentenrabatte/${city.slug}`, priority: 0.85, changeFreq: "daily" });
  });

  // Articles
  ARTICLES_DATA.forEach((art) => {
    items.push({
      path: `/magazin/${art.slug}`,
      priority: 0.8,
      changeFreq: "weekly",
      lastMod: art.updated_at || art.published_at || now,
    });
  });

  // Verified Offers (EXCLUDE DEMO OFFERS)
  const verifiedOffers = FALLBACK_OFFERS.filter((o) => !o.is_demo);
  verifiedOffers.forEach((o) => {
    items.push({
      path: `/angebot/${o.slug}`,
      priority: 0.8,
      changeFreq: "weekly",
      lastMod: o.updated_at || now,
    });
  });

  // Verified Brands
  const brands = await getAllBrands();
  brands.forEach((b: { slug: string; updated_at?: string }) => {
    items.push({
      path: `/marken/${b.slug}`,
      priority: 0.75,
      changeFreq: "weekly",
      lastMod: b.updated_at || now,
    });
  });

  // Build XML string with Swiss hreflangs
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  const hreflangMap: Record<string, string> = {
    de: "de-CH",
    fr: "fr-CH",
    it: "it-CH",
  };

  for (const item of items) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}${item.path}`;
      const lastmod = item.lastMod ? new Date(item.lastMod).toISOString() : now;

      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${item.changeFreq}</changefreq>\n`;
      xml += `    <priority>${item.priority.toFixed(2)}</priority>\n`;

      // Hreflang alternates for Swiss regional targeting
      for (const altLocale of LOCALES) {
        const altUrl = `${BASE_URL}/${altLocale}${item.path}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${hreflangMap[altLocale]}" href="${altUrl}"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/de${item.path}"/>\n`;

      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
