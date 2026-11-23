import { useEffect } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge, buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { CUSTOM_QUOTE_SCOPE, PRICING_PLANS } from '@/src/data/pricing';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';
import { cn } from '@/src/lib/cn';

function renderPlanPrice(priceText: string) {
  // Visually style the currency unit ("BDT" or "টাকা") slightly smaller while preserving exact text
  const match = priceText.match(/^(.*?)(\s*(?:BDT|টাকা))$/);
  if (!match) {
    return priceText;
  }
  return (
    <>
      <span>{match[1]}</span>
      <span className="text-lg font-semibold text-fg-muted">{match[2]}</span>
    </>
  );
}

export function CustomQuoteCard() {
  const { locale, t } = useTranslation();

  return (
    <Card
      padding="lg"
      className="grid gap-6 lg:grid-cols-12 lg:items-center border-dashed border-border-strong bg-bg-subtle/35"
    >
      <div className="lg:col-span-8 space-y-3">
        <p className="type-eyebrow text-accent-text">
          {t('pricingPage.customQuoteEyebrow')}
        </p>
        <h3 className="type-h2 text-fg">
          {t('pricingPage.customQuoteTitle')}
        </h3>
        <p className="type-body text-fg-muted max-w-[64ch]">
          {t('pricingPage.customQuoteDescription')}
        </p>
        <ul className="grid gap-2.5 pt-2 sm:grid-cols-2">
          {CUSTOM_QUOTE_SCOPE.map((item) => (
            <li key={item.en} className="flex items-center gap-2.5 text-sm text-fg">
              <Check className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={1.75} aria-hidden="true" />
              <span>{pickLocalized(item, locale)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-4 flex lg:justify-end">
        <Link
          to="/contact?package=custom"
          onClick={() =>
            track('click_package', { package: 'Custom Quote', package_id: 'custom' })
          }
          className={buttonStyles({ variant: 'secondary', size: 'lg' })}
        >
          {t('pricingPage.customQuoteCta')}
          <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}

export interface PricingCardsGridProps {
  showCurrencyNote?: boolean;
}

export function PricingCardsGrid({ showCurrencyNote = true }: PricingCardsGridProps) {
  const { locale } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-3 items-stretch">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.id}
            padding="lg"
            spotlight
            className={cn(
              'flex flex-col justify-between gap-7',
              plan.highlighted &&
                'order-first lg:order-none gradient-border gradient-border-spin lg:scale-[1.02] shadow-[var(--shadow-lg)] z-10'
            )}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="type-h3 text-fg">
                  {pickLocalized(plan.name, locale)}
                </h3>
                {plan.badge && (
                  <Badge variant="primary" icon={<Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />}>
                    {pickLocalized(plan.badge, locale)}
                  </Badge>
                )}
              </div>

              <div className="space-y-1.5">
                <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-fg tabular-nums">
                  {renderPlanPrice(pickLocalized(plan.priceMain, locale))}
                </p>
                <p className="font-mono text-xs text-fg-muted tabular-nums">
                  ({pickLocalized(plan.priceSub, locale)})
                </p>
              </div>

              <p className="type-body-sm text-fg-muted">
                {pickLocalized(plan.audience, locale)}
              </p>

              <ul className="space-y-3 border-t border-border pt-5">
                {plan.features.map((feature) => (
                  <li
                    key={feature.en}
                    className="flex items-start gap-2.5 type-body-sm text-fg"
                  >
                    <Check
                      className="h-4 w-4 shrink-0 mt-0.5 text-accent-text"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="tabular-nums">{pickLocalized(feature, locale)}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="type-caption text-fg-muted pt-1">
                  {pickLocalized(plan.note, locale)}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Link
                to={plan.ctaHref}
                onClick={() =>
                  track('click_package', {
                    package: plan.name.en,
                    package_id: plan.id,
                  })
                }
                className={buttonStyles({
                  variant: plan.highlighted ? 'primary' : 'secondary',
                  size: 'md',
                  className: 'w-full',
                })}
              >
                {pickLocalized(plan.ctaLabel, locale)}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {showCurrencyNote && (
        <p className="font-mono text-xs text-fg-muted text-center">
          {locale === 'en'
            ? 'Currency note: All prices are shown in BDT with approximate USD equivalents.'
            : 'মুদ্রা নোট: সকল মূল্য BDT-তে দেখানো হয়েছে এবং পাশে আনুমানিক USD দেওয়া আছে।'}
        </p>
      )}
    </div>
  );
}

export function PricingSection() {
  const { t } = useTranslation();

  useEffect(() => {
    track('view_pricing', { page: '/' });
  }, []);

  return (
    <section className="border-t border-border py-[72px] lg:py-[128px]">
      <Container className="space-y-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t('home.pricing.eyebrow')}
            title={t('home.pricing.title')}
            description={t('home.pricing.description')}
          />
          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent-text hover:text-fg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>{t('home.pricing.viewComparison')}</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </Link>
        </div>

        <PricingCardsGrid />
        <CustomQuoteCard />
      </Container>
    </section>
  );
}
