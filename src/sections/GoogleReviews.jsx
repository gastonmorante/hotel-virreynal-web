import React from 'react';
import { Star, CheckCircle2, ExternalLink, Quote } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      id: 1,
      author: 'Carlos Mendoza',
      date: 'Hace 2 semanas',
      rating: 5,
      avatarBg: 'bg-blue-600',
      text: 'Excelente ubicación frente a los Portales de Zevallos. El ambiente colonial restaurado con elegancia y la atención personalizada de todo el personal hicieron de nuestra estancia en Córdoba una experiencia inolvidable. ¡El café gourmet por las mañanas es fabuloso!',
      tag: 'Huésped Verificado',
    },
    {
      id: 2,
      author: 'María Elena Rivas',
      date: 'Hace 1 mes',
      rating: 5,
      avatarBg: 'bg-emerald-600',
      text: 'Habitaciones súper amplias, impecables y extremadamente silenciosas a pesar de estar en pleno centro histórico. El Concierge Don Manolo nos recomendó una ruta del café increíble. Sin duda el mejor hotel de Córdoba.',
      tag: 'Huésped Verificado',
    },
    {
      id: 3,
      author: 'Alejandro Gutiérrez',
      date: 'Hace 3 semanas',
      rating: 5,
      avatarBg: 'bg-amber-600',
      text: 'La arquitectura virreinal conservada con el toque contemporáneo en los servicios es de primer nivel. Despertar con la vista a la catedral y disfrutar del patio central es una maravilla. Volveremos pronto.',
      tag: 'Huésped Verificado',
    },
  ];

  return (
    <section id="reseñas" className="py-24 bg-background border-t border-secondary/10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-secondary/15 text-charcoal text-xs uppercase font-semibold tracking-wider mb-4 shadow-sm">
              {/* Google G Logo SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.25 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Reseñas Verificadas en Google</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary">
              Lo que opinan nuestros huéspedes
            </h2>
          </div>

          {/* Overall Rating Badge */}
          <div className="bg-white p-5 rounded-2xl border border-secondary/15 shadow-md flex items-center gap-4 shrink-0">
            <div className="text-center">
              <span className="font-serif text-4xl font-bold text-secondary leading-none block">4.9</span>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-10 w-[1px] bg-secondary/10" />
            <div className="text-xs text-charcoal/80">
              <span className="font-semibold block text-sm text-secondary">Basado en +380 opiniones</span>
              <span>Google Maps • Verificado</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header author info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-semibold flex items-center justify-center text-sm shadow`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary text-sm leading-tight">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] text-charcoal/60 block mt-0.5">
                        {rev.date}
                      </span>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>

                {/* Stars */}
                <div className="flex text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light mb-4">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-secondary/5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps CTA Link */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
          >
            <span>Ver más reseñas en Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
