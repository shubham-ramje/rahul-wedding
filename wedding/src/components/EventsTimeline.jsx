import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Sparkles, BellRing, Route } from 'lucide-react';
import { CornerOrnament, RoyalDivider, MandalaWatermark } from './RoyalDividers';

// Custom Minimal Gold Line-Art Icons for Indian Wedding Events
const EventIcons = {
  lagun: () => (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Haldi Bowl / Kalash with Tilak */}
      <ellipse cx="24" cy="14" rx="12" ry="5" />
      <path d="M12 14 C12 28 16 36 24 36 C32 36 36 28 36 14" />
      <path d="M19 36 L17 42 H31 L29 36" strokeLinecap="round" />
      {/* Sacred Plant / Turmeric Root / Leaves */}
      <path d="M24 9 C22 4 17 5 18 9 C19 12 24 13 24 13" fill="currentColor" fillOpacity="0.3" />
      <path d="M24 9 C26 4 31 5 30 9 C29 12 24 13 24 13" fill="currentColor" fillOpacity="0.3" />
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />
    </svg>
  ),
  mataPujan: () => (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Divine Diya / Sacred Flame */}
      <path d="M24 6 C24 6 28 12 28 17 C28 19.5 26.2 21 24 21 C21.8 21 20 19.5 20 17 C20 12 24 6 24 6 Z" fill="currentColor" fillOpacity="0.4" />
      {/* Diya Base */}
      <path d="M8 24 C12 36 36 36 40 24 C40 22 8 22 8 24 Z" />
      <path d="M18 35 L15 42 H33 L30 35" strokeLinecap="round" />
      {/* Rays */}
      <path d="M24 2 V4 M14 9 L16 11 M34 9 L32 11" strokeLinecap="round" />
    </svg>
  ),
  mandap: () => (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Royal Mandap Pillars & Canopy */}
      <path d="M6 14 C14 10 34 10 42 14 L39 18 C33 15 15 15 9 18 Z" fill="currentColor" fillOpacity="0.3" />
      <path d="M24 4 L24 10" strokeLinecap="round" />
      <circle cx="24" cy="4" r="1.5" fill="currentColor" />
      {/* 4 Pillars */}
      <line x1="12" y1="18" x2="12" y2="40" strokeLinecap="round" />
      <line x1="18" y1="18" x2="18" y2="40" strokeLinecap="round" />
      <line x1="30" y1="18" x2="30" y2="40" strokeLinecap="round" />
      <line x1="36" y1="18" x2="36" y2="40" strokeLinecap="round" />
      <path d="M8 40 H40" strokeLinecap="round" />
      {/* Floral Toran drape */}
      <path d="M12 21 C18 25 30 25 36 21" strokeDasharray="2 2" />
    </svg>
  ),
  baraat: () => (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Royal Baraat Shehnai & Dhol Motifs */}
      {/* Dhol */}
      <ellipse cx="18" cy="24" rx="8" ry="12" />
      <path d="M18 12 L32 16 C36 17 38 21 38 24 C38 27 36 31 32 32 L18 36" />
      <ellipse cx="32" cy="24" rx="4" ry="8" />
      {/* Ropes across dhol */}
      <line x1="18" y1="15" x2="32" y2="28" strokeWidth="1.2" />
      <line x1="18" y1="33" x2="32" y2="20" strokeWidth="1.2" />
      {/* Festive notes */}
      <path d="M38 12 Q42 10 44 14" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="44" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
  reception: () => (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Grand Royal Thaal / Amrit Kalash / Feast */}
      <ellipse cx="24" cy="30" rx="18" ry="8" />
      <path d="M6 30 C6 38 42 38 42 30" />
      {/* Royal Covered Cloche / Auspicious Blessings Dome */}
      <path d="M11 28 C11 16 37 16 37 28" fill="currentColor" fillOpacity="0.25" />
      <path d="M24 16 V11" strokeLinecap="round" strokeWidth="2" />
      <circle cx="24" cy="10" r="2" fill="currentColor" />
      {/* Sparkles / Aura */}
      <path d="M24 4 L25 7 L28 8 L25 9 L24 12 L23 9 L20 8 L23 7 Z" fill="currentColor" />
    </svg>
  ),
};

export const EventsTimeline = () => {
  const [activeTab, setActiveTab] = useState(null);

  const events = [
    {
      id: "event-1",
      number: "01",
      title: "ग्वलमिदटी एवं लगुन",
      englishTitle: "Gwalmidti & Lagun Ceremony",
      date: "06 दिसम्बर 2026, रविवार",
      day: "रविवार",
      dateNum: "06",
      monthYear: "दिसम्बर 2026",
      time: "सायं 4:00 बजे",
      iconKey: "lagun",
      description: "मांगलिक शगुन, पारंपरिक उबटन एवं पावन लगुन लेखन की रस्म के साथ वैवाहिक उत्सव का शुभ शुभारंभ।",
      highlight: false,
      tag: "पारंपरिक रस्म",
    },
    {
      id: "event-2",
      number: "02",
      title: "माता पूजन",
      englishTitle: "Mata Pujan & Divine Blessings",
      date: "09 दिसम्बर 2026, बुधवार",
      day: "बुधवार",
      dateNum: "09",
      monthYear: "दिसम्बर 2026",
      time: "सायं 4:00 बजे",
      iconKey: "mataPujan",
      description: "कुलदेवी एवं शक्ति स्वरूपा माता का विधि-विधान पूर्वक पूजन, मंगल दीपक प्रज्वलन एवं शुभाशीर्वाद।",
      highlight: false,
      tag: "ईष्ट वंदना",
    },
    {
      id: "event-3",
      number: "03",
      title: "मंडप",
      englishTitle: "Mandap Pratishtha",
      date: "10 दिसम्बर 2026, गुरुवार",
      day: "गुरुवार",
      dateNum: "10",
      monthYear: "दिसम्बर 2026",
      time: "सायं 4:00 बजे",
      iconKey: "mandap",
      description: "पवित्र मंडप की प्रतिष्ठा, मंगल कलश स्थापना एवं कुल के देवी-देवताओं का पावन आह्वान।",
      highlight: false,
      tag: "शुभ संस्कार",
    },
    {
      id: "event-4",
      number: "04",
      title: "बारात",
      englishTitle: "Royal Baraat Procession",
      date: "11 दिसम्बर 2026, शुक्रवार",
      day: "शुक्रवार",
      dateNum: "11",
      monthYear: "दिसम्बर 2026",
      time: "सायं 7:00 बजे",
      iconKey: "baraat",
      description: "ढोल-शहनाई की मधुर ध्वनियों एवं परिजनों के हर्षोल्लास के साथ वर पक्ष की भव्य शाही बारात का प्रस्थान।",
      routeNote: "श्रीमान तारा जी गर्गसार, इन्दौर वालों के यहाँ सफेद मंदिर से गजानंद मंगल परिसर, भागीरथ पुरा, पुलिस चौकी के सामने, इन्दौर सायं 7 बजे जावेगी।",
      highlight: false,
      tag: "शाही बारात",
    },
    {
      id: "event-5",
      number: "05",
      title: "आशीर्वाद समारोह एवं स्वरुचिभोज",
      englishTitle: "Grand Reception & Royal Feast (Snehabhoj)",
      date: "रविवार, 13 दिसम्बर 2026",
      day: "रविवार",
      dateNum: "13",
      monthYear: "दिसम्बर 2026",
      time: "सायं 7:00 बजे से आपके आगमन तक",
      iconKey: "reception",
      description: "नवदंपति को पावन आशीर्वाद एवं सप्रेम स्नेहभोज का भव्य आयोजन। आप सपरिवार पधारकर हमारी खुशियों को द्विगुणित करें।",
      highlight: true,
      tag: "मुख्य समारोह ★",
    }
  ];

  return (
    <section id="events" className="relative py-20 px-4 bg-royal-burgundy text-royal-cream overflow-hidden">
      {/* Background Subtle Mandala */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <MandalaWatermark opacity="0.04" className="w-[800px] h-[800px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-poppins uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            शुभ वैवाहिक लग्न सारणी
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-gold-shimmer font-bold">
            मांगलिक कार्यक्रम
          </h2>
          <p className="font-devanagari text-gold/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            सभी मांगलिक कार्यक्रमों में आपकी गरिमामयी उपस्थिति एवं पावन आशीर्वाद सादर प्रार्थनीय है
          </p>
          <RoyalDivider />
        </div>

        {/* Timeline Events Stack */}
        <div className="relative space-y-6 sm:space-y-8">
          {/* Vertical Golden Connecting Line for Desktop */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-gold/30 via-gold to-gold/30" />

          {events.map((event, index) => {
            const IconComponent = EventIcons[event.iconKey];
            const isGrand = event.highlight;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl transition-all duration-300 ${
                  isGrand
                    ? 'p-6 sm:p-9 glass-maroon border-2 border-gold shadow-royal-gold-lg bg-gradient-to-br from-royal-maroon via-royal-burgundy to-royal-maroon'
                    : 'p-5 sm:p-7 glass-royal border border-gold/35 hover:border-gold/70 shadow-royal-card'
                }`}
              >
                {/* Grand Card Ornate Corners & Glow Badge */}
                {isGrand && (
                  <>
                    <CornerOrnament position="top-left" />
                    <CornerOrnament position="top-right" />
                    <CornerOrnament position="bottom-left" />
                    <CornerOrnament position="bottom-right" />
                    <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-gold text-royal-burgundy font-poppins font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      मुख्य प्रीतिभोज एवं आशीर्वाद
                    </div>
                  </>
                )}

                <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6">
                  {/* Left Date / Icon Badge */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center p-2 text-center border ${
                      isGrand 
                        ? 'bg-gold/25 border-gold shadow-royal-gold text-gold-champagne' 
                        : 'bg-royal-maroon/90 border-gold/40 text-gold'
                    }`}>
                      <IconComponent />
                      <span className="font-cinzel text-xs font-bold text-gold-champagne mt-0.5">
                        {event.dateNum} DEC
                      </span>
                    </div>

                    {/* Mobile Date Header */}
                    <div className="md:hidden">
                      <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-[11px] font-poppins font-medium border border-gold/30">
                        {event.tag}
                      </span>
                      <h3 className={`font-rozha text-xl sm:text-2xl mt-1 ${isGrand ? 'text-gold-shimmer font-bold' : 'text-gold'}`}>
                        {event.title}
                      </h3>
                      <p className="text-xs text-gold/80 font-poppins">{event.day}</p>
                    </div>
                  </div>

                  {/* Middle Content Details */}
                  <div className="flex-1 space-y-2">
                    <div className="hidden md:flex items-center gap-3">
                      <span className="px-3 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-poppins font-medium border border-gold/30">
                        {event.tag}
                      </span>
                      <span className="text-xs text-gold/70 font-poppins tracking-wider">
                        {event.englishTitle}
                      </span>
                    </div>

                    <h3 className={`hidden md:block font-rozha text-2xl sm:text-3xl ${isGrand ? 'text-gold-shimmer font-bold' : 'text-gold'}`}>
                      {event.title}
                    </h3>

                    {/* Date and Time Line */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-poppins text-royal-cream/90">
                      <div className="flex items-center gap-1.5 text-gold-champagne font-medium">
                        <Calendar className="w-4 h-4 text-gold" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gold-champagne font-medium">
                        <Clock className="w-4 h-4 text-gold" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-devanagari text-xs sm:text-sm text-royal-cream/80 leading-relaxed pt-1">
                      {event.description}
                    </p>

                    {/* Special Baraat Route Note */}
                    {event.routeNote && (
                      <div className="mt-3 p-3.5 rounded-xl bg-gold/10 border border-gold/40 text-xs text-royal-cream flex items-start gap-2.5">
                        <Route className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gold font-medium">बारात मार्ग विवरण: </strong>
                          <span className="font-devanagari leading-relaxed text-royal-cream/95">
                            {event.routeNote}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
