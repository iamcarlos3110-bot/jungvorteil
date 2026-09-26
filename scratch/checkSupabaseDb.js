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

console.log('Using Supabase URL:', supabaseUrl);

if (!supabaseUrl || !supabaseKey) {
  console.log('Supabase credentials missing!');
  process.exit(1);
}

const client = createClient(supabaseUrl, supabaseKey);

async function run() {
  const { data, error } = await client.from('articles').select('slug, title, content');
  if (error) {
    console.error('Error fetching articles from Supabase:', error);
    return;
  }
  console.log('Supabase DB Articles Count:', data ? data.length : 0);
  if (data && data.length > 0) {
    data.forEach((art, idx) => {
      console.log(`${idx + 1}. [${art.slug}] ${art.title} -> ${art.content ? art.content.length : 0} chars (${art.content ? art.content.split(/\s+/).length : 0} words)`);
    });

    console.log('\n--- SAMPLE ARTICLE CONTENT: studenten-leben-genf-budget-guide ---');
    const genf = data.find(a => a.slug === 'studenten-leben-genf-budget-guide');
    if (genf) {
      console.log(genf.content);
    } else {
      console.log('Not found in DB!');
    }
  }
}

run();
