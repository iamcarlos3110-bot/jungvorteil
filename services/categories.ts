// services/categories.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Category } from "@/types";
import { CATEGORIES } from "@/config/categories";
import { FALLBACK_OFFERS } from "@/services/offers";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

const STATIC_CATEGORIES: Category[] = CATEGORIES.map((c, index) => {
  const count = FALLBACK_OFFERS.filter((o) => o.category?.slug === c.slug).length;
  return {
    id: `cat-static-${index + 1}`,
    slug: c.slug,
    name_de: c.name_de,
    name_fr: c.name_fr,
    name_it: c.name_it,
    icon: c.icon,
    description_de: c.description_de,
    sort_order: c.sort_order,
    created_at: new Date().toISOString(),
    offer_count: count > 0 ? count : 1,
  };
});

export async function getAllCategories(): Promise<Category[]> {
  if (!isSupabaseConfigured()) return STATIC_CATEGORIES;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("categories").select("*, offers(count)").order("sort_order"),
      5000
    ).catch(() => ({ data: null }));

    if (!data || data.length === 0) return STATIC_CATEGORIES;

    return (data as (Category & { offers?: { count: number }[] })[]).map((c) => {
      const dbCount = c.offers && c.offers[0] ? c.offers[0].count : 0;
      const staticCount = FALLBACK_OFFERS.filter((o) => o.category?.slug === c.slug).length;
      return {
        ...c,
        offer_count: dbCount > 0 ? dbCount : (staticCount > 0 ? staticCount : 2),
      };
    }) as Category[];
  } catch {
    return STATIC_CATEGORIES;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const fallback = STATIC_CATEGORIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase()) || null;
  if (!isSupabaseConfigured()) return fallback;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("categories").select("*, offers(count)").eq("slug", slug.toLowerCase()).maybeSingle(),
      5000
    ).catch(() => ({ data: null }));

    if (data) {
      return {
        ...data,
        offer_count: data.offers && data.offers[0] ? data.offers[0].count : 0,
      } as Category;
    }
  } catch {
    // Fall through
  }

  return fallback;
}
