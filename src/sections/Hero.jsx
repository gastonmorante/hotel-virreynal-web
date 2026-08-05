import React from 'react';
import { MapPin, ChevronDown, Compass, Award, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hotel Virreynal Córdoba Veracruz"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000 filter brightness-90"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Pueblo Mágico Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium tracking-widest uppercase mb-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <MapPin className="w-4 h-4 text-primary animate-bounce" />
          <span>Córdoba, Pueblo Mágico</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-white/70">Veracruz, México</span>
        </div>

        {/* Main Title in Serif */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight sm:leading-none tracking-tight max-w-4xl mb-6 shadow-text">
          Donde la historia colonial se encuentra con el <span className="italic font-serif text-primary">confort contemporáneo</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-background/90 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Una experiencia de hospitalidad distinguida en el corazón histórico de Córdoba. Elegancia atemporal, paz interior y servicio excepcional.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#habitaciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-[#a64b31] text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Ver Habitaciones</span>
            <Star className="w-4 h-4 fill-white group-hover:rotate-45 transition-transform duration-300" />
          </a>

          <a
            href="#cordoba"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-sm font-medium tracking-wider hover:border-white/60 transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-accent" />
            <span>Descubre Córdoba</span>
          </a>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80 text-xs sm:text-sm max-w-3xl w-full">
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-white">100%</span>
            <span className="font-light text-white/70">Ubicación Central</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-white">4.9★</span>
            <span className="font-light text-white/70">Excelencia en Servicio</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-white">Wi-Fi</span>
            <span className="font-light text-white/70">Alta Velocidad</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-lg font-bold text-white">Café</span>
            <span className="font-light text-white/70">Gourmet Cordobés</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#habitaciones"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-light">Explorar</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-primary" />
      </a>
    </section>
  );
}
