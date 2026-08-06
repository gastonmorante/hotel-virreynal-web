import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsappUrl = "https://wa.me/522717120000?text=Hola,%20quisiera%20informaci%C3%B3n%20para%20reservar%20en%20Hotel%20Virreynal";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:scale-110 border border-white/30 flex items-center justify-center transition-all duration-300 group"
      aria-label="Reservar por WhatsApp Directo"
      title="Contactar por WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping" />
      </div>
    </a>
  );
}
