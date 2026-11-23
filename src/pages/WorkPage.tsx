import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { MoreProjectsNote, ProjectsGrid } from '@/src/components/sections/WorkSection';
import { Container, SectionHeading } from '@/src/components/ui';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { PageGlow } from '@/src/components/motion';

export function WorkPage() {
  const { locale, t } = useTranslation();
  const meta = STATIC_SEO.work;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t('nav.home'), path: '/' },
    { name: t('nav.work'), path: '/work' },
  ]);

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/work"
        jsonLd={breadcrumbSchema}
      />
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-14 relative overflow-hidden">
        <PageGlow />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow={t('workPage.eyebrow')}
            title={t('workPage.title')}
            description={t('workPage.description')}
          />
        </Container>
      </section>

      <section className="pb-[72px] lg:pb-[128px]">
        <Container className="space-y-10 view-reveal">
          <ProjectsGrid />
          <MoreProjectsNote />
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
