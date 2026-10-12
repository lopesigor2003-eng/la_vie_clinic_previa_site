import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: 'Odontologia Integrada',
    message: '',
    period: 'Manhã',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message with user input
    const text = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n` +
      `Gostaria de agendar uma consulta para: ${formData.specialty}.\n` +
      `Melhor período para mim: ${formData.period}.\n` +
      (formData.message ? `Observação: ${formData.message}` : '')
    );

    const targetUrl = `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${text}`;
    
    // Redirect or open in new tab
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      setSubmitted(false);
    }, 400);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6EE] border border-[#DAA520]/30 shadow-2xs mb-4">
            <MapPin className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#996515]">
              Atendimento & Localização
            </span>
          </div>

          {/* Exact H2 */}
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Fale Conosco
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            Estamos prontos para atender você com toda a atenção e carinho que você merece. Agende sua visita ou tire suas dúvidas.
          </p>
        </div>

        {/* 2 Main Columns: Info + Interactive Booking Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Block */}
            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#DAA520]/25 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white text-[#DAA520] shadow-xs border border-[#DAA520]/20 shrink-0">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 mb-1">
                    Endereço Completo
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed mb-3">
                    {CLINIC_INFO.address.full}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rua+Demetrio+Ribeiro,+170,+Santa+Maria,+RS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#996515] hover:underline"
                    aria-label="Abrir localização no Google Maps externo"
                  >
                    <span>Ver no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#DAA520]/25 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white text-[#DAA520] shadow-xs border border-[#DAA520]/20 shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    Horários de Funcionamento
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                    {CLINIC_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between py-1 border-b border-stone-200/60 last:border-0">
                        <span className="font-medium">{h.days}:</span>
                        <span className="text-stone-900 font-semibold">{h.period}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Clickable Phone & WhatsApp */}
            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#DAA520]/25 shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white text-emerald-600 shadow-xs border border-emerald-200 shrink-0">
                  <Phone className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 mb-0.5">
                    Contatos Diretos
                  </h3>
                  <p className="text-xs text-stone-500 mb-2">Clique para discar ou chamar no WhatsApp</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+555530281700"
                      className="text-sm font-bold text-stone-800 hover:text-[#996515] transition-colors flex items-center gap-2"
                      aria-label="Ligue para telefone fixo: (55) 3028-1700"
                    >
                      <span>Telefone: (55) 3028-1700</span>
                    </a>
                    <a
                      href={`tel:+${CLINIC_INFO.whatsappRaw}`}
                      className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-2"
                      aria-label={`Ligue para WhatsApp: ${CLINIC_INFO.whatsapp}`}
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                      <span>WhatsApp: {CLINIC_INFO.whatsapp}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Link */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-50 via-rose-50 to-amber-50 border border-rose-200/60 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-white text-rose-500 shadow-xs border border-rose-200">
                  <Instagram className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-500">Siga nosso dia a dia</p>
                  <p className="text-base font-bold text-stone-900">{CLINIC_INFO.instagramHandle}</p>
                </div>
              </div>
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold text-rose-700 bg-white border border-rose-200 hover:bg-rose-500 hover:text-white transition-all shadow-xs"
                aria-label="Acesse o perfil oficial da La Vie no Instagram"
              >
                Seguir
              </a>
            </div>

          </div>

          {/* Quick Pre-Booking Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF6EE] p-8 sm:p-10 rounded-3xl border border-[#DAA520]/30 shadow-lg">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#996515]">
                  Agendamento Prático
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mt-1">
                  Solicite seu Horário ou Tire Dúvidas
                </h3>
                <p className="text-sm text-stone-600 mt-1">
                  Preencha os campos abaixo para ser atendido no WhatsApp oficial da clínica com agilidade.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Amanda Souza"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none text-stone-900 text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-specialty" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Serviço Desejado
                    </label>
                    <select
                      id="contact-specialty"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none text-stone-900 text-sm transition-all"
                    >
                      <option value="Odontologia Integrada">Odontologia Integrada</option>
                      <option value="Psicologia Clínica">Psicologia Clínica</option>
                      <option value="Fisioterapia & RPG">Fisioterapia & RPG</option>
                      <option value="Nutrição Clínica/Esportiva">Nutrição Clínica/Esportiva</option>
                      <option value="Outras Dúvidas">Outras Dúvidas / Informações Gerais</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-period" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Melhor Período
                    </label>
                    <select
                      id="contact-period"
                      value={formData.period}
                      onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none text-stone-900 text-sm transition-all"
                    >
                      <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                      <option value="Tarde (13h às 17h)">Tarde (13h às 17h)</option>
                      <option value="Final da Tarde/Noite (17h às 19h30)">Final da Tarde (17h às 19h30)</option>
                      <option value="Sábado Pela Manhã">Sábado Pela Manhã</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Mensagem ou Preferência (Opcional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos brevemente o que você procura..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-[#DAA520] focus:ring-2 focus:ring-[#DAA520]/30 outline-none text-stone-900 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#25D366] via-[#1eb956] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0e786c] shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 animate-spin" />
                      <span>Abrindo WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-5 h-5" />
                      <span>Enviar Mensagem no WhatsApp</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  🔒 Seus dados são protegidos. Você será direcionado para o chat oficial sem custo algum.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Embedded Google Maps Location */}
        <div className="rounded-3xl overflow-hidden border border-[#DAA520]/30 shadow-xl bg-white">
          <div className="bg-[#FAF6EE] px-6 py-4 border-b border-[#DAA520]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#DAA520]" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-bold text-stone-900">
                  Localização da Clínica em Santa Maria/RS
                </h3>
                <p className="text-xs text-stone-600">
                  Rua Demétrio Ribeiro, 170 • Duque de Caxias
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Rua+Demetrio+Ribeiro,+170,+Santa+Maria,+RS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 shadow-2xs transition-colors self-start sm:self-auto"
            >
              <span>Como Chegar</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#DAA520]" aria-hidden="true" />
            </a>
          </div>

          {/* Responsive Map Embed */}
          <div className="relative w-full h-[360px] sm:h-[420px] bg-stone-100">
            <iframe
              title="Mapa de localização da La Vie Clinica Integrada em Santa Maria RS"
              src="https://maps.google.com/maps?q=Rua%20Dem%C3%A9trio%20Ribeiro,%20170,%20Santa%20Maria%20-%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
