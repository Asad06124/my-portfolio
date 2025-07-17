import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Derive __dirname equivalent for ES modules
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

async function optimizeImages(): Promise<void> {
  const imageDirs: string[] = [
    join(__dirname, '../public'),
    join(__dirname, '../public/projects'),
  ];

  for (const imagesDir of imageDirs) {
    try {
      await fs.access(imagesDir);
      const files: string[] = await fs.readdir(imagesDir);
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/)) {
          const inputPath: string = join(imagesDir, file);
          const outputPath: string = join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/, '.webp'));
          await sharp(inputPath)
            .webp({ quality: 75 })
            .resize({ width: 1200, withoutEnlargement: true })
            .toFile(outputPath);
          await sharp(inputPath)
            .resize({ width: 20 })
            .webp({ quality: 20 })
            .toFile(join(imagesDir, `low-res-${file.replace(/\.(jpg|jpeg|png)$/, '.webp')}`));
          console.log(`Optimized ${file} in ${imagesDir}`);
        }
      }
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        console.log(`Directory ${imagesDir} not found, skipping`);
        continue;
      }
      console.error(`Error optimizing images in ${imagesDir}: ${error}`);
    }
  }
}

optimizeImages();