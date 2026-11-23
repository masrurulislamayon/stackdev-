import { lazy, Suspense, useEffect } from 'react';
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CookieConsentBanner } from '@/src/components/layout/CookieConsentBanner';
import { ErrorBoundary, RouteErrorBoundary } from '@/src/components/layout/ErrorBoundary';
import { Layout } from '@/src/components/layout/Layout';
import {
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildWebSiteSchema,
  JsonLd,
} from '@/src/components/seo';
import { PageSkeleton } from '@/src/components/ui';
import { ThemeProvider } from '@/src/hooks/useTheme';
import { LanguageProvider, useTranslation } from '@/src/i18n';
import { captureUtmParams, trackPageView } from '@/src/lib/analytics';

const HomePage = lazy(() =>
  import('@/src/pages/HomePage').then((m) => ({ default: m.HomePage }))
);
const ServicesPage = lazy(() =>
  import('@/src/pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazy(() =>
  import('@/src/pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const PricingPage = lazy(() =>
  import('@/src/pages/PricingPage').then((m) => ({ default: m.PricingPage }))
);
const WorkPage = lazy(() =>
  import('@/src/pages/WorkPage').then((m) => ({ default: m.WorkPage }))
);
const WorkDetailPage = lazy(() =>
  import('@/src/pages/WorkDetailPage').then((m) => ({ default: m.WorkDetailPage }))
);
const AboutPage = lazy(() =>
  import('@/src/pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const BlogPage = lazy(() =>
  import('@/src/pages/BlogPage').then((m) => ({ default: m.BlogPage }))
);
const BlogDetailPage = lazy(() =>
  import('@/src/pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage }))
);
const ContactPage = lazy(() =>
  import('@/src/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const FaqPage = lazy(() =>
  import('@/src/pages/FaqPage').then((m) => ({ default: m.FaqPage }))
);
const LegalPage = lazy(() =>
  import('@/src/pages/LegalPage').then((m) => ({ default: m.LegalPage }))
);
const PlaceholderPage = lazy(() =>
  import('@/src/pages/PlaceholderPage').then((m) => ({ default: m.PlaceholderPage }))
);
const NotFoundPage = lazy(() =>
  import('@/src/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);
const StyleguidePage = lazy(() =>
  import('@/src/pages/StyleguidePage').then((m) => ({ default: m.StyleguidePage }))
);

function RouteLanguageSync() {
  const { pathname, search } = useLocation();
  const { locale, setLocale } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const paramLang = params.get('lang');
    if ((paramLang === 'en' || paramLang === 'bn') && paramLang !== locale) {
      setLocale(paramLang);
    }
  }, [search, locale, setLocale]);

  useEffect(() => {
    captureUtmParams(search);
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
}

const GLOBAL_SCHEMAS = [
  buildOrganizationSchema(),
  buildProfessionalServiceSchema(),
  buildWebSiteSchema(),
];

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <LazyMotion features={domAnimation} strict>
          <MotionConfig reducedMotion="user">
            <ThemeProvider>
              <LanguageProvider>
                <JsonLd data={GLOBAL_SCHEMAS} />
                <BrowserRouter>
                  <RouteLanguageSync />
                  <Routes>
                    <Route element={<Layout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/services/:slug" element={<ServiceDetailPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/work" element={<WorkPage />} />
                      <Route path="/work/:slug" element={<WorkDetailPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/blog/:slug" element={<BlogDetailPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/faq" element={<FaqPage />} />
                      <Route path="/privacy-policy" element={<LegalPage docKey="privacy" />} />
                      <Route path="/terms" element={<LegalPage docKey="terms" />} />
                      <Route path="/refund-policy" element={<LegalPage docKey="refund" />} />
                      <Route
                        path="/portal/login"
                        element={<PlaceholderPage titleKey="nav.clientLogin" noindex />}
                      />
                      <Route
                        path="/portal/*"
                        element={<PlaceholderPage titleKey="nav.clientPortal" noindex />}
                      />
                      <Route path="*" element={<NotFoundPage />} />
                    </Route>

                    <Route
                      path="/styleguide"
                      element={
                        <RouteErrorBoundary>
                          <Suspense fallback={<PageSkeleton />}>
                            <StyleguidePage />
                          </Suspense>
                        </RouteErrorBoundary>
                      }
                    />
                  </Routes>
                  <CookieConsentBanner />
                </BrowserRouter>
              </LanguageProvider>
            </ThemeProvider>
          </MotionConfig>
        </LazyMotion>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
