// services/offers.ts
// Offer data access layer

import { createClient } from "@/lib/supabase/server";
import { Offer, OfferFilters, PaginatedOffers } from "@/types";

function buildVerifiedQuery(supabase: Awaited<ReturnType<typeof createClient>>) {
  const now = new Date().toISOString();
  // We use inner join on offer_verifications to ensure only verified offers are returned
  return supabase
    .from("offers")
    .select(`
      *, 
      brand:brands(*), 
      category:categories(*), 
      city:cities(*),
      offer_verifications!inner(status)
    `)
    .eq("status", "published")
    .eq("is_demo", false)
    .eq("offer_verifications.status", "verified")
    .or(`end_date.is.null,end_date.gt.${now}`);
}

export async function getVerifiedOffers(
  filters: OfferFilters = {}
): Promise<PaginatedOffers> {
  const supabase = await createClient();
  const {
    category,
    city,
    age,
    student,
    online,
    search,
    sortBy = "popular",
    page = 1,
    limit = 12,
  } = filters;

  const offset = (page - 1) * limit;

  let query = supabase
    .from("offers")
    .select(
      `*, brand:brands(*), category:categories(*), city:cities(*), offer_verifications!inner(status)`,
      { count: "exact" }
    )
    .eq("status", "published")
    .eq("is_demo", false)
    .eq("offer_verifications.status", "verified");

  const now = new Date().toISOString();
  query = query.or(`end_date.is.null,end_date.gt.${now}`);

  if (category) {
    query = query.eq("categories.slug", category);
  }
  if (city) {
    query = query.or(`is_nationwide.eq.true,cities.slug.eq.${city}`);
  }
  if (student !== undefined) {
    query = query.eq("student_required", student);
  }
  if (online !== undefined) {
    query = query.eq("is_online", online);
  }
  if (age !== undefined) {
    query = query.or(`age_min.is.null,age_min.lte.${age}`).or(`age_max.is.null,age_max.gte.${age}`);
  }
  if (search) {
    query = query.or(`title_de.ilike.%${search}%,description_de.ilike.%${search}%`);
  }

  // Sorting
  switch (sortBy) {
    case "newest":
      query = query.order("created_at", { ascending: false });
      break;
    case "saving":
      query = query.order("discount_percent", { ascending: false });
      break;
    case "expiring":
      query = query.order("end_date", { ascending: true });
      break;
    default: // popular
      query = query.order("view_count", { ascending: false });
  }

  query = query.range(offset, offset + limit - 1);

  const { data, error, count } = await query;

  if (error) {
    console.error("Error fetching offers:", error);
    return { offers: [], total: 0, page, limit, hasMore: false };
  }

  const total = count ?? 0;
  return {
    offers: (data as Offer[]) ?? [],
    total,
    page,
    limit,
    hasMore: offset + limit < total,
  };
}

export async function getVerifiedTopOffers(limit = 12): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getVerifiedNewOffers(limit = 8): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getVerifiedExpiringOffers(limit = 8): Promise<Offer[]> {
  const supabase = await createClient();
  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("offers")
    .select(`*, brand:brands(*), category:categories(*), city:cities(*), offer_verifications!inner(status)`)
    .eq("status", "published")
    .eq("is_demo", false)
    .eq("offer_verifications.status", "verified")
    .not("end_date", "is", null)
    .gt("end_date", now)
    .order("end_date", { ascending: true })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getVerifiedStudentOffers(limit = 8): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .eq("student_required", true)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getVerifiedUnderAgeOffers(age: number, limit = 8): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .lte("age_max", age)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getVerifiedFreeOffers(limit = 8): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .eq("advantage_type", "free")
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getVorteilDerWoche(): Promise<Offer | null> {
  const supabase = await createClient();
  // Fetch top 1 verified offer
  const { data, error } = await buildVerifiedQuery(supabase)
    .order("view_count", { ascending: false })
    .limit(1)
    .single();
  if (error || !data) return null;
  return data as Offer;
}

export async function getDemoOffers(limit = 20): Promise<Offer[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("is_demo", true)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) return [];
    return (data as Offer[]) ?? [];
  } catch (err) {
    return [];
  }
}

export async function getOfferBySlug(slug: string): Promise<Offer | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("offers")
      .select(`*, brand:brands(*), category:categories(*), city:cities(*)`)
      .eq("slug", slug)
      .single();
    if (error || !data) return null;
    return data as Offer;
  } catch (err) {
    return null;
  }
}

export async function incrementOfferView(offerId: string): Promise<void> {
  const supabase = await createClient();
  await supabase.rpc("increment_offer_view", { offer_id: offerId });
}

export async function searchOffers(query: string, limit = 10): Promise<Offer[]> {
  if (!query || query.trim().length < 2) return [];
  const supabase = await createClient();
  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("offers")
    .select(`*, brand:brands(*), category:categories(*), city:cities(*), offer_verifications!inner(status)`)
    .eq("status", "published")
    .eq("is_demo", false)
    .eq("offer_verifications.status", "verified")
    .or(`end_date.is.null,end_date.gt.${now}`)
    .or(`title_de.ilike.%${query}%,description_de.ilike.%${query}%`)
    .order("view_count", { ascending: false })
    .limit(limit);

  if (error) return [];
  return (data as Offer[]) ?? [];
}

export const getPublishedOffers = getVerifiedOffers;
export const getTopOffers = getVerifiedTopOffers;

export async function getSimilarOffers(offerId: string, limit = 4): Promise<Offer[]> {
  const supabase = await createClient();
  // Simplified logic: just return top verified offers that are not the same id
  const { data, error } = await buildVerifiedQuery(supabase)
    .neq("id", offerId)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getOffersByCategory(categorySlug: string, limit = 12): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .eq("categories.slug", categorySlug)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getOffersByCity(citySlug: string, limit = 12): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .or(`is_nationwide.eq.true,cities.slug.eq.${citySlug}`)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}

export async function getOffersByBrand(brandSlug: string, limit = 12): Promise<Offer[]> {
  const supabase = await createClient();
  const { data, error } = await buildVerifiedQuery(supabase)
    .eq("brands.slug", brandSlug)
    .order("view_count", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as Offer[]) ?? [];
}


