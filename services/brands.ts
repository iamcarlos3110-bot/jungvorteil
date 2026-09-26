// services/brands.ts
import { createPublicClient as createClient } from "@/lib/supabase/server";
import { Brand } from "@/types";
import { FALLBACK_OFFERS } from "@/services/offers";

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
  try {
    const supabase = await createClient();
    const { data } = await Promise.race([
      supabase.from("brands").select("*").order("name"),
      new Promise<{ data: null; error: Error }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 2000)
      ),
    ]);

    if (error || !data || data.length === 0) return STATIC_BRANDS;
    return (data as Brand[]) ?? [];
  } catch {
    return STATIC_BRANDS;
  }
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await Promise.race([
      supabase.from("brands").select("*").eq("slug", slug).maybeSingle(),
      new Promise<{ data: null; error: Error }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 2000)
      ),
    ]);

    if (data) return data as Brand;
  } catch {
    // Fall through
  }

  return STATIC_BRANDS.find((b) => b.slug === slug) || null;
}

export async function getTopBrands(limit = 12): Promise<Brand[]> {
  try {
    const supabase = await createClient();
    const { data } = await Promise.race([
      supabase.from("brands").select("*, offers(count)").order("name"),
      new Promise<{ data: null; error: Error }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 2000)
      ),
    ]);

    if (error || !data || data.length === 0) return STATIC_BRANDS.slice(0, limit);

    const brandsWithCount = (data as (Brand & { offers?: { count: number }[] })[]).map((b) => ({
      ...b,
      offer_count: b.offers && b.offers[0] ? b.offers[0].count : 0,
    })) as Brand[];

    return brandsWithCount.sort((a, b) => (b.offer_count || 0) - (a.offer_count || 0)).slice(0, limit);
  } catch {
    return STATIC_BRANDS.slice(0, limit);
  }
}

