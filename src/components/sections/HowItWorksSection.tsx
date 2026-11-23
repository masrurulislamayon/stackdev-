import { useRef } from 'react';
import { m, useScroll } from 'motion/react';
import { Container, SectionHeading } from '@/src/components/ui';
import { useTranslation, type TranslationKey } from '@/src/i18n';

interface TimelineStep {
  step: number;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    titleKey: 'home.howItWorks.steps.step1Title',
    descKey: 'home.howItWorks.steps.step1Desc',
  },
  {
    step: 2,
    titleKey: 'home.howItWorks.steps.step2Title',
    descKey: 'home.howItWorks.steps.step2Desc',
  },
  {
    step: 3,
    titleKey: 'home.howItWorks.steps.step3Title',
    descKey: 'home.howItWorks.steps.step3Desc',
  },
  {
    step: 4,
    titleKey: 'home.howItWorks.steps.step4Title',
    descKey: 'home.howItWorks.steps.step4Desc',
  },
  {
    step: 5,
    titleKey: 'home.howItWorks.steps.step5Title',
    descKey: 'home.howItWorks.steps.step5Desc',
  },
];

export function HowItWorksSection() {
  const { t } = useTranslation();
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 55%'],
  });

  return (
    <section className="border-t border-border bg-bg-subtle/40 py-[72px] lg:py-[128px]">
      <Container>
        <SectionHeading
          eyebrow={t('home.howItWorks.eyebrow')}
          title={t('home.howItWorks.title')}
          description={t('home.howItWorks.description')}
        />

        <div ref={timelineRef} className="relative mt-14">
          {/* Desktop horizontal connecting track + gradient scroll fill */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-5 left-[10%] right-[10%] h-px bg-border overflow-hidden"
          >
            <m.div
              style={{ originX: 0, scaleX: scrollYProgress, background: 'var(--gradient-accent)' }}
              className="h-full w-full"
            />
          </div>

          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
            {TIMELINE_STEPS.map((item, index) => {
              const isLast = index === TIMELINE_STEPS.length - 1;
              return (
                <m.li
                  key={item.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex flex-row items-start gap-5 lg:flex-col lg:items-center lg:text-center"
                >
                  {/* Mobile vertical connecting line between circles */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="lg:hidden absolute left-5 top-11 bottom-[-2rem] w-px bg-border"
                    />
                  )}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-elevated font-mono text-sm font-medium text-accent-text ring-4 ring-accent-soft shadow-[var(--shadow-sm)] tabular-nums">
                    {item.step}
                  </div>

                  <div className="space-y-2 pt-0.5 lg:pt-2">
                    <h3 className="type-h4 text-fg">
                      {t(item.titleKey)}
                    </h3>
                    <p className="type-body-sm text-fg-muted">
                      {t(item.descKey)}
                    </p>
                  </div>
                </m.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
