const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgPath = path.join(publicDir, 'favicon.svg');
  if (!fs.existsSync(svgPath)) {
    console.error('SVG source not found:', svgPath);
    process.exit(1);
  }

  const sizes = [16, 32, 48, 64, 128, 256];
  for (const size of sizes) {
    const out = path.join(publicDir, `favicon-${size}x${size}.png`);
    await sharp(svgPath)
      .resize(size, size, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(out);
    console.log('Wrote', out);
  }

  const icoPngs = [
    path.join(publicDir, 'favicon-16x16.png'),
    path.join(publicDir, 'favicon-32x32.png'),
    path.join(publicDir, 'favicon-48x48.png')
  ];

  const buffers = icoPngs.map(p => fs.readFileSync(p));
  const icoBuffer = await toIco(buffers);
  const icoPath = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(icoPath, icoBuffer);
  console.log('Wrote', icoPath);

  console.log('Favicon generation complete');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
