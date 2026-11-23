import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'motion/react';
import { cn } from '@/src/lib/cn';
import { useFinePointer } from './useFinePointer';

export interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Pulls its child gently toward the cursor. Inert on touch devices and for reduced motion. */
export function Magnetic({ children, strength = 0.28, className }: MagneticProps) {
  const enabled = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      onPointerMove={enabled ? handleMove : undefined}
      onPointerLeave={enabled ? handleLeave : undefined}
      style={{ x: springX, y: springY }}
      className={cn('inline-flex', className)}
    >
      {children}
    </m.div>
  );
}
