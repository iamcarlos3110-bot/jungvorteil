// lib/supabase/client.ts
// Client-side Supabase client (browser)
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn("⚠️ Advertencia: NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY no están definidos.");
  }

  return createBrowserClient(
    supabaseUrl || "https://dummy-url.supabase.co",
    supabaseKey || "dummy-key"
  );
}
