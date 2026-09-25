// services/articles.ts
import { createClient } from "@/lib/supabase/server";
import { Article } from "@/types";

export async function getArticles(limit = 6): Promise<Article[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .not("published_at", "is", null)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (error) {
      console.error("Error fetching articles:", error.message || error);
      return [];
    }
    return data as Article[];
  } catch (err) {
    console.error("Network error fetching articles:", err);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;
  return data as Article;
}
