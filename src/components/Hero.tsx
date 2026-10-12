import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, ArrowRight, ShieldCheck, Star, Sparkles, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF6EE] via-[#F5EDD9]/40 to-[#FAF6EE]"
    >
      {/* Subtle luxury ambient decorative gradients */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#DAA520]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#E5C158]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#DAA520]/40 shadow-xs mb-6 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-stone-800">
                Saúde, Estética & Bem-Estar Integrados em Santa Maria/RS
              </span>
            </div>

            {/* Exact H1 requested */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold text-stone-900 leading-[1.15] tracking-tight mb-4"
            >
              La Vie Clinica Integrada: Seu Centro de Saúde e Beleza em Santa Maria/RS
            </h1>

            {/* Exact H2 requested */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#996515] leading-snug mb-3">
              Bem-estar e Qualidade de Vida ao Seu Alcance
            </h2>

            {/* Slogan */}
            <p className="text-base sm:text-lg font-medium text-stone-800 italic border-l-2 border-[#DAA520] pl-3 mb-4">
              "{CLINIC_INFO.slogan}"
            </p>

            {/* Brief Inviting Paragraph */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl mb-8">
              {CLINIC_INFO.heroDescription}
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#25D366] via-[#1eb956] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0e786c] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
                aria-label="Agende Sua Consulta via WhatsApp no número oficial da clínica"
              >
                <MessageCircle className="w-6 h-6 shrink-0" aria-hidden="true" />
                <span>Agende Sua Consulta via WhatsApp</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#DAA520] shadow-xs hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              >
                <span>Conheça os Serviços</span>
                <ArrowRight className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
              </a>
            </div>

            {/* Trust and Key Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-300/60 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-xs border border-[#DAA520]/25 text-[#B8860B]">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900 leading-tight">4.9 / 5.0</p>
                  <p className="text-xs text-stone-600">Pacientes Satisfeitos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-xs border border-[#DAA520]/25 text-[#059669]">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900 leading-tight">Multidisciplinar</p>
                  <p className="text-xs text-stone-600">Corpo Clínico Integrado</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-xl bg-white shadow-xs border border-[#DAA520]/25 text-[#B8860B]">
                  <MapPin className="w-5 h-5 text-[#DAA520]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900 leading-tight">Santa Maria/RS</p>
                  <p className="text-xs text-stone-600">R. Demétrio Ribeiro, 170</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image Column (Fachada) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Glow Border Frame */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#DAA520] via-[#F4D068] to-[#996515] opacity-40 blur-lg -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-2xl border border-[#DAA520]/30">
                <img
                  src={CLINIC_INFO.images.facade}
                  alt="Fachada oficial da La Vie Clinica Integrada em Santa Maria RS"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== CLINIC_INFO.images.facadeFallback) {
                      target.src = CLINIC_INFO.images.facadeFallback;
                    }
                  }}
                  className="w-full h-[380px] sm:h-[450px] object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  width="800"
                  height="900"
                />

                {/* Floating Glassmorphism Pill 1: Santa Maria badge */}
                <div className="absolute top-6 left-6 gold-glass rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-stone-800">
                    Atendimento Aberto • Santa Maria/RS
                  </span>
                </div>

                {/* Floating Glassmorphism Card 2: Especialidades Integradas */}
                <div className="absolute bottom-6 left-6 right-6 gold-glass rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#996515]">
                        Clínica Integrada
                      </p>
                      <p className="text-sm font-bold text-stone-900">
                        Odontologia • Psicologia • Fisioterapia • Nutrição
                      </p>
                    </div>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] shadow-md transition-transform hover:scale-110"
                      aria-label="Falar conosco no WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
