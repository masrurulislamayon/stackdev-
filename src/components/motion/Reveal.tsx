import type { ReactNode } from 'react';
import { m } from 'motion/react';
import { EASE_OUT } from './constants';

export interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  amount?: number;
  className?: string;
}

/** Fade-up on scroll into view. Honors reduced motion through the app-level MotionConfig. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  amount = 0.1,
  className,
}: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </m.div>
  );
}
