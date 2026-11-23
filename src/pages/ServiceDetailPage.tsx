import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  Seo,
} from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { ServiceIcon } from '@/src/components/sections/ServiceIcon';
import { Accordion, buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { SERVICE_SEO } from '@/src/data/seo';
import { getServiceBySlug, pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';
import { NotFoundPage } from './NotFoundPage';
import { PageGlow } from '@/src/components/motion';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t } = useTranslation();

  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const title = pickLocalized(service.title, locale);
  const heroDescription = pickLocalized(service.heroDescription, locale);
  const meta = SERVICE_SEO[service.slug];

  const faqItems = service.faqs.map((faq) => ({
    id: faq.id,
    title: pickLocalized(faq.question, locale),
    content: pickLocalized(faq.answer, locale),
  }));

  const schemas = [
    buildBreadcrumbSchema([
      { name: t('nav.home'), path: '/' },
      { name: t('nav.services'), path: '/services' },
      { name: title, path: `/services/${service.slug}` },
    ]),
    buildServiceSchema(service, locale),
    buildFaqSchema(
      service.faqs.map((faq) => ({
        question: pickLocalized(faq.question, locale),
        answer: pickLocalized(faq.answer, locale),
      }))
    ),
  ];

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path={`/services/${service.slug}`}
        jsonLd={schemas}
      />
      {/* Hero */}
      <section className="border-b border-border pt-16 pb-16 sm:pt-20 sm:pb-24 relative overflow-hidden">
        <PageGlow />
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-fg-muted">
            <Link to="/services" className="hover:text-fg transition-colors duration-150">
              {t('serviceDetail.breadcrumbServices')}
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-fg-faint" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-fg font-medium truncate">{title}</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="gradient-border inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-elevated text-accent-text shadow-[var(--shadow-sm)]">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </div>

            <h1 className="type-h1 text-fg">{title}</h1>

            <p className="type-body-lg max-w-[64ch] text-fg-muted">{heroDescription}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className={buttonStyles({ variant: 'primary', size: 'lg' })}
              >
                {t('common.getFreeConsultation')}
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link
                to="/pricing"
                className={buttonStyles({ variant: 'secondary', size: 'lg' })}
              >
                {t('serviceDetail.viewPricingCta')}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* What you get */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal">
          <SectionHeading
            title={t('serviceDetail.whatYouGetTitle')}
            description={t('serviceDetail.whatYouGetSubtitle')}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.whatYouGet.map((item) => (
              <Card key={item.en} padding="md" className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                  <Check className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="type-body-sm text-fg">{pickLocalized(item, locale)}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work 4-step process */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal">
          <SectionHeading
            title={t('serviceDetail.processTitle')}
            description={t('serviceDetail.processSubtitle')}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step) => (
              <Card key={step.number} padding="md" className="space-y-3.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent-soft font-mono text-xs font-medium text-accent-text tabular-nums">
                  {step.number}
                </span>
                <h3 className="type-h3 text-fg">
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

      {/* Pricing Note */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal">
          <Card
            padding="lg"
            className="gradient-border grid gap-6 lg:grid-cols-12 lg:items-center shadow-[var(--shadow-md)]"
          >
            <div className="lg:col-span-8 space-y-3">
              <p className="type-eyebrow text-accent-text">
                {pickLocalized(service.pricingNote.label, locale)}
              </p>
              <h2 className="type-h2 text-fg">
                {pickLocalized(service.pricingNote.highlight, locale)}
              </h2>
              <p className="type-body max-w-[64ch] text-fg-muted">
                {pickLocalized(service.pricingNote.summary, locale)}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <Link
                to={service.relatedPackage.href}
                onClick={() =>
                  track('click_package', {
                    package: service.relatedPackage.name.en,
                    package_id: service.relatedPackage.href.split('package=')[1] ?? service.slug,
                  })
                }
                className={buttonStyles({
                  variant: 'primary',
                  size: 'md',
                  className: 'max-w-full whitespace-normal sm:whitespace-nowrap text-center',
                })}
              >
                <span>{pickLocalized(service.relatedPackage.name, locale)}</span>
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className={buttonStyles({ variant: 'secondary', size: 'md' })}
              >
                {t('common.requestQuote')}
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      {/* FAQ Accordion */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <SectionHeading
                title={t('serviceDetail.faqTitle')}
                description={t('serviceDetail.faqSubtitle')}
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqItems} defaultOpenIds={[faqItems[0]?.id ?? '']} />
            </div>
          </div>
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
