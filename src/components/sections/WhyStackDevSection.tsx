import {
  BadgeDollarSign,
  Clock,
  SearchCheck,
  Smartphone,
  UserCheck,
  Zap,
} from 'lucide-react';
import { m } from 'motion/react';
import { Container, SectionHeading } from '@/src/components/ui';
import { useTranslation, type TranslationKey } from '@/src/i18n';

interface WhyItemConfig {
  icon: typeof Zap;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const WHY_ITEMS: WhyItemConfig[] = [
  {
    icon: Zap,
    titleKey: 'home.whyStackDev.items.performanceTitle',
    descKey: 'home.whyStackDev.items.performanceDesc',
  },
  {
    icon: Smartphone,
    titleKey: 'home.whyStackDev.items.mobileFirstTitle',
    descKey: 'home.whyStackDev.items.mobileFirstDesc',
  },
  {
    icon: Clock,
    titleKey: 'home.whyStackDev.items.availableTitle',
    descKey: 'home.whyStackDev.items.availableDesc',
  },
  {
    icon: BadgeDollarSign,
    titleKey: 'home.whyStackDev.items.pricingTitle',
    descKey: 'home.whyStackDev.items.pricingDesc',
  },
  {
    icon: SearchCheck,
    titleKey: 'home.whyStackDev.items.seoTitle',
    descKey: 'home.whyStackDev.items.seoDesc',
  },
];

export function WhyStackDevSection() {
  const { t } = useTranslation();

  return (
    <section className="border-t border-border py-[72px] lg:py-[128px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow={t('home.whyStackDev.eyebrow')}
              title={t('home.whyStackDev.title')}
              description={t('home.whyStackDev.description')}
            />
          </div>

          {/* Right Numbered Feature List with Hairline Separators */}
          <div className="lg:col-span-7 divide-y divide-border border-y border-border">
            {WHY_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <m.div
                  key={item.titleKey}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-start gap-5 py-7"
                >
                  <span className="font-mono text-xs font-medium text-fg-faint pt-1.5 tabular-nums shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-border bg-bg-elevated text-fg-muted transition-colors duration-150 group-hover:border-accent/40 group-hover:text-accent-text">
                        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="type-h3 text-fg">{t(item.titleKey)}</h3>
                    </div>
                    <p className="type-body text-fg-muted max-w-[64ch]">{t(item.descKey)}</p>
                  </div>
                </m.div>
              );
            })}

            {/* Founder-led highlight item */}
            <m.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: WHY_ITEMS.length * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-7"
            >
              <div className="rounded-[20px] gradient-border bg-accent-soft/45 p-6 sm:p-7 flex items-start gap-5">
                <span className="font-mono text-xs font-medium text-accent-text pt-1.5 tabular-nums shrink-0">
                  06
                </span>
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] [background:var(--gradient-accent)] text-accent-fg">
                      <UserCheck className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="type-eyebrow text-accent-text">
                      {t('home.whyStackDev.founderLabel')}
                    </span>
                  </div>
                  <h3 className="type-h3 text-fg">
                    {t('home.whyStackDev.founderNote')}
                  </h3>
                  <p className="type-body text-fg-muted max-w-[64ch]">
                    {t('home.whyStackDev.founderDetail')}
                  </p>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
