import { cn } from '@/src/lib/cn';
import { Parallax } from './Parallax';

export interface FloatingShapesProps {
  className?: string;
}

/** Decorative SVG shapes at different parallax depths. Purely ornamental. */
export function FloatingShapes({ className }: FloatingShapesProps) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <Parallax offset={70} className="absolute left-[4%] top-[16%] hidden sm:block">
        <div className="float-slow">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            <circle cx="36" cy="36" r="34" stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1.5" />
            <circle cx="36" cy="36" r="20" stroke="var(--accent-2)" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="3 6" />
          </svg>
        </div>
      </Parallax>

      <Parallax offset={45} className="absolute right-[7%] top-[12%] hidden md:block">
        <div className="float-slow float-delay-1">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 2v24M2 14h24" stroke="var(--accent-3)" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </Parallax>

      <Parallax offset={90} className="absolute bottom-[14%] left-[46%] hidden lg:block">
        <div className="float-slow float-delay-2 h-4 w-4 rounded-full [background:var(--gradient-accent)] opacity-70" />
      </Parallax>

      <Parallax offset={55} className="absolute bottom-[22%] right-[3%] hidden lg:block">
        <div className="float-slow float-delay-3">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect x="6" y="6" width="44" height="44" rx="12" stroke="var(--accent-2)" strokeOpacity="0.35" strokeWidth="1.5" transform="rotate(14 28 28)" />
          </svg>
        </div>
      </Parallax>
    </div>
  );
}
