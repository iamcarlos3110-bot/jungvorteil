const https = require('https');

https.get('https://jungvorteil.ch/de/magazin/studenten-leben-genf-budget-guide', (res) => {
  console.log('HTTP Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
});
