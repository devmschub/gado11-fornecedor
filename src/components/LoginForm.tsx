'use client';

import { useState } from 'react';
import { ArrowRight, Building2, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      alert('Login simulado com sucesso!');
    }, 1500);
  };

  return (
    <div className="glass-card p-6 md:p-10 rounded-[2.5rem] w-full max-w-md mx-auto relative overflow-hidden group border border-white/10 shadow-2xl shadow-black/50">
      {/* Subtle internal glow */}
      <div className="absolute top-[-20%] right-[-20%] w-80 h-80 bg-brand-green/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-brand-green/15 transition-colors duration-700" />

      <div className="relative z-10 font-sans">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
            Acesse sua conta
          </h2>
          <p className="text-gray-400 font-medium">
            Gerencie suas antecipações
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-green uppercase tracking-wider ml-1">
              CNPJ da Empresa
            </label>
            <Input
              icon={Building2}
              placeholder="00.000.000/0000-00"
              mask="cnpj"
              required
              className="bg-white/5 border-white/10 focus:bg-white/10 h-14"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
              Senha de Acesso
            </label>
            <Input
              icon={Lock}
              type="password"
              placeholder="••••••••"
              required
              className="bg-white/5 border-white/10 focus:bg-white/10 h-14"
            />
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs font-semibold text-brand-green hover:text-brand-green-hover transition-colors underline decoration-brand-green/30 hover:decoration-brand-green"
            >
              Esqueceu a senha?
            </a>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full mt-2 group/btn h-14 text-forest-green font-extrabold"
            icon={ArrowRight}
          >
            {loading ? 'Entrando...' : 'Entrar na plataforma'}
          </Button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            OU
          </span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <Button
          variant="outline"
          className="w-full text-sm font-bold border-white/20 h-12 hover:bg-white/5"
        >
          Quero ser um fornecedor
        </Button>
      </div>
    </div>
  );
}
