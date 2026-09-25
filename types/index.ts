// types/index.ts
// Central type definitions for JungVorteil

export type Locale = "de" | "fr" | "it";

export type OfferStatus = "draft" | "pending" | "verified" | "published" | "expired";

export type OfferTag =
  | "NEU"
  | "HEUTE"
  | "BELIEBT"
  | "STUDENTEN"
  | "UNTER_25"
  | "UNTER_30"
  | "GRATIS"
  | "ONLINE"
  | "ZUERICH"
  | "GENF"
  | "BASEL"
  | "SCHWEIZWEIT"
  | "GESPONSERT";

export type AdvantageType =
  | "discount_percent"
  | "discount_amount"
  | "free"
  | "reduced_price"
  | "special_rate"
  | "voucher"
  | "cashback";

export interface Category {
  id: string;
  slug: string;
  name_de: string;
  name_fr: string;
  name_it: string;
  icon: string;
  description_de: string;
  offer_count?: number;
  sort_order: number;
  created_at: string;
}

export interface City {
  id: string;
  slug: string;
  name_de: string;
  name_fr: string;
  name_it: string;
  canton: string;
  offer_count?: number;
}

export interface Canton {
  code: string;
  name_de: string;
  name_fr: string;
  name_it: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo_url: string | null;
  description_de: string | null;
  website_url: string | null;
  categories: string[];
  offer_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Source {
  id: string;
  name: string;
  type: "manual" | "csv" | "json" | "api" | "affiliate";
  url: string | null;
  notes: string | null;
  is_active: boolean;
  created_at: string;
}

export interface Offer {
  id: string;
  slug: string;
  title_de: string;
  title_fr: string | null;
  title_it: string | null;
  description_de: string | null;
  description_fr: string | null;
  description_it: string | null;
  conditions_de: string | null;
  how_to_get_de: string | null;
  brand_id: string | null;
  brand?: Brand;
  category_id: string | null;
  category?: Category;
  image_url: string | null;
  logo_url: string | null;
  normal_price: number | null;
  young_price: number | null;
  discount_percent: number | null;
  discount_amount: number | null;
  advantage_type: AdvantageType;
  age_min: number | null;
  age_max: number | null;
  student_required: boolean;
  city_id: string | null;
  city?: City;
  canton: string | null;
  is_nationwide: boolean;
  is_online: boolean;
  external_url: string | null;
  affiliate_url: string | null;
  discount_code: string | null;
  start_date: string | null;
  end_date: string | null;
  status: OfferStatus;
  tags: OfferTag[];
  is_demo: boolean;
  is_sponsored: boolean;
  source_id: string | null;
  source_url: string | null;
  checked_at: string | null;
  verified_by: string | null;
  view_count: number;
  click_count: number;
  created_at: string;
  updated_at: string;
}

export interface OfferFilters {
  category?: string;
  city?: string;
  age?: number;
  student?: boolean;
  online?: boolean;
  search?: string;
  status?: OfferStatus;
  sortBy?: "popular" | "newest" | "saving" | "expiring";
  page?: number;
  limit?: number;
}

export interface PaginatedOffers {
  offers: Offer[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ClickEvent {
  offer_id: string;
  device_category: "mobile" | "tablet" | "desktop" | "unknown";
  referrer: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
}

export interface AdSlotConfig {
  id: string;
  enabled: boolean;
  code: string | null;
  type: "banner" | "native" | "social_bar" | "popunder" | "interstitial";
  placement: string;
  desktop: boolean;
  mobile: boolean;
}

export interface UserPreferences {
  age?: number;
  situation?: "student" | "apprentice" | "employed" | "all";
  city?: string;
  locale?: Locale;
}

// Admin types
export interface AdminStats {
  activeOffers: number;
  expiredOffers: number;
  totalBrands: number;
  totalClicks: number;
  totalViews: number;
}

export interface OfferFormData {
  slug: string;
  title_de: string;
  title_fr?: string;
  title_it?: string;
  description_de?: string;
  conditions_de?: string;
  how_to_get_de?: string;
  brand_id?: string;
  category_id?: string;
  image_url?: string;
  logo_url?: string;
  normal_price?: number;
  young_price?: number;
  discount_percent?: number;
  discount_amount?: number;
  advantage_type: AdvantageType;
  age_min?: number;
  age_max?: number;
  student_required: boolean;
  city_id?: string;
  canton?: string;
  is_nationwide: boolean;
  is_online: boolean;
  external_url?: string;
  affiliate_url?: string;
  discount_code?: string;
  start_date?: string;
  end_date?: string;
  status: OfferStatus;
  tags: OfferTag[];
  is_sponsored: boolean;
  source_id?: string;
  source_url?: string;
}

export interface OfferVerification {
  id: string;
  offer_id: string;
  source_url: string;
  source_name: string;
  status: "verified" | "pending" | "invalid";
  checked_at: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  category: string | null;
  sources: Record<string, unknown> | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
