import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

// Derive __dirname equivalent for ES modules
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

// Configuration for different image sizes and qualities
const IMAGE_CONFIGS = {
  hero: { sizes: [400, 800, 1200, 1920], quality: 75 },
  profile: { sizes: [150, 300, 600], quality: 80 },
  project: { sizes: [400, 800, 1200], quality: 70 },
  default: { sizes: [400, 800, 1200], quality: 65 }
};

// Generate low-quality placeholder
async function generateBlurPlaceholder(inputPath: string, outputDir: string, filename: string): Promise<void> {
  const placeholderPath = join(outputDir, `placeholder-${filename.replace(extname(filename), '.webp')}`);
  
  await sharp(inputPath)
    .resize(20, 20, { fit: 'cover' })
    .webp({ quality: 20 })
    .blur(2)
    .toFile(placeholderPath);
}

// Generate responsive images
async function generateResponsiveImages(
  inputPath: string, 
  outputDir: string, 
  filename: string, 
  config: { sizes: number[], quality: number }
): Promise<void> {
  const baseName = basename(filename, extname(filename));
  
  // Generate different sizes
  for (const size of config.sizes) {
    const outputPath = join(outputDir, `${baseName}-${size}w.webp`);
    
    await sharp(inputPath)
      .resize(size, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: config.quality,
        effort: 6
      })
      .toFile(outputPath);
  }
  // Generate original size WebP
  const originalWebP = join(outputDir, `${baseName}.webp`);
  await sharp(inputPath)
    .webp({ 
      quality: config.quality,
      effort: 6
    })
    .toFile(originalWebP);
}

// Determine image type based on filename or directory
function getImageConfig(filePath: string, filename: string): { sizes: number[], quality: number } {
  const lowerFilename = filename.toLowerCase();
  const lowerPath = filePath.toLowerCase();
  
  if (lowerFilename.includes('hero') || lowerFilename.includes('banner')) {
    return IMAGE_CONFIGS.hero;
  }
  if (lowerFilename.includes('profile') || lowerFilename.includes('team') || lowerFilename.includes('avatar')) {
    return IMAGE_CONFIGS.profile;
  }
  if (lowerPath.includes('projects') || lowerFilename.includes('project')) {
    return IMAGE_CONFIGS.project;
  }
  
  return IMAGE_CONFIGS.default;
}

async function optimizeImages(): Promise<void> {
  const imageDirs: string[] = [
    join(__dirname, '../public'),
    join(__dirname, '../public/projects'),
    join(__dirname, '../public/team'),
    join(__dirname, '../public/blog'),
  ];

  console.log('🚀 Starting image optimization...');

  for (const imagesDir of imageDirs) {
    try {
      await fs.access(imagesDir);
      console.log(`📁 Processing directory: ${imagesDir}`);
      
      const files: string[] = await fs.readdir(imagesDir);
      const imageFiles = files.filter(file => 
        file.match(/\.(jpg|jpeg|png)$/i) && !file.startsWith('optimized-')
      );

      if (imageFiles.length === 0) {
        console.log(`   ℹ️  No images to optimize in ${imagesDir}`);
        continue;
      }

      for (const file of imageFiles) {
        const inputPath: string = join(imagesDir, file);
        const config = getImageConfig(imagesDir, file);
        
        console.log(`   🖼️  Optimizing ${file}...`);
        
        try {
          // Generate responsive images
          await generateResponsiveImages(inputPath, imagesDir, file, config);
          
          // Generate blur placeholder
          await generateBlurPlaceholder(inputPath, imagesDir, file);
          
          console.log(`   ✅ Successfully optimized ${file}`);
        } catch (error) {
          console.error(`   ❌ Error optimizing ${file}:`, error);
        }
      }
      
      console.log(`✅ Completed processing ${imagesDir}`);
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'code' in error) {
        if ((error as { code?: string }).code === 'ENOENT') {
          console.log(`   ℹ️  Directory ${imagesDir} not found, skipping`);
          continue;
        }
      }
      console.error(`❌ Error processing directory ${imagesDir}:`, error);
    }
  }
  
  console.log('🎉 Image optimization completed!');
}

// Generate srcSet helper function for components
export function generateSrcSet(imageName: string, sizes: number[]): string {
  const baseName = basename(imageName, extname(imageName));
  return sizes.map(size => `/images/${baseName}-${size}w.webp ${size}w`).join(', ');
}

// Generate blur data URL for placeholders
export async function generateBlurDataURL(imagePath: string): Promise<string> {
  try {
    const buffer = await sharp(imagePath)
      .resize(10, 10, { fit: 'cover' })
      .webp({ quality: 20 })
      .toBuffer();
    
    const base64 = buffer.toString('base64');
    return `data:image/webp;base64,${base64}`;
  } catch (error) {
    console.error('Error generating blur data URL:', error);
    // Return a default blur placeholder
    return 'data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSDIAAAARL0AmbZurmr57yyIiqE8oiG0bejIYEQTgqiDA9vqnsUSI6H+oAERp2HZ65qP/VIAWAFZQOCBCAAAA8AEAnQEqEAAIAAVAfCWkAALp8sF8rgRgAP7o9FDvMCkMde9PK7euH5M1m6VWoDXf2FkP3BqV0ZYbO6NA/VFIAAAA';
  }
}

optimizeImages();