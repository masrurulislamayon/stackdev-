import { LegalPageLayout } from '@/src/components/layout/LegalPageLayout';
import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import { LEGAL_DOCUMENTS, type LegalDocKey } from '@/src/data/legal';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

const LEGAL_PATHS: Record<LegalDocKey, string> = {
  privacy: '/privacy-policy',
  terms: '/terms',
  refund: '/refund-policy',
};

export function LegalPage({ docKey }: { docKey: LegalDocKey }) {
  const { locale, t } = useTranslation();
  const doc = LEGAL_DOCUMENTS[docKey];
  const meta = STATIC_SEO[docKey];
  const path = LEGAL_PATHS[docKey];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t('nav.home'), path: '/' },
    { name: pickLocalized(doc.title, locale), path },
  ]);

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path={path}
        jsonLd={breadcrumbSchema}
      />
      <LegalPageLayout doc={doc} />
    </>
  );
}
