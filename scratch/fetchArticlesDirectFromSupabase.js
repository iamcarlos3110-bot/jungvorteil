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

const client = createClient(supabaseUrl, supabaseKey);

async function fetchFour() {
  const targetSlugs = [
    'studenten-leben-genf-budget-guide',
    'jugendkonto-vergleich-schweiz-neon-yuh-zkb',
    'nebenjob-studenten-schweiz-steuern',
    'wg-zimmer-finden-schweiz-tipps'
  ];

  for (const slug of targetSlugs) {
    const { data, error } = await client.from('articles').select('slug, title, content').eq('slug', slug).single();
    console.log(`\n======================================================`);
    console.log(`SUPABASE DB SELECT QUERY FOR SLUG: ${slug}`);
    console.log(`======================================================`);
    if (error) {
      console.error('DB Error:', error.message);
    } else {
      console.log(`Title: ${data.title}`);
      console.log(`Content Character Count: ${data.content ? data.content.length : 0}`);
      console.log(`Content Word Count: ${data.content ? data.content.trim().split(/\s+/).length : 0}`);
      console.log(`\n--- CONTENT START ---`);
      console.log(data.content);
      console.log(`--- CONTENT END ---\n`);
    }
  }
}

fetchFour();
