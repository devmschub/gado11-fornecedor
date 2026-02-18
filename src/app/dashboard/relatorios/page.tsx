'use client';

import { Header } from '@/components/dashboard/Header';
import {
  BarChart,
  PieChart,
  TrendingUp,
  Download,
  Calendar,
  FileText,
} from 'lucide-react';

export default function RelatoriosPage() {
  return (
    <>
      <Header title="Relatórios Gerenciais" />

      <div className="flex flex-col md:flex-row items-start gap-8 mt-8">
        {/* Reports List */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <FileText className="text-primary" size={20} />
              Relatórios Disponíveis
            </h3>

            <div className="space-y-3">
              {[
                'Demonstrativo de Custos Operacionais',
                'Informe de Rendimentos 2023',
                'Extrato Consolidado Trimestral',
                'Relatório de Performance de Crédito',
              ].map((report, i) => (
                <div
                  key={i}
                  className="group p-4 rounded-xl bg-surface-darker border border-border-dark hover:border-primary/50 transition-all cursor-pointer flex items-center justify-between"
                >
                  <span className="text-sm text-gray-300 group-hover:text-white">
                    {report}
                  </span>
                  <button className="text-gray-600 group-hover:text-primary transition-colors">
                    <Download size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-6 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-primary font-bold text-lg mb-2">
                Precisa de algo específico?
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Solicite um relatório personalizado para nossa equipe
                financeira.
              </p>
              <button className="bg-primary text-background-dark font-bold text-sm px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
                Falar com Analista
              </button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-20">
              <PieChart size={120} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Visual Analytics */}
        <div className="flex-1 w-full space-y-6">
          <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold flex items-center gap-2">
                <TrendingUp className="text-primary" size={20} />
                Volume Antecipado (Últimos 6 meses)
              </h3>
              <div className="flex items-center gap-2 bg-surface-darker rounded-lg p-1 border border-border-dark">
                <button className="px-3 py-1 rounded-md text-xs font-bold bg-primary text-background-dark">
                  Mensal
                </button>
                <button className="px-3 py-1 rounded-md text-xs font-bold text-gray-500 hover:text-white">
                  Anual
                </button>
              </div>
            </div>

            {/* Mock Chart */}
            <div className="h-64 w-full flex items-end justify-between gap-4 px-4 pt-8">
              {[35, 50, 45, 70, 60, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="relative w-full bg-surface-darker rounded-t-xl overflow-hidden h-full flex items-end">
                    <div
                      className="w-full bg-primary/20 group-hover:bg-primary transition-all duration-500"
                      style={{ height: `${h}%` }}
                    ></div>
                    {/* Tooltip value */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background-dark border border-border-dark text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                      R$ {h * 10}.000
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium group-hover:text-primary transition-colors">
                    {['Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <PieChart size={18} className="text-blue-400" />
                Composição de Taxas
              </h3>
              <div className="flex items-center gap-6">
                <div className="w-32 h-32 rounded-full border-[12px] border-surface-darker relative flex items-center justify-center">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-full h-full transform -rotate-90"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      className="fill-none stroke-blue-500/20"
                      strokeWidth="32"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      className="fill-none stroke-blue-500"
                      strokeWidth="32"
                      strokeDasharray="60 100"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      className="fill-none stroke-primary"
                      strokeWidth="32"
                      strokeDasharray="25 100"
                      strokeDashoffset="-60"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="16"
                      className="fill-none stroke-yellow-500"
                      strokeWidth="32"
                      strokeDasharray="15 100"
                      strokeDashoffset="-85"
                    />
                  </svg>
                  <div className="absolute inset-0 m-auto w-20 h-20 bg-surface-dark rounded-full"></div>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>{' '}
                      Deságio (60%)
                    </span>
                    <span className="text-white font-mono">1.8%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>{' '}
                      IOF (25%)
                    </span>
                    <span className="text-white font-mono">0.38%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>{' '}
                      TAC (15%)
                    </span>
                    <span className="text-white font-mono">FIXO</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-yellow-500" />
                Prazo Médio (DSO)
              </h3>
              <div className="flex items-end justify-between h-32 mt-4">
                <div className="text-center w-full">
                  <span className="block text-4xl font-bold text-white mb-1">
                    45
                  </span>
                  <span className="text-xs text-uppercase font-bold text-gray-500 tracking-wider">
                    DIAS
                  </span>
                </div>
                <div className="w-px h-full bg-border-dark mx-4"></div>
                <div className="text-left w-full">
                  <p className="text-xs text-gray-400 mb-2">
                    Média de antecipação em relação ao vencimento original.
                  </p>
                  <p className="text-xs text-primary font-bold">
                    +5 dias vs. mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
