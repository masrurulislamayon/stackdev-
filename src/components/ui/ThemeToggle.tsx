import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/src/hooks/useTheme';
import { useTranslation } from '@/src/i18n';
import { cn } from '@/src/lib/cn';

export interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export function ThemeToggle({ showLabel = false, className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('controls.themeToLight') : t('controls.themeToDark')}
      aria-pressed={isDark}
      className={cn(
        'inline-flex items-center justify-center gap-2 min-h-[36px] px-2.5 py-1.5 rounded-full border border-border bg-bg-subtle/70 text-fg',
        'text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer',
        'transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-bg-subtle hover:border-border-strong',
        className
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4 shrink-0 text-fg-muted" strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4 shrink-0 text-fg-muted" strokeWidth={1.5} aria-hidden="true" />
      )}
      {showLabel && <span>{isDark ? t('controls.lightMode') : t('controls.darkMode')}</span>}
    </button>
  );
}
