import React from 'react';
import { motion } from 'framer-motion';

export const CoupleMonogram = ({ size = "normal" }) => {
  const isLarge = size === "large";

  return (
    <div className="relative flex flex-col items-center justify-center my-3 select-none">
      {/* Soft golden glow behind the crest */}
      <div className="absolute w-32 h-32 rounded-full bg-gold/15 blur-xl pointer-events-none" />

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`relative ${isLarge ? 'w-36 h-36 md:w-44 md:h-44' : 'w-28 h-28 md:w-32 md:h-32'} flex items-center justify-center`}
      >
        {/* SVG Royal Crest Frame */}
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
          <defs>
            <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#997300" />
            </linearGradient>
          </defs>

          {/* Crown on top */}
          <path
            d="M85 32 L100 16 L115 32 L124 22 L120 40 L80 40 L76 22 Z"
            fill="url(#crestGold)"
            stroke="#FFF2B2"
            strokeWidth="1"
          />
          <circle cx="100" cy="14" r="2.5" fill="#FFEAA7" />
          <circle cx="76" cy="20" r="2" fill="#FFEAA7" />
          <circle cx="124" cy="20" r="2" fill="#FFEAA7" />

          {/* Outer Ornate Filigree Ring */}
          <circle cx="100" cy="110" r="68" fill="none" stroke="url(#crestGold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="100" cy="110" r="62" fill="rgba(43, 3, 3, 0.6)" stroke="url(#crestGold)" strokeWidth="2" />
          <circle cx="100" cy="110" r="56" fill="none" stroke="url(#crestGold)" strokeWidth="0.8" strokeOpacity="0.5" />

          {/* Laurel / Floral Wreath Left & Right */}
          <path
            d="M48 110 C48 140 68 165 100 172 C132 165 152 140 152 110"
            fill="none"
            stroke="url(#crestGold)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Decorative side leaf nodes */}
          <circle cx="52" cy="95" r="2" fill="url(#crestGold)" />
          <circle cx="46" cy="118" r="2" fill="url(#crestGold)" />
          <circle cx="56" cy="142" r="2" fill="url(#crestGold)" />
          <circle cx="148" cy="95" r="2" fill="url(#crestGold)" />
          <circle cx="154" cy="118" r="2" fill="url(#crestGold)" />
          <circle cx="144" cy="142" r="2" fill="url(#crestGold)" />
          <circle cx="100" cy="174" r="3" fill="url(#crestGold)" />
        </svg>

        {/* Interlocking Monogram Letters "R & S" */}
        <div className="absolute inset-0 flex items-center justify-center pt-5">
          <div className="flex items-center justify-center font-cinzel text-gold-shimmer font-black tracking-tight">
            <span className="text-3xl md:text-4xl translate-x-1 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              R
            </span>
            <span className="font-greatvibes text-xl md:text-2xl text-gold/90 -mx-1 z-10 filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
              &amp;
            </span>
            <span className="text-3xl md:text-4xl -translate-x-1 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              S
            </span>
          </div>
        </div>
      </motion.div>

      {/* Monogram Caption */}
      <div className="text-center mt-1">
        <span className="font-rozha text-xs md:text-sm text-gold tracking-widest uppercase">
          राहुल संग शिल्पा
        </span>
      </div>
    </div>
  );
};
