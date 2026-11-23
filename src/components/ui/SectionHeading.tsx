import type { ReactNode } from 'react';
import { SplitText } from '@/src/components/motion/SplitText';
import { cn } from '@/src/lib/cn';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  actions?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  actions,
  className,
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  const headingTypeClass =
    Heading === 'h1' ? 'type-h1' : Heading === 'h3' ? 'type-h3' : 'type-h2';

  return (
    <div
      className={cn(
        'flex flex-col gap-3.5',
        isCentered ? 'items-center text-center mx-auto max-w-2xl' : 'items-start text-left max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <p className="type-eyebrow text-accent-text">
          {eyebrow}
        </p>
      )}
      <Heading className={cn(headingTypeClass, 'text-fg')}>
        {/* h1 stays plain text so the page's main headline paints instantly (LCP). */}
        {Heading === 'h1' ? title : <SplitText text={title} />}
      </Heading>
      {description && (
        <p className="type-body-lg text-fg-muted max-w-[64ch]">
          {description}
        </p>
      )}
      {actions && (
        <div className={cn('pt-2 flex flex-wrap items-center gap-3', isCentered && 'justify-center')}>
          {actions}
        </div>
      )}
    </div>
  );
}
