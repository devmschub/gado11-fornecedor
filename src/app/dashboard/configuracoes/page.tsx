'use client';

import { Header } from '@/components/dashboard/Header';
import {
  AlertTriangle,
  Save,
  Clock,
  ChevronRight,
  Info,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';
import { useState } from 'react';

const AUDIT_LOGS = [
  {
    id: 'RS',
    color: 'bg-primary/20 text-primary',
    title: 'LTV Cap atualizado',
    detail: '60.0% → 65.0%',
    author: 'Roberto Silva',
    time: 'Há 12 min',
  },
  {
    id: 'SYS',
    color: 'bg-red-500/20 text-red-400',
    title: 'Evento de Kill Switch: B3',
    detail: 'Disparado automaticamente por variação de -4.2% na arroba.',
    author: 'Sistema',
    time: 'Ontem, 16:40',
    isAlert: true,
  },
  {
    id: 'AC',
    color: 'bg-yellow-500/20 text-yellow-400',
    title: 'Buffer de Custo alterado',
    detail: 'R$ 2.000 → R$ 2.500',
    author: 'Ana Costa',
    time: '12/10/2023',
  },
  {
    id: 'RS',
    color: 'bg-primary/20 text-primary',
    title: 'Margem Escrow ajustada',
    detail: '15.8% → 15.5%',
    author: 'Roberto Silva',
    time: '10/10/2023',
  },
  {
    id: 'RS',
    color: 'bg-primary/20 text-primary',
    title: 'Gatilho IoT Ativado',
    detail: 'OFF → ON',
    author: 'Roberto Silva',
    time: '10/10/2023',
  },
];

export default function ConfiguracoesPage() {
  const [killSwitchB3, setKillSwitchB3] = useState(true);
  const [killSwitchIoT, setKillSwitchIoT] = useState(true);
  const [killSwitchInsumos, setKillSwitchInsumos] = useState(false);

  return (
    <>
      <Header title="Configuração de Algoritmos de Risco" />

      {/* Top Bar */}
      <div className="flex items-center justify-between mt-4 mb-8">
        <p className="text-gray-400 text-sm">
          Gerenciamento técnico de parâmetros de crédito e gatilhos de segurança
          automatizados.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-primary font-bold">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Sistema Operante
          </div>
          <button className="bg-primary hover:bg-primary-hover text-background-dark px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-primary/20">
            <Save size={16} />
            Salvar Alterações
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left: Rule Config */}
        <div className="lg:col-span-2 space-y-6">
          {/* Definição de Regras */}
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-primary/20 rounded flex items-center justify-center">
                  <span className="text-primary text-[10px] font-bold">≡</span>
                </div>
                <h3 className="text-white font-bold">Definição de Regras</h3>
              </div>
              <span className="text-[10px] text-gray-500 bg-surface-darker border border-border-dark px-2 py-1 rounded font-mono">
                v2.41
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs text-gray-400 mb-1 flex items-center gap-1">
                  Margem de Segurança Escrow (%)
                  <Info size={12} className="text-gray-600" />
                </label>
                <div className="flex items-center bg-surface-darker border border-border-dark rounded-xl overflow-hidden">
                  <input
                    type="number"
                    defaultValue="15.50"
                    className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none font-mono"
                  />
                  <span className="px-4 text-gray-500 font-bold border-l border-border-dark">
                    %
                  </span>
                </div>
                <p className="text-[10px] text-gray-600 mt-1">
                  Recomendado: 12% - 18% para o perfil atual.
                </p>
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1 flex items-center gap-1">
                  Teto de Antecipação por LTV
                  <Info size={12} className="text-gray-600" />
                </label>
                <div className="flex items-center bg-surface-darker border border-border-dark rounded-xl overflow-hidden">
                  <input
                    type="number"
                    defaultValue="65.00"
                    className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none font-mono"
                  />
                  <span className="px-4 text-gray-500 font-bold border-l border-border-dark">
                    %
                  </span>
                </div>
                <div className="h-1 w-full bg-surface-dark rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary w-[65%] rounded-full"></div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1 flex items-center gap-1">
                Buffer de Custo de Saída
                <Info size={12} className="text-gray-600" />
              </label>
              <div className="flex items-center bg-surface-darker border border-border-dark rounded-xl overflow-hidden">
                <span className="px-4 text-gray-500 font-bold border-r border-border-dark py-3">
                  R$
                </span>
                <input
                  type="text"
                  defaultValue="2.500,00"
                  className="flex-1 bg-transparent px-4 py-3 text-white focus:outline-none font-mono"
                />
              </div>
            </div>
          </div>

          {/* Kill Switch */}
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle size={18} className="text-yellow-500" />
              <h3 className="text-white font-bold">
                Gatilhos de Kill Switch (Interrupção Automática)
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Queda Súbita na B3 (Boi Gordo)',
                  desc: 'Ativar se a cotação cair > 4% em 24h.',
                  state: killSwitchB3,
                  toggle: () => setKillSwitchB3((v) => !v),
                },
                {
                  title: 'Alerta de Saúde IoT (Rebanho)',
                  desc: 'Pausar crédito se > 10% do rebanho apresentar anomalias térmicas.',
                  state: killSwitchIoT,
                  toggle: () => setKillSwitchIoT((v) => !v),
                },
                {
                  title: 'Divergência de Insumos',
                  desc: 'Alertar se notas fiscais não baterem com consumo estimado.',
                  state: killSwitchInsumos,
                  toggle: () => setKillSwitchInsumos((v) => !v),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-white font-medium text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={item.toggle}
                    className={`relative w-12 h-6 rounded-full transition-colors ${item.state ? 'bg-primary' : 'bg-surface-darker border border-border-dark'}`}
                  >
                    <span
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.state ? 'left-7' : 'left-1'}`}
                    ></span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-500 text-xs">
                ⚠ Atenção: A ativação dos gatilhos de Kill Switch interrompe
                imediatamente novas liberações de crédito para os contratos
                afetados.
              </p>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                label: 'LTV Médio da Carteira',
                value: '58.2%',
                sub: '↓1.2%',
                subColor: 'text-red-400',
                bar: 58,
                barColor: 'bg-primary',
              },
              {
                label: 'Saúde dos Contratos IoT',
                value: '98.5%',
                sub: 'Monitorados ativos',
                subColor: 'text-gray-500',
                bar: 98,
                barColor: 'bg-primary',
              },
              {
                label: 'Total Exposto (R$)',
                value: 'R$ 14.2M',
                sub: 'Capacidade de alavancagem: 82%',
                subColor: 'text-gray-500',
                bar: 82,
                barColor: 'bg-yellow-500',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-surface-dark border border-border-dark p-5 rounded-2xl"
              >
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">
                  {card.label}
                </p>
                <h4 className="text-2xl font-bold text-white mb-1">
                  {card.value}
                </h4>
                <p className={`text-xs mb-3 ${card.subColor}`}>{card.sub}</p>
                <div className="h-1.5 w-full bg-surface-darker rounded-full overflow-hidden">
                  <div
                    className={`h-full ${card.barColor} rounded-full`}
                    style={{ width: `${card.bar}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Audit Logs */}
        <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 h-fit">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <h3 className="text-white font-bold">Logs de Auditoria</h3>
            </div>
            <button className="text-primary text-[10px] font-bold uppercase tracking-wider hover:underline">
              Exportar
            </button>
          </div>

          <div className="space-y-4">
            {AUDIT_LOGS.map((log, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className={`w-8 h-8 rounded-full ${log.color} flex items-center justify-center text-[10px] font-bold shrink-0`}
                >
                  {log.id}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-bold ${log.isAlert ? 'text-red-400' : 'text-white'}`}
                  >
                    {log.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    {log.detail}
                  </p>
                  <p className="text-[10px] text-gray-600 mt-1">
                    {log.author} · {log.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 text-center text-xs text-gray-500 hover:text-white transition-colors py-2 border-t border-border-dark">
            Ver histórico completo
          </button>
        </div>
      </div>
    </>
  );
}
