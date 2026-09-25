-- supabase/migrations/0001_initial_schema.sql

-- Enable pgcrypto for UUIDs if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Enum Types
CREATE TYPE offer_status AS ENUM ('draft', 'pending', 'verified', 'published', 'expired');
CREATE TYPE advantage_type AS ENUM ('discount_percent', 'discount_amount', 'free', 'reduced_price', 'special_rate', 'voucher', 'cashback');
CREATE TYPE source_type AS ENUM ('manual', 'csv', 'json', 'api', 'affiliate');

-- 1. admin_users (for RLS auth)
CREATE TABLE public.admin_users (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can read own profile" ON public.admin_users
  FOR SELECT USING (auth.uid() = id);

-- 2. categories
CREATE TABLE public.categories (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name_de text NOT NULL,
  name_fr text,
  name_it text,
  icon text NOT NULL,
  description_de text,
  sort_order integer DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access for categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Admin write access for categories" ON public.categories FOR ALL USING (EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid()));

-- 3. cities
CREATE TABLE public.cities (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name_de text NOT NULL,
  name_fr text,
  name_it text,
  canton text NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.cities ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access for cities" ON public.cities FOR SELECT USING (true);
CREATE POLICY "Admin write access for cities" ON public.cities FOR ALL USING (EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid()));

-- 4. brands
CREATE TABLE public.brands (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  logo_url text,
  description_de text,
  website_url text,
  categories text[] DEFAULT '{}'::text[],
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.brands ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access for brands" ON public.brands FOR SELECT USING (true);
CREATE POLICY "Admin write access for brands" ON public.brands FOR ALL USING (EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid()));

-- 5. sources
CREATE TABLE public.sources (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  type source_type NOT NULL,
  url text,
  notes text,
  is_active boolean DEFAULT true NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.sources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access for sources" ON public.sources FOR SELECT USING (true);
CREATE POLICY "Admin write access for sources" ON public.sources FOR ALL USING (EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid()));

-- 6. offers
CREATE TABLE public.offers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title_de text NOT NULL,
  title_fr text,
  title_it text,
  description_de text,
  description_fr text,
  description_it text,
  conditions_de text,
  how_to_get_de text,
  brand_id uuid REFERENCES public.brands(id) ON DELETE SET NULL,
  category_id uuid REFERENCES public.categories(id) ON DELETE SET NULL,
  image_url text,
  logo_url text,
  normal_price numeric,
  young_price numeric,
  discount_percent numeric,
  discount_amount numeric,
  advantage_type advantage_type NOT NULL,
  age_min integer,
  age_max integer,
  student_required boolean DEFAULT false NOT NULL,
  city_id uuid REFERENCES public.cities(id) ON DELETE SET NULL,
  canton text,
  is_nationwide boolean DEFAULT false NOT NULL,
  is_online boolean DEFAULT false NOT NULL,
  external_url text,
  affiliate_url text,
  discount_code text,
  start_date timestamptz,
  end_date timestamptz,
  status offer_status DEFAULT 'draft' NOT NULL,
  tags text[] DEFAULT '{}'::text[],
  is_demo boolean DEFAULT false NOT NULL,
  is_sponsored boolean DEFAULT false NOT NULL,
  source_id uuid REFERENCES public.sources(id) ON DELETE SET NULL,
  source_url text,
  checked_at timestamptz,
  verified_by uuid REFERENCES public.admin_users(id) ON DELETE SET NULL,
  view_count integer DEFAULT 0 NOT NULL,
  click_count integer DEFAULT 0 NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read access for offers" ON public.offers FOR SELECT USING (status = 'published');
CREATE POLICY "Admin write access for offers" ON public.offers FOR ALL USING (EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid()));

-- 7. click_events
CREATE TABLE public.click_events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  offer_id uuid REFERENCES public.offers(id) ON DELETE CASCADE NOT NULL,
  device_category text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.click_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public insert access for clicks" ON public.click_events FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin read access for clicks" ON public.click_events FOR SELECT USING (EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid()));

-- RPC function to increment offer views safely
CREATE OR REPLACE FUNCTION increment_offer_view(offer_id_param uuid)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.offers
  SET view_count = view_count + 1
  WHERE id = offer_id_param;
END;
$$;

-- Trigger to update updated_at timestamps
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER trg_offers_updated_at
  BEFORE UPDATE ON public.offers
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_brands_updated_at
  BEFORE UPDATE ON public.brands
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
