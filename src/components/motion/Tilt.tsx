import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'motion/react';
import { useFinePointer } from './useFinePointer';

export interface TiltProps {
  children: ReactNode;
  /** Maximum rotation in degrees. */
  max?: number;
  className?: string;
}

/** 3D pointer-follow tilt. Inert on touch devices and for reduced motion. */
export function Tilt({ children, max = 6, className }: TiltProps) {
  const enabled = useFinePointer();
  const rotateXTarget = useMotionValue(0);
  const rotateYTarget = useMotionValue(0);
  const rotateX = useSpring(rotateXTarget, { stiffness: 150, damping: 18, mass: 0.4 });
  const rotateY = useSpring(rotateYTarget, { stiffness: 150, damping: 18, mass: 0.4 });

  const handleMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateYTarget.set(px * max * 2);
    rotateXTarget.set(-py * max * 2);
  };

  const handleLeave = () => {
    rotateXTarget.set(0);
    rotateYTarget.set(0);
  };

  return (
    <m.div
      onPointerMove={enabled ? handleMove : undefined}
      onPointerLeave={enabled ? handleLeave : undefined}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={className}
    >
      {children}
    </m.div>
  );
}
