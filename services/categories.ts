// services/categories.ts
import { createClient } from "@/lib/supabase/server";
import { Category } from "@/types";

export async function getAllCategories(): Promise<Category[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("categories")
      .select("*, offers(count)")
      .order("sort_order");

    if (error) return [];
    
    return (data as (Category & { offers?: { count: number }[] })[]).map((c) => ({
      ...c,
      offer_count: c.offers && c.offers[0] ? c.offers[0].count : 0
    })) as Category[];
  } catch (err) {
    console.error("Network error fetching categories:", err);
    return [];
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*, offers(count)")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  
  return {
    ...data,
    offer_count: data.offers && data.offers[0] ? data.offers[0].count : 0
  } as Category;
}
