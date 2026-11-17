import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Sparkles, Heart, BellRing, Star } from 'lucide-react';
import { CornerOrnament, RoyalDivider } from './RoyalDividers';

export const KidsCorner = () => {
  const kids = [
    { name: "अयान", tag: "शरारती" },
    { name: "लाभान्सी (लाडो)", tag: "दुलारी" },
    { name: "कनिष्का", tag: "प्यारी" },
    { name: "रिद्धी", tag: "नटखट" },
    { name: "सिद्धी", tag: "राजकुमारी" },
  ];

  return (
    <section id="kids-corner" className="relative py-16 px-4 bg-royal-cream text-royal-burgundy overflow-hidden">
      {/* Playful Floating Stars/Confetti */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-b from-amber-50 via-white to-amber-50/70 p-6 sm:p-10 rounded-3xl border-2 border-gold/50 shadow-2xl text-center overflow-hidden"
        >
          {/* Ornate Gold Corners */}
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Cute Badge Header */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="p-2.5 rounded-full bg-amber-100 border border-gold/40 text-gold-dark">
              <Smile className="w-6 h-6 text-gold-antique" />
            </span>
          </div>

          <div className="inline-block px-4 py-1 rounded-full bg-gold/15 border border-gold/30 mb-2">
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest text-gold-dark">
              नन्हे-मुन्नों का आग्रह
            </span>
          </div>

          <h2 className="font-rozha text-3xl sm:text-4xl text-royal-maroon font-bold mb-3">
            बाल मनुहार
          </h2>

          <RoyalDivider />

          {/* Traditional Kids' Wedding Poem Card */}
          <div className="relative max-w-2xl mx-auto my-6 p-6 rounded-2xl bg-gradient-to-br from-white/90 via-amber-50/50 to-white/90 border border-gold/40 shadow-inner">
            <div className="flex justify-center mb-2 text-gold">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>

            <p className="font-yatra text-lg sm:text-xl text-royal-maroon leading-relaxed">
              “हमारे मामा / चाचा की शादी का शुभ अवसर आया है,<br className="hidden sm:inline" />
              घर आँगन खुशियों से सजाया है,<br />
              बजेगी शहनाई होगी खुशियों की बरसात,<br className="hidden sm:inline" />
              होगी नई जिंदगी की प्यारी शुरुआत...”
            </p>

            <p className="font-devanagari text-xs sm:text-sm text-gold-dark font-medium mt-3 italic">
              — हमारी शादी में आपका आना जरूरी है, वरना हमारी खुशियां अधूरी हैं!
            </p>
          </div>

          {/* Cute Kids Badges */}
          <div className="mt-6">
            <p className="font-poppins text-xs uppercase tracking-wider text-gold-dark font-semibold mb-3">
              आग्रहकर्ता नन्हे-मुन्ने:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {kids.map((kid, index) => (
                <motion.div
                  key={kid.name}
                  whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="px-4 py-2 rounded-2xl bg-white border border-gold/40 shadow-sm flex items-center gap-2 group hover:border-gold hover:shadow-md transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
                  <span className="font-yatra text-base sm:text-lg text-royal-maroon">
                    {kid.name}
                  </span>
                  <span className="text-[10px] font-poppins px-1.5 py-0.5 rounded-full bg-gold/15 text-gold-dark">
                    {kid.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
