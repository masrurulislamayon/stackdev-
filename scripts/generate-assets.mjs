import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { Resvg } from '@resvg/resvg-js';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');
fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="sdGrad" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#7C7CFF"/>
      <stop offset="55%" stop-color="#A78BFA"/>
      <stop offset="100%" stop-color="#67E8F9"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="#07070C"/>
  <path d="M32 13L13 22.5L32 32L51 22.5L32 13Z" fill="url(#sdGrad)"/>
  <path d="M13 32L32 41.5L51 32" stroke="url(#sdGrad)" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 41.5L32 51L51 41.5" stroke="#F4F4F8" stroke-opacity="0.4" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <defs>
    <radialGradient id="glow" cx="50%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#7C7CFF" stop-opacity="0.22"/>
      <stop offset="55%" stop-color="#A78BFA" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#07070C" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7C7CFF"/>
      <stop offset="55%" stop-color="#A78BFA"/>
      <stop offset="100%" stop-color="#67E8F9"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="#07070C"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Subtle dark surface frame -->
  <rect x="36" y="36" width="1128" height="558" rx="24" fill="#0E0E16" stroke="#232333" stroke-width="1.5"/>
  <rect x="36" y="36" width="1128" height="4" rx="2" fill="url(#accentGrad)"/>

  <!-- Brand Mark -->
  <g transform="translate(96, 108)">
    <rect width="56" height="56" rx="14" fill="#12121C" stroke="#28283B" stroke-width="1.5"/>
    <path d="M28 11.5L11.5 19.75L28 28L44.5 19.75L28 11.5Z" fill="url(#accentGrad)"/>
    <path d="M11.5 28L28 36.25L44.5 28" stroke="url(#accentGrad)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.5 36.25L28 44.5L44.5 36.25" stroke="#F4F4F8" stroke-opacity="0.4" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="76" y="39" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="34" font-weight="800" letter-spacing="-0.8">Stack Dev</text>
  </g>

  <!-- Eyebrow label -->
  <g transform="translate(96, 206)">
    <text x="0" y="0" fill="#9494FF" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="18" font-weight="700" letter-spacing="2">FREE CONSULTATION FOR NEW CLIENTS</text>
  </g>

  <!-- Main Headline -->
  <text x="96" y="276" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.2">Fast, modern websites and</text>
  <text x="96" y="340" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="52" font-weight="800" letter-spacing="-1.2">Flutter apps for your business.</text>

  <!-- Subtitle -->
  <text x="96" y="406" fill="#A1A1B5" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="24" font-weight="400">Custom Web Development · Flutter Mobile Apps · UI/UX Design · Clear BDT Pricing</text>

  <!-- Right-side glass stack motif -->
  <g transform="translate(924, 114)">
    <rect x="0" y="0" width="180" height="122" rx="16" fill="#12121C" stroke="#28283B" stroke-width="1.5"/>
    <circle cx="22" cy="20" r="4" fill="#6E6E83"/>
    <circle cx="36" cy="20" r="4" fill="#6E6E83"/>
    <circle cx="50" cy="20" r="4" fill="#6E6E83"/>
    <rect x="20" y="42" width="96" height="10" rx="5" fill="url(#accentGrad)"/>
    <rect x="20" y="62" width="140" height="8" rx="4" fill="#232333"/>
    <rect x="20" y="78" width="112" height="8" rx="4" fill="#1C1C29"/>
    <rect x="20" y="96" width="68" height="10" rx="5" fill="#7C7CFF" fill-opacity="0.25"/>
  </g>

  <!-- Footer bar -->
  <line x1="96" y1="484" x2="1104" y2="484" stroke="#232333" stroke-width="1.5"/>
  <text x="96" y="534" fill="#F4F4F8" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="22" font-weight="700">stackdev.tech</text>
  <text x="292" y="534" fill="#A1A1B5" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="22">·  Savar, Dhaka, Bangladesh (1340)  ·  +880 1963-131282</text>
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
