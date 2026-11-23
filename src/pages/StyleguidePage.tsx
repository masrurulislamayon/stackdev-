import { useState, type FormEvent } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
} from 'lucide-react';
import { m } from 'motion/react';
import { SkipToContent } from '@/src/components/layout/SkipToContent';
import { StyleguideHeader } from '@/src/components/layout/StyleguideHeader';
import { SectionBand } from '@/src/components/sections/SectionBand';
import { Seo } from '@/src/components/seo';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Container,
  Input,
  LanguageToggle,
  Logo,
  SectionHeading,
  Select,
  Textarea,
  ThemeToggle,
} from '@/src/components/ui';
import { BRAND } from '@/src/data/brand';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTheme } from '@/src/hooks/useTheme';
import { useTranslation } from '@/src/i18n';

const COLOR_TOKENS = [
  { name: 'Background', token: '--bg', sampleClass: 'bg-bg border border-border', role: 'Primary page canvas' },
  { name: 'Elevated Surface', token: '--bg-elevated', sampleClass: 'bg-bg-elevated border border-border', role: 'Cards, header & controls' },
  { name: 'Subtle Surface', token: '--bg-subtle', sampleClass: 'bg-bg-subtle border border-border', role: 'Secondary tinted panels' },
  { name: 'Foreground', token: '--fg', sampleClass: 'bg-fg', role: 'Primary ink & headings' },
  { name: 'Muted Ink', token: '--fg-muted', sampleClass: 'bg-fg-muted', role: 'Secondary descriptions' },
  { name: 'Faint Ink', token: '--fg-faint', sampleClass: 'bg-fg-faint', role: 'Captions & metadata' },
  { name: 'Border', token: '--border', sampleClass: 'bg-border', role: 'Hairline structural dividers' },
  { name: 'Accent (Indigo)', token: '--accent', sampleClass: 'bg-accent', role: 'Primary focus & CTAs' },
  { name: 'Accent 2 (Violet)', token: '--accent-2', sampleClass: 'bg-accent-2', role: 'Gradient mid-stop' },
  { name: 'Accent 3 (Cyan)', token: '--accent-3', sampleClass: 'bg-accent-3', role: 'Gradient highlight' },
  { name: 'Success', token: '--success', sampleClass: 'bg-success', role: 'Positive status & confirmation' },
  { name: 'Warning', token: '--warning', sampleClass: 'bg-warning', role: 'Pending & advisory states' },
  { name: 'Danger', token: '--danger', sampleClass: 'bg-danger', role: 'Errors & destructive alerts' },
];

const ACCORDION_ITEMS = [
  {
    id: 'theme',
    title: 'How does light and dark theme persistence work?',
    content:
      'The theme system checks localStorage inside a try/catch block first, falls back to the operating system prefers-color-scheme preference, and updates both .dark and data-theme before first paint.',
  },
  {
    id: 'typography',
    title: 'Why does Bangla typography use a larger line-height?',
    content:
      'Anek Bangla and Hind Siliguri include vertical vowel signs (kar) and conjunct glyphs that require extra line spacing (1.85 for body copy, zero negative tracking) so multi-line Bangla paragraphs remain comfortable to read.',
  },
  {
    id: 'accessibility',
    title: 'What accessibility primitives are built into this design system?',
    content:
      'Every interactive control uses visible --ring focus outlines, minimum 44px touch targets, semantic labels with aria-invalid/aria-describedby, a keyboard skip-to-content link, and prefers-reduced-motion support.',
  },
];

export function StyleguidePage() {
  const { theme } = useTheme();
  const { locale, t } = useTranslation();

  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<{ name?: string; service?: string; notes?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handlePreviewSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: { name?: string; service?: string; notes?: string } = {};

    if (!name.trim()) {
      nextErrors.name = 'Please enter a name to test validation.';
    }
    if (!service) {
      nextErrors.service = 'Please select a service option.';
    }
    if (notes.trim().length < 8) {
      nextErrors.notes = 'Please enter at least 8 characters.';
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div aria-hidden="true" className="noise fixed inset-0 z-50 pointer-events-none" />
      <Seo
        title={pickLocalized(STATIC_SEO.styleguide.title, locale)}
        description={pickLocalized(STATIC_SEO.styleguide.description, locale)}
        path="/styleguide"
        noindex
      />
      <SkipToContent />
      <StyleguideHeader />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Intro */}
        <SectionBand className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[380px] w-[680px] rounded-full bg-accent/12 blur-[120px]"
          />
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col gap-6 max-w-3xl"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="primary" pulseDot icon={<Layers className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                Design System Preview
              </Badge>
              <span className="font-mono text-xs text-fg-muted">
                {BRAND.name} · data-theme=&quot;{theme}&quot; · lang=&quot;{locale}&quot;
              </span>
            </div>

            <h1 className="type-display text-fg">
              Stack Dev UI Foundation &amp;{' '}
              <span className="font-serif italic font-normal gradient-text">Design</span> System
            </h1>

            <p className="type-body-lg max-w-[64ch] text-fg-muted">
              {BRAND.tagline} This style guide previews the semantic color tokens, bilingual
              typography scale, gradient stack mark, i18n dictionary, and accessible UI primitives.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <ThemeToggle showLabel />
              <LanguageToggle />
              <Button variant="primary" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                {t('common.freeConsultation')}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Button>
              <Button variant="secondary" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                {t('common.viewPackages')}
              </Button>
            </div>
          </m.div>
        </SectionBand>

        {/* Brand & Logo */}
        <SectionBand id="brand">
          <SectionHeading
            eyebrow="Brand Identity"
            title="Plus Jakarta Sans Wordmark & Gradient Stack"
            description="Always written as Stack Dev in English across both language modes, paired with a layered-stack SVG glyph."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col justify-between gap-4">
              <span className="font-mono text-xs text-fg-muted">Small (sm)</span>
              <div>
                <Logo size="sm" />
              </div>
            </Card>
            <Card className="flex flex-col justify-between gap-4">
              <span className="font-mono text-xs text-fg-muted">Medium (md)</span>
              <div>
                <Logo size="md" />
              </div>
            </Card>
            <Card className="flex flex-col justify-between gap-4">
              <span className="font-mono text-xs text-fg-muted">Large (lg)</span>
              <div>
                <Logo size="lg" />
              </div>
            </Card>
            <Card className="flex flex-col justify-between gap-4">
              <span className="font-mono text-xs text-fg-muted">Icon Mark Only</span>
              <div>
                <Logo size="lg" iconOnly />
              </div>
            </Card>
          </div>
        </SectionBand>

        {/* Color Tokens */}
        <SectionBand id="colors">
          <SectionHeading
            eyebrow="Color System"
            title="Semantic CSS Variables (Light & Dark)"
            description="Neutral canvas and elevated surfaces paired with the indigo-violet-cyan gradient accent and accessible semantic states."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COLOR_TOKENS.map((item) => (
              <Card key={item.token} padding="sm" className="flex items-center gap-4">
                <div
                  className={`h-12 w-12 shrink-0 rounded-xl ${item.sampleClass}`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">{item.name}</p>
                  <p className="font-mono text-xs text-accent-text">{item.token}</p>
                  <p className="text-xs text-fg-muted mt-0.5">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </SectionBand>

        {/* Typography */}
        <SectionBand id="typography">
          <SectionHeading
            eyebrow="Typography"
            title="Plus Jakarta Sans, Inter & Bangla Type Scale"
            description="Loaded with display=swap. Bangla switches to Anek Bangla + Hind Siliguri with taller line-height and zero negative letter-spacing."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="font-mono text-xs font-medium text-accent-text mb-5">
                English Specimen · Plus Jakarta Sans · Instrument Serif · Inter · JetBrains Mono
              </p>
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-xs text-fg-faint">Display (72px / 40px)</span>
                  <p className="type-display text-fg">
                    Modern{' '}
                    <span className="font-serif italic font-normal gradient-text">software</span>
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-fg-faint">Heading 1 (56px / 36px)</span>
                  <p className="type-h1 text-fg">Clean software engineered for speed</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-fg-faint">Heading 2 (40px / 28px)</span>
                  <p className="type-h2 text-fg">Transparent packages in BDT &amp; USD</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-fg-faint">Heading 3 (24px / 20px)</span>
                  <p className="type-h3 text-fg">Custom Web Development &amp; UI/UX</p>
                </div>
                <div>
                  <span className="font-mono text-xs text-fg-faint">Body (16px · line-height 1.65)</span>
                  <p className="type-body text-fg-muted">
                    Stack Dev builds fast, mobile-first web platforms and Flutter applications from
                    Savar, Dhaka with direct founder communication.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-fg-faint">Mono / Tabular</span>
                  <p className="font-mono text-xs text-fg-muted tabular-nums">
                    ৳18,000 BDT · ~$150 USD · Savar, Dhaka (1340)
                  </p>
                </div>
              </div>
            </Card>

            <Card className="font-bn" lang="bn">
              <p className="font-mono text-xs font-medium text-accent-text mb-5">
                বাংলা নমুনা · Anek Bangla &amp; Hind Siliguri
              </p>
              <div className="space-y-5">
                <div>
                  <span className="type-caption text-fg-faint">ডিসপ্লে শিরোনাম</span>
                  <p className="type-display text-fg">
                    <span className="gradient-text">আধুনিক</span> ওয়েব এবং ফ্লাটার অ্যাপ
                  </p>
                </div>
                <div>
                  <span className="type-caption text-fg-faint">হেডিং ১</span>
                  <p className="type-h1 text-fg">আধুনিক ও নির্ভরযোগ্য সফটওয়্যার সমাধান</p>
                </div>
                <div>
                  <span className="type-caption text-fg-faint">হেডিং ২</span>
                  <p className="type-h2 text-fg">স্বচ্ছ প্যাকেজ ও সাশ্রয়ী মূল্য</p>
                </div>
                <div>
                  <span className="type-caption text-fg-faint">হেডিং ৩</span>
                  <p className="type-h3 text-fg">কাস্টম ওয়েবসাইট এবং UI/UX ডিজাইন</p>
                </div>
                <div>
                  <span className="type-caption text-fg-faint">বডি টেক্সট (line-height: 1.85)</span>
                  <p className="type-body text-fg-muted">
                    Stack Dev সাভার, ঢাকা থেকে উচ্চ-গতির ওয়েব প্ল্যাটফর্ম এবং ফ্লাটার মোবাইল অ্যাপ
                    তৈরি করে। প্রতিটি প্রজেক্টে সরাসরি ফাউন্ডারের সাথে যোগাযোগের সুবিধা রয়েছে।
                  </p>
                </div>
                <div>
                  <span className="type-caption text-fg-faint">ক্যাপশন</span>
                  <p className="type-caption text-fg-muted">
                    নতুন ক্লায়েন্টদের জন্য ফ্রি কনসালটেশন · সাভার, ঢাকা (১৩৪০)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </SectionBand>

        {/* Buttons, Badges, Cards, SectionHeading */}
        <SectionBand id="components">
          <SectionHeading
            eyebrow="UI Primitives"
            title="Pill Buttons, Spotlight Cards & Badges"
            description="Consistent pill buttons with subtle shine sweep, hairline spotlight cards, and accessible semantic badges."
          />

          <div className="mt-10 space-y-6">
            {/* Buttons */}
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h3 className="type-h3 text-fg">Buttons</h3>
                <span className="font-mono text-xs text-fg-muted tabular-nums">
                  Interactive test clicks: {clickCount}
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" onClick={() => setClickCount((c) => c + 1)}>
                    Primary Action
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </Button>
                  <Button variant="secondary" onClick={() => setClickCount((c) => c + 1)}>
                    Secondary Action
                  </Button>
                  <Button variant="ghost" onClick={() => setClickCount((c) => c + 1)}>
                    Ghost Action
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <Button size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    Small (36px)
                  </Button>
                  <Button size="md" onClick={() => setClickCount((c) => c + 1)}>
                    Medium (44px)
                  </Button>
                  <Button size="lg" onClick={() => setClickCount((c) => c + 1)}>
                    Large (52px)
                  </Button>
                </div>
              </div>
            </Card>

            {/* Translated Navigation & Common Buttons */}
            <Card>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
                <h3 className="type-h3 text-fg">i18n Navigation &amp; Common Buttons ({locale.toUpperCase()})</h3>
                <LanguageToggle />
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-fg-muted">
                  <span>{t('nav.home')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('nav.services')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('nav.pricing')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('nav.about')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('nav.contact')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('nav.clientPortal')}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                  <Button variant="primary" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    {t('common.freeConsultation')}
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    {t('common.requestQuote')}
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    {t('common.callNow')}
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    {t('common.messageWhatsApp')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    {t('common.messageMessenger')}
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setClickCount((c) => c + 1)}>
                    {t('common.learnMore')}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Badges */}
            <Card>
              <h3 className="type-h3 text-fg mb-4">Badges</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="neutral" icon={<Info className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                  Neutral Label
                </Badge>
                <Badge variant="primary" pulseDot>
                  Free Consultation
                </Badge>
                <Badge variant="primary" icon={<Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                  Most Popular
                </Badge>
                <Badge variant="success" icon={<CheckCircle2 className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                  Completed
                </Badge>
                <Badge variant="warning" icon={<AlertTriangle className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                  In Review
                </Badge>
                <Badge variant="danger" icon={<AlertTriangle className="h-3.5 w-3.5" strokeWidth={1.5} />}>
                  Action Required
                </Badge>
              </div>
            </Card>

            {/* Cards & Gradient Border */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card interactive>
                <h3 className="type-h3 text-fg mb-2">Interactive Spotlight Card</h3>
                <p className="type-body-sm text-fg-muted">
                  Uses a 20px radius, 28px padding, hairline border highlight on hover, and a
                  cursor-tracking radial spotlight disabled under reduced-motion or coarse pointers.
                </p>
              </Card>

              <Card className="gradient-border shadow-[var(--shadow-md)]">
                <SectionHeading
                  align="center"
                  eyebrow="Gradient Border"
                  title="Highlighted Surface"
                  description="1px gradient border via CSS mask compositing paired with balanced heading alignment."
                />
              </Card>
            </div>
          </div>
        </SectionBand>

        {/* Form Controls */}
        <SectionBand id="forms">
          <SectionHeading
            eyebrow="Form Controls"
            title="Input, Select, Textarea & Hairline Accordion"
            description="48px controls with 12px radius, --ring focus states, validation errors, and grid-template-rows accordion animation."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">
            <Card className="lg:col-span-7">
              <form onSubmit={handlePreviewSubmit} noValidate className="space-y-5">
                <Input
                  label="Client Name"
                  placeholder="Enter your full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={errors.name}
                  helperText="Used to personalize your consultation inquiry."
                />

                <Select
                  label="Service Category"
                  required
                  placeholder="Choose a service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  error={errors.service}
                  options={[
                    { value: 'web', label: 'Custom Web Development' },
                    { value: 'flutter', label: 'Flutter Mobile App' },
                    { value: 'uiux', label: 'UI/UX Design' },
                    { value: 'ecommerce', label: 'E-commerce Solution' },
                  ]}
                />

                <Textarea
                  label="Project Summary"
                  placeholder="Briefly describe your goals and timeline..."
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  error={errors.notes}
                />

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button type="submit" variant="primary">
                    Test Validation
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setName('');
                      setService('');
                      setNotes('');
                      setErrors({});
                      setSubmitted(false);
                    }}
                  >
                    Reset Form
                  </Button>
                </div>

                {submitted && (
                  <div
                    role="status"
                    className="flex items-center gap-2 rounded-xl border border-success/30 bg-success-soft px-4 py-3 text-sm font-medium text-success-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span>All fields validated cleanly.</span>
                  </div>
                )}
              </form>
            </Card>

            <div className="lg:col-span-5 space-y-4">
              <h3 className="type-h3 text-fg">Accordion</h3>
              <Accordion items={ACCORDION_ITEMS} defaultOpenIds={['theme']} />
            </div>
          </div>
        </SectionBand>
      </main>

      <footer className="border-t border-border py-10">
        <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-fg-muted">
          <p>{BRAND.name} · Design System Preview (/styleguide)</p>
          <p>{BRAND.location}</p>
        </Container>
      </footer>
    </div>
  );
}
