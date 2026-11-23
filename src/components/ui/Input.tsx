import { forwardRef, useId, type InputHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/src/lib/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, id, required, className, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-message`;
    const hasMessage = Boolean(error || helperText);

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-fg"
          >
            {label}
            {required && (
              <span className="ml-1 text-danger" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={hasMessage ? messageId : undefined}
          className={cn(
            'w-full min-h-[48px] rounded-[12px] border bg-bg-elevated px-4 py-2.5 text-sm text-fg placeholder:text-fg-faint',
            'transition-[border-color,box-shadow,background-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error
              ? 'border-danger focus-visible:border-danger focus-visible:shadow-[0_0_0_3px_rgba(220,38,38,0.25)]'
              : 'border-border-strong hover:border-fg-faint focus-visible:border-accent',
            className
          )}
          {...props}
        />
        {error ? (
          <p
            id={messageId}
            role="alert"
            aria-live="polite"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-danger"
          >
            <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
        ) : helperText ? (
          <p id={messageId} className="text-xs text-fg-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
