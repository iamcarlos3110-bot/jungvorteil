// services/cities.ts
import { createClient } from "@/lib/supabase/server";
import { City } from "@/types";

export async function getAllCities(): Promise<City[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("cities")
      .select("*, offers(count)");

    if (error) return [];
    
    const citiesWithCount = (data as (City & { offers?: { count: number }[] })[]).map((c) => ({
      ...c,
      offer_count: c.offers && c.offers[0] ? c.offers[0].count : 0
    })) as City[];

    // Sort by offer count descending, then by name
    return citiesWithCount.sort((a, b) => {
      const countDiff = (b.offer_count || 0) - (a.offer_count || 0);
      if (countDiff !== 0) return countDiff;
      return a.name_de.localeCompare(b.name_de);
    });
  } catch (err) {
    console.error("Network error fetching cities:", err);
    return [];
  }
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("cities")
    .select("*, offers(count)")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  
  return {
    ...data,
    offer_count: data.offers && data.offers[0] ? data.offers[0].count : 0
  } as City;
}
