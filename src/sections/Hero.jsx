import React, { useState } from 'react';
import { MapPin, ChevronDown, Compass, Star, Play, X } from 'lucide-react';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoId = "UpxqAN2ofLY";

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* YouTube Video Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="w-full h-full min-w-[100vw] min-h-[56.25vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 filter brightness-75 contrast-110 pointer-events-none"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&modestbranding=1&enablejsapi=1`}
          title="Video Corporativo Hotel Virreynal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        {/* Overlay Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Official Hotel Logo */}
        <div className="mb-6 animate-in fade-in zoom-in-95 duration-1000">
          <img
            src="/images/logo.png"
            alt="Hotel Virreynal Córdoba"
            className="w-48 sm:w-64 md:w-72 h-auto object-contain filter brightness-0 invert drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          />
        </div>

        {/* Pueblo Mágico Official Logo Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-lg border border-white/30 text-white shadow-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:bg-white/20 transition-all cursor-default">
          <img
            src="/images/pueblo-magico.png"
            alt="Córdoba Pueblo Mágico Logo"
            className="h-8 sm:h-10 md:h-11 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          />
          <span className="h-5 w-[1px] bg-white/30" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white leading-none">
              Pueblo Mágico
            </span>
            <span className="text-[9px] sm:text-[10px] text-white/80 uppercase tracking-widest font-light mt-0.5">
              Córdoba, Veracruz
            </span>
          </div>
        </div>

        {/* Main Title in Serif */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight sm:leading-none tracking-tight max-w-4xl mb-6 shadow-text">
          Donde la historia colonial se encuentra con el <span className="italic font-serif text-primary">confort contemporáneo</span>.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-background/90 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Una experiencia de hospitalidad distinguida en el corazón histórico de Córdoba. Elegancia atemporal, paz interior y servicio excepcional.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#habitaciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-[#a64b31] text-white px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Ver Habitaciones</span>
            <Star className="w-4 h-4 fill-white group-hover:rotate-45 transition-transform duration-300" />
          </a>

          {/* Video Play Button */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-sm font-medium tracking-wider hover:border-white/60 transition-all duration-300 group"
          >
            <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            </div>
            <span>Ver Video Corporativo</span>
          </button>
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

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-secondary rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 bg-secondary text-white border-b border-white/10">
              <h3 className="font-serif text-lg font-semibold tracking-wide">
                Video Corporativo • Hotel Virreynal
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                aria-label="Cerrar video"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Modal Video Embed */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Video Corporativo Hotel Virreynal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
