import React from 'react';
import { Utensils, Coffee, Award, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function GastronomySection({ onOpenBooking }) {
  return (
    <section id="gastronomia" className="py-24 bg-secondary/5 relative overflow-hidden border-t border-b border-secondary/10 px-6">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#3D2B1F_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
            <Award className="w-4 h-4" />
            <span>40+ Años de Tradición</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary mb-4">
            Sazón & Gastronomía Virreynal
          </h2>
          <p className="text-charcoal/75 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Conoce lo mejor de Córdoba hospedándote en Hotel Virreynal. Disfruta de experiencias gastronómicas únicas en el primer cuadro del centro histórico.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Restaurante Virreynal */}
          <div className="bg-white rounded-3xl p-8 border border-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-transform group-hover:scale-110 duration-500" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Utensils className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-accent block mb-2">
                Gastronomía Colonial
              </span>
              <h3 className="font-serif text-2xl font-semibold text-secondary mb-3">
                Restaurante Virreynal
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-light mb-6">
                Servicio de alimentos de primer nivel con platillos emblemáticos de Veracruz y desayunos regionales preparados con la más alta exigencia y calidez.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-primary">Precios Accesibles</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
          </div>

          {/* Card 2: Cafetería Tío Manolo */}
          <div className="bg-white rounded-3xl p-8 border border-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full transition-transform group-hover:scale-110 duration-500" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Coffee className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-primary block mb-2">
                Café Gourmet de Altura
              </span>
              <h3 className="font-serif text-2xl font-semibold text-secondary mb-3">
                Cafetería Tío Manolo
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-light mb-6">
                Disfruta del auténtico café gourmet producido en las Altas Montañas de Córdoba, acompañado de repostería artesanal y desayunos deliciosos a precios accesibles.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-accent">Café 100% Cordobés</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
          </div>

          {/* Card 3: 40+ Años de Experiencia */}
          <div className="bg-white rounded-3xl p-8 border border-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full transition-transform group-hover:scale-110 duration-500" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <Award className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-secondary block mb-2">
                Hospitalidad Auténtica
              </span>
              <h3 className="font-serif text-2xl font-semibold text-secondary mb-3">
                Tradición & Confort
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-light mb-6">
                Más de 40 años de trayectoria garantizan una estancia inmejorable. Arquitectura inconfundible donde el pasado histórico se une armónicamente con la modernidad.
              </p>
            </div>
            <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-secondary">Negocios & Placer</span>
              <span className="w-2 h-2 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* Bottom Banner Quote */}
        <div className="mt-12 bg-secondary text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Experiencia Inigualable</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight mb-2">
              "Vive la experiencia de hospedarte en el corazón histórico de Córdoba."
            </h4>
            <p className="text-xs sm:text-sm text-white/80 font-light">
              Nuestro personal está altamente entrenado para ofrecerte todas las comodidades y amenidades para que tu viaje sea la mejor experiencia.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#a64b31] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            <span>Reservar Tu Estancia</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
