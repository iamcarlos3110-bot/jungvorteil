// app/sitemap.ts
import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";
import { CATEGORIES } from "@/config/categories";
import { CITIES } from "@/config/cities";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jungvorteil.ch";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/de`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/de/studentenrabatte`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/angebote-unter-30`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/angebote-unter-25`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/de/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/de/datenschutz`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE_URL}/de/impressum`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
    { url: `${BASE_URL}/de/nutzungsbedingungen`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.2 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/de/rabatte/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/de/stadt/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Student pages by city
  const studentCityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/de/studentenrabatte/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.75,
  }));

  // Published offers
  const { data: offers } = await supabase
    .from("offers")
    .select("slug, updated_at")
    .eq("status", "published")
    .eq("is_demo", false)
    .order("updated_at", { ascending: false })
    .limit(5000);

  const offerPages: MetadataRoute.Sitemap = (offers ?? []).map((offer) => ({
    url: `${BASE_URL}/de/angebot/${offer.slug}`,
    lastModified: new Date(offer.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Published brands
  const { data: brands } = await supabase
    .from("brands")
    .select("slug, updated_at")
    .order("updated_at", { ascending: false });

  const brandPages: MetadataRoute.Sitemap = (brands ?? []).map((brand) => ({
    url: `${BASE_URL}/de/marken/${brand.slug}`,
    lastModified: new Date(brand.updated_at),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...cityPages,
    ...studentCityPages,
    ...offerPages,
    ...brandPages,
  ];
}
