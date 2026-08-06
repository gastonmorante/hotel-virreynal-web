import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, User, Phone, FileText, Send, Hotel, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialRoom = 'Habitación Balcón' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    roomType: initialRoom,
    adults: 2,
    children: 0,
    checkIn: '',
    checkOut: '',
    notes: '',
  });

  useEffect(() => {
    if (initialRoom) {
      setFormData(prev => ({ ...prev, roomType: initialRoom }));
    }
  }, [initialRoom]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `🏨 *NUEVA SOLICITUD DE RESERVA • HOTEL VIRREYNAL*
----------------------------------------
👤 *Nombre:* ${formData.name || 'No especificado'}
📞 *Teléfono/WhatsApp:* ${formData.phone || 'No especificado'}
🛏️ *Habitación:* ${formData.roomType}
👥 *Huéspedes:* ${formData.adults} Adulto(s) ${formData.children > 0 ? `, ${formData.children} Niño(s)` : ''}
📅 *Fecha de Entrada:* ${formData.checkIn || 'Por definir'}
📅 *Fecha de Salida:* ${formData.checkOut || 'Por definir'}
📝 *Notas/Comentarios:* ${formData.notes || 'Sin notas adicionales'}
----------------------------------------
¡Hola! Quisiera confirmar disponibilidad y continuar con mi reserva en Hotel Virreynal.`;

    const whatsappUrl = `https://wa.me/522717120000?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-background rounded-3xl overflow-hidden shadow-2xl border border-secondary/20 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 bg-secondary text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold leading-tight flex items-center gap-2">
                <span>Solicitud de Reserva</span>
                <span className="text-[10px] bg-primary text-white font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Departamento de Reservas
                </span>
              </h3>
              <p className="text-xs text-white/70 font-light mt-0.5">
                Complete el formulario para verificar disponibilidad y procesar su solicitud
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar modal de reserva"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {/* Guest Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" />
                <span>Nombre Completo *</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej. María Elena González"
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Teléfono de Contacto *</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej. +52 271 123 4567"
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Room Selection */}
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
              <Hotel className="w-3.5 h-3.5 text-primary" />
              <span>Tipo de Habitación</span>
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              <option value="Habitación Balcón">Habitación Balcón ($2,450 / noche)</option>
              <option value="Habitación Familiar Pet Friendly">Habitación Familiar Pet Friendly ($1,950 / noche)</option>
              <option value="Habitación Doble">Habitación Doble ($1,850 / noche)</option>
              <option value="Cualquier Habitación Disponible">Cualquier Habitación Disponible</option>
            </select>
          </div>

          {/* Dates: Check-In & Check-Out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>Fecha de Entrada (Check-in) *</span>
              </label>
              <input
                type="date"
                name="checkIn"
                required
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>Fecha de Salida (Check-out) *</span>
              </label>
              <input
                type="date"
                name="checkOut"
                required
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Guests: Adults & Children */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>Adultos</span>
              </label>
              <select
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="1">1 Adulto</option>
                <option value="2">2 Adultos</option>
                <option value="3">3 Adultos</option>
                <option value="4">4 Adultos</option>
                <option value="5+">5+ Adultos</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-primary" />
                <span>Niños</span>
              </label>
              <select
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="0">0 Niños</option>
                <option value="1">1 Niño</option>
                <option value="2">2 Niños</option>
                <option value="3">3 Niños</option>
                <option value="4+">4+ Niños</option>
              </select>
            </div>
          </div>

          {/* Notes & Special Requests */}
          <div>
            <label className="block text-xs uppercase font-bold tracking-wider text-secondary mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Notas o Peticiones Especiales</span>
            </label>
            <textarea
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Ej. Viajo con mi mascota (perrito mediano), requiero cama de cuna o llegada tardía a las 8 PM..."
              className="w-full px-4 py-3 rounded-xl border border-secondary/20 bg-white text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-3 border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-charcoal/60 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Confirmación rápida de recepción y reservaciones</span>
            </span>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#a64b31] text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-xl transition-all group"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Enviar Reserva</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
