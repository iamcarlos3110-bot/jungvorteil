const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory() && f !== 'node_modules' && f !== '.next' && f !== '.git') {
      searchDir(full);
    } else if (stat.isFile() && (f.endsWith('.ts') || f.endsWith('.tsx') || f.endsWith('.json'))) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.toLowerCase().includes('sanitas')) {
        console.log(`Found in: ${full}`);
        content.split('\n').forEach((line, idx) => {
          if (line.toLowerCase().includes('sanitas')) {
            console.log(`  L${idx+1}: ${line.trim()}`);
          }
        });
      }
    }
  }
}

searchDir('.');
