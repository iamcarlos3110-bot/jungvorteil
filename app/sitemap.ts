import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";
import { CATEGORIES } from "@/config/categories";
import { CITIES } from "@/config/cities";
import { FALLBACK_OFFERS } from "@/services/offers";
import { FALLBACK_ARTICLES } from "@/services/articles";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static hub pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/de`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/de/studentenrabatte`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/angebote-unter-30`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/angebote-unter-25`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/gratis`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/kategorien`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/de/marken`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/de/staedte`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/de/magazin`, lastModified: new Date(), changeFrequency: "daily", priority: 0.85 },
    { url: `${BASE_URL}/de/ueber-uns`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/de/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/de/datenschutz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE_URL}/de/impressum`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE_URL}/de/nutzungsbedingungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
  ];

  // Category pages (8 categories)
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/de/rabatte/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));

  // City pages (12 cities)
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/de/stadt/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Student pages by city (12 cities)
  const studentCityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/de/studentenrabatte/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Magazine articles
  const magazinePages: MetadataRoute.Sitemap = FALLBACK_ARTICLES.map((article) => ({
    url: `${BASE_URL}/de/magazin/${article.slug}`,
    lastModified: new Date(article.updated_at || article.published_at || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Published offers (from DB or fallback)
  let offerPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: offers } = await supabase
      .from("offers")
      .select("slug, updated_at")
      .eq("status", "published")
      .eq("is_demo", false)
      .order("updated_at", { ascending: false })
      .limit(5000);

    if (offers && offers.length > 0) {
      offerPages = offers.map((offer) => ({
        url: `${BASE_URL}/de/angebot/${offer.slug}`,
        lastModified: new Date(offer.updated_at),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      }));
    } else {
      offerPages = FALLBACK_OFFERS.map((offer) => ({
        url: `${BASE_URL}/de/angebot/${offer.slug}`,
        lastModified: new Date(offer.updated_at),
        changeFrequency: "weekly" as const,
        priority: 0.75,
      }));
    }
  } catch {
    offerPages = FALLBACK_OFFERS.map((offer) => ({
      url: `${BASE_URL}/de/angebot/${offer.slug}`,
      lastModified: new Date(offer.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));
  }

  // Published brands (from DB or fallback)
  let brandPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: brands } = await supabase
      .from("brands")
      .select("slug, updated_at")
      .order("updated_at", { ascending: false });

    if (brands && brands.length > 0) {
      brandPages = brands.map((brand) => ({
        url: `${BASE_URL}/de/marken/${brand.slug}`,
        lastModified: new Date(brand.updated_at),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    } else {
      const fallbackBrands = Array.from(
        new Set(FALLBACK_OFFERS.map((o) => o.brand?.slug).filter(Boolean))
      );
      brandPages = fallbackBrands.map((slug) => ({
        url: `${BASE_URL}/de/marken/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    const fallbackBrands = Array.from(
      new Set(FALLBACK_OFFERS.map((o) => o.brand?.slug).filter(Boolean))
    );
    brandPages = fallbackBrands.map((slug) => ({
      url: `${BASE_URL}/de/marken/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  }

  return [
    ...staticPages,
    ...categoryPages,
    ...cityPages,
    ...studentCityPages,
    ...magazinePages,
    ...offerPages,
    ...brandPages,
  ];
}
