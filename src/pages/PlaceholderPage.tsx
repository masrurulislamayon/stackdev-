import { ArrowRight } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Seo } from '@/src/components/seo';
import { buttonStyles, Container, Logo, SectionHeading } from '@/src/components/ui';
import { useTranslation, type TranslationKey } from '@/src/i18n';

export interface PlaceholderPageProps {
  titleKey: TranslationKey;
  showSlug?: boolean;
  noindex?: boolean;
}

function formatSlug(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function PlaceholderPage({
  titleKey,
  showSlug = false,
  noindex = false,
}: PlaceholderPageProps) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug: string }>();

  const baseTitle = t(titleKey);
  const headingTitle = showSlug && slug ? `${baseTitle}: ${formatSlug(slug)}` : baseTitle;

  return (
    <>
      <Seo
        title={`${headingTitle} | Stack Dev`}
        description={t('placeholder.description')}
        path={pathname}
        noindex={noindex}
      />
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-accent/12 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="hero-grid-bg pointer-events-none absolute inset-0 opacity-35"
        />

        <Container className="relative">
          <div className="glass mx-auto max-w-xl rounded-[24px] p-7 sm:p-10 shadow-[var(--shadow-lg)] space-y-7">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <Logo size="md" />
              <code className="rounded-full border border-border bg-bg-subtle px-3 py-1 font-mono text-xs text-fg-muted">
                {pathname}
              </code>
            </div>

            <SectionHeading
              as="h1"
              eyebrow={t('placeholder.eyebrow')}
              title={headingTitle}
              description={t('placeholder.description')}
            />

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-bg-elevated/70 px-4 py-3 text-sm">
              <span className="text-fg-muted">{t('placeholder.routeLabel')}</span>
              <code className="font-mono text-xs font-medium text-accent-text">
                {pathname}
              </code>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
              <Link
                to="/contact"
                className={buttonStyles({ variant: 'primary', size: 'md' })}
              >
                {t('common.freeConsultation')}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link
                to="/"
                className={buttonStyles({ variant: 'secondary', size: 'md' })}
              >
                {t('common.backHome')}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
