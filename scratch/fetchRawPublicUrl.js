const https = require('https');

https.get('https://jungvorteil.ch/de/magazin/studenten-leben-genf-budget-guide', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('HTTP Status Code:', res.statusCode);
    console.log('Headers:', res.headers);
    console.log('\n--- RAW HTML OUTPUT FROM PRODUCTION URL ---');
    console.log(data);
    console.log('--- END RAW HTML OUTPUT ---');
  });
}).on('error', (err) => {
  console.error('Fetch error:', err);
});
