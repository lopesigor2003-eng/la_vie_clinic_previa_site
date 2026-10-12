import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Instagram, MessageCircle, MapPin, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1B18] text-stone-300 pt-16 pb-12 border-t border-[#DAA520]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6C250] via-[#DAA520] to-[#996515] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#1F1C18] rounded-full flex items-center justify-center text-[#F4D068]">
                  <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16 6C18.5 10.5 22 13 22 17C22 20.3 19.3 23 16 23C12.7 23 10 20.3 10 17C10 13 13.5 10.5 16 6Z" fill="currentColor" opacity="0.9" />
                    <path d="M16 11V21M12 17H20" stroke="#1F1C18" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-serif tracking-widest text-xl font-bold text-white block">
                  LA VIE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#DAA520] font-semibold uppercase block">
                  Clínica Integrada
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              "{CLINIC_INFO.slogan}"
            </p>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Centro multidisciplinar de saúde, estética e bem-estar em Santa Maria/RS. Odontologia, Psicologia, Fisioterapia e Nutrição.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#DAA520] text-stone-300 hover:text-stone-950 flex items-center justify-center transition-all shadow-sm"
                aria-label="Acessar Instagram da La Vie Clínica Integrada (@lavieclinicc)"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#25D366] text-stone-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Conversar no WhatsApp da La Vie Clínica Integrada"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#DAA520] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-[#DAA520] transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#DAA520] transition-colors">
                  Serviços Integrados
                </a>
              </li>
              <li>
                <a href="#testemunhos" className="hover:text-[#DAA520] transition-colors">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#DAA520] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Unidade Santa Maria/RS
            </h3>
            <div className="space-y-3 text-sm text-stone-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DAA520] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CLINIC_INFO.address.full}</span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DAA520] shrink-0" aria-hidden="true" />
                <a href="tel:+555530281700" className="hover:text-white transition-colors">
                  (55) 3028-1700
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {CLINIC_INFO.whatsapp}
                </a>
              </p>

              <p className="text-xs text-stone-400 pt-1">
                Atendimento com hora marcada e recepção acolhedora.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Dummy Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          {/* Exact Copyright line */}
          <p>© 2026 La Vie Clinica Integrada. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#DAA520] transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span className="text-stone-700">|</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#DAA520] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span className="text-stone-700">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#DAA520]" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
