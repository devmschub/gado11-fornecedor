'use client';

import { useState } from 'react';
import {
  TrendingUp,
  Gauge, // Speed equivalent
  ShieldCheck, // Verified User equivalent
  Building2,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Globe, // Public equivalent
  CheckCircle, // Verified equivalent
  BadgeCheck,
} from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';

export default function Home() {
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center font-sans overflow-hidden relative text-slate-100 bg-background-dark">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>

      <main className="w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Branding Section */}
        <div className="hidden lg:flex flex-col space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp
                className="text-background-dark font-bold w-8 h-8"
                strokeWidth={3}
              />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              GADO 11 <span className="text-primary">ANTECIPA</span>
            </h1>
          </div>

          <div className="space-y-4">
            <h2 className="text-5xl font-extrabold leading-tight">
              Transforme suas notas fiscais em{' '}
              <span className="text-primary italic">liquidez imediata.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md">
              O portal definitivo para o fornecedor Gado 11. Antecipe seus
              recebíveis de forma simples, segura e 100% digital.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="p-4 border border-border-dark rounded-xl bg-surface-dark/40">
              <Gauge className="text-primary mb-2 w-8 h-8" />
              <h3 className="font-bold">Agilidade</h3>
              <p className="text-sm text-slate-400">
                Crédito em conta em poucas horas após aprovação.
              </p>
            </div>
            <div className="p-4 border border-border-dark rounded-xl bg-surface-dark/40">
              <ShieldCheck className="text-primary mb-2 w-8 h-8" />
              <h3 className="font-bold">Segurança</h3>
              <p className="text-sm text-slate-400">
                Autenticação robusta e criptografia de ponta.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 rounded-full border-2 border-background-dark overflow-hidden bg-background-dark"
                >
                  <Image src={src} alt="User" fill className="object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400">
              +500 fornecedores já utilizam nossa antecipação diariamente.
            </p>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="w-full max-w-md mx-auto">
          <div className="glass-effect p-8 md:p-10 rounded-xl shadow-2xl">
            {/* Mobile Branding */}
            <div className="lg:hidden flex flex-col items-center mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-2">
                <TrendingUp
                  className="text-background-dark font-bold w-6 h-6"
                  strokeWidth={3}
                />
              </div>
              <h1 className="text-xl font-extrabold tracking-tight text-white uppercase">
                Gado 11 Antecipa
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Portal do Fornecedor
              </h2>
              <p className="text-slate-400 text-sm">
                Entre com suas credenciais de acesso corporativo.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label
                  className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1"
                  htmlFor="cnpj"
                >
                  CNPJ da Empresa
                </label>
                <Input
                  id="cnpj"
                  icon={Building2}
                  placeholder="00.000.000/0000-00"
                  mask="cnpj"
                  className="bg-surface-dark/50 border-border-dark placeholder-slate-600 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label
                    className="text-xs font-semibold uppercase tracking-wider text-slate-400"
                    htmlFor="password"
                  >
                    Senha de Acesso
                  </label>
                  <a
                    className="text-xs font-medium text-primary hover:underline"
                    href="#"
                  >
                    Esqueci minha senha
                  </a>
                </div>
                {/* Input component handles password toggle internally as per recent update */}
                <Input
                  id="password"
                  type="password"
                  icon={Lock}
                  placeholder="••••••••"
                  className="bg-surface-dark/50 border-border-dark placeholder-slate-600 focus:ring-primary/40 focus:border-primary"
                />
              </div>

              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-4 h-4 rounded border-border-dark bg-surface-dark text-primary focus:ring-primary focus:ring-offset-background-dark appearance-none checked:bg-primary checked:border-transparent transition-colors cursor-pointer relative"
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label
                  className="text-sm text-slate-400 cursor-pointer select-none"
                  htmlFor="remember"
                >
                  Lembrar este dispositivo
                </label>
              </div>

              <button className="w-full bg-primary text-background-dark font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group cursor-pointer">
                <span>ANTECIPAR NOTAS FISCAIS</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border-dark">
              <div className="text-center space-y-4">
                <p className="text-sm text-slate-400">
                  Ainda não é um fornecedor parceiro?
                </p>
                <button className="w-full border border-primary/40 text-primary hover:bg-primary/10 font-semibold py-3 rounded-lg transition-all cursor-pointer">
                  Quero ser um fornecedor
                </button>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center space-x-4 opacity-50">
              <div className="flex items-center space-x-1">
                <BadgeCheck className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Conexão Segura
                </span>
              </div>
              <div className="h-1 w-1 bg-slate-600 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  MongoDB Atlas
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <footer className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-500 font-medium uppercase tracking-widest">
            <a className="hover:text-primary transition-colors" href="#">
              Política de Privacidade
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Termos de Uso
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Suporte Gado 11
            </a>
          </footer>
        </div>
      </main>

      {/* Floating Background Element */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
    </div>
  );
}
