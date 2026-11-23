# Stack Dev: Premium Design Specification (design.md)

## 0. Instruction to the AI (read first)

Apply this design specification to the ENTIRE existing app (public website and client portal).

**Change ONLY the visual design.** Do NOT change any of the following:
- Text content, copy, translations (English and Bangla), prices, phone number, address, links
- Routes, page structure, section order, data files, forms logic, i18n logic, analytics, SEO, portal logic, database code
- Environment variables and integrations

If a visual change needs a small markup change (extra wrapper, class names), that is allowed, but behavior must stay identical. After finishing, run the build and lint and confirm nothing is broken. Then list which files changed.

**Design goal:** a premium, calm, confident look, like a high-end developer-tools brand (think refined, minimal, lots of space, precise typography, subtle depth). Not flashy, not templated, not cluttered.

---

## 1. Brand Personality

- Premium, precise, modern, trustworthy, fast.
- Solo-founder craft: polished details rather than corporate stock imagery.
- Keywords: refined, spacious, sharp, soft-glow, editorial.

---

## 2. Typography

Load from Google Fonts with `display=swap` and limit weights to those used. Preload the primary heading and body fonts.

| Role | English / Latin | Bangla |
|---|---|---|
| Display / H1-H2 | **Plus Jakarta Sans** 700, 800 | **Anek Bangla** 600, 700 |
| Body / UI | **Inter** 400, 500, 600 | **Hind Siliguri** 400, 500, 600 |
| Accent (one word in hero only) | **Instrument Serif** italic 400 | Use the same Bangla display font, with accent color instead of italic |
| Mono (code, tags, prices detail) | **JetBrains Mono** 400, 500 | n/a |

When the language is Bangla, switch the font stacks automatically (set on `html[lang="bn"]`). Bangla needs larger line-height and slightly larger size.

**Type scale (desktop / mobile):**

| Token | Desktop | Mobile | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| display (hero H1) | 72px | 40px | 800 | 1.02 | -0.035em |
| h1 | 56px | 36px | 800 | 1.05 | -0.03em |
| h2 | 40px | 28px | 700 | 1.12 | -0.025em |
| h3 | 24px | 20px | 700 | 1.25 | -0.015em |
| h4 | 18px | 17px | 600 | 1.35 | -0.01em |
| body-lg | 19px | 17px | 400 | 1.65 | 0 |
| body | 16px | 16px | 400 | 1.65 | 0 |
| small | 14px | 14px | 500 | 1.5 | 0 |
| eyebrow | 12px | 12px | 600 | 1.2 | 0.14em uppercase |

Bangla overrides: body line-height 1.85, headings line-height +0.1, letter-spacing 0 (no negative tracking for Bangla).

Rules:
- Max reading width 64ch for paragraphs.
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.
- Enable `font-feature-settings: "ss01", "cv11"` for Inter where available, `font-variant-numeric: tabular-nums` for prices and tables.
- Hero H1: one key word set in Instrument Serif italic with the accent gradient text (English only).

---

## 3. Color System (CSS variables)

Dark and light themes both required. Default follows system preference. Dark theme is the hero experience.

```css
:root {
  /* Light */
  --bg: #FAFAF9;
  --bg-elevated: #FFFFFF;
  --bg-subtle: #F4F4F2;
  --fg: #0B0B12;
  --fg-muted: #5B5B6B;
  --fg-faint: #8A8A99;
  --border: rgba(11, 11, 18, 0.08);
  --border-strong: rgba(11, 11, 18, 0.16);

  --accent: #5B5BF0;          /* indigo */
  --accent-2: #8B5CF6;        /* violet */
  --accent-3: #22D3EE;        /* cyan, used sparingly */
  --accent-fg: #FFFFFF;
  --accent-soft: rgba(91, 91, 240, 0.10);
  --gradient-accent: linear-gradient(135deg, #5B5BF0 0%, #8B5CF6 55%, #22D3EE 120%);

  --success: #12A150;
  --warning: #D97706;
  --danger: #DC2626;

  --shadow-sm: 0 1px 2px rgba(11,11,18,.06);
  --shadow-md: 0 8px 24px -8px rgba(11,11,18,.12), 0 2px 6px rgba(11,11,18,.05);
  --shadow-lg: 0 24px 60px -20px rgba(60,60,200,.25), 0 8px 20px rgba(11,11,18,.06);
  --ring: 0 0 0 3px rgba(91,91,240,.35);
}

:root[data-theme="dark"], .dark {
  --bg: #07070C;
  --bg-elevated: #0E0E16;
  --bg-subtle: #12121C;
  --fg: #F4F4F8;
  --fg-muted: #A1A1B5;
  --fg-faint: #6E6E83;
  --border: rgba(255, 255, 255, 0.07);
  --border-strong: rgba(255, 255, 255, 0.14);

  --accent: #7C7CFF;
  --accent-2: #A78BFA;
  --accent-3: #67E8F9;
  --accent-fg: #0B0B12;
  --accent-soft: rgba(124, 124, 255, 0.14);
  --gradient-accent: linear-gradient(135deg, #7C7CFF 0%, #A78BFA 55%, #67E8F9 120%);

  --shadow-sm: 0 1px 2px rgba(0,0,0,.5);
  --shadow-md: 0 10px 30px -10px rgba(0,0,0,.6);
  --shadow-lg: 0 30px 80px -20px rgba(124,124,255,.30), 0 10px 30px rgba(0,0,0,.5);
  --ring: 0 0 0 3px rgba(124,124,255,.45);
}
```

Rules:
- Use the accent gradient only for: primary buttons, key words in headings, small highlights, progress bars. Never as large flat backgrounds.
- Backgrounds stay neutral. Contrast must meet WCAG AA in both themes.
- Add an extremely subtle noise/grain overlay (opacity 0.03, SVG data URI, pointer-events none) on the page background for a premium texture.

---

## 4. Layout, Spacing, Radius

- Container: max-width 1200px, side padding 24px (desktop), 16px (mobile).
- Section vertical padding: 128px desktop, 72px mobile. Generous white space is the main premium signal.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Grid: 12 columns, 24px gap. Prefer asymmetric layouts and bento grids over uniform repeated cards.
- Radius: sm 8px, md 12px, lg 16px, xl 24px, pill 999px. Cards use 20px, buttons use pill or 12px (pick one and stay consistent: **buttons are pill**).
- Hairline borders (1px, `--border`) on all cards. Use inner top highlight on dark cards: `box-shadow: inset 0 1px 0 rgba(255,255,255,.06)`.

---

## 5. Background and Atmosphere

- Page background: `--bg` with a faint radial glow in the hero (accent at 12% opacity, large blur, top center).
- A very subtle grid or dot pattern behind the hero, masked with a radial fade (`mask-image`), opacity 0.4.
- Section dividers: hairline borders or soft gradient lines, never heavy bars.
- Avoid heavy images. All visuals are CSS or SVG so performance stays high.

---

## 6. Components

**Buttons**
- Primary: gradient accent background, `--accent-fg` text, pill, height 48px, padding 0 24px, font-weight 600. Hover: lift 1px, brighten, glow shadow `--shadow-lg`. Active: scale .98. Include a subtle shine sweep on hover.
- Secondary: transparent, 1px `--border-strong`, text `--fg`. Hover: `--bg-subtle`.
- Ghost: text only with underline-on-hover.
- Focus: visible `--ring`. Disabled: 50% opacity.
- Sizes: sm 36px, md 44px, lg 52px.

**Cards**
- Background `--bg-elevated`, 1px `--border`, radius 20px, padding 28px, `--shadow-sm`.
- Hover: border becomes `--border-strong`, translateY(-2px), shadow `--shadow-md`, and a soft gradient border glow.
- Optional "spotlight" effect that follows the cursor on desktop (CSS radial-gradient via CSS variables), disabled for reduced motion and touch.

**Badges / Eyebrow chips**
- Pill, 1px border, `--accent-soft` background, accent text, 12px uppercase tracking. A tiny pulsing dot for "Free consultation".

**Inputs and forms**
- Height 48px, radius 12px, 1px `--border-strong`, background `--bg-elevated`, label above (14px, 500). Focus: accent border + `--ring`. Error: danger border with message below. Smooth 150ms transitions.

**Header**
- Sticky, floating pill-style bar (max-width 1100px, centered, 12px from top) with backdrop blur (16px), translucent `--bg-elevated` at 70%, hairline border, soft shadow. Compresses slightly on scroll. Logo left, nav center, actions right. Active nav link has a small gradient underline dot.
- Mobile: full-screen drawer with large type, staggered link reveal.

**Footer**
- Large, calm. Top: oversized wordmark "Stack Dev" in very low-contrast text (fg at 6% opacity) spanning width as decorative element. Columns with muted links. Hairline border on top.

**Accordion (FAQ)**
- Hairline separators, large question text (h4), plus/minus icon that rotates, smooth height animation (grid-template-rows trick), no heavy boxes.

**Tables (pricing comparison)**
- Sticky first column on mobile, hairline row borders, check icons in accent, Premium column softly highlighted with `--accent-soft`.

**Floating WhatsApp/Call buttons**
- Compact circular buttons, glass effect, subtle shadow, hover tooltip. Must not cover footer content.

**Cookie banner**
- Small floating card bottom-left, glass effect, two buttons (Accept primary, Decline ghost).

---

## 7. Section-by-Section Direction (public site)

**Hero**
- Large display H1, centered or left-aligned with a right visual. Key word in Instrument Serif italic with gradient.
- Eyebrow chip above, two buttons below, trust row with small icons separated by dividers.
- Visual: a layered "stack" of glass cards (browser window + phone) built in CSS/SVG, floating with slow parallax (translateY 6px loop, disabled for reduced motion), soft accent glow behind.
- Background: radial glow + masked dot grid.

**Services**
- Bento grid: 6 services in an asymmetric layout (two large tiles, four small tiles) instead of six equal cards. Each tile: icon in a rounded gradient-outlined square, title, short description, arrow link that slides on hover.

**Why Stack Dev**
- Two-column: sticky large heading on the left, features list on the right with numbered items and hairline separators.

**How it works (process)**
- Horizontal timeline on desktop with a gradient connecting line that fills on scroll; vertical on mobile. Numbered circles with accent ring.

**Pricing**
- Three cards. Premium card is visually elevated: gradient border (1px), slight scale 1.02, "Most Popular" badge, glow. Prices in large tabular numerals with the BDT symbol smaller, USD approximate in muted mono. Check-list items with accent check icons. Equal height cards, button pinned to bottom.
- Custom quote card: wide, subtle dashed border, secondary button.

**Work / Portfolio**
- Large cards with CSS-built preview thumbnails inside a browser-frame mockup (traffic-light dots), tech tags as mono chips, hover reveals "View details" arrow. Two projects in a 2-column layout with generous height.

**Client Portal highlight**
- Split section with a polished dashboard mockup (glass panels, progress bars with gradient fill, status badges) on a soft gradient panel. Generic labels only (no fake numbers).

**FAQ**
- Narrow centered column (max 760px), accordion as described.

**Contact / Final CTA**
- Final CTA: large rounded panel with gradient border and mesh-gradient background (very soft), big heading, primary button.
- Contact page: form card on the left with generous spacing, info card on the right (icons for phone, location, Facebook), map in a rounded container with hairline border.

**Blog**
- Index: featured post as large horizontal card, others in a clean 3-column grid. Post page: 720px reading column, large title, comfortable typography, styled blockquotes and callouts with accent left border, sticky table of contents on desktop.

**About**
- Editorial layout: large portrait-less intro with oversized type, skills as grouped mono chips, links as subtle buttons.

**Legal pages**
- Quiet, readable, sticky table of contents, hairline separators.

**404**
- Oversized "404" in gradient text, short message, primary button.

---

## 8. Client Portal Design

- Layout: slim sidebar (icons + labels, collapses to icons), top bar with search-style breadcrumb and user menu. Content on `--bg`, panels on `--bg-elevated`.
- Dashboard summary cards: small, dense, with a tiny icon, label (muted), and a large tabular number. Subtle gradient top border on hover.
- Project cards: status badge (colored dot + label), gradient progress bar, due date in mono.
- Tables and lists: hairline rows, comfortable 56px row height, hover highlight, sticky headers.
- Milestone stepper: vertical line with accent nodes (done = filled gradient, current = pulsing ring, upcoming = hollow).
- Messages: chat bubbles (client = accent-soft, admin = elevated), timestamps muted, composer pinned at bottom with glass background.
- Files: file-type icon tiles, drag-and-drop zone with dashed accent border that glows when active.
- Invoices: status badges (draft grey, sent blue, paid green, overdue red) with soft tinted backgrounds.
- Login page: centered glass card on the gradient atmosphere background with logo, calm and minimal.
- Admin area uses the same system with denser spacing.
- Keep a small, visible "Demo mode" banner style (subtle amber chip) if demo mode is active.

---

## 9. Motion

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Durations: micro 150ms, standard 250ms, section reveal 600ms.
- Section reveal: fade-up 16px with stagger of 60ms on children, triggered once at 15% in view.
- Hover transitions on cards and buttons only via transform/opacity/shadow (no layout shift).
- Page transitions: quick fade (150ms).
- Respect `prefers-reduced-motion`: disable parallax, spotlight, shine, and float loops; keep simple opacity fades only.

---

## 10. Icons and Imagery

- Icons: lucide-react, stroke 1.5px, size 20px (24px in feature tiles), color `--fg-muted` by default and accent on hover.
- No stock photos. Use CSS/SVG shapes, gradients, glass panels, and code-like mockups.
- Favicon and OG image: dark background, "Stack Dev" wordmark, accent gradient layered-stack icon.
- Logo: wordmark in Plus Jakarta Sans 800 with a small layered-stack glyph; icon uses the accent gradient.

---

## 11. Responsive Rules

- Breakpoints: 360, 640, 768, 1024, 1280, 1536.
- Mobile first. Minimum tap target 44x44px. No horizontal scroll at 360px.
- Bento grid collapses to single column on mobile with the large tiles first.
- Hero H1 scales per the type scale; visual moves below the text on mobile and is simplified (no parallax).
- Header becomes compact with hamburger; sticky pill bar keeps 12px margins.
- Pricing cards stack, Premium first on mobile.
- Tables become horizontally scrollable with sticky first column.

---

## 12. Accessibility and Performance

- Color contrast AA in both themes for text and UI elements. Do not rely on color alone for status.
- Visible focus rings (`--ring`) on all interactive elements. Skip-to-content link styled.
- Fonts: subset Latin and Bengali, only needed weights, `font-display: swap`, preload the two most important files.
- Do not add heavy libraries or large images. Keep animations GPU-friendly (transform, opacity).
- Target Lighthouse mobile 90+, LCP under 2.5s, CLS under 0.1. Reserve space for all media to prevent layout shift.
- Theme toggle must persist and avoid a flash of wrong theme (set theme before paint).

---

## 13. Tailwind and Implementation Notes

- Put all tokens in CSS variables (section 3) and map them in the Tailwind theme (colors: bg, fg, muted, border, accent, etc.; borderRadius; boxShadow; fontFamily: display, sans, mono, bn-display, bn).
- Create shared utility classes: `.glass` (translucent bg + blur + hairline border), `.gradient-text`, `.gradient-border` (using mask or background-clip), `.noise`, `.spotlight`.
- Refactor repeated styles into the existing UI components (Button, Card, Badge, Input, Accordion, SectionHeading) so the whole site updates consistently.
- Update the `/styleguide` page to showcase the new tokens and components.

---

## 14. Do and Don't

**Do**
- Use generous spacing, large confident typography, hairline borders, soft glows.
- Keep one accent family (indigo, violet, with cyan only as a tiny highlight).
- Keep alignment and rhythm consistent across all sections and the portal.

**Don't**
- Don't use more than one gradient direction/palette, neon colors, heavy drop shadows, or thick borders.
- Don't use stock photos, emojis as icons, or cluttered layouts.
- Don't change any text, prices, links, routes, or logic.
- Don't add animation that harms performance or readability.

---

## 15. Acceptance Checklist

- [ ] Fonts changed per section 2, including Bangla fonts when language is Bangla
- [ ] Light and dark themes both look premium and pass contrast checks
- [ ] Every public page and every portal page uses the new design system consistently
- [ ] Hero, services bento, pricing (Premium highlighted), work, portal highlight, FAQ, footer match section 7
- [ ] Portal matches section 8
- [ ] Reduced motion respected, no layout shift, no horizontal scroll at 360px
- [ ] Build and lint pass, all content and behavior unchanged
- [ ] Final summary lists changed files and any design decisions made
