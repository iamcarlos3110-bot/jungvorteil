const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

let envVars = {};
try {
  const env = fs.readFileSync('.env.local', 'utf8');
  env.split('\n').forEach(l => {
    const idx = l.indexOf('=');
    if (idx > -1) {
      const key = l.substring(0, idx).trim();
      const val = l.substring(idx + 1).trim().replace(/^['"]|['"]$/g, '');
      envVars[key] = val;
    }
  });
} catch (e) {
  console.log('No .env.local file found');
}

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.log('Supabase credentials missing!');
  process.exit(1);
}

const client = createClient(supabaseUrl, supabaseKey);

// Require FALLBACK_ARTICLES from services/articles.ts
const fileContent = fs.readFileSync('./services/articles.ts', 'utf8');
const jsonMatch = fileContent.match(/FALLBACK_ARTICLES:\s*Article\[\]\s*=\s*([\s\S]*?);\s*export async function/);

if (!jsonMatch) {
  console.log("Could not parse FALLBACK_ARTICLES from services/articles.ts");
  process.exit(1);
}

const articles = JSON.parse(jsonMatch[1]);
console.log(`Parsed ${articles.length} articles to upsert into Supabase...`);

async function sync() {
  for (const art of articles) {
    const row = {
      id: art.id,
      slug: art.slug,
      title: art.title,
      excerpt: art.excerpt,
      content: art.content,
      category: art.category,
      image_url: art.image_url,
      published_at: art.published_at || new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { data, error } = await client.from('articles').upsert(row, { onConflict: 'slug' });
    if (error) {
      console.error(`Error upserting ${art.slug}:`, error.message);
    } else {
      console.log(`✓ Upserted into Supabase DB: ${art.slug} (${art.content.length} chars)`);
    }
  }

  // Now query back to verify
  console.log('\n--- VERIFYING SUPABASE DB SELECT QUERY ---');
  const { data: dbData, error: dbErr } = await client.from('articles').select('slug, title, content');
  if (dbErr) {
    console.error('Select error:', dbErr);
  } else {
    console.log(`Total rows in Supabase 'articles' table: ${dbData.length}`);
  }
}

sync();
