import { useTranslation } from '@/src/i18n';

export function SkipToContent({ targetId = 'main-content' }: { targetId?: string }) {
  const { t } = useTranslation();

  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded-full focus:[background:var(--gradient-accent)] focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-fg focus:shadow-[var(--shadow-lg)]"
    >
      {t('nav.skipToContent')}
    </a>
  );
}
