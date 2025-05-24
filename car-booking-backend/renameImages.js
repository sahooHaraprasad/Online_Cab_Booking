//to start this use:
//node renameImages.js

const fs = require("fs");
const path = require("path");

const imagesDir = path.join(__dirname, "images");

const imageMap = {
  "Toyota-Innova.webp": "innova.jpg",
  "dzire.avif": "dzire.jpg",
  "city.avif": "city.jpg",
  "Mercedes-Benz-S.webp": "mercedes-s.jpg",
  "BMW-i7-7-Series.webp": "bmw-7.jpg",
  "Bentley-Flying.jpg": "bentley.jpg",
  "01.RangeRover.jpg": "range-rover.jpg",
  "fortuner.avif": "fortuner.jpg",
  "hyundai-verna.jpg": "verna.jpg",
  "Toyota_Camry.avif": "camry.jpg",
  "Honda_CR.jpg": "honda-cr.jpg",
  "lexux es-exterior.avif": "lexus-es.jpg",
  "2023-BMW-X7.webp": "bmw-x7.jpg",
  "Gls.avif": "mercedes-gls.jpg",
  "rolls royce.avif": "rolls-royce.jpg",
};

try {
  fs.readdirSync(imagesDir).forEach((file) => {
    if (imageMap[file]) {
      fs.renameSync(
        path.join(imagesDir, file),
        path.join(imagesDir, imageMap[file])
      );
      console.log(`Renamed ${file} to ${imageMap[file]}`);
    }
  });
} catch (error) {
  console.error("Error renaming files:", error);
}
