'use client';

import { Header } from '@/components/dashboard/Header';
import {
  CheckCircle2,
  Clock,
  FileEdit,
  BadgeCheck,
  MoreHorizontal,
  ChevronRight,
  Filter,
} from 'lucide-react';

const KANBAN_COLUMNS = [
  { id: 'available', title: 'Disponível', color: 'bg-blue-500', count: 3 },
  { id: 'signing', title: 'Em Assinatura', color: 'bg-yellow-500', count: 2 },
  { id: 'processing', title: 'Processando', color: 'bg-purple-500', count: 1 },
  { id: 'liquidated', title: 'Liquidado', color: 'bg-green-500', count: 45 },
];

const KANBAN_ITEMS = [
  {
    id: 1,
    column: 'available',
    title: 'Conf. Boi Verde',
    nf: 'NF-e 004592',
    value: 'R$ 45.000,00',
    liquid: 'R$ 44.100,00',
    date: '15/04/2024',
    badge: 'MT',
  },
  {
    id: 2,
    column: 'available',
    title: 'Agropecuária JBS',
    nf: 'NF-e 004598',
    value: 'R$ 82.300,00',
    liquid: 'R$ 80.650,00',
    date: '18/04/2024',
    badge: 'GO',
  },
  {
    id: 3,
    column: 'available',
    title: 'Conf. São José',
    nf: 'NF-e 004601',
    value: 'R$ 15.200,00',
    liquid: 'R$ 14.890,00',
    date: '20/04/2024',
  },
  {
    id: 4,
    column: 'signing',
    title: 'Agro Santa Maria',
    nf: 'NF-e 004588',
    value: 'R$ 120.000,00',
    liquid: 'R$ 117.600,00',
    status: 'Pendente',
    tax: 'Tx. 1.8% a.m',
  },
  {
    id: 5,
    column: 'signing',
    title: 'Fazenda Ouro Branco',
    nf: 'NF-e 004571',
    value: 'R$ 78.000,00',
    liquid: 'R$ 76.440,00',
  },
  {
    id: 6,
    column: 'processing',
    title: 'Minerva Foods',
    nf: 'NF-e 004565',
    value: 'R$ 210.000,00',
    liquid: 'R$ 205.800,00',
    steps: [
      { label: 'Validação Jurídica', done: true, time: '14:02' },
      { label: 'Liberação TED/PIX', done: false, time: 'Aguardando...' },
    ],
  },
  {
    id: 7,
    column: 'liquidated',
    title: 'Conf. Boi Gordo',
    nf: 'NF-e 004540',
    value: 'R$ 50.000,00',
    liquid: 'R$ 49.000,00',
    paidAt: '10/03/2024 - 10:30',
  },
  {
    id: 8,
    column: 'liquidated',
    title: 'JBS S.A.',
    nf: 'NF-e 004532',
    value: 'R$ 135.450,00',
    liquid: 'R$ 132.700,00',
    paidAt: '09/03/2024 - 15:45',
  },
  {
    id: 9,
    column: 'liquidated',
    title: 'Agrovale',
    nf: 'NF-e 004520',
    value: 'R$ 22.000,00',
    paidAt: '08/03/2024',
  },
];

export default function OperacoesPage() {
  return (
    <>
      <Header title="Operações" />

      <div className="flex items-center justify-between mb-8 mt-6">
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por Nº NF ou Confinamento"
              className="bg-surface-dark border border-border-dark rounded-xl pl-4 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary w-80"
            />
          </div>
          <button className="bg-surface-dark hover:bg-surface-darker border border-border-dark px-4 py-2.5 rounded-xl text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium h-fit">
            <span className="material-icons text-base">calendar_today</span>
            01 Mar - 31 Mar, 2024
          </button>
        </div>

        <div className="flex gap-3">
          <button className="bg-surface-dark hover:bg-surface-darker border border-border-dark px-4 py-2.5 rounded-xl text-white transition-colors flex items-center gap-2 text-sm font-bold">
            Exportar Excel
          </button>
          <button className="bg-primary hover:bg-primary-hover text-background-dark px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary/20">
            + Nova NF-e
          </button>
        </div>
      </div>

      <div className="flex h-full gap-6 overflow-x-auto pb-4 custom-scrollbar">
        {KANBAN_COLUMNS.map((col) => (
          <div
            key={col.id}
            className="min-w-[320px] max-w-[320px] flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${col.color}`}></div>
                <h3 className="font-bold text-gray-300 uppercase text-xs tracking-wider">
                  {col.title}
                </h3>
                <span className="bg-surface-dark border border-border-dark text-gray-500 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  {col.count}
                </span>
              </div>
              <span className="text-gray-600 text-[10px] font-mono">
                R$ ...
              </span>
            </div>

            <div className="space-y-4 flex-1">
              {KANBAN_ITEMS.filter((item) => item.column === col.id).map(
                (item) => (
                  <div
                    key={item.id}
                    className={`bg-surface-dark border border-border-dark rounded-xl p-4 hover:border-primary/50 transition-all group relative ${col.id === 'signing' ? 'border-l-4 border-l-yellow-500' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase font-mono mb-1">
                          {item.nf}
                        </p>
                        <h4 className="font-bold text-white text-base">
                          {item.title}
                        </h4>
                      </div>
                      {item.badge && (
                        <span className="bg-surface-darker text-gray-400 text-[10px] font-bold px-2 py-1 rounded border border-border-dark">
                          {item.badge}
                        </span>
                      )}
                      {item.column === 'liquidated' && (
                        <div className="bg-green-500/10 text-green-500 rounded-full p-1">
                          <CheckCircle2 size={14} />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 mb-4">
                      <p className="text-[10px] text-gray-500 uppercase font-bold">
                        Valor Líquido
                      </p>
                      <p
                        className={`text-xl font-bold ${col.id === 'liquidated' ? 'text-green-500' : 'text-white'}`}
                      >
                        {item.value}
                      </p>
                      {item.column === 'available' && (
                        <p className="text-[10px] text-gray-600">
                          Vencimento: {item.date}
                        </p>
                      )}
                    </div>

                    {col.id === 'available' && (
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-dark text-gray-500 text-xs">
                        <Clock size={14} />
                        <span className="flex-1">2h atrás</span>
                        <button className="text-blue-400 hover:text-blue-300 font-bold text-xs uppercase bg-blue-400/10 px-3 py-1.5 rounded transition-colors">
                          Simular
                        </button>
                      </div>
                    )}

                    {col.id === 'signing' && (
                      <div className="mt-2">
                        {item.tax && (
                          <div className="flex justify-between text-[10px] items-center mb-3 bg-surface-darker p-2 rounded border border-border-dark">
                            <span className="text-gray-400">Valor Líquido</span>
                            <span className="text-yellow-500 font-mono">
                              {item.tax}
                            </span>
                          </div>
                        )}
                        <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-yellow-500/20">
                          <FileEdit size={14} />
                          Assinar Digitalmente
                        </button>
                      </div>
                    )}

                    {col.id === 'processing' && item.steps && (
                      <div className="mt-4 pt-4 border-t border-border-dark space-y-3">
                        {item.steps.map((step, idx) => (
                          <div key={idx} className="flex gap-3 relative">
                            <div
                              className={`mt-0.5 w-2 h-2 rounded-full ${step.done ? 'bg-green-500' : 'bg-gray-600 animate-pulse'}`}
                            ></div>
                            <div className="flex-1">
                              <p
                                className={`text-xs font-medium ${step.done ? 'text-gray-300' : 'text-gray-500'}`}
                              >
                                {step.label}
                              </p>
                              <p className="text-[10px] text-gray-600">
                                {step.time}
                              </p>
                            </div>
                            {idx !== item.steps.length - 1 && (
                              <div className="absolute left-[3.5px] top-2.5 w-px h-8 bg-border-dark -z-10"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {col.id === 'liquidated' && (
                      <div className="mt-4 pt-4 border-t border-border-dark">
                        <p className="text-[10px] text-gray-500 mb-2">
                          Pago em: {item.paidAt}
                        </p>
                        <button className="w-full bg-surface-darker hover:bg-surface-dark border border-gray-700 text-gray-300 hover:text-white text-xs font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
                          <BadgeCheck size={14} />
                          Comprovante
                        </button>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
