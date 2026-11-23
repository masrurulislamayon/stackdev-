import {
  ArrowRight,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  MapPin,
  Server,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import {
  FOUNDER_PROFILE,
  PROFILE_LINKS,
  SKILL_GROUPS,
  WORK_PRINCIPLES,
} from '@/src/data/about';
import { BRAND } from '@/src/data/brand';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { PageGlow } from '@/src/components/motion';

const SKILL_ICONS = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
} as const;

export function AboutPage() {
  const { locale, t } = useTranslation();
  const meta = STATIC_SEO.about;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
  ]);

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/about"
        jsonLd={breadcrumbSchema}
      />
      {/* Editorial Hero */}
      <section className="border-b border-border pt-16 pb-16 sm:pt-24 sm:pb-24 relative overflow-hidden">
        <PageGlow />
        <Container>
          <div className="max-w-4xl space-y-6">
            <SectionHeading
              as="h1"
              eyebrow={t('aboutPage.eyebrow')}
              title={t('aboutPage.title')}
              description={t('aboutPage.subtitle')}
              className="max-w-3xl"
              actions={
                <>
                  <Link
                    to="/contact"
                    className={buttonStyles({ variant: 'primary', size: 'lg' })}
                  >
                    {t('aboutPage.ctaPrimary')}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                  <Link
                    to="/services"
                    className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                  >
                    {t('aboutPage.ctaSecondary')}
                  </Link>
                </>
              }
            />
          </div>
        </Container>
      </section>

      {/* Founder Bio & Profile Links */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="view-reveal">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <Card padding="lg" className="lg:col-span-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div
                  aria-hidden="true"
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[16px] gradient-border bg-accent-soft text-lg font-extrabold text-accent-text font-brand"
                >
                  {FOUNDER_PROFILE.initials}
                </div>
                <div className="space-y-1">
                  <p className="type-eyebrow text-accent-text">
                    {t('aboutPage.founderSectionLabel')}
                  </p>
                  <h2 className="type-h2 text-fg font-brand">
                    {FOUNDER_PROFILE.name}
                  </h2>
                  <p className="type-body-sm font-medium text-fg-muted">
                    {pickLocalized(FOUNDER_PROFILE.role, locale)}
                  </p>
                </div>
              </div>

              <p className="type-body-lg text-fg/90 max-w-[64ch]">
                {pickLocalized(FOUNDER_PROFILE.bio, locale)}
              </p>

              <div className="flex flex-col gap-3 border-t border-border pt-5 text-sm text-fg-muted">
                <p className="flex items-start gap-2.5">
                  <GraduationCap
                    className="h-4 w-4 shrink-0 mt-0.5 text-accent-text"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>{pickLocalized(FOUNDER_PROFILE.education, locale)}</span>
                </p>
                <p className="flex items-start gap-2.5">
                  <MapPin
                    className="h-4 w-4 shrink-0 mt-0.5 text-accent-text"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>
                    {locale === 'en' ? BRAND.location : t('footer.location')}
                  </span>
                </p>
              </div>
            </Card>

            <Card padding="lg" className="lg:col-span-4 space-y-5">
              <h2 className="type-h3 text-fg">{t('aboutPage.linksTitle')}</h2>
              <ul className="space-y-2.5">
                {PROFILE_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 rounded-[14px] border border-border bg-bg-subtle/40 px-4 py-3 text-sm transition-all duration-150 hover:border-border-strong hover:bg-bg-subtle"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-fg group-hover:text-accent-text transition-colors duration-150">
                          {link.label}
                        </p>
                        <p className="font-mono text-xs text-fg-muted truncate">{link.handle}</p>
                      </div>
                      <ExternalLink
                        className="h-4 w-4 shrink-0 text-fg-muted group-hover:text-accent-text transition-colors duration-150"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Skills Grouped as Mono Chips */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <SectionHeading
            title={t('aboutPage.skillsTitle')}
            description={t('aboutPage.skillsDescription')}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => {
              const Icon = SKILL_ICONS[group.id];
              return (
                <Card key={group.id} padding="md" className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] gradient-border bg-accent-soft/60 text-accent-text">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <h3 className="type-h4 text-fg">
                      {pickLocalized(group.label, locale)}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 font-mono text-xs text-fg/90"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How we work principles */}
      <section className="border-b border-border bg-bg-subtle/40 py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <SectionHeading
            title={t('aboutPage.principlesTitle')}
            description={t('aboutPage.principlesDescription')}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORK_PRINCIPLES.map((principle, index) => (
              <Card key={principle.id} padding="md" className="space-y-3">
                <p className="font-mono text-xs font-medium text-accent-text tabular-nums">
                  {String(index + 1).padStart(2, '0')}.
                </p>
                <h3 className="type-h3 text-fg">
                  {pickLocalized(principle.title, locale)}
                </h3>
                <p className="type-body-sm text-fg-muted">
                  {pickLocalized(principle.description, locale)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
