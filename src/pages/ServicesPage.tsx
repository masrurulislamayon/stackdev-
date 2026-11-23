import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { ServicesSection } from '@/src/components/sections/ServicesSection';
import { buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { PageGlow } from '@/src/components/motion';

export function ServicesPage() {
  const { locale, t } = useTranslation();
  const meta = STATIC_SEO.services;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
  ]);

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/services"
        jsonLd={breadcrumbSchema}
      />
      <section className="pt-16 pb-8 sm:pt-24 sm:pb-12 relative overflow-hidden">
        <PageGlow />
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              eyebrow={t('servicesPage.eyebrow')}
              title={t('servicesPage.title')}
              description={t('servicesPage.description')}
              actions={
                <>
                  <Link
                    to="/contact"
                    className={buttonStyles({ variant: 'primary', size: 'md' })}
                  >
                    {t('common.getFreeConsultation')}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                  <Link
                    to="/pricing"
                    className={buttonStyles({ variant: 'secondary', size: 'md' })}
                  >
                    {t('common.viewPackages')}
                  </Link>
                </>
              }
            />
          </div>
        </Container>
      </section>

      <ServicesSection showHeading={false} bordered={false} />

      <section className="pb-[72px] lg:pb-24">
        <Container className="view-reveal">
          <Card padding="lg" className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-2">
              <h2 className="type-h3 text-fg">
                {t('servicesPage.packagesNoteTitle')}
              </h2>
              <p className="type-body-sm text-fg-muted">
                {t('servicesPage.packagesNoteBody')}
              </p>
            </div>
            <Link
              to="/pricing"
              className={buttonStyles({ variant: 'secondary', size: 'md', className: 'group shrink-0' })}
            >
              {t('serviceDetail.viewPricingCta')}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </Card>
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
