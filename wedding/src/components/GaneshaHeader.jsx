import React from 'react';
import { motion } from 'framer-motion';

export const GaneshaHeader = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-8 pb-4 px-4 text-center z-10">
      {/* Halo / Aura Glow */}
      <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-gold/15 blur-2xl pointer-events-none -top-4 animate-pulse-glow" />

      {/* Rotating Sacred Mandala Behind Ganesha */}
      <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mb-4">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full text-gold/30 animate-spin-slow pointer-events-none"
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="100" cy="100" r="82" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 100 100)`}>
              <path d="M100 12 C108 35 114 60 100 75 C86 60 92 35 100 12 Z" fill="currentColor" fillOpacity="0.15" />
              <circle cx="100" cy="22" r="2.5" fill="currentColor" />
            </g>
          ))}
        </svg>

        {/* Counter-rotating Inner Ring */}
        <svg
          viewBox="0 0 140 140"
          className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] text-gold/20 animate-spin-reverse pointer-events-none"
        >
          <circle cx="70" cy="70" r="64" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="70"
              y1="6"
              x2="70"
              y2="18"
              stroke="currentColor"
              strokeWidth="1.5"
              transform={`rotate(${i * 45} 70 70)`}
            />
          ))}
        </svg>

        {/* Lord Ganesha Divine Golden Icon / Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Radiant Crown (मुकुट) */}
            <path
              d="M38 32 L50 10 L62 32 Z"
              fill="url(#goldGradientGanesha)"
              stroke="#F3E5AB"
              strokeWidth="1.5"
            />
            <path d="M44 26 L50 14 L56 26" stroke="#997300" strokeWidth="1" />
            <circle cx="50" cy="9" r="2.5" fill="#FFEAA7" />

            {/* Sacred Tilak / Trishul on Forehead */}
            <path d="M50 25 V38" stroke="#FFEAA7" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M46 29 C46 34 54 34 54 29" stroke="#E6C25B" strokeWidth="1.5" fill="none" />
            <circle cx="50" cy="27" r="1.5" fill="#E53E3E" />

            {/* Head & Ears (विशाल कर्ण) */}
            {/* Left Ear */}
            <path
              d="M36 34 C24 32 18 42 22 55 C25 61 32 63 36 57"
              stroke="url(#goldGradientGanesha)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="rgba(212, 175, 55, 0.08)"
            />
            {/* Right Ear */}
            <path
              d="M64 34 C76 32 82 42 78 55 C75 61 68 63 64 57"
              stroke="url(#goldGradientGanesha)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="rgba(212, 175, 55, 0.08)"
            />

            {/* Graceful Trunk (वक्रतुण्ड शुंड) - Sweeping to the Left */}
            <path
              d="M48 38 C54 44 55 52 52 64 C49 76 38 78 34 74 C30 70 32 64 37 64 C41 64 43 68 41 70"
              stroke="url(#goldGradientGanesha)"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Modak on Trunk / Left Palm */}
            <circle cx="37" cy="64" r="3.2" fill="#F3E5AB" stroke="#997300" strokeWidth="0.8" />
            <circle cx="37" cy="62" r="1" fill="#FF9933" />

            {/* Eyes & Brow */}
            <path d="M42 40 C44 38 47 40 47 41" stroke="#F3E5AB" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M53 40 C56 40 58 38 58 40" stroke="#F3E5AB" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="45" cy="42" r="1" fill="#FFF" />
            <circle cx="55" cy="42" r="1" fill="#FFF" />

            {/* Tusk (दंत) */}
            <path d="M57 50 L61 51" stroke="#FFFDF7" strokeWidth="2.5" strokeLinecap="round" />

            {/* Base / Lotus Seat Curves */}
            <path
              d="M30 84 C38 88 62 88 70 84 C65 92 35 92 30 84 Z"
              fill="url(#goldGradientGanesha)"
              stroke="#D4AF37"
              strokeWidth="1"
            />

            <defs>
              <linearGradient id="goldGradientGanesha" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="45%" stopColor="#E5C158" />
                <stop offset="80%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#997300" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Primary Sacred Shlok: ॥ श्री गणेशाय नमः ॥ */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="space-y-2 max-w-2xl mx-auto"
      >
        <p className="font-rozha text-2xl md:text-3xl text-gold-shimmer tracking-widest font-bold">
          ॥ श्री गणेशाय नमः ॥
        </p>

        {/* Shloka 1: वक्रतुण्ड महाकाय */}
        <p className="font-devanagari text-gold/90 text-sm md:text-base leading-relaxed tracking-wide px-2 font-medium">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।<br className="hidden sm:inline" /> निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>

        {/* Shloka 2: मंगलम् भगवान विष्णुः */}
        <p className="font-devanagari text-gold/80 text-xs md:text-sm leading-relaxed tracking-wide px-4 opacity-90">
          मंगलम् भगवान विष्णुः, मंगलम् गरुडध्वजः ।<br className="hidden sm:inline" /> मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः ॥
        </p>
      </motion.div>
    </div>
  );
};
