import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { useTranslation } from '@/src/i18n';

export interface ErrorBoundaryCopy {
  eyebrow: string;
  title: string;
  description: string;
  retryBtn: string;
  reloadBtn: string;
  backHome: string;
}

const DEFAULT_EN_COPY: ErrorBoundaryCopy = {
  eyebrow: 'Unexpected Error',
  title: 'Unable to display this page right now.',
  description:
    'Something went wrong while loading this view. You can try again, reload the page, or return to the homepage.',
  retryBtn: 'Try again',
  reloadBtn: 'Reload page',
  backHome: 'Back to Home',
};

const DEFAULT_BN_COPY: ErrorBoundaryCopy = {
  eyebrow: 'অনপেক্ষিত ত্রুটি',
  title: 'এই মুহূর্তে পেজটি প্রদর্শন করা যাচ্ছে না।',
  description:
    'এই অংশটি লোড করার সময় একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন, পেজ রিলোড করুন অথবা হোমপেজে ফিরে যান।',
  retryBtn: 'আবার চেষ্টা করুন',
  reloadBtn: 'পেজ রিলোড করুন',
  backHome: 'হোমপেজে ফিরুন',
};

function getDocumentFallbackCopy(): ErrorBoundaryCopy {
  if (typeof document !== 'undefined' && document.documentElement.lang === 'bn') {
    return DEFAULT_BN_COPY;
  }
  return DEFAULT_EN_COPY;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  copy?: ErrorBoundaryCopy;
  resetKey?: string;
  useRouterLinks?: boolean;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Stack Dev ErrorBoundary caught an error:', error, info);
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false });
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false });
  };

  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const copy = this.props.copy ?? getDocumentFallbackCopy();
    const useRouterLinks = this.props.useRouterLinks ?? false;

    return (
      <section role="alert" aria-live="assertive" className="py-24 sm:py-32">
        <Container>
          <Card padding="lg" className="mx-auto max-w-xl text-center space-y-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-danger-soft text-danger-foreground">
              <AlertTriangle className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
            </div>

            <SectionHeading
              align="center"
              as="h1"
              eyebrow={copy.eyebrow}
              title={copy.title}
              description={copy.description}
            />

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleRetry}
                className={buttonStyles({ variant: 'primary', size: 'md' })}
              >
                <RefreshCw className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                <span>{copy.retryBtn}</span>
              </button>

              <button
                type="button"
                onClick={this.handleReload}
                className={buttonStyles({ variant: 'secondary', size: 'md' })}
              >
                <span>{copy.reloadBtn}</span>
              </button>

              {useRouterLinks ? (
                <Link
                  to="/"
                  onClick={this.handleRetry}
                  className={buttonStyles({ variant: 'ghost', size: 'md' })}
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>{copy.backHome}</span>
                </Link>
              ) : (
                <a href="/" className={buttonStyles({ variant: 'ghost', size: 'md' })}>
                  <ArrowLeft className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>{copy.backHome}</span>
                </a>
              )}
            </div>
          </Card>
        </Container>
      </section>
    );
  }
}

export function RouteErrorBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <ErrorBoundary
      resetKey={pathname}
      useRouterLinks
      copy={{
        eyebrow: t('errorBoundary.eyebrow'),
        title: t('errorBoundary.title'),
        description: t('errorBoundary.description'),
        retryBtn: t('errorBoundary.retryBtn'),
        reloadBtn: t('errorBoundary.reloadBtn'),
        backHome: t('common.backHome'),
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
