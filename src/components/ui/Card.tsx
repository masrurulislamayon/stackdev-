import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { cn } from '@/src/lib/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
  spotlight?: boolean;
  /** Optional 3D pointer tilt (fine pointers only, off for reduced motion). */
  tilt?: boolean;
  children: ReactNode;
}

function canTilt(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  return (
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-7 sm:p-8',
};

export function Card({
  padding = 'md',
  interactive = false,
  spotlight = interactive,
  tilt = false,
  className,
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: CardProps) {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (spotlight) {
      event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
    }
    if (tilt && canTilt()) {
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      event.currentTarget.style.setProperty('--ry', `${(px * 6).toFixed(2)}deg`);
      event.currentTarget.style.setProperty('--rx', `${(-py * 6).toFixed(2)}deg`);
    }
    onMouseMove?.(event);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    if (tilt) {
      event.currentTarget.style.setProperty('--rx', '0deg');
      event.currentTarget.style.setProperty('--ry', '0deg');
    }
    onMouseLeave?.(event);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'card-elevated text-fg',
        interactive &&
          'group/card transition-[border-color,transform,box-shadow] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-border-strong hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]',
        spotlight && 'spotlight',
        tilt && '[transform:perspective(1000px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
