import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, Container, SectionHeading } from '@/src/components/ui';
import { HOME_FAQS } from '@/src/data/faq';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

export interface FaqSectionProps {
  showMoreLink?: boolean;
  asH1?: boolean;
  bordered?: boolean;
}

export function FaqSection({
  showMoreLink = true,
  asH1 = false,
  bordered = true,
}: FaqSectionProps) {
  const { locale, t } = useTranslation();

  const items = HOME_FAQS.map((faq) => ({
    id: faq.id,
    title: pickLocalized(faq.question, locale),
    content: pickLocalized(faq.answer, locale),
  }));

  return (
    <section
      className={
        bordered
          ? 'border-t border-border py-[72px] lg:py-[128px]'
          : 'pt-16 pb-[72px] sm:pt-20 lg:pb-[128px]'
      }
    >
      <Container>
        <div className="mx-auto max-w-[760px] space-y-12">
          <SectionHeading
            align="center"
            as={asH1 ? 'h1' : 'h2'}
            eyebrow={t('home.faq.eyebrow')}
            title={t('home.faq.title')}
            description={t('home.faq.description')}
          />

          <Accordion items={items} defaultOpenIds={[items[0]?.id ?? '']} />

          {showMoreLink && (
            <div className="text-center">
              <Link
                to="/faq"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent-text hover:text-fg transition-colors duration-150"
              >
                <span>{t('home.faq.moreLink')}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
