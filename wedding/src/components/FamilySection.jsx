import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Crown, Sparkles, Flower2 } from 'lucide-react';
import { CornerOrnament, RoyalDivider, MandalaWatermark } from './RoyalDividers';

export const FamilySection = () => {
  return (
    <section id="family" className="relative py-20 px-4 bg-royal-burgundy text-royal-cream overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/4 -right-20 pointer-events-none">
        <MandalaWatermark opacity="0.05" className="w-[600px] h-[600px]" />
      </div>
      <div className="absolute bottom-10 -left-20 pointer-events-none">
        <MandalaWatermark opacity="0.05" className="w-[500px] h-[500px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-poppins uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5 text-gold" />
            रामजे परिवार निर्देशिका
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-gold-shimmer font-bold">
            परिवार एवं स्वागत समिति
          </h2>
          <p className="font-devanagari text-gold/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            हमारे परिवार के समस्त वरिष्ठजन, स्नेहीजन एवं युवा वर्ग आपके आत्मीय स्वागत हेतु उत्सुक हैं
          </p>
          <RoyalDivider />
        </div>

        {/* 3 Categories: 1. स्वागतातुर, 2. दर्शनाभिलाषी, 3. विनीत (Hosts) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: स्वागतातुर */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative glass-royal p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-royal-card flex flex-col justify-between"
          >
            <CornerOrnament position="top-left" />
            <CornerOrnament position="top-right" />

            <div>
              <div className="flex items-center justify-between border-b border-gold/30 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-rozha text-2xl text-gold-shimmer font-bold">
                      स्वागतातुर
                    </h3>
                    <p className="font-poppins text-xs text-gold/70">Awaiting to Welcome You</p>
                  </div>
                </div>
                <span className="text-xs font-poppins px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                  आत्मीय स्वजन
                </span>
              </div>

              {/* Groups within स्वागतातुर */}
              <div className="space-y-4 font-devanagari text-sm sm:text-base">
                {/* बुआ-फूफाजी */}
                <div className="p-3 rounded-2xl bg-royal-maroon/60 border border-gold/20">
                  <div className="text-gold font-semibold text-xs uppercase font-poppins tracking-wider flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    बुआ - फूफाजी:
                  </div>
                  <p className="text-royal-cream/95 pl-3">
                    राजकुमार जी - सौ. तुलसा
                  </p>
                </div>

                {/* जीजी-जीजाजी */}
                <div className="p-3 rounded-2xl bg-royal-maroon/60 border border-gold/20">
                  <div className="text-gold font-semibold text-xs uppercase font-poppins tracking-wider flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    जीजी - जीजाजी:
                  </div>
                  <p className="text-royal-cream/95 pl-3 leading-relaxed">
                    सौ. हेमलता - संदीप जी, सौ. संध्या - खेमचन्द्र जी, सौ. खुशबू - अश्विन जी, सौ. कंचन - मनीष जी, शिवानी
                  </p>
                </div>

                {/* मौसा-मौसीजी */}
                <div className="p-3 rounded-2xl bg-royal-maroon/60 border border-gold/20">
                  <div className="text-gold font-semibold text-xs uppercase font-poppins tracking-wider flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    मौसा - मौसीजी:
                  </div>
                  <p className="text-royal-cream/95 pl-3">
                    सुरेश जी - सौ. रंजना, वीरेन्द्र जी - सौ. पिंकी
                  </p>
                </div>

                {/* मामा-मामीजी */}
                <div className="p-3 rounded-2xl bg-royal-maroon/60 border border-gold/20">
                  <div className="text-gold font-semibold text-xs uppercase font-poppins tracking-wider flex items-center gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    मामा - मामीजी:
                  </div>
                  <p className="text-royal-cream/95 pl-3">
                    गुलाब जी - सौ. नीतू
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: दर्शनाभिलाषी */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative glass-royal p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-royal-card flex flex-col justify-between"
          >
            <CornerOrnament position="top-left" />
            <CornerOrnament position="top-right" />

            <div>
              <div className="flex items-center justify-between border-b border-gold/30 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/50 flex items-center justify-center text-gold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-rozha text-2xl text-gold-shimmer font-bold">
                      दर्शनाभिलाषी
                    </h3>
                    <p className="font-poppins text-xs text-gold/70">Desirous of Your Gracious Presence</p>
                  </div>
                </div>
                <span className="text-xs font-poppins px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
                  स्नेह कांक्षी
                </span>
              </div>

              {/* भैया-भाभीजी */}
              <div className="space-y-4 font-devanagari text-sm sm:text-base">
                <div className="p-3 rounded-2xl bg-royal-maroon/60 border border-gold/20">
                  <div className="text-gold font-semibold text-xs uppercase font-poppins tracking-wider flex items-center gap-1.5 mb-2">
                    <Flower2 className="w-3.5 h-3.5 text-gold" />
                    भैया - भाभीजी:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                    <span className="px-2.5 py-1.5 rounded-lg bg-gold/10 border border-gold/20 text-royal-cream">
                      शैलेन्द्र - सौ. नेहा
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg bg-gold/10 border border-gold/20 text-royal-cream">
                      कमलेश - सौ. कमला
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg bg-gold/10 border border-gold/20 text-royal-cream">
                      रामू - सौ. भारती
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg bg-gold/10 border border-gold/20 text-royal-cream">
                      श्याम - सौ. मोनिका
                    </span>
                  </div>
                </div>

                {/* युवा एवं स्नेहीजन */}
                <div className="p-3 rounded-2xl bg-royal-maroon/60 border border-gold/20">
                  <div className="text-gold font-semibold text-xs uppercase font-poppins tracking-wider flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    युवा एवं स्नेहीजन:
                  </div>
                  <div className="flex flex-wrap gap-2 pl-2">
                    {["शुभम", "हिमांशु", "मयंक", "अमन", "नमन", "ध्रुव", "मीत", "आरव", "विवान"].map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-champagne text-xs sm:text-sm font-medium hover:bg-gold hover:text-royal-burgundy transition-colors duration-200"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 3: विनीत (Grand Hosts Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative glass-maroon p-6 sm:p-9 rounded-3xl border-2 border-gold shadow-royal-gold text-center overflow-hidden"
        >
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-royal-burgundy font-poppins text-xs font-bold uppercase tracking-widest mb-3">
            <Crown className="w-4 h-4" />
            विनीत (The Hosts)
          </div>

          <h3 className="font-rozha text-2xl sm:text-3xl text-gold-shimmer font-bold mb-4">
            विनीत स्वजन
          </h3>

          <div className="max-w-3xl mx-auto py-3">
            <p className="font-devanagari text-base sm:text-lg text-royal-cream leading-relaxed font-medium">
              लालचन्द्र - सौ. बेनी, शंकरलाल - सौ. लल्ला, भगवानदास - स्व. लक्ष्मी, ओंकारप्रसाद - सौ. लल्ला, लीलाधर - सौ. शोभा एवं समस्त रामजे परिवार।
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-gold/30 text-xs font-poppins text-gold/80 flex items-center justify-center gap-3">
            <span>⚜️ समस्त रामजे परिवार, इन्दौर (म.प्र.) ⚜️</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
