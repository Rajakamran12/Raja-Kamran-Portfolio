const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const src = path.join(publicDir, 'RK.JPG');
  if (!fs.existsSync(src)) {
    console.error('Source image not found:', src);
    process.exit(1);
  }

  const sizes = [16, 32, 48, 64, 128, 180, 256];
  const outPaths = [];

  for (const size of sizes) {
    const out = path.join(publicDir, `favicon-rk-${size}x${size}.png`);
    await sharp(src)
      .resize(size, size, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(out);
    outPaths.push(out);
    console.log('Wrote', out);
  }

  // Create ICO from common sizes
  const icoPngs = [
    path.join(publicDir, 'favicon-rk-16x16.png'),
    path.join(publicDir, 'favicon-rk-32x32.png'),
    path.join(publicDir, 'favicon-rk-48x48.png')
  ];

  const buffers = icoPngs.map(p => fs.readFileSync(p));
  const icoBuffer = await toIco(buffers);
  const icoPath = path.join(publicDir, 'favicon-rk.ico');
  fs.writeFileSync(icoPath, icoBuffer);
  console.log('Wrote', icoPath);

  // Also write apple touch icon using 180 size
  const appleOut = path.join(publicDir, 'apple-touch-icon-rk.png');
  await sharp(src).resize(180, 180, { fit: 'cover' }).png({ quality: 90 }).toFile(appleOut);
  console.log('Wrote', appleOut);

  console.log('RK favicon generation complete');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});