import React, { useState, useEffect } from 'react';

export default function IntroLoader({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Stage 1: Keep splash active for 2.2s, then trigger fade out animation
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 2400);

    // Stage 2: Remove from DOM after fade out transition (600ms)
    const timer2 = setTimeout(() => {
      setIsHidden(true);
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#231812] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Colonial Background Accents */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/15 via-transparent to-transparent pointer-events-none" />

      {/* Main Logo & Typography Animation Container */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center animate-in fade-in zoom-in-90 duration-1000">
        {/* Glowing Halo Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />

        {/* High Quality Logo Image */}
        <img
          src="/images/logo.png"
          alt="Hotel Virreynal Córdoba Logo"
          className="w-56 sm:w-72 md:w-80 h-auto object-contain filter brightness-0 invert drop-shadow-[0_0_20px_rgba(192,92,62,0.5)] transform transition-transform duration-1000 hover:scale-105"
        />

        {/* Minimalist Subtitle Divider */}
        <div className="flex items-center gap-4 mt-8 w-48 sm:w-64 opacity-0 animate-in fade-in duration-1000 [animation-delay:600ms] fill-mode-forwards">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>

        <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-background/80 font-light mt-4 opacity-0 animate-in fade-in duration-1000 [animation-delay:900ms] fill-mode-forwards">
          Córdoba, Veracruz • Pueblo Mágico
        </p>
      </div>

      {/* Minimalist Loading Bar at Bottom */}
      <div className="absolute bottom-12 w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full animate-progress" />
      </div>
    </div>
  );
}
