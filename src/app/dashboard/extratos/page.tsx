'use client';

import {
  FileText,
  Download,
  Search,
  Filter,
  Calendar,
  ArrowDownLeft,
  ArrowUpRight,
} from 'lucide-react';
import { Header } from '@/components/dashboard/Header';

const TRANSACTIONS = [
  {
    id: 1,
    date: '10/10/2023',
    description: 'Antecipação NF-e 10293 - Conf. São José',
    type: 'credit',
    value: 'R$ 82.150,00',
    status: 'Concluído',
  },
  {
    id: 2,
    date: '10/10/2023',
    description: 'Tarifa Operacional - Op. #8832',
    type: 'debit',
    value: '- R$ 147,10',
    status: 'Concluído',
  },
  {
    id: 3,
    date: '10/10/2023',
    description: 'IOF (Imposto sobre Operações Financeiras)',
    type: 'debit',
    value: '- R$ 125,40',
    status: 'Concluído',
  },
  {
    id: 4,
    date: '05/10/2023',
    description: 'Antecipação NF-e 09812 - JBS S.A.',
    type: 'credit',
    value: 'R$ 135.200,00',
    status: 'Concluído',
  },
  {
    id: 5,
    date: '28/09/2023',
    description: 'Repasse Liquidado - Minerva Foods',
    type: 'credit',
    value: 'R$ 45.000,00',
    status: 'Liquidado',
  },
];

export default function ExtratosPage() {
  return (
    <>
      <Header title="Extratos Financeiros" />

      <div className="flex flex-col md:flex-row items-center justify-between mb-8 mt-6 gap-4">
        {/* Filters */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={14}
            />
            <input
              type="text"
              placeholder="Buscar lançamento..."
              className="bg-surface-dark border border-border-dark rounded-xl pl-9 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary w-full md:w-64"
            />
          </div>

          <button className="bg-surface-dark hover:bg-surface-darker border border-border-dark px-4 py-2.5 rounded-xl text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <Calendar size={16} />
            <span>Outubro 2023</span>
          </button>

          <button className="bg-surface-dark hover:bg-surface-darker border border-border-dark p-2.5 rounded-xl text-gray-400 hover:text-white transition-colors">
            <Filter size={16} />
          </button>
        </div>

        {/* Actions */}
        <button className="bg-primary hover:bg-primary-hover text-background-dark px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary/20 w-full md:w-auto justify-center">
          <Download size={18} />
          Exportar OFX / PDF
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
            Saldo Atual
          </p>
          <h3 className="text-3xl font-bold text-white mb-2">R$ 0,00</h3>
          <p className="text-xs text-gray-600">
            Sua conta é apenas transitória para recebimentos.
          </p>
        </div>
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
            Entradas (Out)
          </p>
          <h3 className="text-3xl font-bold text-primary mb-2 flex items-center gap-2">
            <ArrowDownLeft size={24} />
            R$ 217.350,00
          </h3>
          <p className="text-xs text-gray-500">
            Total de antecipações creditadas
          </p>
        </div>
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">
            Saídas (Out)
          </p>
          <h3 className="text-3xl font-bold text-red-500 mb-2 flex items-center gap-2">
            <ArrowUpRight size={24} />
            R$ 272,50
          </h3>
          <p className="text-xs text-gray-500">Taxas e impostos retidos</p>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-surface-darker text-xs uppercase font-semibold text-gray-500 border-b border-border-dark">
              <tr>
                <th className="p-5 w-32">Data</th>
                <th className="p-5">Descrição</th>
                <th className="p-5 text-center">Tipo</th>
                <th className="p-5 text-right">Valor</th>
                <th className="p-5 text-center">Status</th>
                <th className="p-5 text-center">Comprovante</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {TRANSACTIONS.map((tx) => (
                <tr
                  key={tx.id}
                  className="group hover:bg-surface-darker/50 transition-colors"
                >
                  <td className="p-5 font-mono text-gray-500">{tx.date}</td>
                  <td className="p-5">
                    <span className="text-white font-medium block">
                      {tx.description}
                    </span>
                  </td>
                  <td className="p-5 text-center">
                    <span
                      className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase ${
                        tx.type === 'credit'
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'bg-red-500/10 text-red-500 border border-red-500/20'
                      }`}
                    >
                      {tx.type === 'credit' ? 'Crédito' : 'Débito'}
                    </span>
                  </td>
                  <td
                    className={`p-5 text-right font-bold text-base ${tx.type === 'credit' ? 'text-primary' : 'text-white'}`}
                  >
                    {tx.value}
                  </td>
                  <td className="p-5 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="text-xs">{tx.status}</span>
                    </div>
                  </td>
                  <td className="p-5 text-center">
                    <button className="text-gray-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-surface-darker">
                      <FileText size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-border-dark bg-surface-darker flex justify-center">
          <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">
            Carregar mais lançamentos
          </button>
        </div>
      </div>
    </>
  );
}
