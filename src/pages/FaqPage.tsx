import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  Seo,
} from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { FaqSection } from '@/src/components/sections/FaqSection';
import { HOME_FAQS } from '@/src/data/faq';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

export function FaqPage() {
  const { locale, t } = useTranslation();
  const meta = STATIC_SEO.faq;

  const schemas = [
    buildBreadcrumbSchema([
      { name: t('nav.home'), path: '/' },
      { name: t('nav.faq'), path: '/faq' },
    ]),
    buildFaqSchema(
      HOME_FAQS.map((item) => ({
        question: pickLocalized(item.question, locale),
        answer: pickLocalized(item.answer, locale),
      }))
    ),
  ];

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/faq"
        jsonLd={schemas}
      />
      <FaqSection showMoreLink={false} asH1 bordered={false} />
      <ConsultationBanner />
    </>
  );
}
