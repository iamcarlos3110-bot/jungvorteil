// services/articles.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Article } from "@/types";
import { ARTICLES_DATA } from "@/config/articlesData";
import { fetchWithTimeout } from "@/lib/fetchWithTimeout";

export const FALLBACK_ARTICLES: Article[] = ARTICLES_DATA;

export async function getAllArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured()) return FALLBACK_ARTICLES;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("articles").select("*").order("published_at", { ascending: false }),
      5000
    ).catch(() => ({ data: null }));

    if (!data || data.length === 0) return FALLBACK_ARTICLES;
    return data as Article[];
  } catch {
    return FALLBACK_ARTICLES;
  }
}

export async function getArticles(limit?: number): Promise<Article[]> {
  const all = await getAllArticles();
  return limit ? all.slice(0, limit) : all;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fallback = FALLBACK_ARTICLES.find((a) => a.slug.toLowerCase() === slug.toLowerCase()) || null;
  if (!isSupabaseConfigured()) return fallback;

  try {
    const supabase = await createClient();
    const { data } = await fetchWithTimeout(
      supabase.from("articles").select("*").eq("slug", slug.toLowerCase()).maybeSingle(),
      5000
    ).catch(() => ({ data: null }));

    if (data) return data as Article;
  } catch {
    // Fall through
  }

  return fallback;
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => {
    const cat = typeof a.category === "object" && a.category !== null ? (a.category as any).slug : a.category;
    return (cat || "").toLowerCase() === category.toLowerCase();
  });
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const all = await getAllArticles();
  return all.slice(0, limit);
}
