'use client';

import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import { LucideIcon, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  mask?: 'cnpj';
}

const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18);
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: Icon, mask, type = 'text', onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (mask === 'cnpj') {
        e.target.value = formatCNPJ(e.target.value);
      }
      onChange?.(e);
    };

    const togglePassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative group w-full">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors duration-300 pointer-events-none z-10">
            <Icon size={20} />
          </div>
        )}
        <input
          ref={ref}
          type={isPassword && showPassword ? 'text' : type}
          onChange={handleChange}
          className={cn(
            'w-full bg-surface-dark/50 border border-border-dark rounded-lg py-3.5 text-white placeholder-slate-600',
            'focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-300',
            Icon ? 'pl-12' : 'pl-4',
            isPassword ? 'pr-12' : 'pr-4',
            className,
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 focus:outline-none z-10"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
