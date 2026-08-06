import React, { useState } from 'react';
import { X, MapPin, Coffee, Landmark, Trees, Clock, Sparkles, Navigation } from 'lucide-react';

export default function TourismModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('todos');

  if (!isOpen) return null;

  const places = [
    {
      id: 1,
      title: 'Plaza de Armas & Portales de Zevallos',
      category: 'Historia & Gastronomía',
      categoryKey: 'historia',
      distance: 'A 1 min a pie',
      desc: 'El corazón latente de Córdoba. Aquí se firmaron los históricos Tratados de Córdoba en 1821 que consumaron la Independencia de México. Disfruta de un auténtico café de olla en sus tradicionales portales.',
      icon: Landmark,
      image: '/images/hero-bg.jpg',
      highlight: 'Lugar Histórico Nacional',
    },
    {
      id: 2,
      title: 'Catedral de la Inmaculada Concepción',
      category: 'Arquitectura Colonial',
      categoryKey: 'historia',
      distance: 'A 2 min a pie',
      desc: 'Emblemático templo del siglo XVII con imponentes torres gemelas azul y oro, retablos neoclásicos y un majestuoso altar de hoja de oro que ilumina el centro histórico.',
      icon: MapPin,
      image: '/images/cbafoto1.jpg',
      highlight: 'Símbolo de Córdoba',
    },
    {
      id: 3,
      title: 'Ex-Hacienda de Toxpan',
      category: 'Cultura & Naturaleza',
      categoryKey: 'naturaleza',
      distance: 'A 10 min en auto',
      desc: 'Uno de los primeros ingenios azucareros de México, hoy restaurado como parque cultural y Museo del Café. Rodeado de arboledas centenarias y arquitectura colonial industrial.',
      icon: Trees,
      image: '/images/hero-bg.jpg',
      highlight: 'Patrimonio Cultural',
    },
    {
      id: 4,
      title: 'Ruta del Café en Fincas de las Altas Montañas',
      category: 'Experiencia Gourmet',
      categoryKey: 'cafe',
      distance: 'Tours diarios desde el hotel',
      desc: 'Sumérgete en los cafetales de altura en las laderas del volcán Pico de Orizaba. Conoce el proceso artesanal de cosecha, tostado y catación de los mejores granos de México.',
      icon: Coffee,
      image: '/images/hero-bg.jpg',
      highlight: 'Experiencia Imperdible',
    },
    {
      id: 5,
      title: 'Museo de la Ciudad de Córdoba',
      category: 'Arqueología & Arte',
      categoryKey: 'historia',
      distance: 'A 5 min a pie',
      desc: 'Alberga una de las colecciones arqueológicas más ricas de la cultura totonaca y olmeca de las Altas Montañas, junto con los archivos originales de la fundación en 1618.',
      icon: Landmark,
      image: '/images/hero-bg.jpg',
      highlight: 'Colección Prehispánica',
    },
  ];

  const filteredPlaces = activeTab === 'todos'
    ? places
    : places.filter(p => p.categoryKey === activeTab);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden shadow-2xl border border-secondary/20 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-secondary text-white p-6 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-semibold mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Guía Turística de Córdoba</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Sitios de Mayor Interés Turístico
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Categories */}
        <div className="px-6 py-3 bg-white border-b border-secondary/10 flex gap-2 overflow-x-auto shrink-0">
          {[
            { id: 'todos', label: 'Todos los Atractivos' },
            { id: 'historia', label: '🏛️ Historia & Arquitectura' },
            { id: 'cafe', label: '☕ Ruta del Café' },
            { id: 'naturaleza', label: '🌿 Naturaleza & Cultura' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-background hover:bg-secondary/10 text-charcoal/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Places Grid Container */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-background/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPlaces.map((place) => {
              const IconComp = place.icon;
              return (
                <div
                  key={place.id}
                  className="bg-white rounded-2xl border border-secondary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="h-44 relative overflow-hidden bg-secondary/10">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                      {place.highlight}
                    </span>
                    <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{place.distance}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-1 flex items-center gap-1.5">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{place.category}</span>
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-secondary mb-2">
                        {place.title}
                      </h4>
                      <p className="text-xs text-charcoal/75 leading-relaxed">
                        {place.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-secondary/10 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/70 shrink-0">
          <div className="flex items-center gap-2">
            <Navigation className="w-4 h-4 text-primary" />
            <span>Todos los atractivos se ubican a pocos minutos del Hotel Virreynal.</span>
          </div>
          <button
            onClick={onClose}
            className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded-full font-semibold uppercase tracking-wider text-xs transition-colors"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
}
