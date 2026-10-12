import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareHeart, CheckCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testemunhos"
      aria-labelledby="testimonials-title"
      className="py-16 md:py-24 bg-[#FAF6EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DAA520]/30 shadow-2xs mb-4">
            <MessageSquareHeart className="w-4 h-4 text-[#DAA520]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#996515]">
              Avaliações & Experiências Reais
            </span>
          </div>

          {/* Exact H2 */}
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            O Que Nossos Clientes Dizem
          </h2>

          <p className="text-base sm:text-lg text-stone-600">
            A satisfação e o carinho de quem escolheu a La Vie para cuidar da saúde, da beleza e do equilíbrio integral.
          </p>
        </div>

        {/* Featured Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DAA520]/30 shadow-xl relative overflow-hidden">
            
            {/* Big quote decorative icon */}
            <Quote
              className="absolute top-6 right-6 w-20 h-20 text-[#DAA520]/10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6" aria-label={`Avaliação: ${current.rating} de 5 estrelas`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < current.rating
                      ? 'fill-amber-400 text-amber-500'
                      : 'text-stone-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-xs font-bold text-stone-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                5.0 Excelente
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl text-stone-800 font-medium leading-relaxed italic mb-8">
              "{current.content}"
            </blockquote>

            {/* Author info and navigation controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#DAA520] to-[#E5C158] text-white font-bold flex items-center justify-center text-lg shadow-sm">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    {current.author}
                  </h3>
                </div>
              </div>

              {/* Navigation Arrows with proper aria-labels */}
              <div className="flex items-center gap-2 self-end sm:self-center" aria-label="Controles do carrossel de testemunhos">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-stone-100 hover:bg-[#DAA520]/20 text-stone-700 hover:text-[#996515] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-xs font-semibold text-stone-500 px-2">
                  {currentIndex + 1} de {TESTIMONIALS_DATA.length}
                </div>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-stone-100 hover:bg-[#DAA520]/20 text-stone-700 hover:text-[#996515] transition-colors focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Small thumbnail pills to jump directly */}
        <div className="flex justify-center items-center gap-2" role="tablist" aria-label="Selecionar depoimento">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#DAA520] ${
                currentIndex === idx
                  ? 'w-8 bg-[#DAA520]'
                  : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Ver depoimento de ${item.author}`}
              aria-selected={currentIndex === idx}
              role="tab"
            />
          ))}
        </div>

        {/* Supporting Trust Stats banner */}
        <div className="mt-16 bg-white rounded-2xl p-6 border border-[#DAA520]/25 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-stone-900">+1.200</p>
            <p className="text-xs text-stone-600 font-medium">Atendimentos Realizados</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-stone-200" />
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#996515]">99.4%</p>
            <p className="text-xs text-stone-600 font-medium">Índice de Recomendação</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-stone-200" />
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-stone-900">4.9 ★</p>
            <p className="text-xs text-stone-600 font-medium">Nota Média de Satisfação</p>
          </div>
        </div>

      </div>
    </section>
  );
};
