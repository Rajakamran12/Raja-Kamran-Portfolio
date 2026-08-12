const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('to-ico');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const baseNames = ['favicon-rk-16x16.png','favicon-rk-32x32.png','favicon-rk-48x48.png','favicon-rk-64x64.png','favicon-rk-128x128.png','favicon-rk-256x256.png'];
  const outNames = [];

  for (const name of baseNames) {
    const inPath = path.join(publicDir, name);
    if (!fs.existsSync(inPath)) {
      console.error('Input not found:', inPath);
      continue;
    }
    const sizeMatch = name.match(/(\d+)x\d+/);
    const size = sizeMatch ? parseInt(sizeMatch[1], 10) : 32;
    const radius = Math.round(size * 0.2);
    const svg = `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`;
    const buf = await sharp(inPath)
      .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
      .png({ quality: 90 })
      .toBuffer();
    const outName = name.replace('favicon-rk-', 'favicon-rk-rounded-');
    const outPath = path.join(publicDir, outName);
    fs.writeFileSync(outPath, buf);
    outNames.push(outPath);
    console.log('Wrote', outPath);
  }

  // Create ICO from subset
  const icoPngs = [
    path.join(publicDir, 'favicon-rk-rounded-16x16.png'),
    path.join(publicDir, 'favicon-rk-rounded-32x32.png'),
    path.join(publicDir, 'favicon-rk-rounded-48x48.png')
  ].filter(p => fs.existsSync(p));

  if (icoPngs.length) {
    const buffers = icoPngs.map(p => fs.readFileSync(p));
    const icoBuffer = await toIco(buffers);
    const icoPath = path.join(publicDir, 'favicon-rk-rounded.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Wrote', icoPath);
  }

  console.log('Rounded favicon generation complete');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});