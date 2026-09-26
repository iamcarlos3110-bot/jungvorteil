const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('Verifying Unique Images on Live Articles...');
  
  const res = await fetchUrl('https://jungvorteil.ch/de/magazin');
  const matches = [...res.data.matchAll(/src="(https:\/\/images\.unsplash\.com\/photo-[^"]+)"/g)];
  const imgUrls = [...new Set(matches.map(m => m[1]))];
  
  console.log('Unique Unsplash Image URLs found on Magazin list page:', imgUrls.length);
  imgUrls.slice(0, 5).forEach((url, i) => console.log(`  ${i+1}. ${url}`));
}

verify();
