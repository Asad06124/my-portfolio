import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDirs = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/projects'),
];

const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath: string) {
  const ext = path.extname(filePath);
  const base = filePath.replace(ext, '');
  const outPath = base + '-optimized.webp';
  if (fs.existsSync(outPath)) {
    console.log(`Already optimized: ${outPath}`);
    return;
  }
  try {
    await sharp(filePath)
      .resize(800)
      .webp({ quality: 70 })
      .toFile(outPath);
    console.log(`Optimized: ${filePath} -> ${outPath}`);
  } catch (err) {
    console.error(`Failed to optimize ${filePath}:`, err);
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