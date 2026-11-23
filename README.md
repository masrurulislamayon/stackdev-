# Stack Dev

Official web platform for **Stack Dev** — a software engineering studio in Savar, Dhaka, Bangladesh building fast websites, Flutter mobile apps, and clean UI/UX systems.

## Features

- **Bilingual Support (English & Bengali)**: Full `en` / `bn` localization (`?lang=en|bn`, `localStorage`, and browser-language detection) with dedicated Latin (`Plus Jakarta Sans` / `Inter`) and Bengali (`Anek Bangla` / `Hind Siliguri`) typography stacks.
- **Light & Dark Themes**: Persistent theme switching (`localStorage` + `prefers-color-scheme` fallback) initialized pre-paint in `index.html` to prevent flash of unstyled content.
- **Motion & Micro-interactions**: Powered by `motion/react` (`LazyMotion` + `MotionConfig` with `reducedMotion="user"`), featuring scroll progress, aurora backdrop, magnetic buttons, 3D card tilt, marquee, and deferred section loading.
- **SEO & Structured Data**: Per-route `<title>`, meta tags, Open Graph / Twitter cards via `react-helmet-async`, Schema.org JSON-LD (`Organization`, `ProfessionalService`, `WebSite`, `BreadcrumbList`, `FAQPage`), and automatic `public/sitemap.xml` generation on build.
- **Lead Capture & Consent-Gated Analytics**: Formspree / custom lead endpoint support (`VITE_FORMSPREE_ID`, `VITE_LEAD_ENDPOINT`) and GDPR-style cookie consent banner controlling Google Tag Manager / GA4 and Meta Pixel consent states.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom CSS design tokens (`src/index.css`)
- **Routing**: React Router v7 (lazy-loaded route chunks + route-level error boundaries)
- **Animation**: Motion (`motion/react`)
- **Icons**: Lucide React
- **SEO**: `react-helmet-async` + automated sitemap script

## Getting Started

### Prerequisites

- **Node.js** (v20+ or v22 recommended)
- **npm**

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a local environment file from the example template and fill in any optional keys:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server on `http://localhost:3000`:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable | Description |
| --- | --- |
| `VITE_FORMSPREE_ID` | Formspree form ID for contact/consultation lead submissions |
| `VITE_LEAD_ENDPOINT` | Optional custom webhook/API endpoint for lead submissions |
| `VITE_GA_ID` | Optional Google Analytics measurement ID |
| `VITE_META_PIXEL_ID` | Optional Meta Pixel ID |
| `GEMINI_API_KEY` | Optional Gemini API key for server-side integrations |

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `npm run dev` | Starts Vite dev server on `0.0.0.0:3000` |
| `build` | `npm run build` | Regenerates `public/sitemap.xml` (`prebuild`) and compiles production bundle to `dist/` |
| `preview` | `npm run preview` | Previews the production build locally |
| `lint` | `npm run lint` | Runs TypeScript type-checking (`tsc --noEmit`) |
| `generate:sitemap` | `npm run generate:sitemap` | Generates `public/sitemap.xml` from static routes, services, projects, and blog posts |
| `clean` | `npm run clean` | Removes `dist/` build output |

## Project Structure

```text
├── public/                 # Static assets, favicons, manifest, robots.txt, sitemap.xml
├── scripts/
│   ├── generate-assets.mjs # Generates SVG/PNG favicons and OG image
│   └── generate-sitemap.mjs# Builds public/sitemap.xml from route and data slugs
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Layout, ErrorBoundary, CookieConsentBanner
│   │   ├── motion/         # Aurora, Magnetic, Marquee, Parallax, Reveal, Tilt, etc.
│   │   ├── sections/       # HeroSection, ServicesSection, PricingSection, WorkSection, FAQ, etc.
│   │   ├── seo/            # Seo component & JSON-LD Schema builders
│   │   └── ui/             # Reusable primitives (Button, Card, Badge, Accordion, Inputs, Toggles)
│   ├── data/               # Brand config, services, pricing, projects, blog posts, FAQ, legal copy
│   ├── hooks/              # Theme context & hook
│   ├── i18n/               # English (en.ts) and Bengali (bn.ts) translation dictionaries & provider
│   ├── lib/                # Utilities (cn, analytics, lead submission)
│   ├── pages/              # Route pages (Home, Services, Pricing, Work, Blog, Contact, Legal, etc.)
│   ├── App.tsx             # Router, providers, and global JSON-LD schemas
│   ├── index.css           # Design tokens, typography classes, and Tailwind v4 theme setup
│   └── main.tsx            # Application entry point
├── index.html              # HTML shell, font preloads, theme/locale init, consent defaults
└── vite.config.ts          # Vite configuration and manual chunk splitting
```

## Routes

- `/` — Home
- `/services` & `/services/:slug` — Services catalog & service details
- `/pricing` — Packages & pricing comparison
- `/work` & `/work/:slug` — Portfolio & case studies
- `/about` — About Stack Dev
- `/blog` & `/blog/:slug` — Articles & engineering notes
- `/contact` — Free consultation & contact form
- `/faq` — Frequently asked questions
- `/privacy-policy`, `/terms`, `/refund-policy` — Legal documentation
- `/styleguide` — Design system & UI component reference

## Contact

- **Brand**: Stack Dev
- **Location**: Savar, Dhaka, Bangladesh (1340)
- **Phone / WhatsApp**: `+880 1963-131282`
