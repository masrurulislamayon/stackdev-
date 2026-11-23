import type { CSSProperties } from 'react';
import { cn } from '@/src/lib/cn';

export interface MarqueeProps {
  items: readonly string[];
  /** Seconds for one full loop. */
  duration?: number;
  className?: string;
}

/**
 * Decorative infinite text marquee (pure CSS, transform-only).
 * Hidden from assistive tech because it only repeats text that already exists on the page.
 */
export function Marquee({ items, duration = 48, className }: MarqueeProps) {
  if (items.length === 0) {
    return null;
  }

  const style = { '--marquee-duration': `${duration}s` } as CSSProperties;

  return (
    <div aria-hidden="true" className={cn('marquee', className)} style={style}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group">
            {items.map((item, index) => (
              <li key={`${copy}-${item}-${index}`} className="marquee-item">
                <span className={index % 2 === 0 ? 'text-outline' : 'text-fg/80'}>{item}</span>
                <span className="marquee-dot" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
