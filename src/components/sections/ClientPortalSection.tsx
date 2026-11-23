import { ArrowRight, Check, FileText, FolderOpen, Lock, MessageSquare, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buttonStyles, Container, SectionHeading } from '@/src/components/ui';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';

function PortalMockup() {
  const { t } = useTranslation();

  return (
    <div
      role="img"
      aria-label={t('home.clientPortal.mockup.ariaLabel')}
      className="relative mx-auto w-full max-w-[580px] select-none"
    >
      {/* Soft gradient panel container */}
      <div
        className="relative rounded-[24px] border border-border p-4 sm:p-6 overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 18% 12%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 55%), radial-gradient(circle at 88% 85%, color-mix(in srgb, var(--accent-3) 12%, transparent), transparent 55%), var(--bg-subtle)',
        }}
      >
        <div className="relative rounded-[20px] glass shadow-[var(--shadow-lg)] overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-border bg-bg-subtle/60 px-4 py-3.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-fg">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-[8px] bg-accent-soft text-accent-text">
                <Lock className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span>{t('home.clientPortal.mockup.workspaceLabel')}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elevated px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                <span className="h-1.5 w-10 rounded-full bg-fg-faint/35" />
              </span>
              <span className="h-6 w-6 rounded-full bg-bg-elevated border border-border" />
            </div>
          </div>

          {/* Portal dashboard grid with generic placeholder labels (no fake data or numbers) */}
          <div className="divide-y divide-border bg-bg-elevated/65">
            {/* Row 1: Project Status & Milestones */}
            <div className="p-4 sm:p-5 space-y-3.5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-fg">
                  {t('home.clientPortal.mockup.statusTitle')}
                </span>
                <span className="h-2 w-16 rounded-full bg-accent/35" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full [background:var(--gradient-accent)]" />
                  <p className="text-[11px] font-medium text-fg-muted">{t('home.clientPortal.mockup.milestoneOne')}</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-accent/40" />
                  <p className="text-[11px] font-medium text-fg-muted">{t('home.clientPortal.mockup.milestoneTwo')}</p>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-full bg-border-strong" />
                  <p className="text-[11px] font-medium text-fg-faint">{t('home.clientPortal.mockup.milestoneThree')}</p>
                </div>
              </div>
            </div>

            {/* Row 2: Shared Files + Messages & Support */}
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-fg">
                  <FolderOpen className="h-3.5 w-3.5 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
                  <span>{t('home.clientPortal.mockup.filesTitle')}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-[10px] border border-border bg-bg-subtle/60 px-3 py-2">
                    <FileText className="h-3.5 w-3.5 text-fg-muted shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-xs text-fg/90 truncate">
                      {t('home.clientPortal.mockup.filePlaceholderA')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-[10px] border border-border bg-bg-subtle/60 px-3 py-2">
                    <FileText className="h-3.5 w-3.5 text-fg-muted shrink-0" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-xs text-fg/90 truncate">
                      {t('home.clientPortal.mockup.filePlaceholderB')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-fg">
                  <MessageSquare className="h-3.5 w-3.5 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
                  <span>{t('home.clientPortal.mockup.messagesTitle')}</span>
                </div>
                <div className="space-y-2">
                  <div className="rounded-[10px] border border-border bg-bg-subtle/60 px-3 py-2 space-y-1.5">
                    <span className="block text-xs text-fg/90 truncate">
                      {t('home.clientPortal.mockup.messagePlaceholder')}
                    </span>
                    <span className="block h-1.5 w-4/5 rounded-full bg-fg-faint/25" />
                  </div>
                  <div className="rounded-[10px] border border-accent/25 bg-accent-soft px-3 py-2 space-y-1.5">
                    <span className="block h-1.5 w-3/4 rounded-full bg-accent/45" />
                    <span className="block h-1.5 w-1/2 rounded-full bg-accent/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Invoices & Payment History */}
            <div className="p-4 sm:p-5 flex items-center justify-between gap-4 bg-bg/40">
              <div className="flex items-center gap-2.5 min-w-0">
                <Receipt className="h-4 w-4 shrink-0 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-fg truncate">
                    {t('home.clientPortal.mockup.invoicesTitle')}
                  </p>
                  <p className="text-[11px] text-fg-muted truncate">
                    {t('home.clientPortal.mockup.invoicePlaceholder')}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="h-2.5 w-14 rounded-full bg-border-strong" />
                <span className="h-6 w-14 rounded-full bg-accent-soft border border-accent/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientPortalSection() {
  const { t } = useTranslation();

  const bullets = [
    t('home.clientPortal.bullets.status'),
    t('home.clientPortal.bullets.files'),
    t('home.clientPortal.bullets.messages'),
    t('home.clientPortal.bullets.invoices'),
  ];

  return (
    <section className="border-t border-border bg-bg-subtle/40 py-[72px] lg:py-[128px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 space-y-7">
            <SectionHeading
              eyebrow={t('home.clientPortal.eyebrow')}
              title={t('home.clientPortal.title')}
              description={t('home.clientPortal.description')}
            />

            <ul className="space-y-3.5">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-base text-fg"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-text">
                    <Check className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link
                to="/portal/login"
                onClick={() => track('click_client_login', { location: 'home_client_portal' })}
                className={buttonStyles({ variant: 'primary', size: 'lg' })}
              >
                {t('home.clientPortal.cta')}
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <PortalMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
