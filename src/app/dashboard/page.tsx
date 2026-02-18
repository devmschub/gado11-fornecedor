'use client';

import {
  Building2,
  Wallet,
  CalendarDays,
  ArrowUpRight,
  ArrowDownToLine,
  MoreHorizontal,
  FileText,
  BadgeCheck,
  Ban,
  Search,
  Filter,
  Info,
  LayoutDashboard,
} from 'lucide-react';
import { useState } from 'react';
import { Header } from '@/components/dashboard/Header';

// Mock Data for Invoices
const INVOICES = [
  {
    id: 1,
    key: '4421 1234 5678 9012 3456',
    supplier: 'Fazenda Santa Fé',
    status: 'Disponível',
    value: 'R$ 85.000,00',
    dueDate: '05/12/2023',
  },
  {
    id: 2,
    key: '4421 9876 5432 1098 7654',
    supplier: 'Boiada Azul Agro',
    status: 'Processando',
    value: 'R$ 42.500,00',
    dueDate: '20/12/2023',
  },
  {
    id: 3,
    key: '4421 1122 3344 5566 7788',
    supplier: 'Agropecuária Girassol',
    status: 'Liquidada',
    value: 'R$ 120.000,00',
    dueDate: '28/11/2023',
  },
  {
    id: 4,
    key: '4421 5566 7788 9900 1122',
    supplier: 'Fazenda Reunidas',
    status: 'Disponível',
    value: 'R$ 15.000,00',
    dueDate: '10/11/2023',
  },
];

export default function DashboardPage() {
  const [selectedInvoices, setSelectedInvoices] = useState<number[]>([]);

  const toggleInvoice = (id: number) => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <>
      <Header title="Dashboard Financeiro" />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-6">
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet size={80} className="text-primary" />
          </div>
          <div className="flex items-center gap-3 mb-2 text-gray-400 text-sm font-medium">
            <div className="w-8 h-8 rounded-lg bg-surface-darker/50 flex items-center justify-center border border-border-dark">
              <Wallet size={16} className="text-blue-400" />
            </div>
            Limite Disponível
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
            R$ 1.250.000,00
          </h3>
          <div className="mt-4 h-1.5 w-full bg-surface-darker rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          </div>
          <p className="text-xs text-blue-400 mt-2 font-medium">
            65% do limite total utilizado
          </p>
        </div>

        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ArrowUpRight size={80} className="text-primary" />
          </div>
          <div className="flex items-center gap-3 mb-2 text-gray-400 text-sm font-medium">
            <div className="w-8 h-8 rounded-lg bg-surface-darker/50 flex items-center justify-center border border-border-dark">
              <ArrowUpRight size={16} className="text-primary" />
            </div>
            Total Antecipado (Mês)
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
            R$ 485.200,00
          </h3>
          <p className="text-xs text-primary mt-2 font-medium flex items-center gap-1">
            <ArrowUpRight size={12} />
            +12% vs mês anterior
          </p>
        </div>

        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CalendarDays size={80} className="text-yellow-500" />
          </div>
          <div className="flex items-center gap-3 mb-2 text-gray-400 text-sm font-medium">
            <div className="w-8 h-8 rounded-lg bg-surface-darker/50 flex items-center justify-center border border-border-dark">
              <CalendarDays size={16} className="text-yellow-500" />
            </div>
            Próximos Recebimentos
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight mb-1">
            R$ 180.500,00
          </h3>
          <p className="text-xs text-gray-500 mt-2 font-medium">
            Previsão para os próximos 7 dias
          </p>
        </div>
      </div>

      {/* Main Content Split Need */}
      <div className="flex flex-col xl:flex-row gap-8 items-start h-full">
        {/* Invoices Table */}
        <div className="flex-1 bg-surface-dark border border-border-dark rounded-2xl shadow-xl overflow-hidden w-full">
          <div className="p-6 border-b border-border-dark flex items-center justify-between">
            <h2 className="font-bold text-lg text-white flex items-center gap-2">
              <FileText className="text-primary" size={20} />
              Notas Fiscais Disponíveis
            </h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                  size={14}
                />
                <input
                  type="text"
                  placeholder="Buscar por NF..."
                  className="bg-surface-darker border border-border-dark rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-primary w-48"
                />
              </div>
              <button className="bg-surface-darker hover:bg-surface-dark border border-border-dark p-2 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Filter size={16} />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-surface-darker text-xs uppercase font-semibold text-gray-500 border-b border-border-dark">
                <tr>
                  <th className="p-4 w-4">
                    <input
                      type="checkbox"
                      className="rounded bg-surface-dark border-border-dark text-primary focus:ring-0 cursor-pointer"
                    />
                  </th>
                  <th className="p-4">Chave XPTO / Emissão</th>
                  <th className="p-4">Fornecedor (Sacado)</th>
                  <th className="p-4 text-center">Vencimento</th>
                  <th className="p-4 text-right">Valor Nominal</th>
                  <th className="p-4 text-center">Status</th>
                  <th className="p-4 text-right">Valor Líquido</th>
                  <th className="p-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark">
                {INVOICES.map((invoice) => (
                  <tr
                    key={invoice.id}
                    className={`group hover:bg-surface-darker/50 transition-colors cursor-pointer ${selectedInvoices.includes(invoice.id) ? 'bg-primary/5' : ''}`}
                    onClick={() => toggleInvoice(invoice.id)}
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedInvoices.includes(invoice.id)}
                        readOnly
                        className="rounded bg-surface-dark border-border-dark text-primary focus:ring-primary focus:bg-primary cursor-pointer"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span
                          className="font-mono text-white text-xs truncate w-32"
                          title={invoice.key}
                        >
                          {invoice.key}
                        </span>
                        <span className="text-[10px] text-gray-600 mt-0.5">
                          Emitida em 10/10/2023
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-surface-darker flex items-center justify-center text-[10px] font-bold text-gray-500 border border-border-dark">
                          FS
                        </div>
                        <span className="font-medium text-gray-300">
                          {invoice.supplier}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-white font-medium">
                          {invoice.dueDate}
                        </span>
                        <span className="text-[10px] text-yellow-500 font-bold bg-yellow-500/10 px-1.5 rounded mt-1">
                          60 dias
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-right font-medium text-white">
                      {invoice.value}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                        ${
                          invoice.status === 'Disponível'
                            ? 'bg-primary/10 text-primary border border-primary/20'
                            : invoice.status === 'Liquidada'
                              ? 'bg-gray-800 text-gray-400 border border-gray-700'
                              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="p-4 text-right font-bold text-primary text-lg">
                      {invoice.status === 'Disponível' ? 'R$ 82.150,00' : '-'}
                    </td>
                    <td className="p-4 text-center">
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-border-dark flex items-center justify-between text-xs text-gray-500">
            <span>Mostrando 4 de 24 operações</span>
            <div className="flex gap-1">
              <button className="px-2 py-1 rounded hover:bg-surface-darker disabled:opacity-50">
                Anterior
              </button>
              <button className="px-2 py-1 rounded bg-primary text-background-dark font-bold">
                1
              </button>
              <button className="px-2 py-1 rounded hover:bg-surface-darker">
                2
              </button>
              <button className="px-2 py-1 rounded hover:bg-surface-darker">
                Próxima
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Simulation Widget */}
        <aside className="w-full xl:w-96 bg-surface-dark border border-border-dark rounded-2xl shadow-xl flex flex-col shrink-0 sticky top-28 h-[calc(100vh-8rem)]">
          <div className="p-5 border-b border-border-dark flex items-center justify-between bg-surface-darker/50">
            <h3 className="font-bold text-white flex items-center gap-2">
              <LayoutDashboard size={18} className="text-primary" />
              Simulação
            </h3>
            <span className="text-[10px] font-mono bg-blue-900/40 text-blue-400 px-2 py-1 rounded border border-blue-900/60">
              NF-e 10293
            </span>
          </div>

          <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
            <div className="flex justify-between items-end mb-6 pb-6 border-b border-border-dark">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                  Resumo da Nota
                </p>
                <p className="text-2xl font-bold text-white">R$ 85.000,00</p>
                <p className="text-xs text-gray-400 mt-1">
                  Vencimento em 05/12/2023
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded mb-1 inline-block">
                  60 dias
                </p>
                <p className="text-[10px] text-gray-500">Dias Antecipados</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold text-white mb-3">
                Detalhamento de Custos
              </h4>

              <div className="flex justify-between items-center text-sm group">
                <span className="text-gray-400 flex items-center gap-1">
                  Deságio (2.5% a.m.){' '}
                  <Info size={12} className="text-gray-600" />
                </span>
                <span className="text-red-400 font-mono">- R$ 2.450,00</span>
              </div>
              <div className="flex justify-between items-center text-sm group">
                <span className="text-gray-400">IOF (Alíquota Diária)</span>
                <span className="text-red-400 font-mono">- R$ 125,40</span>
              </div>
              <div className="flex justify-between items-center text-sm group">
                <span className="text-gray-400">Taxa Ad Valorem (0.15%)</span>
                <span className="text-red-400 font-mono">- R$ 127,50</span>
              </div>
              <div className="flex justify-between items-center text-sm group pt-2 border-t border-dashed border-border-dark">
                <span className="text-gray-400">Tarifa de Operação</span>
                <span className="text-red-400 font-mono">- R$ 147,10</span>
              </div>
            </div>

            <div className="bg-surface-darker p-4 rounded-xl border border-border-dark mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-4 -mt-4"></div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">
                Valor Líquido a Receber
              </p>
              <div className="text-3xl font-bold text-primary tracking-tight">
                R$ 82.150,00
              </div>
              <p className="text-[10px] text-green-400/80 mt-1 flex items-center gap-1">
                <BadgeCheck size={12} /> Depósito em D+1
              </p>
            </div>

            <div className="bg-blue-900/10 border border-blue-900/30 p-3 rounded-lg flex items-start gap-3">
              <Info className="text-blue-400 shrink-0 mt-0.5" size={16} />
              <p className="text-[11px] text-blue-300/80 leading-relaxed">
                O valor final pode sofrer pequenas variações no momento da
                efetivação dependendo da data do crédito.
              </p>
            </div>
          </div>

          <div className="p-5 border-t border-border-dark bg-surface-darker/50 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded bg-surface-dark border-border-dark text-primary focus:ring-0"
              />
              <label
                htmlFor="terms"
                className="text-xs text-gray-400 cursor-pointer select-none"
              >
                Li e concordo com os{' '}
                <span className="text-primary hover:underline">
                  termos de cessão de crédito
                </span>
                .
              </label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group">
              <BadgeCheck size={18} />
              CONFIRMAR ANTECIPAÇÃO
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
