'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed button-text',
          
          // Size variants
          {
            'h-12 px-8': size === 'default',
            'h-14 px-10 text-lg': size === 'lg',
          },
          
          // Variant styles
          {
            // Primary CTA - Solid purple with glow effect
            'bg-[var(--cta-vibrant)] text-[var(--accent-primary)] hover:shadow-[0_0_20px_rgba(125,95,255,0.4)] hover:scale-[1.02] active:scale-[0.98]': variant === 'primary',
            
            // Secondary - White border with transparent fill
            'border border-[var(--accent-primary)] bg-transparent text-[var(--accent-primary)] hover:bg-[rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-[0.98]': variant === 'secondary',
          },
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
