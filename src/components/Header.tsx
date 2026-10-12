import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, Menu, X, Phone, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['home', 'quem-somos', 'servicos', 'testemunhos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Quem Somos', href: '#quem-somos', id: 'quem-somos' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Testemunhos', href: '#testemunhos', id: 'testemunhos' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#DAA520]/20'
          : 'bg-[#FAF6EE]/90 backdrop-blur-sm py-4 border-b border-[#DAA520]/15'
      }`}
    >
      {/* Top micro bar for quick location and hours */}
      <div className="hidden lg:block border-b border-stone-200/60 pb-2 mb-2 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-stone-900 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#DAA520]" aria-hidden="true" />
              <span>Rua Demétrio Ribeiro, 170 • Santa Maria/RS</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#DAA520]" aria-hidden="true" />
              <span>Seg a Sex: 08:00 - 19:30 • Sáb: 08:30 - 13:00</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+555530281700"
              className="flex items-center gap-1 hover:text-[#B8860B] transition-colors"
              aria-label="Ligue para nossa recepção: (55) 3028-1700"
            >
              <Phone className="w-3 h-3 text-[#DAA520]" aria-hidden="true" />
              <span>(55) 3028-1700</span>
            </a>
            <span className="text-stone-300">|</span>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DAA520] font-medium hover:text-[#B8860B] transition-colors"
              aria-label="Acesse nosso Instagram @lavieclinicc"
            >
              @lavieclinicc
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#DAA520] rounded-lg p-1"
            aria-label="La Vie Clínica Integrada - Início"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#E6C250] via-[#DAA520] to-[#996515] p-0.5 shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#1F1C18] rounded-full flex items-center justify-center text-white">
                {/* Stylized Emblem: LV Monogram with leaf/vitality */}
                <svg className="w-6 h-6 text-[#F4D068]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M16 6C18.5 10.5 22 13 22 17C22 20.3 19.3 23 16 23C12.7 23 10 20.3 10 17C10 13 13.5 10.5 16 6Z" fill="currentColor" opacity="0.9" />
                  <path d="M16 11V21M12 17H20" stroke="#1F1C18" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                LA VIE
              </span>
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#B8860B] font-semibold uppercase">
                Clínica Integrada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#DAA520] ${
                    isActive
                      ? 'text-[#996515] bg-[#DAA520]/15 font-semibold shadow-xs'
                      : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs: WhatsApp button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f776a] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
              aria-label="Agendar consulta via WhatsApp oficial"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Agendar no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white bg-[#25D366] rounded-full shadow hover:bg-[#20ba59] focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[60px] bg-white/98 backdrop-blur-xl border-b border-[#DAA520]/25 shadow-xl transition-all"
          id="mobile-navigation"
        >
          <div className="px-5 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#DAA520]/15 text-[#996515] font-semibold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Consulta via WhatsApp</span>
              </a>

              <div className="text-xs text-stone-500 text-center pt-2">
                <p>Rua Demétrio Ribeiro, 170 • Santa Maria/RS</p>
                <p className="mt-1">Tel: (55) 3028-1700 • WhatsApp: {CLINIC_INFO.whatsapp}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
