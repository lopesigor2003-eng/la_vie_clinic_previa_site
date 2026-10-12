import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PhotoCarousel } from './components/PhotoCarousel';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#2C2A29] antialiased selection:bg-[#DAA520] selection:text-white">
      {/* Semantic Header */}
      <Header />

      {/* Semantic Main Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <PhotoCarousel />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenLegal={(type) => setLegalType(type)} />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />

      {/* Modal Dialog for Privacy Policy / Terms of Service */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}
