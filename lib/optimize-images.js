// scripts/optimize-images.js
import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';

async function optimizeImages() {
  const imagesDir = './public/images';
  const files = await fs.readdir(imagesDir);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/)) {
      const inputPath = join(imagesDir, file);
      const outputPath = join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/, '.webp'));
      // Optimize for hero images (LCP candidates)
      await sharp(inputPath)
        .webp({ quality: 75 })
        .resize({ width: 1200, withoutEnlargement: true }) // Cap width for large images
        .toFile(outputPath);
      // Generate low-res placeholder for blur effect
      await sharp(inputPath)
        .resize({ width: 20 })
        .webp({ quality: 20 })
        .toFile(join(imagesDir, `low-res-${file.replace(/\.(jpg|jpeg|png)$/, '.webp')}`));
    }
  }
}
optimizeImages();