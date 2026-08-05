import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import VirtualTour from './sections/VirtualTour';
import ChatConcierge from './components/ChatConcierge';
import IntroLoader from './components/IntroLoader';
import { Bed, MapPin, Image, Calendar, Phone, Mail, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-charcoal font-sans selection:bg-primary/20 selection:text-primary">
      {/* Minimalist Intro Loader */}
      <IntroLoader />

      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Section Preview: Habitaciones */}
        <section id="habitaciones" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-3">
              Descanso & Elegancia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary">
              Nuestras Habitaciones
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Suite Virreynal',
                desc: 'Cama King Size, balcón con vista al centro histórico y acabados en maderas nobles.',
                price: '$2,450',
                badge: 'Más Exclusiva',
              },
              {
                title: 'Habitación Colonial Doble',
                desc: 'Dos camas Queen, amplio espacio de relajación y decoración virreinal auténtica.',
                price: '$1,850',
                badge: 'Ideal para Familias',
              },
              {
                title: 'Habitación Ejecutiva',
                desc: 'Cama Queen, escritorio de trabajo, Wi-Fi de alta velocidad y ambiente silencioso.',
                price: '$1,450',
                badge: 'Negocios & Placer',
              },
            ].map((room, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-48 bg-secondary/10 relative overflow-hidden">
                  <img
                    src="/images/hero-bg.jpg"
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-primary text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow">
                    {room.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                      {room.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                      {room.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-secondary/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-charcoal/60 block">Desde</span>
                      <span className="font-serif text-xl font-bold text-primary">{room.price} <span className="text-xs font-normal text-charcoal/60">/ noche</span></span>
                    </div>
                    <a
                      href="#reservar"
                      className="bg-secondary hover:bg-primary text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    >
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Tour Virtual 360° */}
        <VirtualTour />

        {/* Section Preview: Córdoba */}
        <section id="cordoba" className="py-24 bg-secondary text-background px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block mb-3">
                Historia & Tradición
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
                Descubre Córdoba, el Corazón de Veracruz
              </h2>
              <p className="text-background/80 font-light leading-relaxed mb-6">
                Conocida como la Ciudad de los 30 Caballeros, Córdoba resguarda pasajes históricos fundamentales de México, como la firma de los Tratados de Córdoba.
              </p>
              <p className="text-background/80 font-light leading-relaxed mb-8">
                Hospedándote en el Hotel Virreynal, estarás a unos pasos de la emblemática Plaza de Armas, la Catedral de la Inmaculada Concepción y las más exclusivas barras de café cordobés.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#reservar"
                  className="bg-primary hover:bg-[#a64b31] text-white px-6 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
                >
                  Planea tu Visita
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src="/images/hero-bg.jpg"
                alt="Córdoba Veracruz Centro Histórico"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#231812] text-white/70 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/images/logo.png"
              alt="Hotel Virreynal Logo"
              className="h-12 w-auto object-contain filter brightness-0 invert mb-3"
            />
            <p className="text-xs leading-relaxed text-white/60">
              Hotel Virreynal • Córdoba, Veracruz.<br />
              Hospitalidad colonial con el máximo confort contemporáneo.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-white text-base mb-3">Contacto & Ubicación</h4>
            <ul className="text-xs space-y-2 text-white/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Centro Histórico, Córdoba, Veracruz</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+52 (271) 712 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>reservaciones@hotelvirreynal.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-white text-base mb-3">Navegación</h4>
            <div className="flex flex-col space-y-2 text-xs">
              <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
              <a href="#habitaciones" className="hover:text-primary transition-colors">Habitaciones</a>
              <a href="#cordoba" className="hover:text-primary transition-colors">Córdoba Pueblo Mágico</a>
              <a href="#reservar" className="hover:text-primary transition-colors">Reservaciones</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-[11px] text-white/40">
          © {new Date().getFullYear()} Hotel Virreynal. Todos los derechos reservados.
        </div>
      </footer>

      {/* Floating AI Concierge Widget */}
      <ChatConcierge />
    </div>
  );
}
