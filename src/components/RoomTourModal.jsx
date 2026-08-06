import React from 'react';
import { X, Compass, MessageCircle } from 'lucide-react';

export default function RoomTourModal({ room, onClose, onOpenBooking }) {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden shadow-2xl border border-secondary/20 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-secondary text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-semibold leading-tight">
                Tour 360° • {room.title}
              </h3>
              <p className="text-xs text-white/70 font-light">
                Explora cada rincón de esta habitación en tiempo real
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body with 360 Tour iFrame */}
        <div className="relative w-full h-[380px] sm:h-[480px] bg-black">
          <iframe
            src={`https://app.cloudpano.com/tours/${room.tourId}`}
            title={`Tour 360 ${room.title}`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
            allowFullScreen
          />
        </div>

        {/* Modal Footer & Direct Booking */}
        <div className="p-5 bg-white border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-accent block">
              {room.badge}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-secondary">{room.price}</span>
              <span className="text-xs text-charcoal/60">/ noche (Impuestos incluidos)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-secondary/20 text-secondary hover:bg-secondary/5 text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking && onOpenBooking(room.title);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Reservar Habitación</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
