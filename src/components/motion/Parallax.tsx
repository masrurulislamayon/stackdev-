import { useRef, type ReactNode } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react';

export interface ParallaxProps {
  children: ReactNode;
  /** Vertical travel in px (positive = moves up faster than scroll). */
  offset?: number;
  className?: string;
}

/** Scroll-linked vertical parallax layer (transform-only). Static for reduced motion. */
export function Parallax({ children, offset = 40, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <m.div ref={ref} style={reduceMotion ? undefined : { y }} className={className}>
      {children}
    </m.div>
  );
}
