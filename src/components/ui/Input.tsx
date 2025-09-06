'use client';

import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            // Base styles - minimalist with bottom line
            'w-full bg-transparent text-[var(--accent-primary)] placeholder:text-[var(--accent-secondary)] border-0 border-b border-[var(--border-color)] px-0 py-3 text-base focus:outline-none focus:ring-0 transition-colors duration-200',
            
            // Focus state - turns purple
            'focus:border-[var(--cta-vibrant)]',
            
            // Error state
            error && 'border-red-500 focus:border-red-500',
            
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
