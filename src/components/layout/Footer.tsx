import { MapPin, MessageSquare, Phone } from 'lucide-react';
import { m } from 'motion/react';
import { Link } from 'react-router-dom';
import { Container, Logo } from '@/src/components/ui';
import { BRAND, FOOTER_SERVICES } from '@/src/data/brand';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg">
      {/* Oversized low-contrast decorative wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden pt-10 sm:pt-14"
      >
        <Container>
          <m.p
            initial={{ y: '40%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-brand text-[clamp(3.25rem,14vw,10.5rem)] font-extrabold leading-[0.88] tracking-[-0.045em] text-outline-faint whitespace-nowrap"
          >
            Stack Dev
          </m.p>
        </Container>
      </div>

      <Container className="pt-10 pb-28 sm:pt-12 sm:pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Contact block */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" aria-label="Stack Dev Home" className="inline-block rounded-full">
              <Logo size="md" />
            </Link>
            <p className="type-body-sm text-fg-muted max-w-sm">
              {t('footer.tagline')}
            </p>

            <div className="pt-2 space-y-3 text-sm text-fg-muted">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-fg-muted" strokeWidth={1.5} aria-hidden="true" />
                <span>{t('footer.location')}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-fg-muted" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href={BRAND.phoneHref}
                  onClick={() => track('click_call', { location: 'footer' })}
                  className="font-mono text-sm font-medium text-fg hover:text-accent-text transition-colors duration-150 tabular-nums"
                >
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageSquare className="h-4 w-4 shrink-0 text-fg-muted" strokeWidth={1.5} aria-hidden="true" />
                <Link
                  to="/contact"
                  onClick={() => track('click_messenger', { location: 'footer' })}
                  className="hover:text-fg transition-colors duration-150"
                >
                  {t('footer.facebookLabel')}: <span className="font-medium text-fg">{BRAND.facebookPageName}</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Services column */}
          <nav aria-label={t('footer.servicesHeading')} className="lg:col-span-3 space-y-3.5">
            <h2 className="type-eyebrow text-fg-faint">
              {t('footer.servicesHeading')}
            </h2>
            <ul className="space-y-2.5 text-sm text-fg-muted">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-fg transition-colors duration-150"
                  >
                    {t(`servicesList.${service.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label={t('footer.companyHeading')} className="lg:col-span-3 space-y-3.5">
            <h2 className="type-eyebrow text-fg-faint">
              {t('footer.companyHeading')}
            </h2>
            <ul className="space-y-2.5 text-sm text-fg-muted">
              <li>
                <Link to="/about" className="hover:text-fg transition-colors duration-150">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-fg transition-colors duration-150">
                  {t('nav.work')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-fg transition-colors duration-150">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-fg transition-colors duration-150">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-fg transition-colors duration-150">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal column */}
          <nav aria-label={t('footer.legalHeading')} className="lg:col-span-2 space-y-3.5">
            <h2 className="type-eyebrow text-fg-faint">
              {t('footer.legalHeading')}
            </h2>
            <ul className="space-y-2.5 text-sm text-fg-muted">
              <li>
                <Link to="/privacy-policy" className="hover:text-fg transition-colors duration-150">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-fg transition-colors duration-150">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-fg transition-colors duration-150">
                  {t('footer.refundPolicy')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border pt-7 text-xs text-fg-muted sm:pr-32">
          <p className="font-medium text-fg">{t('footer.copyright')}</p>
          <p>{t('footer.bottomNote')}</p>
        </div>
      </Container>
    </footer>
  );
}
