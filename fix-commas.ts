import fs from 'fs';

function fixFile(filename: string) {
  let content = fs.readFileSync(filename, 'utf-8');
  content = content.replace(/\n  \}\n  \{/g, '\n  \},\n  \{');
  fs.writeFileSync(filename, content);
  console.log(`Fixed ${filename}`);
}

fixFile('lib/data/oum-el-bouaghi-price-reference-locations.ts');
fixFile('lib/data/oum-el-bouaghi-price-reference-transactions.ts');

console.log('Done.');
