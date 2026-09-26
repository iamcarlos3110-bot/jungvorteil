const https = require('https');

https.get('https://jungvorteil.ch/de/magazin/studenten-leben-genf-budget-guide', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('HTTP Status Code:', res.statusCode);
    
    // Extract everything between <article> and </article>
    const articleMatch = data.match(/<article[\s\S]*?<\/article>/i);
    if (articleMatch) {
      const articleHtml = articleMatch[0];
      // Strip HTML tags for clean text view
      const cleanText = articleHtml.replace(/<style[\s\S]*?<\/style>/gi, '')
                                   .replace(/<script[\s\S]*?<\/script>/gi, '')
                                   .replace(/<[^>]+>/g, '\n')
                                   .replace(/\n+/g, '\n')
                                   .trim();
      console.log('\n--- CLEAN TEXT EXTRACTED FROM PUBLIC URL HTML ---');
      console.log(cleanText);
      console.log('--- END CLEAN TEXT ---');
    } else {
      console.log('No <article> tag found in HTML!');
    }
  });
}).on('error', (err) => {
  console.error('Fetch error:', err);
});
