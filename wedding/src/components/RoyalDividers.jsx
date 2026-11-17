import React from 'react';

// Ornate Royal Gold Center Motif (Kalash with coconut & mango leaves)
export const KalashMotif = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={`text-gold fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Kalash Pot */}
    <path d="M50 15 C45 22 40 28 35 32 C30 35 25 45 25 60 C25 78 36 88 50 88 C64 88 75 78 75 60 C75 45 70 35 65 32 C60 28 55 22 50 15 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
    {/* Base */}
    <path d="M38 88 L34 94 C34 96 66 96 66 94 L62 88" fill="none" stroke="currentColor" strokeWidth="2.5" />
    {/* Rim */}
    <ellipse cx="50" cy="32" rx="16" ry="4" fill="none" stroke="currentColor" strokeWidth="2" />
    {/* Coconut */}
    <path d="M42 28 C42 16 58 16 58 28 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="2" />
    {/* Mango Leaves */}
    <path d="M35 30 C30 20 22 18 18 20 C22 25 30 29 35 30 Z" fill="currentColor" fillOpacity="0.6" />
    <path d="M65 30 C70 20 78 18 82 20 C78 25 70 29 65 30 Z" fill="currentColor" fillOpacity="0.6" />
    <path d="M50 24 C50 10 50 6 50 4 C50 6 50 10 50 24" stroke="currentColor" strokeWidth="2" />
    {/* Swastik / Auspicious mark in Kalash */}
    <path d="M46 52 H54 M50 48 V56 M46 48 V50 M54 54 V56 M52 48 H54 M46 54 H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Ornate Horizontal Divider with Lotus or Diamond
export const RoyalDivider = ({ title, subtitle, className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
    <div className="flex items-center gap-1 flex-1 max-w-[120px] md:max-w-[200px]">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold to-gold/80" />
      <div className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/30 shrink-0" />
      <div className="w-2.5 h-2.5 rotate-45 border border-gold bg-gold shrink-0" />
    </div>

    <div className="text-center px-3">
      {title ? (
        <span className="font-rozha text-gold tracking-wider text-sm md:text-base uppercase flex items-center gap-2">
          <span className="text-xs text-gold/70">✦</span>
          {title}
          <span className="text-xs text-gold/70">✦</span>
        </span>
      ) : (
        <div className="w-4 h-4 rotate-45 border-2 border-gold bg-royal-maroon flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      )}
      {subtitle && <p className="text-xs text-gold/80 font-poppins mt-0.5">{subtitle}</p>}
    </div>

    <div className="flex items-center gap-1 flex-1 max-w-[120px] md:max-w-[200px]">
      <div className="w-2.5 h-2.5 rotate-45 border border-gold bg-gold shrink-0" />
      <div className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/30 shrink-0" />
      <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gold to-gold/80" />
    </div>
  </div>
);

// Corner Royal Ornament for Cards
export const CornerOrnament = ({ position = "top-left" }) => {
  const rotationClass = {
    "top-left": "",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  return (
    <div className={`absolute w-8 h-8 pointer-events-none text-gold/60 ${position.includes('top') ? 'top-1.5' : 'bottom-1.5'} ${position.includes('left') ? 'left-1.5' : 'right-1.5'} ${rotationClass}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" className="w-full h-full">
        <path d="M2 38 V8 C2 4.68629 4.68629 2 8 2 H38" strokeWidth="1.5" />
        <path d="M6 34 V12 C6 8.68629 8.68629 6 12 6 H34" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        <path d="M12 14.5 C12 20 20 20 20 12" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>
    </div>
  );
};

// Royal Floral Mandala Vector (for background rotation & watermarks)
export const MandalaWatermark = ({ className = "w-96 h-96", opacity = "0.06" }) => (
  <svg viewBox="0 0 400 400" className={`pointer-events-none select-none ${className}`} style={{ opacity }}>
    <g fill="none" stroke="#D4AF37" strokeWidth="1.2">
      <circle cx="200" cy="200" r="190" strokeDasharray="6 4" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="170" />
      <circle cx="200" cy="200" r="140" strokeWidth="1.8" />
      <circle cx="200" cy="200" r="110" strokeDasharray="3 3" />
      <circle cx="200" cy="200" r="80" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="50" />
      <circle cx="200" cy="200" r="20" fill="#D4AF37" fillOpacity="0.2" />
      {/* 16 Radial Petals */}
      {[...Array(16)].map((_, i) => (
        <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
          <path d="M200 20 C215 70 230 110 200 140 C170 110 185 70 200 20 Z" fill="#D4AF37" fillOpacity="0.1" />
          <path d="M200 60 C210 90 220 120 200 140 C180 120 190 90 200 60 Z" />
          <circle cx="200" cy="35" r="3" fill="#D4AF37" />
        </g>
      ))}
    </g>
  </svg>
);
