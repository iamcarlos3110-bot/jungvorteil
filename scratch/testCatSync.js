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
} catch (e) {}

const supabaseUrl = envVars.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = envVars.SUPABASE_SERVICE_ROLE_KEY || envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function check() {
  const client = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await client.from('categories').select('*').order('sort_order');
  console.log('Categories in Supabase DB:', data ? data.length : error);
  if (data) {
    data.forEach(c => console.log(` - ${c.slug}: ${c.name_de}`));
  }
}

check();
