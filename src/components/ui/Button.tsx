'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: LucideIcon;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', icon: Icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'w-full py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary'
            ? 'bg-brand-green text-forest-green hover:bg-brand-green-hover shadow-lg shadow-brand-green/20'
            : 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40',
          className,
        )}
        {...props}
      >
        {children}
        {Icon && <Icon size={20} />}
      </button>
    );
  },
);
Button.displayName = 'Button';
export { Button };
