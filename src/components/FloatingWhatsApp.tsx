import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="bg-white text-stone-900 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl border border-[#DAA520]/30 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Olá! Precisa agendar uma consulta em Santa Maria?</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Fechar aviso flutuante"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 flex items-center justify-center"
        aria-label="Falar conosco no WhatsApp oficial da La Vie"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" aria-hidden="true" />
      </a>
    </div>
  );
};
