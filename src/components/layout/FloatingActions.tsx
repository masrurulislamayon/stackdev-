import { MessageCircle, Phone } from 'lucide-react';
import { BRAND } from '@/src/data/brand';
import { useTranslation } from '@/src/i18n';
import { track } from '@/src/lib/analytics';

export function FloatingActions() {
  const { t } = useTranslation();

  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2.5"
    >
      <a
        href={BRAND.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('click_whatsapp', { location: 'floating_actions' })}
        aria-label={t('floating.whatsappAria')}
        title={t('common.messageWhatsApp')}
        className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full glass text-fg shadow-[var(--shadow-md)] transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-border-strong hover:text-success active:scale-95"
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full right-0 mb-2 hidden sm:block whitespace-nowrap rounded-full glass px-3 py-1 text-xs font-medium text-fg opacity-0 shadow-[var(--shadow-sm)] transition-opacity duration-150 group-hover:opacity-100"
        >
          {t('common.messageWhatsApp')}
        </span>
      </a>
      <a
        href={BRAND.phoneHref}
        onClick={() => track('click_call', { location: 'floating_actions' })}
        aria-label={t('floating.callAria')}
        title={BRAND.phoneDisplay}
        className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full [background:var(--gradient-accent)] text-accent-fg shadow-[var(--shadow-md)] transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-lg)] active:scale-95"
      >
        <Phone className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        <span
          role="tooltip"
          className="pointer-events-none absolute bottom-full right-0 mb-2 hidden sm:block whitespace-nowrap rounded-full glass px-3 py-1 font-mono text-xs font-medium text-fg opacity-0 shadow-[var(--shadow-sm)] transition-opacity duration-150 group-hover:opacity-100"
        >
          {BRAND.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
