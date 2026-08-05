import React, { useEffect } from 'react';
import { Compass, Eye } from 'lucide-react';

export default function VirtualTour() {
  const tourId = "WiSLRe2I-";
  const tourPath = "group";

  useEffect(() => {
    // Dynamically load CloudPano script
    const scriptId = 'cloudpano-share-script';
    let script = document.getElementById(scriptId);

    if (script) {
      script.remove();
    }

    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://app.cloudpano.com/public/shareScript.js';
    script.setAttribute('data-short', tourId);
    script.setAttribute('data-path', tourPath);
    script.setAttribute('data-is-self-hosted', 'false');
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <section id="tour-virtual" className="py-24 bg-background border-t border-secondary/10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest font-semibold mb-4">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>Experiencia Inmersiva</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary mb-4">
            Recorrido Virtual 360°
          </h2>
          <p className="text-charcoal/75 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Explora las suites, los magníficos patios coloniales y rincones emblemáticos del Hotel Virreynal en 360°.
          </p>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4" />
        </div>

        {/* 360 Tour Frame Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/15 bg-black">
          {/* CloudPano Container */}
          <div id={tourId} className="w-full min-h-[500px] sm:min-h-[600px] relative flex items-center justify-center">
            {/* Fallback Direct iFrame */}
            <iframe
              src={`https://app.cloudpano.com/${tourPath}/${tourId}`}
              title="Tour Virtual 360 Hotel Virreynal"
              className="w-full h-[500px] sm:h-[600px] border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
              allowFullScreen
            />
          </div>

          {/* Floating Instructions Ribbon */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto z-10 bg-secondary/90 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2.5">
            <Eye className="w-4 h-4 text-primary animate-pulse" />
            <span>Usa tu mouse o dedo para girar 360° e interactuar con el recorrido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
