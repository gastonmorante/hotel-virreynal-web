import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import VirtualTour from './sections/VirtualTour';
import GoogleReviews from './sections/GoogleReviews';
import ChatConcierge from './components/ChatConcierge';
import WhatsAppCTA from './components/WhatsAppCTA';
import IntroLoader from './components/IntroLoader';
import TourismModal from './components/TourismModal';
import RoomTourModal from './components/RoomTourModal';
import BookingModal from './components/BookingModal';
import GastronomySection from './sections/GastronomySection';
import { MapPin, Phone, Mail, Compass, Star, Eye, MessageCircle } from 'lucide-react';

export default function App() {
  const [isTourismModalOpen, setIsTourismModalOpen] = useState(false);
  const [selectedRoomTour, setSelectedRoomTour] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingInitialRoom, setBookingInitialRoom] = useState('Habitación Balcón');

  const handleOpenBooking = (roomName) => {
    setBookingInitialRoom(roomName || 'Habitación Balcón');
    setIsBookingModalOpen(true);
  };

  const roomsData = [
    {
      title: 'Habitación Balcón',
      tourId: 'VikmFPAFK',
      desc: 'Espectacular balcón privado con vista panorámica a la Catedral de Córdoba y Plaza de Armas, cama King Size y acabados coloniales de lujo.',
      price: '$2,450',
      badge: 'Balcón Panorámico',
      image: '/images/balconroom.jpg',
    },
    {
      title: 'Habitación Familiar Pet Friendly',
      tourId: '74DIxcuqV',
      desc: 'Amplia suite diseñada para el descanso familiar y la comodidad de tu mascota. Dos camas Queen y espacios integrales adaptados.',
      price: '$1,950',
      badge: 'Pet Friendly',
      image: '/images/petroom.jpg',
    },
    {
      title: 'Master Suite',
      tourId: 'xZnK_3zrK',
      desc: 'Máxima distinción virreinal. Cama King Size, área de estar ejecutiva, acabados artesanales y amenidades gourmet de cortesía.',
      price: '$2,850',
      badge: 'Máximo Lujo',
      image: '/images/masteroom.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-charcoal font-sans selection:bg-primary/20 selection:text-primary">
      {/* Minimalist Intro Loader */}
      <IntroLoader />

      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

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
            {roomsData.map((room, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-secondary/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Room Card Image Container */}
                <div
                  onClick={() => setSelectedRoomTour(room)}
                  className="h-56 bg-secondary/10 relative overflow-hidden cursor-pointer group"
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-secondary text-xs uppercase font-bold tracking-wider px-4 py-2 rounded-full shadow-lg">
                      <Compass className="w-4 h-4 text-primary animate-spin-slow" />
                      <span>Ver Tour 360°</span>
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 bg-primary text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow">
                    {room.badge}
                  </span>
                </div>

                {/* Room Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-secondary mb-2">
                      {room.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                      {room.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-secondary/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-charcoal/60 block">Desde</span>
                        <span className="font-serif text-xl font-bold text-primary">
                          {room.price} <span className="text-xs font-normal text-charcoal/60">/ noche</span>
                        </span>
                      </div>

                      <button
                        onClick={() => handleOpenBooking(room.title)}
                        className="bg-secondary hover:bg-primary text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Reservar</span>
                      </button>
                    </div>

                    {/* Interactive 360° Tour Button */}
                    <button
                      onClick={() => setSelectedRoomTour(room)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors mt-1"
                    >
                      <Compass className="w-4 h-4" />
                      <span>Ver Tour 360° interactivo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Tradición & Gastronomía Virreynal */}
        <GastronomySection onOpenBooking={handleOpenBooking} />

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
              <p className="text-white/80 font-light leading-relaxed mb-6">
                Fundada en 1618, la heroica ciudad de Córdoba es cuna de la Independencia de México y famosa por sus finas fincas cafetaleras de las Altas Montañas. Hotel Virreynal te sitúa en el epicentro de esta historia viva.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setIsTourismModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-[#a64b31] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Planea tu visita</span>
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src="/images/cbafoto1.jpg"
                alt="Catedral de la Inmaculada Concepción Córdoba"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs text-white/90 font-light italic">
                  Catedral de la Inmaculada Concepción frente al Hotel Virreynal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Tour Virtual 360° */}
        <VirtualTour />

        {/* Section: Reseñas de Google */}
        <GoogleReviews />
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
              <a href="#tour-virtual" className="hover:text-primary transition-colors">Tour 360°</a>
              <a href="#cordoba" className="hover:text-primary transition-colors">Córdoba</a>
              <a href="#reseñas" className="hover:text-primary transition-colors">Reseñas</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center text-[11px] text-white/40">
          © {new Date().getFullYear()} Hotel Virreynal. Todos los derechos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp CTA Button (Above Concierge) */}
      <WhatsAppCTA />

      {/* Floating AI Concierge Widget */}
      <ChatConcierge />

      {/* Interactive Tourism Modal */}
      <TourismModal
        isOpen={isTourismModalOpen}
        onClose={() => setIsTourismModalOpen(false)}
      />

      {/* Interactive Room 360° Tour Modal */}
      <RoomTourModal
        room={selectedRoomTour}
        onClose={() => setSelectedRoomTour(null)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Booking Lead Form Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialRoom={bookingInitialRoom}
      />
    </div>
  );
}
