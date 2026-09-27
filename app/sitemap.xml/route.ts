import { NextResponse } from "next/server";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { CATEGORIES } from "@/config/categories";
import { CITIES } from "@/config/cities";
import { FALLBACK_OFFERS } from "@/services/offers";
import { ARTICLES_DATA } from "@/config/articlesData";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch";
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
    // Static Pages
    { path: "", priority: 1.0, changeFreq: "daily" },
    { path: "/studentenrabatte", priority: 0.9, changeFreq: "daily" },
    { path: "/unter-30", priority: 0.9, changeFreq: "daily" },
    { path: "/unter-25", priority: 0.9, changeFreq: "daily" },

    { path: "/gratis", priority: 0.9, changeFreq: "daily" },
    { path: "/kategorien", priority: 0.8, changeFreq: "weekly" },
    { path: "/marken", priority: 0.8, changeFreq: "weekly" },
    { path: "/staedte", priority: 0.8, changeFreq: "weekly" },
    { path: "/magazin", priority: 0.85, changeFreq: "daily" },
    { path: "/ueber-uns", priority: 0.7, changeFreq: "weekly" },
    { path: "/redaktionelle-richtlinien", priority: 0.7, changeFreq: "weekly" },
    { path: "/unternehmen", priority: 0.7, changeFreq: "weekly" },
    { path: "/kontakt", priority: 0.3, changeFreq: "monthly" },
    { path: "/datenschutz", priority: 0.2, changeFreq: "monthly" },
    { path: "/impressum", priority: 0.2, changeFreq: "monthly" },
    { path: "/nutzungsbedingungen", priority: 0.2, changeFreq: "monthly" },
  ];

  // Categories
  CATEGORIES.forEach((cat) => {
    items.push({ path: `/rabatte/${cat.slug}`, priority: 0.85, changeFreq: "daily" });
  });

  // Cities
  CITIES.forEach((city) => {
    items.push({ path: `/stadt/${city.slug}`, priority: 0.8, changeFreq: "daily" });
    items.push({ path: `/studentenrabatte/${city.slug}`, priority: 0.8, changeFreq: "daily" });
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

  // Offers & Brands
  let offerSlugs: { slug: string; updated_at?: string }[] = [];
  let brandSlugs: { slug: string; updated_at?: string }[] = [];

  try {
    if (isSupabaseConfigured()) {
      const supabase = await createClient();
      const { data: dbOffers } = await fetchWithTimeout(
        supabase
          .from("offers")
          .select("slug, updated_at")
          .eq("status", "published")
          .eq("is_demo", false)
          .limit(5000),
        600
      ).catch(() => ({ data: null }));

      if (dbOffers && dbOffers.length > 0) {
        offerSlugs = dbOffers;
      }

      const { data: dbBrands } = await fetchWithTimeout(
        supabase.from("brands").select("slug, updated_at"),
        600
      ).catch(() => ({ data: null }));

      if (dbBrands && dbBrands.length > 0) {
        brandSlugs = dbBrands;
      }
    }
  } catch (e) {
    console.error("Supabase sitemap fetch error:", e);
  }

  if (offerSlugs.length === 0) {
    offerSlugs = FALLBACK_OFFERS.map((o) => ({ slug: o.slug, updated_at: o.updated_at }));
  }

  if (brandSlugs.length === 0) {
    const setSlugs = Array.from(new Set(FALLBACK_OFFERS.map((o) => o.brand?.slug).filter(Boolean)));
    brandSlugs = setSlugs.map((s) => ({ slug: s as string }));
  }

  offerSlugs.forEach((o) => {
    items.push({
      path: `/angebot/${o.slug}`,
      priority: 0.75,
      changeFreq: "weekly",
      lastMod: o.updated_at || now,
    });
  });

  brandSlugs.forEach((b) => {
    items.push({
      path: `/marken/${b.slug}`,
      priority: 0.7,
      changeFreq: "weekly",
      lastMod: b.updated_at || now,
    });
  });

  // Build XML string
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const item of items) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}${item.path}`;
      const lastmod = item.lastMod ? new Date(item.lastMod).toISOString() : now;

      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `    <changefreq>${item.changeFreq}</changefreq>\n`;
      xml += `    <priority>${item.priority.toFixed(2)}</priority>\n`;

      // Hreflang alternates
      for (const altLocale of LOCALES) {
        const altUrl = `${BASE_URL}/${altLocale}${item.path}`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}"/>\n`;
      }

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
