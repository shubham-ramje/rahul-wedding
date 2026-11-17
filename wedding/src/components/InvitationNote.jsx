import React from 'react';
import { motion } from 'framer-motion';
import { KalashMotif, RoyalDivider, CornerOrnament } from './RoyalDividers';
import { HeartHandshake } from 'lucide-react';

export const InvitationNote = () => {
  return (
    <section id="invitation-note" className="relative py-16 px-4 bg-royal-cream text-royal-burgundy overflow-hidden">
      {/* Decorative Traditional Floral Border Background */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none mandala-pattern" />

      {/* Decorative side banners / archway */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-b from-royal-ivory via-royal-cream to-royal-ivory p-6 sm:p-12 rounded-3xl border-2 border-gold/40 shadow-2xl text-center"
        >
          {/* Ornate Gold Corners */}
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Kalash Auspicious Emblem */}
          <div className="flex justify-center mb-3">
            <div className="p-3 rounded-full bg-gold/15 border border-gold/40 shadow-inner">
              <KalashMotif className="w-12 h-12 text-gold-antique" />
            </div>
          </div>

          <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 mb-2">
            <span className="font-poppins text-xs font-semibold uppercase tracking-widest text-gold-antique">
              आत्मीय स्नेहिल संदेश
            </span>
          </div>

          <h2 className="font-rozha text-3xl sm:text-4xl text-royal-maroon font-bold mb-3">
            स्नेहिल आमंत्रण
          </h2>

          <RoyalDivider />

          {/* Core Royal Invitation Note Text */}
          <div className="relative max-w-2xl mx-auto my-6 px-4 py-6 rounded-2xl bg-white/70 border border-gold/25 shadow-inner">
            <span className="font-serif text-5xl text-gold/30 absolute -top-4 left-3 leading-none select-none">
              “
            </span>

            <p className="font-devanagari text-base sm:text-lg text-royal-maroon/95 leading-relaxed font-normal text-justify sm:text-center">
              स्नेही स्वजन, कुलदेवी की असीम कृपा से एवं पूर्वजों के आशीर्वाद से हमारे परिवार में शुभ प्रसंग के मधुर पल आए हैं, प्रसंग है हमारे लाड़ले सुपुत्र <strong className="font-semibold text-royal-burgundy">हृदयांश राहुल</strong> संग <strong className="font-semibold text-royal-burgundy">हृदयांशी शिल्पा</strong> के मंगल परिणयोत्सव की। जब होती है प्रभु की कृपा, संयोग स्वयं जुड़ जाते हैं, अपनों के स्वागत के अवसर यूँ ही मिल जाते हैं, हमारी खुशियों में आपका अभिनंदन है...
            </p>

            <span className="font-serif text-5xl text-gold/30 absolute -bottom-8 right-3 leading-none select-none">
              ”
            </span>
          </div>

          {/* Warm Note / Welcome Tag */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gold-dark font-yatra text-base mt-6">
            <HeartHandshake className="w-5 h-5 text-gold-antique" />
            <span>आपकी गरिमामयी उपस्थिति नवदंपति के लिए अनमोल उपहार होगी</span>
          </div>

          <div className="mt-4 pt-4 border-t border-gold/25 flex flex-wrap items-center justify-center gap-6 text-xs font-poppins text-royal-maroon/70">
            <span>⚜️ पावन परिणय संस्कार</span>
            <span>⚜️ पारिवारिक स्नेह मिलन</span>
            <span>⚜️ शुभ आशीर्वाद वेला</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
