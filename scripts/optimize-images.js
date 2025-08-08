const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../public/images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const imageSizes = {
  thumbnail: { width: 300, height: 200 },
  medium: { width: 600, height: 400 },
  large: { width: 1200, height: 800 },
};

async function optimizeImage(inputPath, outputPath, size) {
  try {
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center',
      })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(imageDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  for (const file of files) {
    const inputPath = path.join(imageDir, file);
    const baseName = path.parse(file).name;

    // Create multiple sizes for responsive images
    for (const [sizeName, dimensions] of Object.entries(imageSizes)) {
      const outputPath = path.join(outputDir, `${baseName}-${sizeName}.webp`);
      await optimizeImage(inputPath, outputPath, dimensions);
    }

    // Create original size optimized version
    const originalOutputPath = path.join(outputDir, `${baseName}.webp`);
    await optimizeImage(inputPath, originalOutputPath, { width: 1920, height: 1080 });
  }
}

optimizeAllImages().then(() => {
  console.log('Image optimization complete!');
}); 