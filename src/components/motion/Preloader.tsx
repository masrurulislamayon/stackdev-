import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'motion/react';
import { Logo } from '@/src/components/ui';
import { EASE_OUT } from './constants';

const SEEN_KEY = 'stackdev-intro-seen';
const INTRO_MS = 1100;

function shouldPlayIntro(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }
  try {
    return window.sessionStorage.getItem(SEEN_KEY) !== '1';
  } catch {
    return true;
  }
}

/**
 * Short brand intro curtain, played once per browser session.
 * The real page renders underneath from the first frame, so it never delays content or LCP.
 */
export function Preloader() {
  const [visible, setVisible] = useState(shouldPlayIntro);

  useEffect(() => {
    if (!visible) {
      return;
    }
    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        // Storage can be unavailable (private mode); the intro simply replays next load.
      }
      setVisible(false);
    }, INTRO_MS);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          key="intro"
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <div className="flex flex-col items-center gap-6">
            <m.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            >
              <Logo size="lg" />
            </m.div>
            <div className="h-px w-40 overflow-hidden bg-border">
              <m.div
                className="h-full w-full origin-left [background:var(--gradient-accent)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTRO_MS / 1000 - 0.1, ease: EASE_OUT }}
              />
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
