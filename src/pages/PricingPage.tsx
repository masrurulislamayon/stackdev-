import { useEffect } from 'react';
import { Check } from 'lucide-react';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPricingOffersSchema,
  Seo,
} from '@/src/components/seo';
import { CustomQuoteCard, PricingCardsGrid } from '@/src/components/sections/PricingSection';
import { Accordion, Card, Container, SectionHeading } from '@/src/components/ui';
import { COMPARISON_ROWS, PRICING_FAQS } from '@/src/data/pricing';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';
import { PageGlow } from '@/src/components/motion';

function renderComparisonCell(value: string, isPremium = false) {
  const isIncluded = value === 'Included' || value === 'অন্তর্ভুক্ত';
  if (!isIncluded) {
    return <span>{value}</span>;
  }
  return (
    <span className="inline-flex items-center gap-1.5">
      <Check
        className={isPremium ? 'h-4 w-4 shrink-0 text-accent-text' : 'h-4 w-4 shrink-0 text-accent-text/80'}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <span>{value}</span>
    </span>
  );
}

export function PricingPage() {
  const { locale, t } = useTranslation();
  const meta = STATIC_SEO.pricing;

  useEffect(() => {
    track('view_pricing', { page: '/pricing' });
  }, []);

  const faqItems = PRICING_FAQS.map((faq) => ({
    id: faq.id,
    title: pickLocalized(faq.question, locale),
    content: pickLocalized(faq.answer, locale),
  }));

  const schemas = [
    buildBreadcrumbSchema([
      { name: t('nav.home'), path: '/' },
      { name: t('nav.pricing'), path: '/pricing' },
    ]),
    buildPricingOffersSchema(locale),
    buildFaqSchema(
      PRICING_FAQS.map((faq) => ({
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
        path="/pricing"
        jsonLd={schemas}
      />
      {/* Page Header */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-14 relative overflow-hidden">
        <PageGlow />
        <Container>
          <div className="max-w-3xl space-y-4">
            <SectionHeading
              as="h1"
              eyebrow={t('pricingPage.eyebrow')}
              title={t('pricingPage.title')}
              description={t('pricingPage.description')}
            />
            <p className="font-mono text-xs text-fg-muted">
              {t('pricingPage.currencyNote')}
            </p>
          </div>
        </Container>
      </section>

      {/* Three Package Cards */}
      <section className="pb-[72px] lg:pb-[128px]">
        <Container className="view-reveal">
          <PricingCardsGrid showCurrencyNote={false} />
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-border py-[72px] lg:py-[128px]">
        <Container className="space-y-10 view-reveal">
          <SectionHeading
            title={t('pricingPage.comparisonTitle')}
            description={t('pricingPage.comparisonDescription')}
          />

          <Card padding="none" className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[660px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-subtle/70">
                    <th
                      scope="col"
                      className="sticky left-0 z-10 bg-bg-subtle px-5 py-4 font-semibold text-fg"
                    >
                      {t('pricingPage.featureCol')}
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-fg">
                      Basic
                    </th>
                    <th
                      scope="col"
                      className="bg-accent-soft/55 px-5 py-4 font-semibold text-accent-text"
                    >
                      Premium
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-fg">
                      {locale === 'en' ? 'Portfolio Website' : 'পোর্টফোলিও ওয়েবসাইট'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {COMPARISON_ROWS.map((row) => (
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
                        {renderComparisonCell(pickLocalized(row.basic, locale))}
                      </td>
                      <td className="bg-accent-soft/35 px-5 py-4 text-fg font-medium tabular-nums">
                        {renderComparisonCell(pickLocalized(row.premium, locale), true)}
                      </td>
                      <td className="px-5 py-4 text-fg-muted tabular-nums">
                        {renderComparisonCell(pickLocalized(row.portfolio, locale))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <p className="font-mono text-xs text-fg-muted">
            {t('pricingPage.currencyNote')}
          </p>
        </Container>
      </section>

      {/* Custom Quote Card */}
      <section className="border-t border-border py-[72px] lg:py-[128px]">
        <Container className="view-reveal">
          <CustomQuoteCard />
        </Container>
      </section>

      {/* Pricing FAQ */}
      <section className="border-t border-border py-[72px] lg:py-[128px]">
        <Container className="view-reveal">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <SectionHeading
                title={t('pricingPage.faqTitle')}
                description={t('pricingPage.faqDescription')}
              />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqItems} defaultOpenIds={[faqItems[0]?.id ?? '']} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
