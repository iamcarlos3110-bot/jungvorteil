const https = require('https');

const pages = [
  'https://jungvorteil.ch/de/kategorien',
  'https://jungvorteil.ch/de/staedte',
  'https://jungvorteil.ch/de/marken',
  'https://jungvorteil.ch/de/rabatte'
];

async function checkAll() {
  for (const url of pages) {
    await new Promise((resolve) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          console.log('\n==================================================');
          console.log('CHECKING URL:', url);
          console.log('Status Code:', res.statusCode);
          console.log('HTML Length:', data.length);
          
          // Check for empty placeholder or items
          const cardCount = (data.match(/href="\/de\/(kategorien|stadt|marken|rabatte)\//g) || []).length;
          console.log('Grid Item Links Count:', cardCount);
          console.log('Contains "Keine Kategorien" or "Keine Marken":', data.includes('Keine Kategorien') || data.includes('Keine Marken') || data.includes('Keine Städte'));
          console.log('Contains "0 Angebote" or empty message:', data.includes('0 Angebote') || data.includes('0 Marken'));
          resolve();
        });
      }).on('error', (err) => {
        console.error('Error fetching ' + url, err);
        resolve();
      });
    });
  }
}

checkAll();
