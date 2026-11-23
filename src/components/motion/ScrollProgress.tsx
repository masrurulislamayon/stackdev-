import { m, useScroll, useSpring } from 'motion/react';

/** Thin gradient progress bar pinned to the top of the viewport (transform-only animation). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left [background:var(--gradient-accent)]"
      style={{ scaleX }}
    />
  );
}
