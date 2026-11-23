import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { Resvg } from '@resvg/resvg-js';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const STACK_PATH =
  'M7.98 -39.9H42.56Q43.32 -32.49 47.69 -28.595Q52.06 -24.7 59.09 -24.7Q66.31 -24.7 70.49 -28.025Q74.67 -31.35 74.67 -37.24Q74.67 -42.18 71.345 -45.41Q68.02 -48.64 63.175 -50.73Q58.33 -52.82 49.4 -55.48Q36.48 -59.47 28.31 -63.46Q20.14 -67.45 14.25 -75.24Q8.36 -83.03 8.36 -95.57Q8.36 -114.19 21.85 -124.735Q35.34 -135.28 57 -135.28Q79.04 -135.28 92.53 -124.735Q106.02 -114.19 106.97 -95.38H71.82Q71.44 -101.84 67.07 -105.545Q62.7 -109.25 55.86 -109.25Q49.97 -109.25 46.36 -106.115Q42.75 -102.98 42.75 -97.09Q42.75 -90.63 48.83 -87.02Q54.91 -83.41 67.83 -79.23Q80.75 -74.86 88.825 -70.87Q96.9 -66.88 102.79 -59.28Q108.68 -51.68 108.68 -39.71Q108.68 -28.31 102.885 -19Q97.09 -9.69 86.07 -4.18Q75.05 1.33 60.04 1.33Q45.41 1.33 33.82 -3.42Q22.23 -8.17 15.295 -17.48Q8.36 -26.79 7.98 -39.9ZM185.44 -27.55V0H168.91Q151.24 0 141.36 -8.645Q131.48 -17.29 131.48 -36.86V-79.04H118.56V-106.02H131.48V-131.86H163.97V-106.02H185.25V-79.04H163.97V-36.48Q163.97 -31.73 166.25 -29.64Q168.53 -27.55 173.85 -27.55ZM241.49 -107.54Q252.7 -107.54 261.155 -102.98Q269.61 -98.42 274.17 -91.01V-106.02H306.66V0H274.17V-15.01Q269.42 -7.6 260.965 -3.04Q252.51 1.52 241.3 1.52Q228.38 1.52 217.74 -5.225Q207.1 -11.97 200.925 -24.415Q194.75 -36.86 194.75 -53.2Q194.75 -69.54 200.925 -81.89Q207.1 -94.24 217.74 -100.89Q228.38 -107.54 241.49 -107.54ZM250.99 -79.23Q241.3 -79.23 234.555 -72.295Q227.81 -65.36 227.81 -53.2Q227.81 -41.04 234.555 -33.915Q241.3 -26.79 250.99 -26.79Q260.68 -26.79 267.425 -33.82Q274.17 -40.85 274.17 -53.01Q274.17 -65.17 267.425 -72.2Q260.68 -79.23 250.99 -79.23ZM374.68 -107.54Q394.63 -107.54 408.025 -97.09Q421.42 -86.64 425.6 -67.64H391.02Q386.65 -79.8 374.11 -79.8Q365.18 -79.8 359.86 -72.865Q354.54 -65.93 354.54 -53.01Q354.54 -40.09 359.86 -33.155Q365.18 -26.22 374.11 -26.22Q386.65 -26.22 391.02 -38.38H425.6Q421.42 -19.76 407.93 -9.12Q394.44 1.52 374.68 1.52Q359.1 1.52 347.035 -5.13Q334.97 -11.78 328.225 -24.13Q321.48 -36.48 321.48 -53.01Q321.48 -69.54 328.225 -81.89Q334.97 -94.24 347.035 -100.89Q359.1 -107.54 374.68 -107.54ZM505.4 0L473.1 -44.46V0H440.61V-140.6H473.1V-62.89L505.21 -106.02H545.3L501.22 -52.82L545.68 0Z';

const DEV_PATH =
  'M126.16 -65.93Q126.16 -45.6 117.705 -30.685Q109.25 -15.77 93.385 -7.885Q77.52 0 55.86 0H14.63V-132.43H55.86Q77.52 -132.43 93.385 -124.355Q109.25 -116.28 117.705 -101.27Q126.16 -86.26 126.16 -65.93ZM108.49 -65.93Q108.49 -90.63 94.905 -104.5Q81.32 -118.37 55.86 -118.37H31.92V-14.25H55.86Q81.51 -14.25 95 -27.835Q108.49 -41.42 108.49 -65.93ZM241.49 -45.6H158.27Q159.22 -30.21 168.815 -21.565Q178.41 -12.92 192.09 -12.92Q203.3 -12.92 210.805 -18.145Q218.31 -23.37 221.35 -32.11H239.97Q235.79 -17.1 223.25 -7.695Q210.71 1.71 192.09 1.71Q177.27 1.71 165.585 -4.94Q153.9 -11.59 147.25 -23.845Q140.6 -36.1 140.6 -52.25Q140.6 -68.4 147.06 -80.56Q153.52 -92.72 165.205 -99.275Q176.89 -105.83 192.09 -105.83Q206.91 -105.83 218.31 -99.37Q229.71 -92.91 235.885 -81.605Q242.06 -70.3 242.06 -56.05Q242.06 -51.11 241.49 -45.6ZM191.33 -91.2Q178.22 -91.2 169.005 -82.84Q159.79 -74.48 158.46 -59.66H224.2Q224.2 -69.54 219.83 -76.665Q215.46 -83.79 207.955 -87.495Q200.45 -91.2 191.33 -91.2ZM301.72 -15.96L334.02 -104.12H352.45L311.6 0H291.46L250.61 -104.12H269.23Z';

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="atile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14265E"/><stop offset="1" stop-color="#0A1128"/></linearGradient>
    <linearGradient id="arim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00E5FF"/><stop offset="1" stop-color="#1E90FF"/></linearGradient>
    <linearGradient id="atop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00E5FF"/><stop offset="1" stop-color="#1E90FF"/></linearGradient>
    <linearGradient id="amid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1E90FF"/><stop offset="1" stop-color="#3F7BFF"/></linearGradient>
    <linearGradient id="abot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3F7BFF"/><stop offset="1" stop-color="#7C5CFF"/></linearGradient>
  </defs>
  <rect x="8" y="8" width="496" height="496" rx="112" fill="url(#atile)" stroke="url(#arim)" stroke-width="8"/>
  <g transform="translate(256 256) scale(1.24) translate(-256 -256)">
    <path d="M136 232L256 288L376 232V256L256 312L136 256Z" fill="url(#amid)"/>
    <path d="M136 274L256 330L376 274V298L256 354L136 298Z" fill="url(#abot)"/>
    <path d="M256 158L376 214L256 270L136 214Z" fill="url(#atop)"/>
    <g fill="none" stroke="#0A1128" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M236 199L220 214L236 229"/>
      <path d="M276 199L292 214L276 229"/>
      <path d="M262 197L250 231"/>
    </g>
  </g>
</svg>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#00E5FF" stop-opacity="0.18"/>
      <stop offset="55%" stop-color="#1E90FF" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#070B19" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00E5FF"/>
      <stop offset="55%" stop-color="#1E90FF"/>
      <stop offset="100%" stop-color="#7C5CFF"/>
    </linearGradient>
    <linearGradient id="atile" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14265E"/><stop offset="1" stop-color="#0A1128"/></linearGradient>
    <linearGradient id="arim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00E5FF"/><stop offset="1" stop-color="#1E90FF"/></linearGradient>
    <linearGradient id="atop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00E5FF"/><stop offset="1" stop-color="#1E90FF"/></linearGradient>
    <linearGradient id="amid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1E90FF"/><stop offset="1" stop-color="#3F7BFF"/></linearGradient>
    <linearGradient id="abot" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3F7BFF"/><stop offset="1" stop-color="#7C5CFF"/></linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#070B19"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Subtle dark surface frame -->
  <rect x="36" y="36" width="1128" height="558" rx="24" fill="#0B1228" stroke="#1E2D58" stroke-width="1.5"/>
  <rect x="36" y="36" width="1128" height="4" rx="2" fill="url(#accentGrad)"/>

  <!-- Brand Mark -->
  <g transform="translate(96, 102) scale(0.14)">
    <rect x="8" y="8" width="496" height="496" rx="112" fill="url(#atile)" stroke="url(#arim)" stroke-width="12"/>
    <g transform="translate(256 256) scale(1.24) translate(-256 -256)">
      <path d="M136 232L256 288L376 232V256L256 312L136 256Z" fill="url(#amid)"/>
      <path d="M136 274L256 330L376 274V298L256 354L136 298Z" fill="url(#abot)"/>
      <path d="M256 158L376 214L256 270L136 214Z" fill="url(#atop)"/>
      <g fill="none" stroke="#0A1128" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M236 199L220 214L236 229"/>
        <path d="M276 199L292 214L276 229"/>
        <path d="M262 197L250 231"/>
      </g>
    </g>
    <g transform="translate(610, 326)">
      <path d="${STACK_PATH}" fill="#FFFFFF"/>
      <path transform="translate(595.6, 0)" d="${DEV_PATH}" fill="#00E5FF"/>
    </g>
  </g>

  <!-- Eyebrow label -->
  <g transform="translate(96, 214)">
    <text x="0" y="0" fill="#38BDF8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="18" font-weight="700" letter-spacing="2">FREE CONSULTATION FOR NEW CLIENTS</text>
  </g>

  <!-- Main Headline -->
  <text x="96" y="282" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.2">Fast, modern websites and</text>
  <text x="96" y="346" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.2">Flutter apps for your business.</text>

  <!-- Subtitle -->
  <text x="96" y="410" fill="#9FB0D6" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="24" font-weight="400">Custom Web Development · Flutter Mobile Apps · UI/UX Design · Clear BDT Pricing</text>

  <!-- Right-side glass stack motif -->
  <g transform="translate(924, 114)">
    <rect x="0" y="0" width="180" height="122" rx="16" fill="#0F1938" stroke="#1E2D58" stroke-width="1.5"/>
    <circle cx="22" cy="20" r="4" fill="#5B6B8F"/>
    <circle cx="36" cy="20" r="4" fill="#5B6B8F"/>
    <circle cx="50" cy="20" r="4" fill="#5B6B8F"/>
    <rect x="20" y="42" width="96" height="10" rx="5" fill="url(#accentGrad)"/>
    <rect x="20" y="62" width="140" height="8" rx="4" fill="#1B2A52"/>
    <rect x="20" y="78" width="112" height="8" rx="4" fill="#152246"/>
    <rect x="20" y="96" width="68" height="10" rx="5" fill="#1E90FF" fill-opacity="0.32"/>
  </g>

  <!-- Footer bar -->
  <line x1="96" y1="484" x2="1104" y2="484" stroke="#1E2D58" stroke-width="1.5"/>
  <text x="96" y="534" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="22" font-weight="700">stackdev.tech</text>
  <text x="292" y="534" fill="#9FB0D6" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="22">·  Savar, Dhaka, Bangladesh (1340)  ·  +880 1963-131282</text>
</svg>`;

function renderSvgToPng(svg, width, outPath) {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: width,
    },
    font: {
      loadSystemFonts: true,
    },
  });
  const pngBuffer = resvg.render().asPng();
  fs.writeFileSync(outPath, pngBuffer);
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.svg'), faviconSvg);
renderSvgToPng(ogSvg, 1200, path.join(PUBLIC_DIR, 'og-image.png'));
renderSvgToPng(faviconSvg, 16, path.join(PUBLIC_DIR, 'favicon-16x16.png'));
renderSvgToPng(faviconSvg, 32, path.join(PUBLIC_DIR, 'favicon-32x32.png'));
renderSvgToPng(faviconSvg, 48, path.join(PUBLIC_DIR, 'favicon-48x48.png'));
renderSvgToPng(faviconSvg, 180, path.join(PUBLIC_DIR, 'apple-touch-icon.png'));
renderSvgToPng(faviconSvg, 192, path.join(PUBLIC_DIR, 'favicon-192x192.png'));
renderSvgToPng(faviconSvg, 512, path.join(PUBLIC_DIR, 'favicon-512x512.png'));

execFileSync('convert', [
  path.join(PUBLIC_DIR, 'favicon-16x16.png'),
  path.join(PUBLIC_DIR, 'favicon-32x32.png'),
  path.join(PUBLIC_DIR, 'favicon-48x48.png'),
  path.join(PUBLIC_DIR, 'favicon.ico'),
]);

fs.unlinkSync(path.join(PUBLIC_DIR, 'favicon-48x48.png'));

console.log('Generated OG image (1200x630 PNG) and favicon set in public/');
