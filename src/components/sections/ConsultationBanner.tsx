import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingShapes, Magnetic } from '@/src/components/motion';
import { buttonStyles, Container } from '@/src/components/ui';
import { BRAND } from '@/src/data/brand';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';

export function ConsultationBanner() {
  const { t } = useTranslation();

  return (
    <section className="py-[72px] lg:py-[128px]">
      <Container>
        <div
          className="relative overflow-hidden rounded-[24px] gradient-border gradient-border-spin bg-bg-elevated p-8 sm:p-12 lg:p-14 shadow-[var(--shadow-md)]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 12% 20%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 48%), radial-gradient(circle at 88% 82%, color-mix(in srgb, var(--accent-3) 10%, transparent), transparent 46%)',
          }}
        >
          <FloatingShapes />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3.5">
              <p className="type-eyebrow text-accent-text">
                {t('consultationBanner.eyebrow')}
              </p>
              <h2 className="type-h2 text-fg">
                {t('consultationBanner.title')}
              </h2>
              <p className="type-body-lg text-fg-muted max-w-[64ch]">
                {t('consultationBanner.description')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Magnetic>
                <Link
                  to="/contact"
                  className={buttonStyles({ variant: 'primary', size: 'lg' })}
                >
                  {t('consultationBanner.primaryCta')}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </Magnetic>
              <a
                href={BRAND.phoneHref}
                onClick={() => track('click_call', { location: 'consultation_banner' })}
                className={buttonStyles({ variant: 'secondary', size: 'lg' })}
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                <span className="font-mono tabular-nums">{BRAND.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
