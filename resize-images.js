import sharp from "sharp";

await sharp("./public/assets/FotoHero.webp")
  .resize({ width: 450 })
  .webp({ quality: 75 })
  .toFile("./public/assets/FotoHero-mobile.webp");

await sharp("./public/assets/FotoHero.webp")
  .resize({ width: 900 })
  .webp({ quality: 80 })
  .toFile("./public/assets/FotoHero-tablet.webp");

await sharp("./public/assets/FotoHero.webp")
  .resize({ width: 1400 })
  .webp({ quality: 80 })
  .toFile("./public/assets/FotoHero-desktop.webp");

console.log("✅ Imágenes generadas");