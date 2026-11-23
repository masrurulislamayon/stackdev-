import { useState } from 'react';
import {
  ArrowRight,
  Award,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  MapPin,
  Server,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageGlow } from '@/src/components/motion';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import { buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import {
  ABOUT_EDUCATION,
  ABOUT_HOW_WE_WORK_STEPS,
  ABOUT_SELECTED_PROJECTS,
  ABOUT_WHO_WE_WORK_WITH,
  FOUNDER_PROFILE,
  PROFILE_LINKS,
  SKILL_GROUPS,
  WORK_PRINCIPLES,
} from '@/src/data/about';
import { BRAND } from '@/src/data/brand';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

const SKILL_ICONS = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
  aiTools: Sparkles,
} as const;

export function AboutPage() {
  const { locale, t } = useTranslation();
  const [photoFailed, setPhotoFailed] = useState(false);

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
                {photoFailed ? (
                  <div
                    aria-hidden="true"
                    className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center rounded-[18px] gradient-border bg-accent-soft text-xl font-extrabold text-accent-text font-brand shadow-[var(--shadow-sm)]"
                  >
                    {FOUNDER_PROFILE.initials}
                  </div>
                ) : (
                  <div className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-[18px] border border-border-strong bg-bg-subtle shadow-[var(--shadow-sm)]">
                    <img
                      src={FOUNDER_PROFILE.photoSrc}
                      alt={FOUNDER_PROFILE.photoAlt}
                      loading="lazy"
                      decoding="async"
                      onError={() => setPhotoFailed(true)}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                )}

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

              <div className="space-y-4">
                <p className="type-body-lg text-fg/90 max-w-[64ch]">
                  {pickLocalized(FOUNDER_PROFILE.bio, locale)}
                </p>
                <p className="type-body text-fg-muted max-w-[68ch] leading-relaxed">
                  {pickLocalized(FOUNDER_PROFILE.extendedBio, locale)}
                </p>
              </div>

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

      {/* Technologies & Skills Grouped as Mono Chips */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <SectionHeading
            title={t('aboutPage.skillsTitle')}
            description={t('aboutPage.skillsDescription')}
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Selected Projects */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title={t('aboutPage.projectsTitle')}
              description={t('aboutPage.projectsDescription')}
            />
            <Link
              to="/work"
              className={buttonStyles({ variant: 'secondary', size: 'md', className: 'shrink-0' })}
            >
              <span>{t('aboutPage.viewAllWork')}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ABOUT_SELECTED_PROJECTS.map((project) => (
              <Card key={project.id} padding="lg" className="flex h-full flex-col justify-between gap-5">
                <div className="space-y-3">
                  <h3 className="type-h3 text-fg">
                    <Link
                      to={`/work/${project.slug}`}
                      className="hover:text-accent-text transition-colors duration-150"
                    >
                      {pickLocalized(project.title, locale)}
                    </Link>
                  </h3>
                  <p className="type-body-sm text-fg-muted max-w-[64ch]">
                    {pickLocalized(project.description, locale)}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 font-mono text-xs text-fg/90"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Education & Certificates */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <SectionHeading title={t('aboutPage.educationTitle')} />

          <div className="grid gap-6 lg:grid-cols-12 items-start">
            <Card padding="lg" className="lg:col-span-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] gradient-border bg-accent-soft/60 text-accent-text">
                  <GraduationCap className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="space-y-1">
                  <h3 className="type-h3 text-fg">
                    {pickLocalized(ABOUT_EDUCATION.degree, locale)}
                  </h3>
                  <p className="type-body-sm font-medium text-fg-muted">
                    {pickLocalized(ABOUT_EDUCATION.courseworkLabel, locale)}
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {ABOUT_EDUCATION.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-border bg-bg-subtle px-3 py-1 font-mono text-xs text-fg/90"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </Card>

            <Card padding="lg" className="lg:col-span-5 space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] gradient-border bg-accent-soft/60 text-accent-text">
                  <Award className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="type-h3 text-fg">
                  {pickLocalized(ABOUT_EDUCATION.certificatesLabel, locale)}
                </h3>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-border">
                {ABOUT_EDUCATION.certificates.map((cert) => (
                  <li
                    key={cert}
                    className="rounded-[12px] border border-border bg-bg-subtle/50 px-3.5 py-2.5 font-mono text-xs font-medium text-fg"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* How We Work (4 steps) */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <SectionHeading title={t('aboutPage.howWeWorkTitle')} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_HOW_WE_WORK_STEPS.map((step) => (
              <Card key={step.number} padding="md" className="space-y-3">
                <p className="font-mono text-xs font-medium text-accent-text tabular-nums">
                  {step.number}
                </p>
                <h3 className="type-h4 text-fg">
                  {pickLocalized(step.title, locale)}
                </h3>
                <p className="type-body-sm text-fg-muted">
                  {pickLocalized(step.description, locale)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Who We Work With */}
      <section className="border-b border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-8 view-reveal">
          <SectionHeading title={t('aboutPage.whoWeWorkWithTitle')} />

          <Card padding="lg" className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] gradient-border bg-accent-soft/60 text-accent-text">
              <Users className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="type-body-lg text-fg/90 max-w-[72ch]">
              {pickLocalized(ABOUT_WHO_WE_WORK_WITH, locale)}
            </p>
          </Card>
        </Container>
      </section>

      {/* Guiding Principles */}
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
