import type { ReactNode } from 'react';
import { Reveal } from '@/src/components/motion/Reveal';
import { Container } from '@/src/components/ui/Container';
import { cn } from '@/src/lib/cn';

export interface SectionBandProps {
  id?: string;
  bordered?: boolean;
  className?: string;
  children: ReactNode;
}

export function SectionBand({
  id,
  bordered = true,
  className,
  children,
}: SectionBandProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-[72px] lg:py-24 scroll-mt-24',
        bordered && 'border-b border-border',
        className
      )}
    >
      <Container>
        <Reveal y={20} amount={0.04}>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
