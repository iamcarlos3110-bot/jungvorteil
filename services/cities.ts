// services/cities.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { City } from "@/types";
import { CITIES } from "@/config/cities";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

const STATIC_CITIES: City[] = CITIES.map((c, idx) => ({
  id: `city-static-${idx + 1}`,
  slug: c.slug,
  name_de: c.name_de,
  name_fr: c.name_fr,
  name_it: c.name_it,
  canton: c.canton,
  sort_order: idx + 1,
  created_at: new Date().toISOString(),
  offer_count: 5,
}));

export async function getAllCities(): Promise<City[]> {
  if (!isSupabaseConfigured()) return STATIC_CITIES;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("cities").select("*, offers(count)"),
      5000
    ).catch(() => ({ data: null }));

    if (!data || data.length === 0) return STATIC_CITIES;

    const citiesWithCount = (data as (City & { offers?: { count: number }[] })[]).map((c) => ({
      ...c,
      offer_count: c.offers && c.offers[0] ? c.offers[0].count : 0,
    })) as City[];

    return citiesWithCount.sort((a, b) => {
      const countDiff = (b.offer_count || 0) - (a.offer_count || 0);
      if (countDiff !== 0) return countDiff;
      return a.name_de.localeCompare(b.name_de);
    });
  } catch {
    return STATIC_CITIES;
  }
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  const fallback = STATIC_CITIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase()) || null;
  if (!isSupabaseConfigured()) return fallback;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("cities").select("*, offers(count)").eq("slug", slug.toLowerCase()).maybeSingle(),
      5000
    ).catch(() => ({ data: null }));

    if (data) {
      return {
        ...data,
        offer_count: data.offers && data.offers[0] ? data.offers[0].count : 0,
      } as City;
    }
  } catch {
    // Fall through
  }

  return fallback;
}
