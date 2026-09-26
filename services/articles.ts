// services/articles.ts
import { createPublicClient as createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { Article } from "@/types";
import { ARTICLES_DATA } from "@/config/articlesData";

export const FALLBACK_ARTICLES: Article[] = ARTICLES_DATA;

export async function getAllArticles(): Promise<Article[]> {
  if (!isSupabaseConfigured()) return FALLBACK_ARTICLES;

  try {
    const supabase = await createClient();
    const { data, error } = await Promise.race([
      supabase.from("articles").select("*").order("published_at", { ascending: false }),
      new Promise<{ data: null; error: Error }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 1000)
      ),
    ]);

    if (error || !data || data.length === 0) return FALLBACK_ARTICLES;
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
  if (!isSupabaseConfigured()) {
    return FALLBACK_ARTICLES.find((a) => a.slug === slug) || null;
  }

  try {
    const supabase = await createClient();
    const { data, error } = await Promise.race([
      supabase.from("articles").select("*").eq("slug", slug).maybeSingle(),
      new Promise<{ data: null; error: Error }>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 1000)
      ),
    ]);

    if (error || !data) return null;
    return data as Article;
  } catch {
    return null;
  }
}

export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.category?.toLowerCase() === category.toLowerCase());
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const all = await getAllArticles();
  return all.slice(0, limit);
}
