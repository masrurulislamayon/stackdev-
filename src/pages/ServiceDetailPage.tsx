import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Users,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { FloatingShapes, Magnetic, PageGlow } from '@/src/components/motion';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  Seo,
} from '@/src/components/seo';
import { ServiceIcon } from '@/src/components/sections/ServiceIcon';
import {
  Accordion,
  Badge,
  buttonStyles,
  Card,
  Container,
  SectionHeading,
} from '@/src/components/ui';
import { BRAND } from '@/src/data/brand';
import { SERVICE_SEO } from '@/src/data/seo';
import { getServiceBySlug, pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';
import { cn } from '@/src/lib/cn';
import { NotFoundPage } from './NotFoundPage';

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
  const { pricingSection } = service;
  const hasPackages = Boolean(pricingSection.packages?.length);

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

      {/* Breadcrumb & Hero */}
      <section className="border-b border-border pt-16 pb-16 sm:pt-20 sm:pb-24 relative overflow-hidden">
        <PageGlow />
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-fg-muted"
          >
            <Link to="/services" className="hover:text-fg transition-colors duration-150">
              {t('serviceDetail.breadcrumbServices')}
            </Link>
            <ChevronRight
              className="h-4 w-4 shrink-0 text-fg-faint"
              strokeWidth={1.5}
              aria-hidden="true"
            />
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

      {/* Overview */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <SectionHeading title={t('serviceDetail.overviewTitle')} />
            </div>
            <div className="lg:col-span-8 space-y-5">
              {service.overview.map((paragraph, index) => (
                <p
                  key={index}
                  className={cn(
                    'max-w-[68ch] text-fg-muted leading-relaxed',
                    index === 0 ? 'type-body-lg text-fg/90' : 'type-body'
                  )}
                >
                  {pickLocalized(paragraph, locale)}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Deliverables (6 cards) */}
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

      {/* Who It's For */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal space-y-8">
          <SectionHeading title={t('serviceDetail.whoItsForTitle')} />

          <div
            className={cn(
              'grid gap-5',
              service.whoItsFor.length === 4
                ? 'sm:grid-cols-2'
                : 'sm:grid-cols-2 lg:grid-cols-3'
            )}
          >
            {service.whoItsFor.map((audience) => (
              <Card key={audience.en} padding="md" className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent-soft text-accent-text">
                  <Users className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <p className="type-body-sm text-fg">{pickLocalized(audience, locale)}</p>
              </Card>
            ))}
          </div>

          {service.whoItsForNote && (
            <p className="type-body-sm text-fg-muted font-medium">
              {pickLocalized(service.whoItsForNote, locale)}
            </p>
          )}
        </Container>
      </section>

      {/* Process Steps */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal">
          <SectionHeading
            title={t('serviceDetail.processTitle')}
            description={t('serviceDetail.processSubtitle')}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.processSteps.map((step) => (
              <Card key={step.number} padding="md" className="space-y-3.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent-soft font-mono text-xs font-medium text-accent-text tabular-nums">
                  {step.number}
                </span>
                <h3 className="type-h3 text-fg">{pickLocalized(step.title, locale)}</h3>
                <p className="type-body-sm text-fg-muted">
                  {pickLocalized(step.description, locale)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="border-b border-border py-[72px] lg:py-24">
        <Container className="view-reveal space-y-10">
          <SectionHeading title={pickLocalized(pricingSection.title, locale)} />

          {hasPackages && pricingSection.packages ? (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                {pricingSection.packages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    padding="lg"
                    className={cn(
                      'flex h-full flex-col justify-between gap-8',
                      pkg.highlighted &&
                        'gradient-border shadow-[var(--shadow-md)] bg-bg-elevated'
                    )}
                  >
                    <div className="space-y-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="type-h3 text-fg">
                          {pickLocalized(pkg.name, locale)}
                        </h3>
                        {pkg.badge && (
                          <Badge variant="primary">
                            {pickLocalized(pkg.badge, locale)}
                          </Badge>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <p className="font-mono text-2xl sm:text-3xl font-bold text-fg tabular-nums">
                          {pickLocalized(pkg.price, locale)}
                        </p>
                        <p className="type-body-sm text-fg-muted">
                          {pickLocalized(pkg.audience, locale)}
                        </p>
                      </div>

                      <ul className="space-y-2.5 border-t border-border pt-5">
                        {pkg.features.map((feat) => (
                          <li
                            key={feat.en}
                            className="flex items-start gap-2.5 type-body-sm text-fg/90"
                          >
                            <Check
                              className="h-4 w-4 shrink-0 mt-0.5 text-accent-text"
                              strokeWidth={1.75}
                              aria-hidden="true"
                            />
                            <span>{pickLocalized(feat, locale)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={pkg.ctaHref}
                        onClick={() =>
                          track('click_package', {
                            package: pkg.name.en,
                            package_id: pkg.id,
                          })
                        }
                        className={buttonStyles({
                          variant: pkg.highlighted ? 'primary' : 'secondary',
                          size: 'lg',
                          className: 'w-full justify-center',
                        })}
                      >
                        <span>{pickLocalized(pkg.ctaLabel, locale)}</span>
                        <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>

              {pricingSection.comparisonRows && pricingSection.comparisonRows.length > 0 && (
                <Card padding="none" className="overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b border-border bg-bg-subtle/70">
                          <th
                            scope="col"
                            className="sticky left-0 z-10 bg-bg-subtle px-5 py-4 font-semibold text-fg"
                          >
                            {t('serviceDetail.featureCol')}
                          </th>
                          <th scope="col" className="px-5 py-4 font-semibold text-fg">
                            {t('serviceDetail.basicCol')}
                          </th>
                          <th
                            scope="col"
                            className="bg-accent-soft/55 px-5 py-4 font-semibold text-accent-text"
                          >
                            {t('serviceDetail.premiumCol')}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {pricingSection.comparisonRows.map((row) => (
                          <tr
                            key={row.id}
                            className="group hover:bg-bg-subtle/35 transition-colors duration-150"
                          >
                            <th
                              scope="row"
                              className="sticky left-0 z-10 bg-bg-elevated group-hover:bg-bg-subtle/35 px-5 py-4 font-medium text-fg transition-colors duration-150"
                            >
                              {pickLocalized(row.feature, locale)}
                            </th>
                            <td className="px-5 py-4 text-fg-muted tabular-nums">
                              {pickLocalized(row.basic, locale)}
                            </td>
                            <td className="bg-accent-soft/35 px-5 py-4 text-fg font-medium tabular-nums">
                              {pickLocalized(row.premium, locale)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}
            </>
          ) : (
            <Card
              padding="lg"
              className="gradient-border grid gap-6 lg:grid-cols-12 lg:items-center shadow-[var(--shadow-md)]"
            >
              <div className="lg:col-span-8 space-y-4">
                {pricingSection.highlight && (
                  <h3 className="type-h2 text-fg">
                    {pickLocalized(pricingSection.highlight, locale)}
                  </h3>
                )}

                {pricingSection.bullets && pricingSection.bullets.length > 0 && (
                  <ul className="space-y-2.5">
                    {pricingSection.bullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="flex items-start gap-2.5 type-body text-fg/95"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 mt-1 text-accent-text"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>{pickLocalized(bullet, locale)}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {pricingSection.paragraphs &&
                  pricingSection.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="type-body max-w-[64ch] text-fg-muted">
                      {pickLocalized(paragraph, locale)}
                    </p>
                  ))}
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
                <Link
                  to={service.relatedPackage.href}
                  onClick={() =>
                    track('click_package', {
                      package: service.relatedPackage.name.en,
                      package_id:
                        service.relatedPackage.href.split('package=')[1] ?? service.slug,
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
                  {t('common.getFreeConsultation')}
                </Link>
              </div>
            </Card>
          )}
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

      {/* Service CTA & Common Consultation Section */}
      <section className="py-[72px] lg:py-[128px]">
        <Container className="view-reveal">
          <div
            className="relative overflow-hidden rounded-[24px] gradient-border gradient-border-spin bg-bg-elevated p-7 sm:p-12 lg:p-14 shadow-[var(--shadow-md)]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 12% 20%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 48%), radial-gradient(circle at 88% 82%, color-mix(in srgb, var(--accent-3) 10%, transparent), transparent 46%)',
            }}
          >
            <FloatingShapes />

            <div className="relative space-y-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-3.5">
                  <p className="type-eyebrow text-accent-text">
                    {t('serviceDetail.ctaEyebrow')}
                  </p>
                  <h2 className="type-h2 text-fg">
                    {t('serviceDetail.ctaBannerTitle')}
                  </h2>
                  <p className="type-body-lg text-fg-muted max-w-[64ch]">
                    {t('serviceDetail.ctaBannerDescription')}
                  </p>
                  <p className="type-body-sm text-fg/90 font-medium">
                    {pickLocalized(service.ctaText, locale)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                  <Magnetic>
                    <Link
                      to="/contact"
                      className={buttonStyles({ variant: 'primary', size: 'lg' })}
                    >
                      {t('common.getFreeConsultation')}
                      <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </Link>
                  </Magnetic>
                  <a
                    href={BRAND.phoneHref}
                    onClick={() => track('click_call', { location: `service_${service.slug}` })}
                    className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-mono tabular-nums">{BRAND.phoneDisplay}</span>
                  </a>
                </div>
              </div>

              <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-3">
                  <Phone
                    className="h-4 w-4 shrink-0 mt-1 text-accent-text"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-fg-muted">
                      {t('serviceDetail.phoneWhatsappLabel')}
                    </p>
                    <a
                      href={BRAND.phoneHref}
                      onClick={() => track('click_call', { location: `service_cta_${service.slug}` })}
                      className="font-mono text-sm font-semibold text-fg hover:text-accent-text transition-colors tabular-nums"
                    >
                      {BRAND.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare
                    className="h-4 w-4 shrink-0 mt-1 text-accent-text"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-fg-muted">
                      {t('serviceDetail.facebookLabel')}
                    </p>
                    <p className="text-sm font-semibold text-fg">
                      {t('serviceDetail.facebookValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-4 w-4 shrink-0 mt-1 text-accent-text"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-fg-muted">
                      {t('serviceDetail.addressLabel')}
                    </p>
                    <p className="text-sm font-semibold text-fg">
                      {t('serviceDetail.addressValue')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="h-4 w-4 shrink-0 mt-1 text-accent-text"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-fg-muted">
                      {t('serviceDetail.availabilityLabel')}
                    </p>
                    <p className="text-sm font-semibold text-fg">
                      {t('serviceDetail.availabilityValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
