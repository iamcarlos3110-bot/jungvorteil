// services/brands.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Brand } from "@/types";
import { FALLBACK_OFFERS } from "@/services/offers";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

const STATIC_BRANDS: Brand[] = Array.from(
  new Map(
    FALLBACK_OFFERS.filter((o) => o.brand).map((o) => [
      o.brand!.slug,
      {
        ...o.brand!,
        offer_count: FALLBACK_OFFERS.filter((f) => f.brand?.slug === o.brand!.slug).length,
      },
    ])
  ).values()
);

export async function getAllBrands(): Promise<Brand[]> {
  if (!isSupabaseConfigured()) return STATIC_BRANDS;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("brands").select("*").order("name"),
      5000
    ).catch(() => ({ data: null }));

    if (!data || data.length === 0) return STATIC_BRANDS;
    return (data as Brand[]) ?? [];
  } catch {
    return STATIC_BRANDS;
  }
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  const fallback = STATIC_BRANDS.find((b) => b.slug.toLowerCase() === slug.toLowerCase()) || null;
  if (!isSupabaseConfigured()) return fallback;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("brands").select("*").eq("slug", slug.toLowerCase()).maybeSingle(),
      5000
    ).catch(() => ({ data: null }));

    if (data) return data as Brand;
  } catch {
    // Fall through
  }

  return fallback;
}

export async function getTopBrands(limit = 12): Promise<Brand[]> {
  if (!isSupabaseConfigured()) return STATIC_BRANDS.slice(0, limit);

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("brands").select("*, offers(count)").order("name"),
      5000
    ).catch(() => ({ data: null }));

    if (!data || data.length === 0) return STATIC_BRANDS.slice(0, limit);

    const brandsWithCount = (data as (Brand & { offers?: { count: number }[] })[]).map((b) => ({
      ...b,
      offer_count: b.offers && b.offers[0] ? b.offers[0].count : 0,
    })) as Brand[];

    return brandsWithCount.sort((a, b) => (b.offer_count || 0) - (a.offer_count || 0)).slice(0, limit);
  } catch {
    return STATIC_BRANDS.slice(0, limit);
  }
}
