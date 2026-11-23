import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/src/lib/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    '[background:var(--gradient-accent)] text-accent-fg border border-transparent shadow-sm btn-shine hover:-translate-y-px hover:brightness-110 hover:shadow-[var(--shadow-lg)]',
  secondary:
    'bg-transparent text-fg border border-border-strong hover:bg-bg-subtle hover:border-border-strong',
  ghost:
    'bg-transparent text-fg border border-transparent hover:underline underline-offset-4',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-[36px] px-4 py-1.5 text-sm gap-1.5',
  md: 'min-h-[44px] px-5 py-2.5 text-sm gap-2',
  lg: 'min-h-[52px] px-7 py-3 text-base gap-2.5',
};

export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonStyleOptions = {}): string {
  return cn(
    'inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap shrink-0 cursor-pointer select-none',
    'transition-[background-color,color,border-color,transform,opacity,box-shadow,filter] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)]',
    'active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', type = 'button', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonStyles({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
