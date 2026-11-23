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
              <div className="relative mx-auto w-full max-w-[600px] py-2 select-none">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-80 blur-3xl"
                  style={{
                    background:
                      'radial-gradient(circle at 48% 45%, color-mix(in srgb, var(--accent) 20%, transparent), color-mix(in srgb, var(--accent-2) 10%, transparent) 52%, transparent 75%)',
                  }}
                />
                <img
                  src="/assets/aistudio/Group_4__3__c7f48720.png"
                  alt={t('home.hero.visualAriaLabel')}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="relative z-10 mx-auto h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(11,11,18,0.16)] dark:drop-shadow-[0_24px_56px_rgba(0,0,0,0.55)]"
                />
              </div>
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
