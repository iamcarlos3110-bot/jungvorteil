const https = require('https');

function fetchPage(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

async function verify() {
  console.log('--- VERIFYING LIVE DEPLOYMENT ON https://jungvorteil.ch ---');
  
  // 1. Check Kategorien Page
  const katHtml = await fetchPage('https://jungvorteil.ch/de/kategorien');
  console.log('\n[1] /de/kategorien HTML Length:', katHtml.length);
  const catSlugs = ['reisen', 'finanzen', 'krankenkasse', 'wohnen', 'handy', 'technik', 'streaming', 'mode', 'fitness', 'kino', 'restaurants', 'bildung', 'events', 'gaming', 'gratis'];
  let foundCats = 0;
  catSlugs.forEach(slug => {
    const exists = katHtml.includes(`/de/rabatte/${slug}`);
    if (exists) foundCats++;
    console.log(`  - Category "/de/rabatte/${slug}": ${exists ? 'FOUND ✓' : 'MISSING ✗'}`);
  });
  console.log(`Total Categories Rendered: ${foundCats}/${catSlugs.length}`);

  // 2. Check Krankenkasse Category Deals
  const kkHtml = await fetchPage('https://jungvorteil.ch/de/rabatte/krankenkasse');
  console.log('\n[2] /de/rabatte/krankenkasse HTML Length:', kkHtml.length);
  console.log('  - Contains IPV Angebot:', kkHtml.includes('Prämienverbilligung') || kkHtml.includes('Sanitas'));

  // 3. Check Wohnen Category Deals
  const wohnenHtml = await fetchPage('https://jungvorteil.ch/de/rabatte/wohnen');
  console.log('\n[3] /de/rabatte/wohnen HTML Length:', wohnenHtml.length);
  console.log('  - Contains WOKO / FMEL WG Angebot:', wohnenHtml.includes('WOKO') || wohnenHtml.includes('FMEL'));
}

verify();
