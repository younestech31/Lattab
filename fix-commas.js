const fs = require('fs');

function fix(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const fixed = content.replace(/}\n  {/g, '},\n  {');
  fs.writeFileSync(filename, fixed);
  console.log('Fixed:', filename);
}

fix('lib/data/oum-el-bouaghi-price-reference-locations.ts');
fix('lib/data/oum-el-bouaghi-price-reference-transactions.ts');
