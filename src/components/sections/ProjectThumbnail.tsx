import { ArrowLeftRight, Layers, Share2, Sparkles } from 'lucide-react';

function BrowserMockupFrame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] border border-border bg-bg/90 shadow-[var(--shadow-sm)] select-none flex flex-col"
    >
      {/* Traffic-light browser top bar */}
      <div className="flex items-center justify-between border-b border-border bg-bg-subtle/80 px-3.5 py-2.5 shrink-0">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/75" />
        </div>
        <div className="h-4 w-32 sm:w-40 rounded-full border border-border bg-bg-elevated/80 px-2.5 flex items-center justify-center">
          <span className="h-1 w-16 rounded-full bg-fg-faint/35" />
        </div>
        <div className="w-8" />
      </div>

      <div className="relative flex-1 p-4 sm:p-5 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export function ProjectThumbnail({
  variant,
  label,
}: {
  variant: 'converter' | 'ad-automation';
  label: string;
}) {
  if (variant === 'converter') {
    return (
      <BrowserMockupFrame label={label}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-2xl"
          style={{ background: 'color-mix(in srgb, var(--accent) 16%, transparent)' }}
        />

        <div className="relative flex h-full flex-col justify-between gap-3">
          {/* Abstract top category tabs */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-14 rounded-full bg-accent-soft border border-accent/30" />
              <span className="h-5 w-12 rounded-full border border-border bg-bg-elevated" />
              <span className="h-5 w-12 rounded-full border border-border bg-bg-elevated" />
            </div>
            <span className="h-2.5 w-10 rounded-full bg-fg-faint/25" />
          </div>

          {/* Dual unit converter blocks */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5">
            <div className="rounded-[12px] border border-border bg-bg-elevated p-3 space-y-2 shadow-[var(--shadow-sm)]">
              <div className="h-2 w-10 rounded-full bg-fg-faint/30" />
              <div className="h-4 w-3/4 rounded-[6px] bg-fg/20" />
              <div className="h-2.5 w-1/2 rounded-full bg-accent/40" />
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/35 bg-accent-soft text-accent-text">
              <ArrowLeftRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            </div>

            <div className="rounded-[12px] border border-accent/35 bg-bg-elevated p-3 space-y-2 shadow-[var(--shadow-sm)]">
              <div className="h-2 w-12 rounded-full bg-fg-faint/30" />
              <div className="h-4 w-4/5 rounded-[6px] bg-accent/35" />
              <div className="h-2.5 w-1/2 rounded-full bg-fg/20" />
            </div>
          </div>

          {/* Bottom quick scale bar */}
          <div className="flex items-center gap-2 pt-0.5">
            <span className="h-1.5 w-1/3 rounded-full [background:var(--gradient-accent)]" />
            <span className="h-1.5 w-1/4 rounded-full bg-border-strong" />
            <span className="h-1.5 w-1/5 rounded-full bg-border" />
          </div>
        </div>
      </BrowserMockupFrame>
    );
  }

  return (
    <BrowserMockupFrame label={label}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -bottom-10 h-36 w-36 rounded-full blur-2xl"
        style={{ background: 'color-mix(in srgb, var(--accent-2) 18%, transparent)' }}
      />

      <div className="relative flex h-full flex-col justify-between gap-3">
        {/* Top workflow header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-[8px] bg-accent-soft text-accent-text">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span className="h-2.5 w-24 rounded-full bg-fg/20" />
          </div>
          <span className="h-5 w-16 rounded-full bg-accent-soft border border-accent/30" />
        </div>

        {/* 3-stage pipeline wireframes */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-[12px] border border-border bg-bg-elevated p-2.5 space-y-2 shadow-[var(--shadow-sm)]">
            <Layers className="h-4 w-4 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
            <div className="h-2 w-4/5 rounded-full bg-fg/20" />
            <div className="h-1.5 w-3/5 rounded-full bg-fg-faint/25" />
          </div>

          <div className="rounded-[12px] border border-accent/35 bg-bg-elevated p-2.5 space-y-2 shadow-[var(--shadow-sm)]">
            <Sparkles className="h-4 w-4 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
            <div className="h-2 w-full rounded-full bg-accent/40" />
            <div className="h-1.5 w-2/3 rounded-full bg-fg-faint/25" />
          </div>

          <div className="rounded-[12px] border border-border bg-bg-elevated p-2.5 space-y-2 shadow-[var(--shadow-sm)]">
            <Share2 className="h-4 w-4 text-fg-muted" strokeWidth={1.5} aria-hidden="true" />
            <div className="h-2 w-3/4 rounded-full bg-fg/20" />
            <div className="h-1.5 w-1/2 rounded-full bg-fg-faint/25" />
          </div>
        </div>

        {/* Bottom campaign cards strip */}
        <div className="flex items-center justify-between gap-3 rounded-[10px] border border-border bg-bg-subtle/70 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-[4px] [background:var(--gradient-accent)]" />
            <span className="h-2 w-24 rounded-full bg-fg/20" />
          </div>
          <span className="h-2 w-12 rounded-full bg-accent/40" />
        </div>
      </div>
    </BrowserMockupFrame>
  );
}
