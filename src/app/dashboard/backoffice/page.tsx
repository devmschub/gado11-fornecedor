'use client';

import {
  Users,
  BarChart2,
  Activity,
  Wallet,
  ArrowUpRight,
  Search,
  ShieldAlert,
  ShieldCheck,
  MoreVertical,
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';
import { Header } from '@/components/dashboard/Header';

// Mock Data for Backoffice
const SUPPLIERS = [
  {
    id: 1,
    name: 'Fazenda Santa Fé',
    cnpj: '12.345.678/0001-90',
    rating: 'AAA',
    limit: 'R$ 2.500.000',
    used: 'R$ 1.200.000 (48%)',
    kyc: 'Regular',
    ltv: '45%',
  },
  {
    id: 2,
    name: 'Agropecuária Girassol',
    cnpj: '98.765.432/0001-11',
    rating: 'B+',
    limit: 'R$ 800.000',
    used: 'R$ 750.000 (93%)',
    kyc: 'Pendente',
    ltv: '85%',
  },
  {
    id: 3,
    name: 'Boiada Azul Agro',
    cnpj: '45.678.901/0001-23',
    rating: 'AA',
    limit: 'R$ 1.800.000',
    used: 'R$ 500.000 (27%)',
    kyc: 'Regular',
    ltv: '30%',
  },
  {
    id: 4,
    name: 'Fazenda Reunidas',
    cnpj: '56.789.012/0001-34',
    rating: 'A',
    limit: 'R$ 1.200.000',
    used: 'R$ 900.000 (75%)',
    kyc: 'Análise',
    ltv: '60%',
  },
  {
    id: 5,
    name: 'Rancho Quarto de Milha',
    cnpj: '23.456.789/0001-56',
    rating: 'C',
    limit: 'R$ 300.000',
    used: 'R$ 290.000 (96%)',
    kyc: 'Irregular',
    ltv: '95%',
  },
];

export default function BackofficePage() {
  return (
    <>
      <Header title="Painel de Gestão Backoffice" />

      <div className="flex items-center justify-between mb-8 mt-6">
        <p className="text-gray-400 text-sm">
          Visão consolidada de garantias e fluxo financeiro -{' '}
          <span className="text-blue-400 font-bold">Outubro 2023</span>
        </p>

        <div className="flex gap-4">
          <button className="bg-surface-dark hover:bg-surface-darker border border-border-dark px-4 py-2.5 rounded-xl text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
            <Search size={16} />
            Consultar SEFAZ
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2 text-sm font-bold shadow-lg shadow-blue-600/20">
            <ShieldCheck size={18} />
            Aprovar Lote de Pagamento
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Total Antecipado
            </p>
            <Wallet size={16} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">R$ 14.250.000</h3>
          <p className="text-[10px] text-primary flex items-center gap-1">
            <ArrowUpRight size={10} /> +2.5% vs. mês anterior
          </p>
        </div>

        <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Lastro Vivo (IoT)
            </p>
            <Activity size={16} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">R$ 21.800.000</h3>
          <p className="text-[10px] text-gray-500">
            Cobertura de <span className="text-primary font-bold">152%</span>
          </p>
        </div>

        <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              LTV Atual
            </p>
            <BarChart2 size={16} className="text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">65.4%</h3>
          <div className="h-1.5 w-full bg-surface-darker rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-yellow-500 w-[65.4%] rounded-full"></div>
          </div>
        </div>

        <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Liquidez Disponível
            </p>
            <Wallet size={16} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">R$ 5.120.000</h3>
          <p className="text-[10px] text-gray-500">
            Próxima entrada:{' '}
            <span className="text-white font-bold">15/10 (JBS)</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Chart Section (Mocked with CSS) */}
        <div className="lg:col-span-2 bg-surface-dark border border-border-dark rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Visão de Risco: LTV vs. Lastro
              </h3>
              <p className="text-xs text-gray-500">
                Monitoramento em tempo real do Loan-to-Value
              </p>
            </div>
            <div className="flex items-center gap-4 text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-gray-400">Total Antecipado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span className="text-gray-400">Lastro Vivo (IoT)</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full flex items-end justify-between gap-2 px-2">
            {[40, 65, 30, 80, 55, 90, 45, 70, 60, 50, 85, 40].map((h, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col justify-end gap-1 group relative h-full"
              >
                <div
                  className="w-full bg-primary/20 border-t-2 border-primary rounded-t-sm transition-all duration-500 group-hover:bg-primary/40"
                  style={{ height: `${h + 10}%` }}
                ></div>
                <div
                  className="w-full bg-blue-600/50 rounded-t-sm transition-all duration-500 group-hover:bg-blue-500"
                  style={{ height: `${h * 0.6}%` }}
                ></div>
                <span className="text-[9px] text-gray-600 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 w-full">
                  0{i + 1}/10
                </span>
              </div>
            ))}
          </div>
          <div className="h-px bg-border-dark w-full mt-0"></div>
          <div className="flex justify-between text-[9px] text-gray-600 mt-2 px-2">
            <span>01/10</span>
            <span>05/10</span>
            <span>10/10</span>
            <span>15/10</span>
            <span>20/10</span>
            <span>25/10</span>
            <span>30/10</span>
          </div>
        </div>

        {/* Cashflow List */}
        <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Fluxo de Caixa</h3>
            <button className="text-blue-400 text-xs font-bold hover:underline">
              Ver completo
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase mb-3">
                Hoje, 11 OUT
              </p>
              <div className="flex items-center justify-between p-3 bg-red-500/5 border border-red-500/10 rounded-xl mb-3">
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">
                    Pgto. Risco Sacado
                  </span>
                  <span className="text-[10px] text-gray-500">
                    Compromisso Diversos
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-red-500 text-sm">
                    - R$ 320k
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    14:00h
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] text-gray-500 font-bold uppercase mb-3 text-opacity-50">
                15 OUT
              </p>
              <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/10 rounded-xl mb-3">
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">
                    Liq. Escrow JBS
                  </span>
                  <span className="text-[10px] text-gray-500">
                    Frigoríficos SP
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-primary text-sm">
                    + R$ 500k
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    Automático
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-surface-darker/50 border border-border-dark rounded-xl">
                <div className="flex flex-col">
                  <span className="font-bold text-white text-sm">
                    Pgto. Fornecedores
                  </span>
                  <span className="text-[10px] text-gray-500">Lote #9921</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-red-500 text-sm">
                    - R$ 480k
                  </span>
                  <span className="text-[10px] text-gray-500 block">
                    Agendado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supplier Management Table */}
      <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Gestão de Fornecedores
            </h3>
            <p className="text-xs text-gray-500">
              Aprovação de limites e compliance (KYC/AML)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={14}
              />
              <input
                type="text"
                placeholder="Filtrar..."
                className="bg-surface-darker border border-border-dark rounded-lg pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-primary w-40"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="text-[10px] uppercase font-bold text-gray-500 border-b border-border-dark tracking-wider">
              <tr>
                <th className="pb-3 pl-2">Fornecedor</th>
                <th className="pb-3">Rating</th>
                <th className="pb-3 text-right">Limite Aprovado</th>
                <th className="pb-3 text-right">Utilização</th>
                <th className="pb-3 text-center">LTV</th>
                <th className="pb-3">Status KYC</th>
                <th className="pb-3">Compliance</th>
                <th className="pb-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {SUPPLIERS.map((supplier) => (
                <tr
                  key={supplier.id}
                  className="group hover:bg-surface-darker/30 transition-colors"
                >
                  <td className="py-4 pl-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded bg-surface-darker flex items-center justify-center text-xs font-bold text-white border border-border-dark ${['bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-green-500', 'bg-red-500'][supplier.id % 5]}`}
                      >
                        {supplier.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-sm">
                          {supplier.name}
                        </span>
                        <span className="text-[10px] text-gray-600">
                          {supplier.cnpj}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        supplier.rating === 'AAA'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : supplier.rating === 'AA'
                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                            : supplier.rating.startsWith('B')
                              ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                              : 'bg-red-500/10 text-red-500 border-red-500/20'
                      }`}
                    >
                      {supplier.rating}
                    </span>
                  </td>
                  <td className="py-4 text-right font-mono text-white">
                    {supplier.limit}
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-white font-mono text-xs">
                        {supplier.used.split(' ')[0] +
                          ' ' +
                          supplier.used.split(' ')[1]}
                      </span>
                      <span
                        className={`text-[9px] font-bold ${parseInt(supplier.used.split('(')[1]) > 80 ? 'text-red-500' : 'text-gray-500'}`}
                      >
                        {supplier.used.split('(')[1].replace(')', '')}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <span
                      className={`font-bold ${parseInt(supplier.ltv) > 80 ? 'text-red-500' : 'text-primary'}`}
                    >
                      {supplier.ltv}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-1.5">
                      {supplier.kyc === 'Regular' ? (
                        <ShieldCheck size={14} className="text-green-500" />
                      ) : supplier.kyc === 'Pendente' ? (
                        <ShieldAlert size={14} className="text-yellow-500" />
                      ) : (
                        <ShieldAlert size={14} className="text-red-500" />
                      )}
                      <span className="text-xs text-gray-300">
                        {supplier.kyc}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="w-24 h-1.5 bg-surface-darker rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${supplier.rating === 'AAA' ? 'w-full bg-green-500' : 'w-3/4 bg-yellow-500'}`}
                      ></div>
                    </div>
                    <span className="text-[9px] text-gray-600 mt-1 block">
                      Última: 10/10/23
                    </span>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-gray-500 hover:text-white">
                        <Search size={14} />
                      </button>
                      <button className="text-gray-500 hover:text-white">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
