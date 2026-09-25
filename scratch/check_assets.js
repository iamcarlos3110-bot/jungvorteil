/* eslint-disable */
const fs = require('fs');
const path = require('path');


const content = fs.readFileSync(path.join(__dirname, '../lib/brandAssets.ts'), 'utf8');
const urls = Array.from(new Set(content.match(/https:\/\/[^\s"']+/g) || []));

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log(`${res.status === 200 ? 'OK 200' : 'FAIL ' + res.status}: ${url}`);
    } catch (e) {
      console.log(`ERR ${e.message}: ${url}`);
    }
  }
}
check();
