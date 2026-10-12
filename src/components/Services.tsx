import React, { useState } from 'react';
import { SERVICES_DATA, ServiceItem, CLINIC_INFO } from '../data/clinicData';
import { ServiceModal } from './ServiceModal';
import { Sparkles, Heart, Activity, Apple, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#DAA520]" aria-hidden="true" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500" aria-hidden="true" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" aria-hidden="true" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-amber-600" aria-hidden="true" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#DAA520]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="py-16 md:py-24 bg-[#FAF6EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DAA520]/30 shadow-2xs mb-4">
            <Sparkles className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#996515]">
              Cuidado Completo & Multidisciplinar
            </span>
          </div>

          {/* Exact H2 */}
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Nossos Serviços Integrados
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            Tratamentos planejados sob medida com foco na saúde, equilíbrio emocional e estética natural para jovens e adultos em Santa Maria/RS.
          </p>
        </div>

        {/* 4 Core Health Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-[#DAA520]/25 hover:border-[#DAA520]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              {/* Top Accent */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF6EE] border border-[#DAA520]/30 flex items-center justify-center transition-transform group-hover:scale-110">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-bold tracking-wider uppercase text-[#996515] bg-[#DAA520]/15 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Service H3 with exact semantic heading */}
                <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-[#996515] transition-colors">
                  {service.title}
                </h3>

                {/* Brief description highlighting benefits & humanized care */}
                <p className="text-stone-600 text-base leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Benefits Preview */}
                <ul className="space-y-2 mb-8 pt-4 border-t border-stone-100">
                  {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons: Micro-CTA "Saiba Mais" and quick WhatsApp button */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#996515] hover:text-[#734b0e] group/btn transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-lg py-1 px-2 cursor-pointer"
                  aria-label={`Saiba mais sobre ${service.title}`}
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                </button>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(
                    `Olá! Gostaria de agendar consulta em ${service.title} na La Vie.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  aria-label={`Agendar ${service.title} via WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span>Agendar Consulta</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};
