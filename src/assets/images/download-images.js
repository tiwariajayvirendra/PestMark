const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg',
    filename: 'cockroach.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg',
    filename: 'rodent.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/672142/pexels-photo-672142.jpeg',
    filename: 'termite.jpg'
  },
  {
    url: 'https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg',
    filename: 'mosquito.jpg'
  }
];

const downloadImage = (url, filename) => {
  https.get(url, (response) => {
    const filePath = path.join(__dirname, filename);
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

images.forEach(img => {
  downloadImage(img.url, img.filename);
}); 