import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://stackdev.tech';
const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

function extractSlugs(relativePath, pattern) {
  const fullPath = path.join(ROOT, relativePath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const slugs = [];
  let match;
  while ((match = pattern.exec(content)) !== null) {
    if (match[1] && !slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

const serviceSlugs = extractSlugs(
  'src/data/services.ts',
  /slug:\s*'(custom-web-development|flutter-mobile-apps|ui-ux-design|ecommerce-solutions|web-applications|portfolio-websites)'/g
);

const projectSlugs = extractSlugs(
  'src/data/projects.ts',
  /slug:\s*'(universal-unit-converter|automated-social-media-ad-creation)'/g
);

// Extract blog slugs and dates together from src/data/posts.ts
const postsSource = fs.readFileSync(path.join(ROOT, 'src/data/posts.ts'), 'utf8');
const postEntries = [];
const postRegex = /slug:\s*'([a-z0-9-]+)'[\s\S]*?date:\s*'(\d{4}-\d{2}-\d{2})'/g;
let postMatch;
while ((postMatch = postRegex.exec(postsSource)) !== null) {
  postEntries.push({
    path: `/blog/${postMatch[1]}`,
    lastmod: postMatch[2],
    changefreq: 'monthly',
    priority: '0.7',
  });
}

const today = '2026-11-14';

const staticEntries = [
  { path: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
  { path: '/services', lastmod: today, changefreq: 'weekly', priority: '0.9' },
  { path: '/pricing', lastmod: today, changefreq: 'weekly', priority: '0.9' },
  { path: '/work', lastmod: today, changefreq: 'monthly', priority: '0.8' },
  { path: '/about', lastmod: today, changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', lastmod: today, changefreq: 'monthly', priority: '0.9' },
  { path: '/faq', lastmod: today, changefreq: 'monthly', priority: '0.7' },
  { path: '/privacy-policy', lastmod: today, changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', lastmod: today, changefreq: 'yearly', priority: '0.3' },
  { path: '/refund-policy', lastmod: today, changefreq: 'yearly', priority: '0.3' },
];

const serviceEntries = serviceSlugs.map((slug) => ({
  path: `/services/${slug}`,
  lastmod: today,
  changefreq: 'monthly',
  priority: '0.8',
}));

const projectEntries = projectSlugs.map((slug) => ({
  path: `/work/${slug}`,
  lastmod: today,
  changefreq: 'monthly',
  priority: '0.7',
}));

const allEntries = [
  ...staticEntries,
  ...serviceEntries,
  ...projectEntries,
  ...postEntries,
];

function buildUrlNode(entry) {
  const loc = `${SITE_URL}${entry.path === '/' ? '/' : entry.path}`;
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${loc}?lang=en" />`,
    `    <xhtml:link rel="alternate" hreflang="bn" href="${loc}?lang=bn" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`,
    '  </url>',
  ].join('\n');
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...allEntries.map(buildUrlNode),
  '</urlset>',
  '',
].join('\n');

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml);
console.log(`Generated public/sitemap.xml with ${allEntries.length} URLs`);
