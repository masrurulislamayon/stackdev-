import { LanguageToggle, Logo, ThemeToggle } from '@/src/components/ui';
import { useTranslation } from '@/src/i18n';

export function StyleguideHeader() {
  const { t } = useTranslation();

  return (
    <div className="sticky top-3 z-40 px-3 sm:px-4 pointer-events-none">
      <header className="pointer-events-auto mx-auto h-16 w-full max-w-[1100px] rounded-full glass px-4 sm:px-6 shadow-[var(--shadow-sm)]">
        <div className="flex h-full items-center justify-between gap-6">
          <a href="#main-content" className="whitespace-nowrap shrink-0 rounded-full px-1 py-1">
            <Logo size="md" />
          </a>

          <nav
            aria-label="Primary navigation preview"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-fg-muted"
          >
            <a href="#main-content" className="hover:text-fg transition-colors whitespace-nowrap shrink-0">
              {t('nav.home')}
            </a>
            <a href="#colors" className="hover:text-fg transition-colors whitespace-nowrap shrink-0">
              {t('nav.services')}
            </a>
            <a href="#typography" className="hover:text-fg transition-colors whitespace-nowrap shrink-0">
              {t('nav.pricing')}
            </a>
            <a href="#forms" className="hover:text-fg transition-colors whitespace-nowrap shrink-0">
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}
