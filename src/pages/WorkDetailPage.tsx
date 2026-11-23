import { ArrowRight, Check, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import {
  buildBreadcrumbSchema,
  buildProjectSchema,
  Seo,
} from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { ProjectThumbnail } from '@/src/components/sections/ProjectThumbnail';
import { MoreProjectsNote } from '@/src/components/sections/WorkSection';
import { buttonStyles, Card, Container } from '@/src/components/ui';
import { getLocalizedText, getProjectBySlug } from '@/src/data/projects';
import { PROJECT_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { NotFoundPage } from './NotFoundPage';
import { PageGlow } from '@/src/components/motion';

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t } = useTranslation();

  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const title = getLocalizedText(project.title, locale);
  const category = getLocalizedText(project.category, locale);
  const shortDescription = getLocalizedText(project.shortDescription, locale);
  const hasLiveDemo = project.liveDemoUrl.trim().length > 0;
  const hasGithub = project.githubUrl.trim().length > 0;
  const meta = PROJECT_SEO[project.slug];

  const schemas = [
    buildBreadcrumbSchema([
      { name: t('nav.home'), path: '/' },
      { name: t('nav.work'), path: '/work' },
      { name: title, path: `/work/${project.slug}` },
    ]),
    buildProjectSchema(project, locale),
  ];

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path={`/work/${project.slug}`}
        jsonLd={schemas}
      />
      {/* Hero */}
      <section className="border-b border-border pt-16 pb-16 sm:pt-20 sm:pb-24 relative overflow-hidden">
        <PageGlow />
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-fg-muted">
            <Link to="/work" className="hover:text-fg transition-colors duration-150">
              {t('workDetail.breadcrumbWork')}
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-fg-faint" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-fg font-medium truncate">{title}</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-5">
              <p className="type-eyebrow text-accent-text">
                {t('workPage.title')} · {category}
              </p>
              <h1 className="type-h1 text-fg">{title}</h1>
              <p className="type-body-lg max-w-[64ch] text-fg-muted">{shortDescription}</p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className={buttonStyles({ variant: 'primary', size: 'md' })}
                >
                  {t('common.getFreeConsultation')}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                </Link>

                {hasLiveDemo && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: 'secondary', size: 'md' })}
                  >
                    {t('workPage.liveDemo')}
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                )}

                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: 'ghost', size: 'md' })}
                  >
                    <Github className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    {t('workPage.github')}
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProjectThumbnail variant={project.thumbnailVariant} label={title} />
            </div>
          </div>
        </Container>
      </section>

      {/* Case study sections */}
      <section className="py-[72px] lg:py-24">
        <Container className="space-y-8 view-reveal">
          <div className="grid gap-6 md:grid-cols-2">
            <Card padding="lg" className="space-y-3 md:col-span-2">
              <h2 className="type-h3 text-fg">{t('workDetail.overview')}</h2>
              <p className="type-body max-w-[64ch] text-fg-muted">
                {getLocalizedText(project.caseStudy.overview, locale)}
              </p>
            </Card>

            <Card padding="lg" className="space-y-3">
              <h2 className="type-h3 text-fg">{t('workDetail.problem')}</h2>
              <p className="type-body-sm max-w-[64ch] text-fg-muted">
                {getLocalizedText(project.caseStudy.problem, locale)}
              </p>
            </Card>

            <Card padding="lg" className="space-y-3">
              <h2 className="type-h3 text-fg">{t('workDetail.solution')}</h2>
              <p className="type-body-sm max-w-[64ch] text-fg-muted">
                {getLocalizedText(project.caseStudy.solution, locale)}
              </p>
            </Card>

            <Card padding="lg" className="space-y-3.5">
              <h2 className="type-h3 text-fg">{t('workDetail.techStack')}</h2>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-bg-subtle px-3 py-1 font-mono text-xs text-fg-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Card>

            <Card padding="lg" className="space-y-3">
              <h2 className="type-h3 text-fg">{t('workDetail.result')}</h2>
              <p className="type-body-sm max-w-[64ch] text-fg-muted">
                {getLocalizedText(project.caseStudy.resultPlaceholder, locale)}
              </p>
            </Card>

            <Card padding="lg" className="space-y-4 md:col-span-2">
              <h2 className="type-h3 text-fg">{t('workDetail.keyFeatures')}</h2>
              <ul className="grid gap-3.5 sm:grid-cols-2">
                {project.caseStudy.keyFeatures.map((feature) => (
                  <li
                    key={feature.en}
                    className="flex items-start gap-2.5 type-body-sm text-fg"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 mt-1 text-accent-text"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>{getLocalizedText(feature, locale)}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <MoreProjectsNote />
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
