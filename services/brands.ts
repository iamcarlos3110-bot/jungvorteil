// services/brands.ts
import { createPublicClient as createClient } from "@/lib/supabase/server";
import { Brand } from "@/types";

export async function getAllBrands(): Promise<Brand[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .order("name");

  if (error) return [];
  return data ?? [];
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("brands")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data as Brand;
}

export async function getTopBrands(limit = 12): Promise<Brand[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("brands")
      .select("*, offers(count)")
      .order("name");

    if (error) return [];
    
    const brandsWithCount = (data as (Brand & { offers?: { count: number }[] })[]).map((b) => ({
      ...b,
      offer_count: b.offers && b.offers[0] ? b.offers[0].count : 0
    })) as Brand[];

    // Sort by offer count descending
    return brandsWithCount.sort((a, b) => (b.offer_count || 0) - (a.offer_count || 0)).slice(0, limit);
  } catch (err) {
    console.error("Network error fetching top brands:", err);
    return [];
  }
}

