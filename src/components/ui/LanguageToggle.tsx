import { useTranslation, type Locale } from '@/src/i18n';
import { track } from '@/src/lib/analytics';
import { cn } from '@/src/lib/cn';

export interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale, t } = useTranslation();

  const handleSelectLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    setLocale(nextLocale);
    track('language_change', {
      language: nextLocale,
      previous_language: locale,
    });
  };

  return (
    <div
      role="group"
      aria-label={t('controls.languageLabel')}
      className={cn(
        'inline-flex items-center rounded-full border border-border bg-bg-subtle/70 p-0.5 shrink-0',
        className
      )}
    >
      <button
        type="button"
        onClick={() => handleSelectLocale('en')}
        aria-pressed={locale === 'en'}
        aria-label={t('controls.switchToEnglish')}
        className={cn(
          'font-brand inline-flex min-h-[32px] items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer',
          'transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]',
          locale === 'en'
            ? 'bg-bg-elevated text-fg shadow-[var(--shadow-sm)]'
            : 'text-fg-muted hover:text-fg'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleSelectLocale('bn')}
        aria-pressed={locale === 'bn'}
        aria-label={t('controls.switchToBangla')}
        className={cn(
          'font-bn inline-flex min-h-[32px] items-center justify-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer',
          'transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]',
          locale === 'bn'
            ? 'bg-bg-elevated text-fg shadow-[var(--shadow-sm)]'
            : 'text-fg-muted hover:text-fg'
        )}
      >
        বাং
      </button>
    </div>
  );
}
