const fs = require('fs');

const fileContent = fs.readFileSync('./services/articles.ts', 'utf8');
const jsonMatch = fileContent.match(/FALLBACK_ARTICLES:\s*Article\[\]\s*=\s*([\s\S]*?);\s*export async function/);

if (!jsonMatch) {
  console.log("Could not parse JSON array from services/articles.ts");
  process.exit(1);
}

const articles = JSON.parse(jsonMatch[1]);
console.log('Total articles found:', articles.length);

articles.forEach((art, i) => {
  const words = art.content.trim().split(/\s+/).length;
  console.log(`${i + 1}. [${art.slug}] "${art.title}" -> ${words} palabras`);
});
