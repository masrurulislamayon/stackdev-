import { ArrowRight, ExternalLink, Github, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/src/components/motion';
import { buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { getLocalizedText, PROJECTS } from '@/src/data/projects';
import { useTranslation } from '@/src/i18n';
import { ProjectThumbnail } from './ProjectThumbnail';

export function MoreProjectsNote() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center gap-2.5 rounded-[16px] border border-dashed border-border-strong bg-bg-subtle/40 px-5 py-4 text-sm text-fg-muted text-center">
      <Info className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
      <span>{t('workPage.comingSoonNote')}</span>
    </div>
  );
}

export function ProjectsGrid() {
  const { locale, t } = useTranslation();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {PROJECTS.map((project, index) => {
        const title = getLocalizedText(project.title, locale);
        const category = getLocalizedText(project.category, locale);
        const description = getLocalizedText(project.shortDescription, locale);
        const hasLiveDemo = project.liveDemoUrl.trim().length > 0;
        const hasGithub = project.githubUrl.trim().length > 0;

        return (
          <Reveal key={project.slug} delay={index * 0.08} className="h-full">
          <Card
            interactive
            tilt
            padding="lg"
            className="flex h-full flex-col justify-between gap-7"
          >
            <div className="space-y-6">
              <div className="img-zoom">
                <ProjectThumbnail
                  variant={project.thumbnailVariant}
                  label={title}
                />
              </div>

              <div className="space-y-2.5">
                <p className="type-eyebrow text-accent-text">
                  {category}
                </p>
                <h3 className="type-h3 text-fg">{title}</h3>
                <p className="type-body-sm text-fg-muted max-w-[64ch]">{description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-bg-subtle px-2.5 py-1 font-mono text-xs text-fg-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border">
              <Link
                to={`/work/${project.slug}`}
                aria-label={`${t('workPage.readCaseStudy')}: ${title}`}
                className={buttonStyles({
                  variant: 'primary',
                  size: 'sm',
                  className: 'group/btn',
                })}
              >
                <span>{t('workPage.readCaseStudy')}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>

              {hasLiveDemo && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                >
                  {t('workPage.liveDemo')}
                  <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                </a>
              )}

              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ variant: 'ghost', size: 'sm' })}
                >
                  <Github className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {t('workPage.github')}
                </a>
              )}
            </div>
          </Card>
          </Reveal>
        );
      })}
    </div>
  );
}

export function WorkSection() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border py-[72px] lg:py-[128px]">
      <Container className="space-y-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t('home.work.eyebrow')}
            title={t('home.work.title')}
            description={t('home.work.description')}
          />
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent-text hover:text-fg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>{t('home.work.viewAll')}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
        </div>

        <ProjectsGrid />
        <MoreProjectsNote />
      </Container>
    </section>
  );
}
