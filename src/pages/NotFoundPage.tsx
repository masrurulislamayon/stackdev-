import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Seo } from '@/src/components/seo';
import { buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

export function NotFoundPage() {
  const { locale, t } = useTranslation();
  const { pathname } = useLocation();
  const meta = STATIC_SEO.notFound;

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path={pathname}
        noindex
      />
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[380px] w-[640px] rounded-full bg-accent/12 blur-[120px]"
        />
        <Container className="relative">
          <Card padding="lg" className="mx-auto max-w-xl text-center">
            <p
              aria-hidden="true"
              className="font-brand gradient-text mb-4 text-[clamp(4.5rem,14vw,7rem)] font-extrabold leading-none tracking-[-0.04em] select-none"
            >
              404
            </p>
            <SectionHeading
              align="center"
              as="h1"
              eyebrow={t('notFound.eyebrow')}
              title={t('notFound.title')}
              description={t('notFound.description')}
            />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className={buttonStyles({ variant: 'primary', size: 'md' })}
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {t('common.backHome')}
              </Link>
              <Link
                to="/contact"
                className={buttonStyles({ variant: 'secondary', size: 'md' })}
              >
                {t('notFound.contactCta')}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
