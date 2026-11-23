import { Fragment } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  FloatingShapes,
  Magnetic,
  Marquee,
  Parallax,
  Tilt,
} from '@/src/components/motion';
import { Badge, buttonStyles, Container } from '@/src/components/ui';
import { pickLocalized, SERVICES } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

function renderStyledHeroTitle(title: string, locale: 'en' | 'bn') {
  const targetWord = locale === 'en' ? 'modern' : 'আধুনিক';
  const index = title.indexOf(targetWord);
  if (index === -1) {
    return title;
  }

  const before = title.slice(0, index);
  const after = title.slice(index + targetWord.length);

  return (
    <>
      {before}
      <span
        className={
          locale === 'en'
            ? 'font-serif italic font-normal tracking-normal gradient-text gradient-text-flow pr-[0.04em]'
            : 'gradient-text gradient-text-flow'
        }
      >
        {targetWord}
      </span>
      {after}
    </>
  );
}

function HeroStackVisual({ ariaLabel }: { ariaLabel: string }) {
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="relative mx-auto w-full max-w-[560px] py-4 sm:py-6 lg:py-2 select-none"
    >
      {/* Soft accent glow behind the visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-80 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 45% 40%, color-mix(in srgb, var(--accent) 22%, transparent), color-mix(in srgb, var(--accent-2) 12%, transparent) 50%, transparent 75%)',
        }}
      />

      <div className="relative pb-10 pr-3 sm:pb-14 sm:pr-10">
        {/* Desktop Browser Glass Card */}
        <m.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-[20px] glass shadow-[var(--shadow-lg)] overflow-hidden"
        >
          {/* Browser chrome bar with traffic-light dots */}
          <div className="flex items-center justify-between border-b border-border bg-bg-subtle/60 px-4 py-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/35" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/35" />
              <span className="h-2.5 w-2.5 rounded-full bg-fg-faint/35" />
            </div>
            <div className="h-5 w-40 sm:w-48 rounded-full border border-border bg-bg-elevated/80 px-3 flex items-center justify-center">
              <span className="h-1.5 w-20 rounded-full bg-fg-faint/30" />
            </div>
            <div className="w-8" />
          </div>

          {/* Browser abstract canvas */}
          <div className="p-5 sm:p-6 space-y-5 bg-bg-elevated/55">
            {/* Top abstract navbar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-5 w-5 rounded-[6px] [background:var(--gradient-accent)] flex items-center justify-center">
                  <span className="h-2 w-2 rounded-[2px] bg-accent-fg/90" />
                </span>
                <span className="h-2.5 w-16 rounded-full bg-fg/20" />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-10 rounded-full bg-fg-faint/25" />
                <span className="h-2 w-10 rounded-full bg-fg-faint/25" />
                <span className="h-6 w-16 rounded-full [background:var(--gradient-accent)]" />
              </div>
            </div>

            {/* Abstract hero block */}
            <div className="rounded-[16px] border border-border bg-bg/70 p-4 space-y-3">
              <div className="h-2 w-20 rounded-full bg-accent/45" />
              <div className="space-y-2">
                <div className="h-3.5 w-4/5 rounded-full bg-fg/20" />
                <div className="h-3.5 w-3/5 rounded-full bg-fg/15" />
              </div>
              <div className="h-2 w-3/4 rounded-full bg-fg-faint/25" />
              <div className="pt-1 flex items-center gap-2">
                <span className="h-7 w-24 rounded-full [background:var(--gradient-accent)]" />
                <span className="h-7 w-20 rounded-full border border-border-strong bg-bg-elevated" />
              </div>
            </div>

            {/* Layered stack grid */}
            <div className="grid grid-cols-3 gap-3 pr-10 sm:pr-14">
              <div className="rounded-[12px] border border-border bg-bg-subtle/60 p-3 space-y-2">
                <div className="h-6 w-6 rounded-[8px] bg-accent-soft border border-accent/25" />
                <div className="h-2 w-12 rounded-full bg-fg/20" />
                <div className="h-1.5 w-full rounded-full bg-fg-faint/25" />
              </div>
              <div className="rounded-[12px] border border-border bg-bg-subtle/60 p-3 space-y-2">
                <div className="h-6 w-6 rounded-[8px] bg-bg-elevated border border-border" />
                <div className="h-2 w-14 rounded-full bg-fg/20" />
                <div className="h-1.5 w-4/5 rounded-full bg-fg-faint/25" />
              </div>
              <div className="rounded-[12px] border border-border bg-bg-subtle/60 p-3 space-y-2 opacity-60">
                <div className="h-6 w-6 rounded-[8px] bg-bg-elevated border border-border" />
                <div className="h-2 w-10 rounded-full bg-fg/20" />
                <div className="h-1.5 w-3/4 rounded-full bg-fg-faint/25" />
              </div>
            </div>
          </div>
        </m.div>

        {/* Overlapping Mobile Phone Glass Mockup */}
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute bottom-0 right-0 w-[160px] sm:w-[192px] rounded-[28px] glass p-2.5 shadow-[var(--shadow-lg)]"
        >
          {/* Phone speaker bar */}
          <div className="mx-auto mb-2.5 h-1.5 w-10 rounded-full bg-border-strong" />

          {/* Phone inner screen */}
          <div className="rounded-[20px] border border-border bg-bg/85 p-3 space-y-2.5">
            {/* Mobile top bar */}
            <div className="flex items-center justify-between pb-1">
              <span className="h-2 w-12 rounded-full bg-fg/25" />
              <span className="h-4 w-4 rounded-[6px] bg-accent-soft border border-accent/30" />
            </div>

            {/* Layered stack cards */}
            <div className="relative pt-3">
              <div className="mx-2 h-8 rounded-[10px] border border-border bg-bg-subtle/80" />
              <div className="-mt-6 mx-1 h-10 rounded-[10px] border border-border bg-bg-elevated shadow-[var(--shadow-sm)]" />
              <div className="-mt-7 rounded-[12px] border border-accent/35 bg-bg-elevated p-3 shadow-[var(--shadow-sm)] space-y-2">
                <div className="flex items-center justify-between">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" fill="var(--accent)" />
                    <path
                      d="M3 12L12 16.5L21 12"
                      stroke="var(--accent-2)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="h-2 w-8 rounded-full bg-accent/35" />
                </div>
                <div className="h-2.5 w-4/5 rounded-full bg-fg/25" />
                <div className="h-2 w-3/5 rounded-full bg-fg-faint/30" />
                <div className="pt-1">
                  <div className="h-5 w-full rounded-full [background:var(--gradient-accent)]" />
                </div>
              </div>
            </div>

            {/* Bottom mobile navigation wireframe */}
            <div className="flex items-center justify-around pt-1.5 border-t border-border">
              <span className="h-1.5 w-4 rounded-full bg-accent/70" />
              <span className="h-1.5 w-4 rounded-full bg-fg-faint/30" />
              <span className="h-1.5 w-4 rounded-full bg-fg-faint/30" />
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { locale, t } = useTranslation();

  const trustItems = [
    t('home.hero.trustMobileFirst'),
    t('home.hero.trustSeoFriendly'),
    t('home.hero.trustDelivery'),
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-[72px] sm:pt-20 lg:pt-24 lg:pb-[128px]">
      {/* Top-center radial accent glow (12% opacity), drifting on a slower parallax layer */}
      <Parallax offset={-60} className="pointer-events-none absolute inset-0">
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 h-[540px] w-[960px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 12%, transparent) 0%, color-mix(in srgb, var(--accent-2) 6%, transparent) 45%, transparent 72%)',
          }}
        />
      </Parallax>

      <FloatingShapes />

      {/* Masked dot grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-grid-bg opacity-40"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Copy Column - rendered at opacity 1 immediately for instant LCP */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <Badge variant="primary" pulseDot>
                {t('home.hero.eyebrow')}
              </Badge>
            </div>

            <h1 className="type-display text-fg">
              {renderStyledHeroTitle(t('home.hero.title'), locale)}
            </h1>

            <p className="type-body-lg text-fg-muted max-w-[54ch]">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Magnetic>
                <Link
                  to="/contact"
                  className={buttonStyles({ variant: 'primary', size: 'lg' })}
                >
                  {t('home.hero.primaryCta')}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  to="/pricing"
                  className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                >
                  {t('home.hero.secondaryCta')}
                </Link>
              </Magnetic>
            </div>

            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2.5 pt-2 text-sm text-fg-muted">
              {trustItems.map((item, idx) => (
                <Fragment key={item}>
                  {idx > 0 && (
                    <li aria-hidden="true" className="hidden sm:block h-3.5 w-px bg-border" />
                  )}
                  <li className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={1.75} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>

          {/* Right Visual Column */}
          <m.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <Tilt max={5}>
              <HeroStackVisual ariaLabel={t('home.hero.visualAriaLabel')} />
            </Tilt>
          </m.div>
        </div>
      </Container>

      {/* Decorative service-name marquee (aria-hidden; repeats existing service titles) */}
      <div className="relative mt-16 lg:mt-24">
        <Marquee items={SERVICES.map((service) => pickLocalized(service.title, locale))} />
      </div>
    </section>
  );
}
