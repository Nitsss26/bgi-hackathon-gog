import React from 'react';

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Base Background - Deep Navy/Black */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Grid Pattern - Very subtle */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Dynamic Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-secondary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-brand-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />

      {/* Embers / Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="ember-particle animate-ember"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 15}s`,
              opacity: 0.1 + Math.random() * 0.3,
              transform: `scale(${0.3 + Math.random() * 0.7})`,
              backgroundColor: Math.random() > 0.5 ? 'var(--color-brand-secondary)' : 'var(--color-brand-primary)',
            }}
          />
        ))}
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
