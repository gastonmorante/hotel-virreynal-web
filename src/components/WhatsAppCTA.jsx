import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  const whatsappUrl = "https://wa.me/522717120000?text=Hola,%20quisiera%20informaci%C3%B3n%20para%20reservar%20en%20Hotel%20Virreynal";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5 border border-white/30 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366] group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
      </div>
      <span className="font-sans text-xs font-bold tracking-wide uppercase">
        WhatsApp Directo
      </span>
    </a>
  );
}
