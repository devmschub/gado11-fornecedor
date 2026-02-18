'use client';

import { Header } from '@/components/dashboard/Header';
import {
  Filter,
  Download,
  AlertTriangle,
  Wifi,
  TrendingUp,
  TrendingDown,
  ShieldAlert,
  MapPin,
  CheckCircle,
  XCircle,
  Clock,
} from 'lucide-react';

const LOTS = [
  {
    id: '#LOTE-101',
    farm: 'Agropecuária São José',
    weight: '452.000',
    ativo: 'R$ 3.548.200',
    passivo: 'R$ 1.880.000',
    ltv: 50.7,
    ltvColor: 'bg-primary',
    ltvText: 'text-primary',
    limite: 'R$ 1.838.560',
    status: 'ok',
  },
  {
    id: '#LOTE-102',
    farm: 'Confinamento Boi Verde',
    weight: '310.500',
    ativo: 'R$ 2.437.425',
    passivo: 'R$ 1.850.000',
    ltv: 75.9,
    ltvColor: 'bg-yellow-500',
    ltvText: 'text-yellow-500',
    limite: 'R$ 0,00',
    status: 'warning',
  },
  {
    id: '#LOTE-103',
    farm: 'Fazenda Esperança',
    weight: '180.200',
    ativo: 'R$ 1.414.570',
    passivo: 'R$ 1.550.000',
    ltv: 109.5,
    ltvColor: 'bg-red-500',
    ltvText: 'text-red-500',
    limite: '-R$ 135.430',
    status: 'critical',
  },
  {
    id: '#LOTE-104',
    farm: 'Rancho Fundo S.A.',
    weight: '550.000',
    ativo: 'R$ 4.317.500',
    passivo: 'R$ 2.100.000',
    ltv: 48.6,
    ltvColor: 'bg-primary',
    ltvText: 'text-primary',
    limite: 'R$ 1.354.000',
    status: 'ok',
  },
  {
    id: '#LOTE-105',
    farm: 'Agro Vale do Sol',
    weight: '220.000',
    ativo: 'R$ 1.727.000',
    passivo: 'R$ 850.000',
    ltv: 49.2,
    ltvColor: 'bg-primary',
    ltvText: 'text-primary',
    limite: 'R$ 531.600',
    status: 'ok',
  },
];

const ALERTS = [
  {
    type: 'CRÍTICO',
    typeColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    time: '14:02',
    title: 'Lote #103 estourou LTV (109.5%).',
    desc: 'Garantia insuficiente para cobrir passivo. Bloqueio automático ativado.',
    icon: <XCircle size={14} className="text-red-400" />,
  },
  {
    type: 'MERCADO',
    typeColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    time: '13:45',
    title: 'Arroba B3 caiu 5% na última hora.',
    desc: 'Recalibragem de garantias recomendada para todos os lotes ativos.',
    icon: <TrendingDown size={14} className="text-yellow-400" />,
  },
  {
    type: 'IOT SENSOR',
    typeColor: 'text-primary bg-primary/10 border-primary/20',
    time: '12:30',
    title: 'Perda de sinal: Lote #104',
    desc: 'Sem atualização de peso há 45min. Usando última média conhecida.',
    icon: <Wifi size={14} className="text-primary" />,
  },
  {
    type: 'ATENÇÃO',
    typeColor: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    time: '11:15',
    title: 'Lote #102 atingiu 75% LTV.',
    desc: 'Próximo do limite de alerta. Monitorar de perto.',
    icon: <AlertTriangle size={14} className="text-orange-400" />,
  },
];

export default function RiscoPage() {
  return (
    <>
      <Header title="Risco & Compliance — Crossing Engine" />

      {/* Top ticker bar */}
      <div className="flex items-center justify-between mt-4 mb-6 bg-surface-dark border border-border-dark rounded-2xl px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-primary text-xs font-bold">
            API B3 CONECTADA
          </span>
          <span className="text-gray-500 text-xs font-mono">• 14:02:33</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase">
              Arroba B3 (SP)
            </p>
            <p className="text-white font-bold text-sm">
              R$ 235,50{' '}
              <span className="text-red-400 text-xs">
                <TrendingDown size={10} className="inline" /> 1.2%
              </span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 uppercase">Dólar PTAX</p>
            <p className="text-white font-bold text-sm">
              R$ 5,14{' '}
              <span className="text-primary text-xs">
                <TrendingUp size={10} className="inline" /> 0.3%
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* KPI Cards */}
        <div className="lg:col-span-3 grid grid-cols-3 gap-4">
          {/* LTV Gauge */}
          <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3">
              LTV Médio do Fundo
            </p>
            <div className="relative w-28 h-28 mx-auto mb-2">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#0df20d 0% 58.4%, #1a3d1a 58.4% 100%)`,
                }}
              ></div>
              <div className="absolute inset-0 m-auto w-20 h-20 bg-surface-dark rounded-full flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-white">58.4%</span>
              </div>
            </div>
            <p className="text-center text-[10px] text-primary font-bold uppercase tracking-wider">
              Safe Zone
            </p>
          </div>

          {/* Exposição Total */}
          <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl">
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
              Exposição Total (R$)
            </p>
            <h3 className="text-3xl font-bold text-white mb-1">R$ 142.5M</h3>
            <p className="text-gray-500 text-xs">
              Capacidade: R$ 200M{' '}
              <span className="text-primary font-bold">+21% (D-1)</span>
            </p>
          </div>

          {/* Ativo vs Passivo */}
          <div className="bg-surface-dark border border-border-dark p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                Ativo Vivo vs Passivo
              </p>
              <button className="text-[10px] text-primary font-bold">
                Expandir
              </button>
            </div>
            <div className="space-y-2">
              {[
                { label: 'Ativo (IoT)', pct: 72, color: 'bg-primary' },
                { label: 'Passivo', pct: 55, color: 'bg-green-700' },
                { label: 'Risco', pct: 20, color: 'bg-red-500' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-500 w-16">
                    {item.label}
                  </span>
                  <div className="flex-1 h-3 bg-surface-darker rounded overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded`}
                      style={{ width: `${item.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-primary hover:bg-primary-hover text-background-dark font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20">
            <CheckCircle size={18} />
            APROVAR LIMITE
          </button>
          <button className="bg-surface-dark hover:bg-surface-darker border border-primary/30 text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
            RECALIBRAR GARANTIAS
          </button>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-1">
            <p className="text-[9px] text-red-400 font-bold uppercase text-center mb-2 tracking-wider">
              Zona de Perigo
            </p>
            <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm">
              <ShieldAlert size={16} />
              BLOQUEAR ANTECIPAÇÕES
            </button>
          </div>
        </div>
      </div>

      {/* Main Table + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lots Table */}
        <div className="lg:col-span-2 bg-surface-dark border border-border-dark rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-border-dark">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary"></div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                Crossing Engine: Exposição por Lote
              </h3>
            </div>
            <div className="flex gap-2">
              <button className="bg-surface-darker border border-border-dark text-gray-400 hover:text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors">
                <Filter size={12} /> Filtrar
              </button>
              <button className="bg-surface-darker border border-border-dark text-gray-400 hover:text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 transition-colors">
                <Download size={12} /> Exportar
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-surface-darker text-[10px] uppercase text-gray-500 font-bold tracking-wider">
                <tr>
                  <th className="p-4 text-left">ID Lote / Fazenda</th>
                  <th className="p-4 text-right">Peso IoT (kg)</th>
                  <th className="p-4 text-right">
                    <span className="text-primary">Valor Ativo Vivo (A)</span>
                    <br />
                    <span className="text-[9px] font-normal text-gray-600">
                      Peso × Preço B3
                    </span>
                  </th>
                  <th className="p-4 text-right">
                    Passivo Total (B)
                    <br />
                    <span className="text-[9px] font-normal text-gray-600">
                      Notas + Pendentes
                    </span>
                  </th>
                  <th className="p-4 text-center">LTV Real-time (C)</th>
                  <th className="p-4 text-right">Limite Disp. (D)</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark">
                {LOTS.map((lot) => (
                  <tr
                    key={lot.id}
                    className={`group transition-colors ${lot.status === 'critical' ? 'bg-red-500/5' : 'hover:bg-surface-darker/50'}`}
                  >
                    <td className="p-4">
                      <p className="font-bold text-white">{lot.id}</p>
                      <p className="text-gray-500 text-[10px]">{lot.farm}</p>
                    </td>
                    <td className="p-4 text-right font-mono text-gray-300">
                      {lot.weight}
                    </td>
                    <td className="p-4 text-right font-bold text-primary">
                      {lot.ativo}
                    </td>
                    <td className="p-4 text-right font-mono text-gray-300">
                      {lot.passivo}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${lot.ltv > 100 ? 'bg-red-500/20 text-red-400 border border-red-500/30' : lot.ltv > 70 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 'bg-primary/10 text-primary border border-primary/20'}`}
                      >
                        {lot.ltv}%
                      </span>
                    </td>
                    <td
                      className={`p-4 text-right font-bold ${lot.status === 'critical' ? 'text-red-400' : 'text-gray-300'}`}
                    >
                      {lot.limite}
                    </td>
                    <td className="p-4 text-center">
                      {lot.status === 'ok' && (
                        <Wifi size={14} className="text-primary mx-auto" />
                      )}
                      {lot.status === 'warning' && (
                        <AlertTriangle
                          size={14}
                          className="text-yellow-500 mx-auto"
                        />
                      )}
                      {lot.status === 'critical' && (
                        <XCircle size={14} className="text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Alertas em Tempo Real
              </h3>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {ALERTS.length}
              </span>
            </div>

            <div className="space-y-3">
              {ALERTS.map((alert, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border ${alert.typeColor.split(' ').slice(1).join(' ')}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-bold uppercase ${alert.typeColor.split(' ')[0]}`}
                    >
                      {alert.type}
                    </span>
                    <span className="text-[10px] text-gray-600 font-mono">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-white text-xs font-bold mb-0.5">
                    {alert.title}
                  </p>
                  <p className="text-gray-500 text-[10px] leading-relaxed">
                    {alert.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={14} className="text-primary" />
              <h3 className="text-white font-bold text-xs uppercase tracking-wider">
                Localização Ativos
              </h3>
            </div>
            <div className="h-32 bg-surface-darker rounded-xl border border-border-dark flex items-center justify-center relative overflow-hidden">
              {/* Fake map dots */}
              {[
                { top: '30%', left: '40%' },
                { top: '50%', left: '60%' },
                { top: '65%', left: '35%' },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary/60 border-2 border-primary animate-pulse"
                  style={{ top: pos.top, left: pos.left }}
                ></div>
              ))}
              <p className="text-gray-600 text-xs text-center z-10">
                Mato Grosso, MT (3 Fazendas)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
