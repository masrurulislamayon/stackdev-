import { FloatingShapes } from './FloatingShapes';

/**
 * Decorative atmosphere for inner-page intro sections: soft accent glow, masked dot grid and
 * floating shapes. Sits behind content (-z-10) and must be placed inside a `relative overflow-hidden` section.
 */
export function PageGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 14%, transparent) 0%, color-mix(in srgb, var(--accent-2) 7%, transparent) 45%, transparent 72%)',
        }}
      />
      <div className="hero-grid-bg absolute inset-0 opacity-30" />
      <FloatingShapes />
    </div>
  );
}
