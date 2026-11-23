import { ArrowRight, Calendar, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buttonStyles, Card, Container } from '@/src/components/ui';
import type { LegalDocument } from '@/src/data/legal';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

export function LegalPageLayout({ doc }: { doc: LegalDocument }) {
  const { locale, t } = useTranslation();

  const title = pickLocalized(doc.title, locale);
  const subtitle = pickLocalized(doc.subtitle, locale);
  const lastUpdated = pickLocalized(doc.lastUpdated, locale);

  return (
    <article className="pt-16 pb-24 sm:pt-24 sm:pb-32">
      <Container>
        {/* Header aligned cleanly with content */}
        <header className="mx-auto max-w-[1000px] pb-10 border-b border-border space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs text-fg-muted">
            <span className="type-eyebrow text-accent-text">
              {t('legalPage.eyebrow')}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5 font-mono">
              <Calendar className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              <span>
                {t('legalPage.lastUpdatedLabel')}: <strong className="font-medium text-fg">{lastUpdated}</strong>
              </span>
            </span>
          </div>

          <h1 className="type-h1 text-fg">{title}</h1>
          <p className="type-body-lg text-fg-muted max-w-[64ch]">{subtitle}</p>
        </header>

        {/* Sticky Desktop TOC + Main Legal Body */}
        <div className="mx-auto max-w-[1000px] pt-10 grid gap-12 lg:grid-cols-[240px_minmax(0,720px)] lg:gap-12 items-start">
          {/* Desktop Sticky TOC */}
          <aside className="hidden lg:block sticky top-28">
            <nav aria-label={t('legalPage.tocTitle')} className="space-y-3.5">
              <p className="type-eyebrow text-fg-faint">
                {t('legalPage.tocTitle')}
              </p>
              <ul className="space-y-2.5 border-l border-border pl-4 text-xs">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block text-fg-muted hover:text-accent-text transition-colors duration-150 leading-relaxed"
                    >
                      {pickLocalized(section.heading, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Body Column */}
          <div className="w-full max-w-[720px] space-y-10">
            {/* Template Owner Review Notice */}
            <div className="rounded-r-[16px] border-l-2 border-accent bg-accent-soft/45 px-5 py-4 flex items-start gap-3">
              <Info className="h-4 w-4 shrink-0 mt-1 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-fg">
                  {t('legalPage.templateNoticeTitle')}
                </p>
                <p className="type-body-sm text-fg-muted">
                  {t('legalPage.templateNoticeBody')}
                </p>
              </div>
            </div>

            {/* Mobile/Tablet TOC */}
            <Card padding="sm" className="lg:hidden space-y-3">
              <p className="type-eyebrow text-fg-faint">
                {t('legalPage.tocTitle')}
              </p>
              <ul className="space-y-2 text-sm">
                {doc.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-fg-muted hover:text-accent-text transition-colors duration-150"
                    >
                      {pickLocalized(section.heading, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Legal Sections */}
            <div className="divide-y divide-border">
              {doc.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="py-8 first:pt-0 last:pb-0 space-y-4 scroll-mt-28"
                >
                  <h2 className="type-h3 text-fg">
                    {pickLocalized(section.heading, locale)}
                  </h2>

                  {section.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="type-body text-fg/90 max-w-[64ch]">
                      {pickLocalized(paragraph, locale)}
                    </p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 type-body text-fg/90 max-w-[64ch]">
                      {section.bullets.map((bullet, idx) => (
                        <li key={idx}>{pickLocalized(bullet, locale)}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Bottom Contact Card */}
            <Card padding="md" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <h2 className="type-h4 text-fg">
                  {t('legalPage.contactCtaTitle')}
                </h2>
                <p className="type-body-sm text-fg-muted">
                  {t('legalPage.contactCtaBody')}
                </p>
              </div>
              <Link
                to="/contact"
                className={buttonStyles({
                  variant: 'secondary',
                  size: 'sm',
                  className: 'max-w-full whitespace-normal sm:whitespace-nowrap text-center',
                })}
              >
                <span>{t('legalPage.contactCtaBtn')}</span>
                <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </Card>
          </div>
        </div>
      </Container>
    </article>
  );
}
