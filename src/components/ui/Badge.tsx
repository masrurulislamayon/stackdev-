import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/src/lib/cn';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: ReactNode;
  pulseDot?: boolean;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-bg-subtle text-fg-muted border-border',
  primary: 'bg-accent-soft text-accent-text border-accent/25',
  success: 'bg-success-soft text-success-foreground border-success/25',
  warning: 'bg-warning-soft text-warning-foreground border-warning/25',
  danger: 'bg-danger-soft text-danger-foreground border-danger/25',
};

export function Badge({
  variant = 'neutral',
  icon,
  pulseDot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] uppercase whitespace-nowrap shrink-0',
        '[html[lang="bn"]_&]:tracking-normal [html[lang="bn"]_&]:normal-case',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-65 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}
      {icon && (
        <span className="shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}
