import { useEffect, useState } from 'react';
import { m, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/src/lib/cn';
import { useFinePointer } from './useFinePointer';

const INTERACTIVE_SELECTOR = 'a[href], button, [role="button"], summary, label[for], select, [data-cursor="hover"]';
const TEXT_SELECTOR =
  'input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]), textarea, [contenteditable="true"]';

type CursorState = 'hidden' | 'idle' | 'hover' | 'text';

/**
 * Cursor follower: a spring-trailing ring plus an exact-position dot.
 * The native cursor is intentionally left visible (accessibility); only fine-pointer, motion-ok devices get this.
 */
export function CustomCursor() {
  const enabled = useFinePointer();
  const [state, setState] = useState<CursorState>('hidden');
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return;
      }
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(TEXT_SELECTOR)) {
        setState('text');
      } else if (target?.closest(INTERACTIVE_SELECTOR)) {
        setState('hover');
      } else {
        setState('idle');
      }
    };
    const handleLeave = () => setState('hidden');

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90]"
        style={{ x: ringX, y: ringY }}
      >
        <m.div
          className={cn(
            '-ml-[18px] -mt-[18px] h-9 w-9 rounded-full border',
            state === 'hover' ? 'border-accent bg-accent/10' : 'border-accent/55'
          )}
          animate={{
            scale: state === 'hover' ? 1.6 : state === 'text' ? 0.35 : 1,
            opacity: state === 'hidden' ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </m.div>
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90]"
        style={{ x, y }}
      >
        <m.div
          className="-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-accent"
          animate={{
            scale: state === 'hover' ? 0 : 1,
            opacity: state === 'hidden' || state === 'text' ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </m.div>
    </>
  );
}
