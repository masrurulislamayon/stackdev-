import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/src/lib/cn';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
}

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn('mx-auto w-full max-w-[1200px] px-4 sm:px-6', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
