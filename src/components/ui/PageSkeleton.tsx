import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Container } from '@/src/components/ui/Container';
import { useTranslation } from '@/src/i18n';

export function PageSkeleton() {
  const { t } = useTranslation();

  return (
    <section
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={t('loading.pageLabel')}
      className="py-[72px] lg:py-[128px] min-h-[60vh]"
    >
      <span className="sr-only">{t('loading.pageLabel')}</span>
      <Container className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <div className="h-6 w-32 rounded-full bg-bg-subtle" />
          <div className="h-12 w-full max-w-xl rounded-[12px] bg-bg-subtle" />
          <div className="h-5 w-5/6 rounded-[8px] bg-bg-subtle/80" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-44 rounded-[20px] border border-border bg-bg-elevated p-7 space-y-3">
            <div className="h-9 w-9 rounded-[12px] bg-bg-subtle" />
            <div className="h-5 w-2/3 rounded-[8px] bg-bg-subtle" />
            <div className="h-4 w-full rounded-[8px] bg-bg-subtle/70" />
          </div>
          <div className="h-44 rounded-[20px] border border-border bg-bg-elevated p-7 space-y-3">
            <div className="h-9 w-9 rounded-[12px] bg-bg-subtle" />
            <div className="h-5 w-2/3 rounded-[8px] bg-bg-subtle" />
            <div className="h-4 w-full rounded-[8px] bg-bg-subtle/70" />
          </div>
          <div className="hidden lg:block h-44 rounded-[20px] border border-border bg-bg-elevated p-7 space-y-3">
            <div className="h-9 w-9 rounded-[12px] bg-bg-subtle" />
            <div className="h-5 w-2/3 rounded-[8px] bg-bg-subtle" />
            <div className="h-4 w-full rounded-[8px] bg-bg-subtle/70" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function SectionSkeleton({ minHeight = 420 }: { minHeight?: number }) {
  const { t } = useTranslation();

  return (
    <section
      role="status"
      aria-live="polite"
      aria-label={t('loading.sectionLabel')}
      style={{ minHeight }}
      className="border-t border-border py-[72px] lg:py-[128px]"
    >
      <span className="sr-only">{t('loading.sectionLabel')}</span>
      <Container className="space-y-8">
        <div className="max-w-xl space-y-3">
          <div className="h-4 w-24 rounded-full bg-bg-subtle" />
          <div className="h-9 w-3/4 rounded-[12px] bg-bg-subtle" />
          <div className="h-4 w-full rounded-[8px] bg-bg-subtle/80" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-36 rounded-[20px] border border-border bg-bg-elevated/70" />
          <div className="h-36 rounded-[20px] border border-border bg-bg-elevated/70" />
          <div className="hidden lg:block h-36 rounded-[20px] border border-border bg-bg-elevated/70" />
        </div>
      </Container>
    </section>
  );
}

export interface DeferredSectionProps {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}

/**
 * Delays fetching/hydrating below-the-fold lazy chunks until the user scrolls near them,
 * reserving height ahead of time to keep Cumulative Layout Shift (CLS) near zero.
 */
export function DeferredSection({
  children,
  minHeight = 420,
  rootMargin = '350px 0px',
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === 'undefined') return true;
    return typeof IntersectionObserver === 'undefined';
  });

  useEffect(() => {
    if (shouldRender) return;
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  if (shouldRender) {
    return <>{children}</>;
  }

  return (
    <div ref={containerRef} style={{ minHeight }}>
      <SectionSkeleton minHeight={minHeight} />
    </div>
  );
}
