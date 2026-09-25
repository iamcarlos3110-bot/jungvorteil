-- =============================================================
-- JungVorteil – Database Migrations
-- Run in Supabase SQL Editor in order
-- =============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================
-- CATEGORIES
-- =============================================================
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name_de TEXT NOT NULL,
  name_fr TEXT NOT NULL DEFAULT '',
  name_it TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT '🏷️',
  description_de TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- CITIES
-- =============================================================
CREATE TABLE IF NOT EXISTS cities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name_de TEXT NOT NULL,
  name_fr TEXT NOT NULL DEFAULT '',
  name_it TEXT NOT NULL DEFAULT '',
  canton TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- BRANDS
-- =============================================================
CREATE TABLE IF NOT EXISTS brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  logo_url TEXT,
  description_de TEXT,
  website_url TEXT,
  categories TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- SOURCES
-- =============================================================
CREATE TABLE IF NOT EXISTS sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('manual', 'csv', 'json', 'api', 'affiliate')),
  url TEXT,
  notes TEXT,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- OFFERS (central table)
-- =============================================================
CREATE TABLE IF NOT EXISTS offers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title_de TEXT NOT NULL,
  title_fr TEXT,
  title_it TEXT,
  description_de TEXT,
  description_fr TEXT,
  description_it TEXT,
  conditions_de TEXT,
  how_to_get_de TEXT,
  brand_id UUID REFERENCES brands(id) ON DELETE SET NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  image_url TEXT,
  logo_url TEXT,
  normal_price NUMERIC(10,2),
  young_price NUMERIC(10,2),
  discount_percent INTEGER CHECK (discount_percent BETWEEN 0 AND 100),
  discount_amount NUMERIC(10,2),
  advantage_type TEXT NOT NULL DEFAULT 'discount_percent'
    CHECK (advantage_type IN ('discount_percent','discount_amount','free','reduced_price','special_rate','voucher','cashback')),
  age_min INTEGER CHECK (age_min >= 0),
  age_max INTEGER CHECK (age_max <= 99),
  student_required BOOLEAN NOT NULL DEFAULT FALSE,
  city_id UUID REFERENCES cities(id) ON DELETE SET NULL,
  canton TEXT,
  is_nationwide BOOLEAN NOT NULL DEFAULT TRUE,
  is_online BOOLEAN NOT NULL DEFAULT FALSE,
  external_url TEXT,
  affiliate_url TEXT,
  discount_code TEXT,
  start_date DATE,
  end_date DATE,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft','pending','verified','published','expired')),
  tags TEXT[] DEFAULT '{}',
  is_demo BOOLEAN NOT NULL DEFAULT FALSE,
  is_sponsored BOOLEAN NOT NULL DEFAULT FALSE,
  source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
  source_url TEXT,
  checked_at TIMESTAMPTZ,
  verified_by TEXT,
  view_count INTEGER NOT NULL DEFAULT 0,
  click_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- OFFER VIEWS (analytics)
-- =============================================================
CREATE TABLE IF NOT EXISTS offer_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  offer_id UUID NOT NULL REFERENCES offers(id) ON DELETE CASCADE,
  viewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  device_category TEXT CHECK (device_category IN ('mobile','tablet','desktop','unknown'))
);

-- =============================================================
-- CLICK EVENTS (analytics)
-- =============================================================
CREATE TABLE IF NOT EXISTS click_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  offer_id UUID NOT NULL REFERENCES offers(id) ON DELETE CASCADE,
  clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  device_category TEXT CHECK (device_category IN ('mobile','tablet','desktop','unknown')),
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  country TEXT
);

-- =============================================================
-- FAVORITES (anonymous, by session token)
-- Note: Main favorites are in localStorage, this table is for 
-- optional future sync
-- =============================================================
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_token TEXT NOT NULL,
  offer_id UUID NOT NULL REFERENCES offers(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(session_token, offer_id)
);

-- =============================================================
-- AD SETTINGS
-- =============================================================
CREATE TABLE IF NOT EXISTS ad_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slot_id TEXT UNIQUE NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT FALSE,
  custom_code TEXT,
  notes TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- ADMIN USERS
-- =============================================================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'editor')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =============================================================
-- INDEXES for performance
-- =============================================================
CREATE INDEX IF NOT EXISTS idx_offers_status ON offers(status);
CREATE INDEX IF NOT EXISTS idx_offers_category ON offers(category_id);
CREATE INDEX IF NOT EXISTS idx_offers_city ON offers(city_id);
CREATE INDEX IF NOT EXISTS idx_offers_brand ON offers(brand_id);
CREATE INDEX IF NOT EXISTS idx_offers_end_date ON offers(end_date);
CREATE INDEX IF NOT EXISTS idx_offers_view_count ON offers(view_count DESC);
CREATE INDEX IF NOT EXISTS idx_offers_slug ON offers(slug);
CREATE INDEX IF NOT EXISTS idx_offers_is_demo ON offers(is_demo);
CREATE INDEX IF NOT EXISTS idx_click_events_offer ON click_events(offer_id);
CREATE INDEX IF NOT EXISTS idx_offer_views_offer ON offer_views(offer_id);

-- =============================================================
-- FUNCTIONS
-- =============================================================

-- Increment view count (atomic)
CREATE OR REPLACE FUNCTION increment_offer_view(offer_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE offers SET view_count = view_count + 1 WHERE id = offer_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Increment click count (atomic)
CREATE OR REPLACE FUNCTION increment_offer_click(offer_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE offers SET click_count = click_count + 1 WHERE id = offer_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trg_offers_updated_at
  BEFORE UPDATE ON offers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER trg_brands_updated_at
  BEFORE UPDATE ON brands
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Auto-expire offers
CREATE OR REPLACE FUNCTION auto_expire_offers()
RETURNS void AS $$
BEGIN
  UPDATE offers
  SET status = 'expired'
  WHERE status = 'published'
    AND end_date IS NOT NULL
    AND end_date < CURRENT_DATE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =============================================================
-- ROW LEVEL SECURITY
-- =============================================================

-- Enable RLS
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE offer_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read access for published offers
CREATE POLICY "offers_public_read" ON offers
  FOR SELECT USING (status = 'published' OR status = 'expired');

-- Public read for categories/cities/brands
CREATE POLICY "categories_public_read" ON categories FOR SELECT USING (TRUE);
CREATE POLICY "cities_public_read" ON cities FOR SELECT USING (TRUE);
CREATE POLICY "brands_public_read" ON brands FOR SELECT USING (TRUE);

-- Insert click events (anonymous)
CREATE POLICY "click_events_insert" ON click_events FOR INSERT WITH CHECK (TRUE);

-- Insert offer views (anonymous)
CREATE POLICY "offer_views_insert" ON offer_views FOR INSERT WITH CHECK (TRUE);

-- Favorites (anonymous by session)
CREATE POLICY "favorites_public" ON favorites USING (TRUE) WITH CHECK (TRUE);

-- Admin access via service role (bypasses RLS)
-- Service role key used in admin operations skips RLS automatically
