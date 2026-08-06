import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Compass, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Habitaciones', href: '#habitaciones' },
    { name: 'Tour 360°', href: '#tour-virtual' },
    { name: 'Córdoba', href: '#cordoba' },
    { name: 'Reseñas', href: '#reseñas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-secondary/10 py-3.5 text-secondary'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group py-1">
            <img
              src="/images/logo.png"
              alt="Hotel Virreynal Logo"
              className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 ${
                isScrolled
                  ? 'filter brightness-90 hover:scale-105'
                  : 'filter brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:scale-105'
              }`}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled
                    ? 'text-charcoal hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button: Reservar */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#reservar"
              className="inline-flex items-center gap-2 bg-primary hover:bg-[#a64b31] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-secondary hover:bg-secondary/10'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-secondary/10 px-6 pt-4 pb-6 mt-3 shadow-2xl text-secondary animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif font-medium tracking-wider uppercase text-charcoal hover:text-primary transition-colors py-2 border-b border-secondary/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservar"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-[#a64b31] text-white py-3 rounded-full text-sm font-semibold uppercase tracking-widest shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Reservar Ahora</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
