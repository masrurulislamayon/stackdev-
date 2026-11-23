import { ArrowRight, Check } from 'lucide-react';
import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import { Card, Container, SectionHeading } from '@/src/components/ui';
import { pickLocalized, SERVICES } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { cn } from '@/src/lib/cn';
import { ServiceIcon } from './ServiceIcon';

export interface ServicesSectionProps {
  showHeading?: boolean;
  bordered?: boolean;
}

export function ServicesSection({
  showHeading = true,
  bordered = true,
}: ServicesSectionProps) {
  const { locale, t } = useTranslation();

  return (
    <section
      className={
        bordered
          ? 'border-t border-border py-[72px] lg:py-[128px]'
          : 'py-8 sm:py-12'
      }
    >
      <Container>
        {showHeading && (
          <div className="mb-12 lg:mb-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={t('home.services.eyebrow')}
              title={t('home.services.title')}
              description={t('home.services.description')}
            />
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent-text hover:text-fg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span>{t('home.services.viewAll')}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>
        )}

        {/* Asymmetric Bento Grid: 2 large tiles on top, 4 smaller tiles below */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const isLarge = index < 2;
            return (
              <m.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(isLarge ? 'lg:col-span-2' : 'lg:col-span-1')}
              >
                <Card
                  interactive
                  tilt
                  padding={isLarge ? 'lg' : 'md'}
                  className="flex h-full flex-col justify-between gap-6"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[12px] gradient-border bg-accent-soft/60 text-accent-text">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="type-h3 text-fg">
                        {pickLocalized(service.title, locale)}
                      </h3>
                      <p className={cn('type-body-sm text-fg-muted', !isLarge && 'line-clamp-3')}>
                        {pickLocalized(service.shortDescription, locale)}
                      </p>
                    </div>

                    <ul className="space-y-2 pt-1">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet.en}
                          className="flex items-start gap-2 type-body-sm text-fg/90"
                        >
                          <Check
                            className="h-4 w-4 shrink-0 mt-0.5 text-accent-text"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          <span>{pickLocalized(bullet, locale)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Link
                      to={`/services/${service.slug}`}
                      aria-label={`${t('common.learnMore')}: ${pickLocalized(service.title, locale)}`}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-fg transition-colors duration-150"
                    >
                      <span>{t('common.learnMore')}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </Card>
              </m.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
