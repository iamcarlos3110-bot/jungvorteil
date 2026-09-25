// services/sources/SourceAdapter.ts
// Interface for all source adapters (future: API, affiliate feeds, etc.)

export interface RawOffer {
  title: string;
  description?: string;
  brand_name: string;
  category_slug: string;
  discount_percent?: number;
  discount_amount?: number;
  external_url?: string;
  age_min?: number;
  age_max?: number;
  student_required?: boolean;
  end_date?: string;
  is_nationwide?: boolean;
  is_online?: boolean;
}

export interface SourceAdapter {
  name: string;
  type: "manual" | "csv" | "json" | "api" | "affiliate";
  fetchOffers(): Promise<RawOffer[]>;
}
