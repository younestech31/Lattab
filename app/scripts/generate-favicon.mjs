import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = 'public/logo.png';
const outputDir = 'public';

async function generateIcons() {
  if (!fs.existsSync(input)) {
    console.error(`Input file ${input} not found!`);
    process.exit(1);
  }

  console.log('Generating icons...');

  // favicon.ico (48x48)
  // Sharp doesn't output ICO format natively, so we output PNG.
  // Browsers handle PNG with .ico extension or just as a favicon.
  await sharp(input)
    .resize(48, 48)
    .png()
    .toFile(path.join(outputDir, 'favicon.ico'));

  // apple-touch-icon.png (180x180)
  await sharp(input)
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));

  // icon-192.png
  await sharp(input)
    .resize(192, 192)
    .png()
    .toFile(path.join(outputDir, 'icon-192.png'));

  // icon-512.png
  await sharp(input)
    .resize(512, 512)
    .png()
    .toFile(path.join(outputDir, 'icon-512.png'));

  console.log('Icons generated successfully!');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
