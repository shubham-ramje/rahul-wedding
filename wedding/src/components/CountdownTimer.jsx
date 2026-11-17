import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CountdownTimer = () => {
  // Target: December 13, 2026, 7:00 PM IST (UTC+5:30)
  const targetDate = new Date("2026-12-13T19:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "दिन", en: "Days", value: timeLeft.days },
    { label: "घंटे", en: "Hours", value: timeLeft.hours },
    { label: "मिनट", en: "Mins", value: timeLeft.minutes },
    { label: "सेकंड", en: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 my-6">
      <div className="text-center mb-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-poppins tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          शुभ मुहूर्त की प्रतीक्षा
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-xl bg-royal-maroon/70 backdrop-blur-md border border-gold/40 shadow-royal-card group hover:border-gold transition-all duration-300"
          >
            {/* Corner Dots */}
            <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-gold/50" />
            <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-gold/50" />
            <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-gold/50" />
            <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-gold/50" />

            {/* Digit Display */}
            <span className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold text-gold-shimmer leading-none">
              {String(unit.value).padStart(2, '0')}
            </span>

            {/* Hindi Label */}
            <span className="font-rozha text-xs sm:text-sm text-gold mt-1">
              {unit.label}
            </span>

            {/* English Sublabel */}
            <span className="text-[10px] sm:text-xs text-gold/60 font-poppins font-light uppercase tracking-wider">
              {unit.en}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-gold/70 mt-3 font-poppins">
        13 दिसम्बर 2026 | सायं 7:00 बजे (भारतीय मानक समय)
      </p>
    </div>
  );
};
