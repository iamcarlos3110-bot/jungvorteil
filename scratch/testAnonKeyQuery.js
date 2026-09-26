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
const anonKey = envVars.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing with ANON KEY:', anonKey ? 'ANON KEY PRESENT' : 'NO ANON KEY');

if (supabaseUrl && anonKey) {
  const client = createClient(supabaseUrl, anonKey);
  client.from('articles').select('*').eq('slug', 'studenten-leben-genf-budget-guide').maybeSingle().then(({ data, error }) => {
    console.log('\n--- ANON KEY QUERY RESULT ---');
    if (error) {
      console.error('Anon query error:', error);
    } else {
      console.log('Data returned:', data ? 'ROW FOUND' : 'NULL (NOT FOUND)');
      if (data) {
        console.log('ID:', data.id);
        console.log('Title:', data.title);
        console.log('Content Length:', data.content ? data.content.length : 0);
        console.log('Content Snippet:', data.content ? data.content.substring(0, 300) : '');
      }
    }
  });
}
