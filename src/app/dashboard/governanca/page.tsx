'use client';

import { Header } from '@/components/dashboard/Header';
import {
  ShieldCheck,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronRight,
  Wifi,
  AlertTriangle,
} from 'lucide-react';

const PARTNERS = [
  {
    id: 1,
    name: 'Agropecuária Santa Fé',
    location: 'Araçatuba, SP',
    iot: 'Online',
    iotOk: true,
    health: 9.2,
    ltv: '182%',
    ltvOk: true,
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=60&h=60&fit=crop',
  },
  {
    id: 2,
    name: 'Confinamento Rio Verde',
    location: 'Rio Verde, GO',
    iot: 'Online',
    iotOk: true,
    health: 8.5,
    ltv: '165%',
    ltvOk: true,
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=60&h=60&fit=crop',
  },
  {
    id: 3,
    name: 'Fazenda Boa Esperança',
    location: 'Campo Grande, MS',
    iot: 'Sync Delay',
    iotOk: false,
    health: 7.0,
    ltv: '138%',
    ltvOk: true,
    img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=60&h=60&fit=crop',
  },
];

const STRESS_BARS = [
  { label: 'Cenário Atual', height: 85, color: 'bg-primary' },
  { label: 'Queda 5%', height: 70, color: 'bg-primary/70' },
  { label: 'Queda 10%', height: 55, color: 'bg-yellow-500' },
  { label: 'Queda 20%', height: 35, color: 'bg-orange-500' },
];

export default function GovernancaPage() {
  return (
    <>
      <Header title="Relatório de Governança e Transparência" />

      {/* Live data badge */}
      <div className="flex items-center justify-end mt-4 mb-6">
        <div className="flex items-center gap-2 bg-surface-dark border border-primary/30 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary text-xs font-bold uppercase tracking-wider">
            Dados Verificados via Telemetria
          </span>
          <span className="text-gray-500 text-xs ml-2">
            Última atualização: 12:42 PM · Hoje
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Patrimônio */}
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Patrimônio em Garantia (IoT)
            </p>
            <Activity size={20} className="text-primary opacity-40" />
          </div>
          <h3 className="text-4xl font-bold text-white mb-3">R$ 145.2M</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1 text-primary text-xs font-bold bg-primary/10 px-2 py-0.5 rounded">
              <TrendingUp size={12} /> +4.2% Mês
            </span>
            <span className="text-gray-500 text-xs">vs. mês anterior</span>
          </div>
          <div className="h-1.5 w-full bg-surface-darker rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[72%] rounded-full"></div>
          </div>
        </div>

        {/* Exposição */}
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Exposição (Risco Sacado)
            </p>
            <ShieldCheck size={20} className="text-gray-500 opacity-40" />
          </div>
          <h3 className="text-4xl font-bold text-white mb-3">R$ 82.5M</h3>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1 text-gray-400 text-xs font-bold bg-surface-darker px-2 py-0.5 rounded border border-border-dark">
              <Minus size={12} /> Estável
            </span>
            <span className="text-gray-500 text-xs">vs. mês anterior</span>
          </div>
          <div className="h-1.5 w-full bg-surface-darker rounded-full overflow-hidden">
            <div className="h-full bg-gray-500 w-[56%] rounded-full"></div>
          </div>
        </div>

        {/* LTV */}
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl relative overflow-hidden">
          <div className="flex items-start justify-between mb-2">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
              Índice de Cobertura (LTV)
            </p>
            <ShieldCheck size={20} className="text-primary opacity-40" />
          </div>
          <div className="flex items-baseline gap-3 mb-3">
            <h3 className="text-4xl font-bold text-primary">176%</h3>
            <span className="text-primary text-sm font-bold">Saudável</span>
          </div>
          <p className="text-gray-500 text-xs mb-4">
            Target mínimo do fundo:{' '}
            <span className="text-white font-bold">130%</span>
          </p>
          <div className="h-1.5 w-full bg-surface-darker rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[88%] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Composição de Lastro */}
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-lg">
              Composição de Lastro
            </h3>
            <div className="flex gap-2">
              {['RAÇA', 'IDADE', 'UF'].map((tab) => (
                <button
                  key={tab}
                  className={`text-[10px] font-bold px-2 py-1 rounded border transition-colors ${tab === 'RAÇA' ? 'bg-primary/10 text-primary border-primary/30' : 'text-gray-500 border-border-dark hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            {/* Donut Chart */}
            <div className="relative w-44 h-44 shrink-0 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    #0df20d 0% 45%,
                    #22c55e 45% 75%,
                    #86efac 75% 100%
                  )`,
                }}
              ></div>
              <div className="absolute inset-0 m-auto w-28 h-28 bg-surface-dark rounded-full flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">28k</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                  Cabeças
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-4 flex-1">
              {[
                { label: 'Nelore (45%)', value: '12.6k', color: 'bg-primary' },
                {
                  label: 'Angus (30%)',
                  value: '8.4k',
                  color: 'bg-green-500',
                },
                {
                  label: 'Cruzado Industrial (25%)',
                  value: '7.0k',
                  color: 'bg-green-300',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                    <span className="text-sm text-gray-400">{item.label}</span>
                  </div>
                  <span className="text-white font-bold text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stress Test */}
        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-500/20 rounded flex items-center justify-center">
                <AlertTriangle size={12} className="text-red-500" />
              </div>
              <h3 className="text-white font-bold text-lg">
                Stress Test: Sensibilidade B3
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-gray-500"></span>
              Impacto no LTV
            </div>
          </div>

          {/* Bar Chart */}
          <div className="h-48 flex items-end gap-4 px-2 mb-4 relative">
            {/* Trigger line */}
            <div
              className="absolute left-0 right-0 border-t border-dashed border-red-500/60"
              style={{ bottom: '38%' }}
            >
              <span className="absolute right-0 -top-5 text-[9px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                Trigger de Garantia (130%)
              </span>
            </div>

            {STRESS_BARS.map((bar) => (
              <div
                key={bar.label}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="w-full flex items-end justify-center h-40">
                  <div
                    className={`w-full ${bar.color} rounded-t-lg transition-all`}
                    style={{ height: `${bar.height}%` }}
                  ></div>
                </div>
                <span className="text-[10px] text-gray-500 text-center">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-600 text-center">
            Simulação baseada na cotação B3 do Boi Gordo Futuro (BGIV24).
          </p>
        </div>
      </div>

      {/* Partner Map Table */}
      <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            <h3 className="text-white font-bold text-lg">
              Mapa de Exposição por Parceiro (Top 5)
            </h3>
          </div>
          <button className="text-primary text-xs font-bold hover:underline">
            Ver Relatório Completo
          </button>
        </div>
        <p className="text-gray-500 text-xs mb-6">
          Monitoramento de saúde do lote e cobertura financeira por unidade de
          confinamento.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase font-bold text-gray-500 border-b border-border-dark tracking-wider">
                <th className="pb-3 text-left">Confinamento / Parceiro</th>
                <th className="pb-3 text-center">Status IoT</th>
                <th className="pb-3 text-center">Saúde do Lote (GMD)</th>
                <th className="pb-3 text-center">Cobertura (LTV)</th>
                <th className="pb-3 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {PARTNERS.map((p) => (
                <tr
                  key={p.id}
                  className="group hover:bg-surface-darker/50 transition-colors"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-surface-darker border border-border-dark overflow-hidden flex items-center justify-center text-primary font-bold">
                        {p.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-white">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${p.iotOk ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'}`}
                    >
                      <Wifi size={12} />
                      {p.iot}
                    </span>
                  </td>
                  <td className="py-4 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="w-24 h-1.5 bg-surface-darker rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${(p.health / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-bold text-xs">
                        {p.health}/10
                      </span>
                    </div>
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-primary font-bold">{p.ltv}</span>
                  </td>
                  <td className="py-4 text-center">
                    <button className="text-gray-500 hover:text-white transition-colors">
                      <ChevronRight size={18} />
                    </button>
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
