import { MetadataRoute } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { CATEGORIES } from "@/config/categories";
import { CITIES } from "@/config/cities";
import { FALLBACK_OFFERS } from "@/services/offers";
import { ARTICLES_DATA } from "@/config/articlesData";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch";
const LOCALES = ["de", "fr", "it"] as const;

function createLocalizedEntries(
  path: string,
  priority: number,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly",
  lastMod?: Date
): MetadataRoute.Sitemap {
  const lastModified = lastMod || new Date();
  
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}/${locale}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        de: `${BASE_URL}/de${path}`,
        fr: `${BASE_URL}/fr${path}`,
        it: `${BASE_URL}/it${path}`,
      },
    },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/studentenrabatte", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/angebote-unter-30", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/angebote-unter-25", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/gratis", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/kategorien", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/marken", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/staedte", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/magazin", priority: 0.85, changeFrequency: "daily" as const },
    { path: "/ueber-uns", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/kontakt", priority: 0.3, changeFrequency: "monthly" as const },
    { path: "/datenschutz", priority: 0.2, changeFrequency: "monthly" as const },
    { path: "/impressum", priority: 0.2, changeFrequency: "monthly" as const },
    { path: "/nutzungsbedingungen", priority: 0.2, changeFrequency: "monthly" as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap((sp) =>
    createLocalizedEntries(sp.path, sp.priority, sp.changeFrequency)
  );

  // Category pages
  const categoryEntries: MetadataRoute.Sitemap = CATEGORIES.flatMap((cat) =>
    createLocalizedEntries(`/rabatte/${cat.slug}`, 0.85, "daily")
  );

  // City pages
  const cityEntries: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    createLocalizedEntries(`/stadt/${city.slug}`, 0.8, "daily")
  );

  // Student city pages
  const studentCityEntries: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    createLocalizedEntries(`/studentenrabatte/${city.slug}`, 0.8, "daily")
  );

  // Magazine articles
  const magazineEntries: MetadataRoute.Sitemap = ARTICLES_DATA.flatMap((article) =>
    createLocalizedEntries(
      `/magazin/${article.slug}`,
      0.8,
      "weekly",
      new Date(article.updated_at || article.published_at || new Date())
    )
  );

  // Offers & Brands
  let offerEntries: MetadataRoute.Sitemap = [];
  let brandEntries: MetadataRoute.Sitemap = [];

  try {
    if (isSupabaseConfigured()) {
      const supabase = await createClient();
      const { data: offers } = await fetchWithTimeout(
        supabase
          .from("offers")
          .select("slug, updated_at")
          .eq("status", "published")
          .eq("is_demo", false)
          .order("updated_at", { ascending: false })
          .limit(5000),
        600
      ).catch(() => ({ data: null }));

      if (offers && offers.length > 0) {
        offerEntries = offers.flatMap((offer) =>
          createLocalizedEntries(`/angebot/${offer.slug}`, 0.75, "weekly", new Date(offer.updated_at))
        );
      }

      const { data: brands } = await fetchWithTimeout(
        supabase.from("brands").select("slug, updated_at").order("updated_at", { ascending: false }),
        600
      ).catch(() => ({ data: null }));

      if (brands && brands.length > 0) {
        brandEntries = brands.flatMap((brand) =>
          createLocalizedEntries(`/marken/${brand.slug}`, 0.7, "weekly", new Date(brand.updated_at))
        );
      }
    }
  } catch (e) {
    console.error("Error generating sitemap from Supabase:", e);
  }

  // Fallbacks if Supabase empty
  if (offerEntries.length === 0) {
    offerEntries = FALLBACK_OFFERS.flatMap((offer) =>
      createLocalizedEntries(`/angebot/${offer.slug}`, 0.75, "weekly", new Date(offer.updated_at))
    );
  }

  if (brandEntries.length === 0) {
    const fallbackBrandSlugs = Array.from(
      new Set(FALLBACK_OFFERS.map((o) => o.brand?.slug).filter(Boolean))
    );
    brandEntries = fallbackBrandSlugs.flatMap((slug) =>
      createLocalizedEntries(`/marken/${slug}`, 0.7, "weekly")
    );
  }

  return [
    ...staticEntries,
    ...categoryEntries,
    ...cityEntries,
    ...studentCityEntries,
    ...magazineEntries,
    ...offerEntries,
    ...brandEntries,
  ];
}
