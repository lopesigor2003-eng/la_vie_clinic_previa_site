import React from 'react';
import { CLINIC_INFO, HIGHLIGHTS } from '../data/clinicData';
import { Sparkles, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="quem-somos"
      aria-labelledby="about-title"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative Gold Accent Lines */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-[#DAA520]/5 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#DAA520]/30 shadow-2xs mb-4">
            <HeartHandshake className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#996515]">
              Nossa Essência & Propósito
            </span>
          </div>

          <h2
            id="about-title"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            {CLINIC_INFO.aboutHeading}
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            Conheça o espaço planejado nos mínimos detalhes para unir ciência médica, conforto e beleza em Santa Maria/RS.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Text narrative */}
          <div className="lg:col-span-6 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
            {CLINIC_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-stone-700">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 border-t border-stone-200">
              <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
                Diferenciais que você sente ao entrar:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm font-medium text-stone-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Ambiente climatizado e sensorial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Salas com isolamento acústico</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Equipamentos modernos e esterilização</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Atendimento pontual e humanizado</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interior Photos Gallery */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              
              {/* Interior Photo 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#DAA520]/25 bg-stone-100">
                <img
                  src={CLINIC_INFO.images.interior1}
                  alt="Estrutura interna acolhedora e climatizada da La Vie Clinica Integrada"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== CLINIC_INFO.images.interior1Fallback) {
                      target.src = CLINIC_INFO.images.interior1Fallback;
                    }
                  }}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  width="600"
                  height="700"
                />
              </div>

              {/* Interior Photo 2 (3ª foto fornecida) */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-[#DAA520]/25 bg-stone-100 sm:translate-y-6">
                <img
                  src={CLINIC_INFO.images.interior2}
                  alt="Espaço e consultório equipado da La Vie Clinica Integrada"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (target.src !== CLINIC_INFO.images.interior2Fallback) {
                      target.src = CLINIC_INFO.images.interior2Fallback;
                    }
                  }}
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  width="600"
                  height="700"
                />
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-stone-200">
          {HIGHLIGHTS.map((item, idx) => (
            <article
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#DAA520]/20 hover:border-[#DAA520]/60 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#DAA520]/30 text-[#DAA520] flex items-center justify-center font-bold text-lg mb-4 shadow-2xs">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
