const https = require('https');

https.get('https://jungvorteil.ch/de/marken', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Marken Page HTML Length:', data.length);
    const brandMatches = data.match(/angebote\?brand=[^"]+/g) || [];
    console.log('Brand Links Count:', brandMatches.length);
    console.log('Brand Slugs Found:', brandMatches);
    
    // Check for specific brand names
    const names = ['SBB', 'Spotify', 'Apple', 'Neon', 'Salt', 'ASVZ'];
    names.forEach(n => {
      console.log(`Contains "${n}":`, data.includes(n));
    });
  });
});
