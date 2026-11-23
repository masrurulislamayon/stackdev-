import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  Aurora,
  CustomCursor,
  Preloader,
  ScrollProgress,
} from '@/src/components/motion';
import { PageSkeleton } from '@/src/components/ui';
import { RouteErrorBoundary } from './ErrorBoundary';
import { FloatingActions } from './FloatingActions';
import { Footer } from './Footer';
import { Header } from './Header';
import { SkipToContent } from './SkipToContent';

export function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Presentation-only page transition: a short fade/rise on the content area after navigation.
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    const node = mainRef.current;
    if (!node || typeof node.animate !== 'function') {
      return;
    }
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const animation = node.animate(
      [
        { opacity: 0, transform: 'translate3d(0, 12px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      ],
      { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    );
    return () => animation.cancel();
  }, [pathname]);

  return (
    <div className="relative isolate flex min-h-screen flex-col bg-bg text-fg">
      <Aurora />
      <div aria-hidden="true" className="noise fixed inset-0 z-50" />
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <SkipToContent />
      <Header />
      <main ref={mainRef} id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <RouteErrorBoundary>
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </RouteErrorBoundary>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
