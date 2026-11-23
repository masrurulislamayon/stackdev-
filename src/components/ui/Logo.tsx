import { useId } from 'react';
import { cn } from '@/src/lib/cn';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { icon: 20, text: 'text-base' },
  md: { icon: 24, text: 'text-lg' },
  lg: { icon: 30, text: 'text-2xl' },
};

export function Logo({ size = 'md', iconOnly = false, className }: LogoProps) {
  const dimensions = sizeMap[size];
  const gradientId = useId();

  return (
    <span
      className={cn(
        'font-brand inline-flex items-center gap-2.5 font-extrabold tracking-tight text-fg whitespace-nowrap shrink-0 select-none',
        className
      )}
    >
      <svg
        width={dimensions.icon}
        height={dimensions.icon}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id={gradientId} x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="55%" stopColor="var(--accent-2)" />
            <stop offset="100%" stopColor="var(--accent-3)" />
          </linearGradient>
        </defs>
        <path
          d="M12 3L3 7.5L12 12L21 7.5L12 3Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M3 12L12 16.5L21 12"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 16.5L12 21L21 16.5"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!iconOnly && (
        <span className={cn(dimensions.text, 'leading-none font-extrabold')}>
          Stack Dev
        </span>
      )}
    </span>
  );
}
