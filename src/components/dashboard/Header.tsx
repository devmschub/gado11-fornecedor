'use client';

import { Bell, Search, User } from 'lucide-react';
import Image from 'next/image';

export function Header({ title }: { title: string }) {
  return (
    <header className="h-20 border-b border-border-dark bg-background-dark/80 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-40">
      <h1 className="text-xl font-bold text-white">{title}</h1>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Buscar por NF, Fornecedor..."
            className="bg-surface-dark border border-border-dark rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary outline-none w-64"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative w-10 h-10 rounded-full border border-border-dark bg-surface-dark flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-surface-dark"></span>
          </button>

          <div className="h-8 w-px bg-border-dark mx-2" />

          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                Agro Nutrição Ltda
              </p>
              <p className="text-xs text-gray-500">CNPJ: 12.345.678/0001-90</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-dark border border-border-dark overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
                alt="User Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
