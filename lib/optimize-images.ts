import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDirs = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/projects'),
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImage(filePath: string) {
  let quality = 70;
  let sizeOK = false;
  let attempt = 0;
  const ext = path.extname(filePath).toLowerCase();

  while (!sizeOK && quality >= 10 && attempt < 5) {
    try {
      const buffer = await sharp(filePath)
        .resize({ width: 800, withoutEnlargement: true })
        .toFormat(ext === '.png' ? 'png' : 'jpeg', { quality })
        .toBuffer();

      if (buffer.length <= 100 * 1024) {
        await fs.promises.writeFile(filePath, buffer);
        sizeOK = true;
        console.log(`Optimized: ${filePath} (${Math.round(buffer.length / 1024)}KB)`);
      } else {
        quality -= 10;
        attempt++;
      }
    } catch (err) {
      console.error(`Failed to optimize ${filePath}:`, err);
      break;
    }
  }

  if (!sizeOK) {
    console.warn(`Warning: ${filePath} is still above 100KB after optimization.`);
  }
}

async function processDirectory(dir: string) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (imageExtensions.includes(ext)) {
        await optimizeImage(fullPath);
      }
    }
  }
}

async function main() {
  for (const dir of imageDirs) {
    await processDirectory(dir);
  }
}

main();
