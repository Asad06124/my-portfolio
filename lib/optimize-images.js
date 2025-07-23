import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDirs = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/projects'),
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath);
  const base = filePath.replace(ext, '');
  const outPath = base + '-optimized.webp';
  let quality = 50;
  let sizeOK = false;
  let attempt = 0;
  while (!sizeOK && quality >= 10 && attempt < 5) {
    await sharp(filePath)
      .resize(800)
      .webp({ quality })
      .toFile(outPath);
    const stats = fs.statSync(outPath);
    if (stats.size <= 100 * 1024) {
      sizeOK = true;
    } else {
      quality -= 10;
      attempt++;
    }
  }
  const finalStats = fs.statSync(outPath);
  if (finalStats.size > 100 * 1024) {
    console.warn(`Warning: ${outPath} is still above 100KB (${Math.round(finalStats.size/1024)}KB)`);
  } else {
    console.log(`Optimized: ${filePath} -> ${outPath} (${Math.round(finalStats.size/1024)}KB)`);
  }
}

async function main() {
  for (const dir of imageDirs) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        await optimizeImage(path.join(dir, file));
      }
    }
  }
}

main();
