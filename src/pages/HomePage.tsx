import { lazy, Suspense } from 'react';
import { buildFaqSchema, Seo } from '@/src/components/seo';
import { HeroSection } from '@/src/components/sections/HeroSection';
import { DeferredSection, SectionSkeleton } from '@/src/components/ui';
import { HOME_FAQS } from '@/src/data/faq';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';

const ServicesSection = lazy(() =>
  import('@/src/components/sections/ServicesSection').then((m) => ({
    default: m.ServicesSection,
  }))
);
const WorkSection = lazy(() =>
  import('@/src/components/sections/WorkSection').then((m) => ({
    default: m.WorkSection,
  }))
);
const WhyStackDevSection = lazy(() =>
  import('@/src/components/sections/WhyStackDevSection').then((m) => ({
    default: m.WhyStackDevSection,
  }))
);
const HowItWorksSection = lazy(() =>
  import('@/src/components/sections/HowItWorksSection').then((m) => ({
    default: m.HowItWorksSection,
  }))
);
const PricingSection = lazy(() =>
  import('@/src/components/sections/PricingSection').then((m) => ({
    default: m.PricingSection,
  }))
);
const ClientPortalSection = lazy(() =>
  import('@/src/components/sections/ClientPortalSection').then((m) => ({
    default: m.ClientPortalSection,
  }))
);
const FaqSection = lazy(() =>
  import('@/src/components/sections/FaqSection').then((m) => ({
    default: m.FaqSection,
  }))
);
const ConsultationBanner = lazy(() =>
  import('@/src/components/sections/ConsultationBanner').then((m) => ({
    default: m.ConsultationBanner,
  }))
);

export function HomePage() {
  const { locale } = useTranslation();
  const meta = STATIC_SEO.home;
  const faqSchema = buildFaqSchema(
    HOME_FAQS.map((item) => ({
      question: pickLocalized(item.question, locale),
      answer: pickLocalized(item.answer, locale),
    }))
  );

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/"
        jsonLd={faqSchema}
      />
      <HeroSection />

      <DeferredSection minHeight={520}>
        <Suspense fallback={<SectionSkeleton minHeight={520} />}>
          <ServicesSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={560}>
        <Suspense fallback={<SectionSkeleton minHeight={560} />}>
          <WorkSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={480}>
        <Suspense fallback={<SectionSkeleton minHeight={480} />}>
          <WhyStackDevSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={360}>
        <Suspense fallback={<SectionSkeleton minHeight={360} />}>
          <HowItWorksSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={640}>
        <Suspense fallback={<SectionSkeleton minHeight={640} />}>
          <PricingSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={480}>
        <Suspense fallback={<SectionSkeleton minHeight={480} />}>
          <ClientPortalSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={480}>
        <Suspense fallback={<SectionSkeleton minHeight={480} />}>
          <FaqSection />
        </Suspense>
      </DeferredSection>

      <DeferredSection minHeight={320}>
        <Suspense fallback={<SectionSkeleton minHeight={320} />}>
          <ConsultationBanner />
        </Suspense>
      </DeferredSection>
    </>
  );
}
