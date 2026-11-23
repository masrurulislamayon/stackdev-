import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/src/lib/cn';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (isOpen) {
        return prev.filter((item) => item !== id);
      }
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const count = items.length;
    if (count === 0) return;

    let targetIndex: number | null = null;
    if (event.key === 'ArrowDown') {
      targetIndex = (index + 1) % count;
    } else if (event.key === 'ArrowUp') {
      targetIndex = (index - 1 + count) % count;
    } else if (event.key === 'Home') {
      targetIndex = 0;
    } else if (event.key === 'End') {
      targetIndex = count - 1;
    }

    if (targetIndex !== null) {
      event.preventDefault();
      buttonRefs.current[targetIndex]?.focus();
    }
  };

  return (
    <div
      className={cn(
        'divide-y divide-border border-y border-border',
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `${baseId}-btn-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div key={item.id} className="group">
            <h3>
              <button
                ref={(el) => {
                  buttonRefs.current[index] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="flex w-full min-h-[60px] items-center justify-between gap-6 py-5 text-left type-h4 text-fg transition-colors duration-150 hover:text-accent-text cursor-pointer"
              >
                <span>{item.title}</span>
                <span
                  className={cn(
                    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    'group-hover:border-border-strong group-hover:text-fg',
                    isOpen && 'border-accent/35 bg-accent-soft text-accent-text'
                  )}
                  aria-hidden="true"
                >
                  <Plus
                    className={cn(
                      'h-4 w-4 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      isOpen && 'rotate-45'
                    )}
                    strokeWidth={1.75}
                  />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-12 type-body text-fg-muted max-w-[64ch]">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
