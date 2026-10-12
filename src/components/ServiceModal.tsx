import React, { useEffect } from 'react';
import { ServiceItem, CLINIC_INFO } from '../data/clinicData';
import { X, MessageCircle, Check, ArrowRight, ShieldCheck, Sparkles, Heart, Activity, Apple } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const getIcon = () => {
    switch (service.iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#DAA520]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-600" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#DAA520]" />;
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais e agendar uma consulta em ${service.title} na La Vie Clínica Integrada.`
  );
  const serviceWhatsAppUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#DAA520]/30 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header banner */}
        <div className="bg-gradient-to-r from-[#FAF6EE] to-[#F5EDD9] px-6 py-6 border-b border-[#DAA520]/25 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-[#DAA520]/30 flex items-center justify-center">
              {getIcon()}
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-[#996515] bg-[#DAA520]/15 px-2.5 py-0.5 rounded-full">
                {service.tag}
              </span>
              <h3
                id="modal-service-title"
                className="text-xl sm:text-2xl font-bold text-stone-900 mt-1"
              >
                {service.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
            aria-label="Fechar detalhes do serviço"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Detailed description */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
              Visão Geral
            </h4>
            <p className="text-stone-700 leading-relaxed text-base">
              {service.fullDesc}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              Benefícios & Atendimento Humanizado
            </h4>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-stone-700 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key procedures / features */}
          <div className="bg-[#FAF6EE] p-5 rounded-2xl border border-[#DAA520]/20">
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-2">
              Procedimentos & Recursos
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DAA520]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="text-xs text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <span className="font-semibold text-stone-800">Para quem é recomendado: </span>
            {service.targetAudience}
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500 text-center sm:text-left">
            Agendamento rápido e direto com nossa recepção em Santa Maria/RS.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
            >
              Fechar
            </button>
            <a
              href={serviceWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f776a] shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
