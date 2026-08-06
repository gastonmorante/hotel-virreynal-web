import React from 'react';
import { Utensils, Coffee, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function GastronomySection({ onOpenBooking }) {
  return (
    <section id="gastronomia" className="py-20 sm:py-24 bg-background relative overflow-hidden border-t border-b border-secondary/10 px-4 sm:px-6 md:px-8">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#3D2B1F_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
            <Utensils className="w-4 h-4" />
            <span>Sabor & Tradición Cordobesa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary mb-4">
            Gastronomía Virreynal
          </h2>
          <p className="text-charcoal/75 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Deléitate con nuestra propuesta culinaria en el primer cuadro del centro histórico de Córdoba. Desayunos exquisitos y el distinguido café <strong className="font-semibold text-secondary">Cafiver</strong> a precios muy accesibles.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* 2-Card Gastronomy Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Card 1: Restaurante Virreynal */}
          <div className="bg-white rounded-3xl overflow-hidden border border-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group">
            {/* Image Container */}
            <div className="h-64 sm:h-72 relative overflow-hidden bg-secondary/10">
              <img
                src="/images/restaurante-virreynal.jpg"
                alt="Restaurante Virreynal Córdoba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                Restaurante Virreynal
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-light tracking-widest uppercase opacity-90 block">Primer Cuadro Histórico</span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold">Alimentos Confortables</h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-light mb-6">
                  Ubicado en el corazón de nuestro hotel, el Restaurante Virreynal destaca por sus ricos desayunos regionales, platillos tradicionales confortables y la hospitalidad característica que nos distingue a precios sumamente accesibles.
                </p>

                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Desayunos completos y platillos típicos veracruzanos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Servicio muy confortable en instalaciones coloniales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Precios accesibles para familias y huéspedes</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">Desayunos & Comidas</span>
                <span className="text-xs text-charcoal/60">Servicio Diario</span>
              </div>
            </div>
          </div>

          {/* Card 2: Cafetería Tío Manolo */}
          <div className="bg-white rounded-3xl overflow-hidden border border-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col group">
            {/* Image Container */}
            <div className="h-64 sm:h-72 relative overflow-hidden bg-secondary/10">
              <img
                src="/images/cafeteria-tio-manolo.jpg"
                alt="Cafetería Tío Manolo Córdoba"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-accent text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md backdrop-blur-md">
                Cafetería Tío Manolo
              </span>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-light tracking-widest uppercase opacity-90 block">Café Cafiver de Altura</span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold">Sabor & Tradición Cafetalera</h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-light mb-6">
                  La Cafetería Tío Manolo se caracteriza por ofrecer deliciosos desayunos a precios muy accesibles y por servir orgullosamente el distinguido café <strong className="font-semibold text-secondary">Cafiver</strong>, cosechado en las reconocidas fincas de las Altas Montañas de Veracruz.
                </p>

                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Preparado exclusivamente con grano premium <strong className="font-semibold">Cafiver</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Ricos desayunos económicos y repostería artesanal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>Ambiente acogedor frente al patio y arcos históricos</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Café Gourmet Cafiver</span>
                <span className="text-xs text-charcoal/60">Precios Accesibles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 sm:mt-16 bg-secondary text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
              <Coffee className="w-4 h-4" />
              <span>Café Cafiver & Desayunos Exquisitos</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight mb-2">
              Disfruta la gastronomía de Córdoba en Hotel Virreynal
            </h4>
            <p className="text-xs sm:text-sm text-white/80 font-light max-w-2xl">
              Reserva tu habitación y disfruta de nuestra atención profesional y el mejor café de Veracruz.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking && onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#a64b31] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap shrink-0"
          >
            <span>Reservar Ahora</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
