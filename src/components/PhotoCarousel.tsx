import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GALLERY_PHOTOS } from '../data/clinicData';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from 'lucide-react';

export const PhotoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const duration = 6000; // 6 seconds requested
  const step = 50; // Progress tick
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Timer loop for 6 seconds with progress bar
  useEffect(() => {
    if (!isPlaying || isHovered || lightboxOpen) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (step / duration) * 100;
      });
    }, step);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, lightboxOpen, nextSlide]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, lightboxOpen]);

  return (
    <section
      aria-label="Carrossel de fotos da La Vie Clínica Integrada"
      className="py-12 md:py-16 bg-[#FAF6EE] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Carousel Frame */}
        <div
          className="relative rounded-3xl overflow-hidden bg-stone-900 shadow-2xl border border-[#DAA520]/30 select-none group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Photo Container (Original Format / Sem cortes) */}
          <div className="relative h-[440px] sm:h-[540px] md:h-[620px] w-full overflow-hidden bg-[#161412] flex items-center justify-center">
            {GALLERY_PHOTOS.map((photo, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Fundo suave e sutil com a própria foto expandida para harmonização */}
                  <img
                    src={photo}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-25 scale-110 pointer-events-none"
                  />

                  {/* Foto no FORMATO ORIGINAL completo (100% sem cortes) */}
                  <img
                    src={photo}
                    alt={`Foto da La Vie Clínica Integrada ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl p-2 sm:p-4 transition-transform duration-500 select-none"
                  />
                </div>
              );
            })}

            {/* Subtle Gradient Vignette around edges (no text) */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none z-20"
              aria-hidden="true"
            />

            {/* Top Right Controls: Pause/Play & Fullscreen Lightbox */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white backdrop-blur-md transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                aria-label={isPlaying ? 'Pausar carrossel automático' : 'Iniciar carrossel automático'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white backdrop-blur-md transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
                aria-label="Ver foto em tela cheia"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Left / Right Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-3.5 rounded-full bg-black/40 hover:bg-black/80 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Bottom Photo Counter & Dot Indicators (strictly without description) */}
            <div className="absolute bottom-5 inset-x-0 z-30 flex flex-col items-center gap-2 pointer-events-auto">
              <div
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"
                role="tablist"
                aria-label="Navegar pelas fotos"
              >
                {GALLERY_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#DAA520] cursor-pointer ${
                      currentIndex === idx
                        ? 'w-6 sm:w-8 bg-[#DAA520]'
                        : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir para foto ${idx + 1}`}
                    aria-selected={currentIndex === idx}
                    role="tab"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 6-Second Auto-play Animated Progress Bar */}
          <div className="w-full h-1 bg-stone-800 relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#DAA520] via-[#F4D068] to-[#B8860B] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Clickable Miniature Strip (9 thumbnails, clean without text) */}
        <div className="mt-4 flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#DAA520]/40">
          {GALLERY_PHOTOS.map((photo, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`relative shrink-0 w-16 sm:w-20 md:w-24 aspect-[4/3] rounded-xl overflow-hidden transition-all duration-200 cursor-pointer border-2 ${
                  isSelected
                    ? 'border-[#DAA520] shadow-md scale-105 opacity-100 ring-2 ring-[#DAA520]/40'
                    : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                }`}
                aria-label={`Visualizar foto ${idx + 1}`}
              >
                <img
                  src={photo}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal (Fullscreen Zoom without text description) */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização em tela cheia"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
            aria-label="Fechar visualização em tela cheia"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-[#DAA520]"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[currentIndex]}
              alt=""
              className="max-h-[85vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
