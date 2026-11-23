import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { m } from 'motion/react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { buttonStyles, LanguageToggle, Logo, ThemeToggle } from '@/src/components/ui';
import { useTranslation, type TranslationKey } from '@/src/i18n';
import { cn } from '@/src/lib/cn';

const NAV_ITEMS: ReadonlyArray<{ to: string; labelKey: TranslationKey }> = [
  { to: '/services', labelKey: 'nav.services' },
  { to: '/pricing', labelKey: 'nav.pricing' },
  { to: '/work', labelKey: 'nav.work' },
  { to: '/blog', labelKey: 'nav.blog' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/contact', labelKey: 'nav.contact' },
];

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 12);

      // Hide on scroll down, reveal on scroll up (ignore tiny jitters).
      const delta = currentY - lastScrollYRef.current;
      if (Math.abs(delta) > 6) {
        setIsHidden(currentY > 140 && delta > 0);
        lastScrollYRef.current = currentY;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search]);

  // Body scroll lock, focus management, and focus trap inside mobile drawer
  useEffect(() => {
    if (!isMenuOpen) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        menuButtonRef.current?.focus();
      }
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 10);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) {
        return;
      }

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={cn(
          'sticky top-3 z-40 px-3 sm:px-4 pointer-events-none',
          'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none',
          isHidden && '-translate-y-[calc(100%+1.5rem)]'
        )}
      >
        <header
          onFocusCapture={() => setIsHidden(false)}
          className={cn(
            'pointer-events-auto mx-auto w-full max-w-[1100px] rounded-full glass',
            'transition-[height,padding,box-shadow,border-color,background-color] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]',
            isScrolled
              ? 'h-14 px-3.5 sm:px-5 shadow-[var(--shadow-md)] border-border-strong'
              : 'h-16 px-4 sm:px-6 shadow-[var(--shadow-sm)] border-border'
          )}
        >
          <div className="flex h-full items-center justify-between gap-3 xl:gap-6">
            <Link
              to="/"
              className="whitespace-nowrap shrink-0 rounded-full px-1 py-1"
              aria-label="Stack Dev Home"
            >
              <Logo size="md" />
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden xl:flex items-center gap-6 text-sm font-medium"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'nav-link relative whitespace-nowrap shrink-0 py-1.5 transition-colors duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      isActive
                        ? 'text-fg font-semibold'
                        : 'text-fg-muted hover:text-fg'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{t(item.labelKey)}</span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="absolute left-1/2 -bottom-0.5 h-1 w-3.5 -translate-x-1/2 rounded-full [background:var(--gradient-accent)]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <LanguageToggle />
              <ThemeToggle />

              <Link
                to="/contact"
                className={buttonStyles({
                  variant: 'primary',
                  size: 'sm',
                  className: 'hidden sm:inline-flex',
                })}
              >
                {t('nav.freeConsultation')}
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav-drawer"
                aria-label={t('controls.menuOpen')}
                className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-subtle/80 text-fg hover:bg-bg-subtle hover:border-border-strong transition-colors duration-150 cursor-pointer shrink-0"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-nav-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('nav.mobileMenuTitle')}
          className="fixed inset-0 z-50 flex flex-col bg-bg/95 backdrop-blur-xl text-fg xl:hidden"
        >
          <div className="flex h-20 items-center justify-between border-b border-border px-5 sm:px-8">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Stack Dev Home"
              className="whitespace-nowrap shrink-0 rounded-full"
            >
              <Logo size="md" />
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label={t('controls.menuClose')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-bg-elevated text-fg hover:bg-bg-subtle transition-colors duration-150 cursor-pointer"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-8 sm:px-8">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, index) => (
                <m.div
                  key={item.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'flex min-h-[52px] items-center justify-between rounded-[16px] px-4 font-display text-2xl font-bold tracking-tight transition-colors duration-150',
                        isActive
                          ? 'bg-accent-soft text-accent-text'
                          : 'text-fg hover:bg-bg-subtle'
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{t(item.labelKey)}</span>
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full [background:var(--gradient-accent)]"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </m.div>
              ))}
            </nav>

            <div className="mt-8 space-y-5 border-t border-border pt-6">
              <div className="grid grid-cols-1 gap-3">
                <Link
                  to="/contact"
                  className={buttonStyles({
                    variant: 'primary',
                    size: 'md',
                    className: 'w-full',
                  })}
                >
                  {t('nav.freeConsultation')}
                </Link>
              </div>

              <div className="flex items-center justify-between pt-2">
                <LanguageToggle />
                <ThemeToggle showLabel />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
