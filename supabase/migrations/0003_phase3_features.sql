-- supabase/migrations/0003_phase3_features.sql

-- 1. Create contact_rate_limits table for persistent serverless rate limiting
CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  ip TEXT PRIMARY KEY,
  last_submit_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert and update contact_rate_limits" ON public.contact_rate_limits
  FOR ALL USING (true) WITH CHECK (true);

-- 2. Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  locale TEXT DEFAULT 'de',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for newsletter_subscribers" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow admin select for newsletter_subscribers" ON public.newsletter_subscribers
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.admin_users WHERE id = auth.uid())
  );
