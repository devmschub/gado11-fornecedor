'use client';

import {
  Building2,
  Upload,
  BarChart,
  Headset,
  Info,
  ShieldCheck,
  Check,
  MapPin,
  Leaf,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  MessageSquare,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Onboarding() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans antialiased min-h-screen flex flex-col overflow-hidden">
      {/* Top Navbar */}
      <nav className="h-20 border-b border-gray-200 dark:border-border-dark bg-white dark:bg-surface-darker flex items-center justify-between px-6 lg:px-8 z-40 sticky top-0 shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-2xl tracking-tighter">
            G11
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wide text-gray-900 dark:text-white leading-none">
              GADO11
            </span>
            <span className="text-[0.6rem] font-bold text-primary tracking-widest uppercase">
              Onboarding
            </span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-center max-w-4xl mx-auto">
          <div className="flex items-center w-full justify-between">
            <div
              className={`flex flex-col items-center relative z-10 step-connector w-1/3 ${activeStep >= 1 ? 'active' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-black font-bold mb-2 transition-all duration-300 ${activeStep >= 1 ? 'bg-primary shadow-[0_0_15px_rgba(19,236,91,0.4)]' : 'bg-surface-dark border-2 border-gray-600 text-gray-400'}`}
              >
                <Building2
                  size={20}
                  className={activeStep >= 1 ? 'text-black' : 'text-gray-400'}
                />
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-wider ${activeStep >= 1 ? 'text-white' : 'text-gray-500'}`}
              >
                Dados da Propriedade
              </span>
            </div>

            <div
              className={`flex flex-col items-center relative z-10 step-connector w-1/3 ${activeStep >= 2 ? 'active' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${activeStep >= 2 ? 'bg-primary text-black shadow-[0_0_15px_rgba(19,236,91,0.4)]' : 'bg-surface-dark border-2 border-gray-600 text-gray-400'}`}
              >
                <Upload
                  size={20}
                  className={activeStep >= 2 ? 'text-black' : 'text-gray-400'}
                />
              </div>
              <span
                className={`text-xs font-medium uppercase tracking-wider ${activeStep >= 2 ? 'text-white font-bold' : 'text-gray-500'}`}
              >
                Documentação
              </span>
            </div>

            <div
              className={`flex flex-col items-center relative z-10 w-1/3 ${activeStep >= 3 ? 'active' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${activeStep >= 3 ? 'bg-primary text-black shadow-[0_0_15px_rgba(19,236,91,0.4)]' : 'bg-surface-dark border-2 border-gray-600 text-gray-400'}`}
              >
                <BarChart
                  size={20}
                  className={activeStep >= 3 ? 'text-black' : 'text-gray-400'}
                />
              </div>
              <span
                className={`text-xs font-medium uppercase tracking-wider ${activeStep >= 3 ? 'text-white font-bold' : 'text-gray-500'}`}
              >
                Capacidade Técnica
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
            <a
              className="hover:text-primary transition-colors flex items-center gap-1"
              href="#"
            >
              <Headset size={16} /> Suporte
            </a>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-border-dark">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-gray-900 dark:text-white">
                Confinamento Sta. Fé
              </div>
              <div className="text-xs text-yellow-500">Em Homologação</div>
            </div>
            <div className="h-10 w-10 relative rounded-full bg-linear-to-br from-gray-700 to-gray-900 border-2 border-gray-600 overflow-hidden shadow-md">
              <Image
                alt="Foto do perfil do gestor"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 h-[calc(100vh-80px)] overflow-hidden">
        {/* Left Sidebar - Status */}
        <aside className="w-80 bg-white dark:bg-surface-darker border-r border-gray-200 dark:border-border-dark hidden xl:flex flex-col overflow-y-auto custom-scrollbar p-6 shrink-0">
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
              <Info size={16} /> Status do Processo
            </h3>
            <div className="p-4 bg-primary/5 rounded-xl border border-primary/20 mb-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">
                    Iniciado
                  </h4>
                  <p className="text-xs text-gray-400">
                    Você iniciou o processo de homologação. Complete os dados
                    para acessar o marketplace.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 relative pl-4 border-l-2 border-border-dark ml-2">
              <div className="relative">
                <span className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary border-2 border-surface-darker"></span>
                <h5 className="text-sm text-primary font-bold">
                  1. Dados da Propriedade
                </h5>
                <p className="text-xs text-gray-500 mt-1">
                  Informações básicas e geolocalização.
                </p>
              </div>
              <div className="relative">
                <span
                  className={`absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-surface-darker ${activeStep >= 2 ? 'bg-primary' : 'bg-gray-700'}`}
                ></span>
                <h5
                  className={`text-sm font-bold ${activeStep >= 2 ? 'text-primary' : 'text-gray-400'}`}
                >
                  2. Documentação Legal
                </h5>
                <p className="text-xs text-gray-600 mt-1">
                  Licenças e contratos.
                </p>
              </div>
              <div className="relative">
                <span
                  className={`absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-surface-darker ${activeStep >= 3 ? 'bg-primary' : 'bg-gray-700'}`}
                ></span>
                <h5
                  className={`text-sm font-bold ${activeStep >= 3 ? 'text-primary' : 'text-gray-400'}`}
                >
                  3. Capacidade Técnica
                </h5>
                <p className="text-xs text-gray-600 mt-1">
                  Volume e estrutura.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
              <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                <ShieldCheck className="text-primary" size={16} /> Benefícios
                G11
              </div>
              <ul className="text-xs text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                  <Check size={10} className="text-primary" /> Acesso a crédito
                  barato
                </li>
                <li className="flex items-center gap-2">
                  <Check size={10} className="text-primary" /> Compra coletiva
                  de insumos
                </li>
                <li className="flex items-center gap-2">
                  <Check size={10} className="text-primary" /> Venda antecipada
                  (Arroba Futura)
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Center Content - Form */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 xl:p-12 relative bg-background-light dark:bg-background-dark custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                Dados da Propriedade
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Precisamos entender onde sua operação está localizada para
                conectar com os fornecedores regionais.
              </p>
            </div>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {/* Localization Section */}
              <section className="bg-white dark:bg-surface-dark p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-border-dark shadow-xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-border-dark">
                  <MapPin className="text-primary" size={28} />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Localização e Estrutura
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome da Fazenda / Confinamento
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-300 dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-500"
                      placeholder="Ex: Fazenda Boa Esperança"
                      type="text"
                      defaultValue="Confinamento Santa Fé"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Área Total (Hectares)
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-300 dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-500"
                      placeholder="0 ha"
                      type="number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Capacidade Estática (Cabeças)
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-300 dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-500"
                      placeholder="0 cab"
                      type="number"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Endereço Completo
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-300 dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-500 mb-3"
                      placeholder="Rodovia, KM, Cidade, Estado"
                      type="text"
                    />

                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer border-2 border-dashed border-gray-400 dark:border-gray-600 hover:border-primary transition-colors flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-cover opacity-30 bg-center"
                        style={{
                          backgroundImage:
                            "url('https://maps.googleapis.com/maps/api/staticmap?center=-11.85,-55.50&zoom=10&size=800x200&sensor=false')",
                        }}
                      ></div>
                      <div className="relative z-10 flex flex-col items-center">
                        <MapPin
                          className="text-gray-400 group-hover:text-primary mb-2 transition-colors text-3xl"
                          size={32}
                        />
                        <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                          Confirmar Pin no Mapa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Environmental Section */}
              <section className="bg-white dark:bg-surface-dark p-6 lg:p-8 rounded-2xl border border-gray-200 dark:border-border-dark shadow-xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-border-dark">
                  <Leaf className="text-primary" size={28} />
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Regularidade Ambiental
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Número CAR (Cadastro Ambiental Rural)
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-300 dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-500"
                      placeholder="XX-0000000-0000..."
                      type="text"
                    />
                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <CheckCircle size={12} className="text-primary" />{' '}
                      Validação automática na base do Sicar.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Licença de Operação (Vigência)
                    </label>
                    <input
                      className="w-full bg-gray-50 dark:bg-surface-darker border border-gray-300 dark:border-border-dark rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white text-gray-400"
                      type="date"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Infraestrutura Hídrica
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      'Outorga de Água',
                      'Poço Artesiano',
                      'Represa / Açude',
                    ].map((item, i) => (
                      <label
                        key={i}
                        className="flex items-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-surface-darker transition-colors group"
                      >
                        <input
                          className="form-checkbox h-5 w-5 text-primary rounded border-gray-300 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 focus:ring-primary accent-primary"
                          type="checkbox"
                        />
                        <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-white">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              <div className="flex flex-col-reverse sm:flex-row items-center justify-between pt-6 border-t border-gray-200 dark:border-border-dark gap-4">
                <button
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold hover:bg-gray-50 dark:hover:bg-surface-darker transition-colors"
                  type="button"
                >
                  Salvar Rascunho
                </button>
                <button
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-black px-8 py-3 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_30px_rgba(19,236,91,0.5)] transition-all flex items-center justify-center gap-2"
                  type="button"
                  onClick={() => setActiveStep((prev) => Math.min(prev + 1, 3))}
                >
                  Próximo: Documentos
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </main>

        {/* Right Sidebar - Help */}
        <aside className="w-80 bg-surface-darker border-l border-border-dark hidden 2xl:flex flex-col z-30 shadow-2xl p-6 shrink-0">
          <div className="mb-6">
            <h3 className="font-bold text-white text-lg mb-4 flex items-center gap-2">
              <Lightbulb className="text-yellow-400" size={20} /> Dicas de
              Preenchimento
            </h3>
            <div className="space-y-4">
              <div className="bg-surface-dark p-4 rounded-lg border border-border-dark">
                <h4 className="text-sm font-bold text-gray-200 mb-1">
                  Precisão do GPS
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Certifique-se de marcar a sede administrativa da fazenda no
                  mapa para facilitar a logística de entrega de insumos.
                </p>
              </div>
              <div className="bg-surface-dark p-4 rounded-lg border border-border-dark">
                <h4 className="text-sm font-bold text-gray-200 mb-1">
                  Validação CAR
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  O número do CAR é obrigatório para compliance ambiental. Sem
                  ele, não conseguimos liberar crédito.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto bg-linear-to-br from-gray-800 to-black p-5 rounded-2xl border border-gray-700 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all"></div>
            <h4 className="relative z-10 font-bold text-white text-lg mb-2">
              Precisa de ajuda técnica?
            </h4>
            <p className="relative z-10 text-xs text-gray-400 mb-4">
              Nosso time de engenheiros agrônomos pode ajudar a levantar esses
              dados.
            </p>
            <button className="relative z-10 w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="text-sm" size={16} /> Falar no WhatsApp
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
