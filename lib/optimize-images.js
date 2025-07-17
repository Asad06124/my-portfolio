import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';

async function optimizeImages() {
  const imageDirs = [
    join(__dirname, '../public'),
    join(__dirname, '../public/projects')
  ];

  for (const imagesDir of imageDirs) {
    try {
      await fs.access(imagesDir); // Check if directory exists
      const files = await fs.readdir(imagesDir);
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/)) {
          const inputPath = join(imagesDir, file);
          const outputPath = join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/, '.webp'));
          // Optimize for LCP and other images
          await sharp(inputPath)
            .webp({ quality: 75 })
            .resize({ width: 1200, withoutEnlargement: true })
            .toFile(outputPath);
          // Generate low-res placeholder
          await sharp(inputPath)
            .resize({ width: 20 })
            .webp({ quality: 20 })
            .toFile(join(imagesDir, `low-res-${file.replace(/\.(jpg|jpeg|png)$/, '.webp')}`));
          console.log(`Optimized ${file} in ${imagesDir}`);
        }
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`Directory ${imagesDir} not found, skipping`);
        continue;
      }
      console.error(`Error optimizing images in ${imagesDir}: ${error}`);
    }
  }
}
optimizeImages();
