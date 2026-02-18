'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  ArrowRightLeft,
  Briefcase,
  FileText,
  PieChart,
  LogOut,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: ArrowRightLeft, label: 'Operações', href: '/dashboard/operacoes' },
    { icon: Briefcase, label: 'Backoffice', href: '/dashboard/backoffice' },
    { icon: FileText, label: 'Extratos', href: '/dashboard/extratos' },
    { icon: PieChart, label: 'Relatórios', href: '/dashboard/relatorios' },
  ];

  return (
    <aside className="w-64 bg-surface-darker border-r border-border-dark flex flex-col h-screen fixed inset-y-0 left-0 z-50">
      {/* Branding */}
      <div className="h-20 flex items-center gap-3 px-6 border-b border-border-dark bg-surface-darker/50 backdrop-blur-md">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-background-dark font-bold text-lg">
          G
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white leading-none tracking-tight">
            GADO 11
          </span>
          <span className="text-[0.6rem] font-bold text-primary tracking-widest uppercase">
            ANTECIPA
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group text-sm font-medium',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-400 hover:text-white hover:bg-surface-dark',
              )}
            >
              <Icon
                size={20}
                className={cn(
                  'transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-gray-500 group-hover:text-white',
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border-dark bg-surface-darker">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-gray-400">Sistema Operacional</span>
        </div>

        <button
          onClick={() => (window.location.href = '/')}
          className="flex items-center gap-3 w-full px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-medium"
        >
          <LogOut size={18} />
          Sair da Plataforma
        </button>
      </div>
    </aside>
  );
}
