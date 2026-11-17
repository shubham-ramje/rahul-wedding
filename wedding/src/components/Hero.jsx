import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Share2, Heart, ChevronDown } from 'lucide-react';
import { GaneshaHeader } from './GaneshaHeader';
import { CoupleMonogram } from './CoupleMonogram';
import { CountdownTimer } from './CountdownTimer';
import { CornerOrnament, RoyalDivider, MandalaWatermark } from './RoyalDividers';

export const Hero = () => {
  const handleAddToCalendar = () => {
    // Google Calendar Event for Dec 13, 2026, 7:00 PM IST to 11:30 PM IST (UTC: 13:30 to 18:00)
    const title = encodeURIComponent("स्नेहभोज एवं मंगल परिणयोत्सव - राहुल संग शिल्पा");
    const details = encodeURIComponent(
      "हृदयांश राहुल संग हृदयांशी शिल्पा के शुभ विवाह व स्नेहभोज में आप सपरिवार सादर आमंत्रित हैं।\nस्थान: निज निवास: जी-55, लाहिया कॉलोनी, खाटू श्याम मंदिर के पास, कबीटखेड़ी, इन्दौर (म.प्र.)"
    );
    const location = encodeURIComponent("G-55, Lahiya Colony, Near Khatu Shyam Mandir, Kabitkhedi, Indore, MP");
    const dates = "20261213T133000Z/20261213T180000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "॥ श्री गणेशाय नमः ॥\n\nस्नेहभोज एवं मंगल परिणयोत्सव\nहृदयांश राहुल संग हृदयांशी शिल्पा\n\nदिनांक: रविवार, 13 दिसम्बर 2026\nस्थान: इन्दौर (म.प्र.)\n\nकृपया हमारे इस पावन प्रसंग का डिजिटल निमंत्रण पत्र देखें:\n" + window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between text-royal-cream overflow-hidden pt-6 pb-12">
      {/* Background Royal Palace Archway with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-all duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Deep Royal Maroon & Burgundy Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-royal-burgundy/95 via-royal-maroon/90 to-royal-burgundy/98" />
        {/* Subtle Warm Amber/Gold Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_75%)]" />
      </div>

      {/* Floating Mandalas in Background */}
      <div className="absolute top-10 -left-28 animate-spin-slow">
        <MandalaWatermark opacity="0.08" className="w-[450px] h-[450px]" />
      </div>
      <div className="absolute top-1/3 -right-32 animate-spin-reverse">
        <MandalaWatermark opacity="0.06" className="w-[500px] h-[500px]" />
      </div>

      {/* Top Sacred Shlokas & Lord Ganesha Emblem */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <GaneshaHeader />
      </div>

      {/* Main Royal Card & Grand Couple Highlight */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 w-full max-w-3xl mx-auto px-4 my-4"
      >
        <div className="relative glass-maroon p-6 sm:p-10 rounded-3xl border-gold-glow-lg text-center shadow-royal-gold">
          {/* Ornate Corner Elements */}
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />
          <CornerOrnament position="bottom-left" />
          <CornerOrnament position="bottom-right" />

          {/* Invitation Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-1.5 rounded-full bg-gold/15 border border-gold/50 mb-4">
            <span className="text-gold text-xs">✨</span>
            <span className="font-yatra text-gold-shimmer text-base sm:text-lg tracking-wider">
              स्नेहभोज एवं मंगल परिणयोत्सव
            </span>
            <span className="text-gold text-xs">✨</span>
          </div>

          <p className="font-poppins text-xs sm:text-sm text-gold/80 tracking-widest uppercase mb-4">
            Royal Wedding Invitation
          </p>

          {/* Couple Monogram Crest */}
          <CoupleMonogram size="large" />

          <RoyalDivider />

          {/* Groom Highlight */}
          <div className="space-y-1.5 my-4">
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 }}
              className="font-rozha text-3xl sm:text-5xl md:text-6xl text-gold-shimmer font-bold tracking-wide"
            >
              हृदयांश राहुल
            </motion.h1>
            <p className="font-devanagari text-xs sm:text-sm text-royal-cream/90 max-w-xl mx-auto leading-relaxed">
              <span className="text-gold/90">सुपौत्र:</span> स्व. श्री हल्कू प्रसाद रामजे
              <span className="mx-2 text-gold">|</span>
              <span className="text-gold/90">सुपुत्र:</span> श्री ओंकार प्रसाद रामजे, इन्दौर (म.प्र.)
            </p>
          </div>

          {/* Sacred "संग" Badge */}
          <div className="my-5 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gold-gradient text-royal-burgundy font-yatra font-bold text-xl shadow-lg ring-4 ring-gold/30">
              <Heart className="w-8 h-8 text-royal-burgundy/20 absolute" />
              <span className="relative z-10">संग</span>
            </div>
          </div>

          {/* Bride Highlight */}
          <div className="space-y-1.5 my-4">
            <motion.h1
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 4, delay: 2 }}
              className="font-rozha text-3xl sm:text-5xl md:text-6xl text-gold-shimmer font-bold tracking-wide"
            >
              हृदयांशी शिल्पा
            </motion.h1>
            <p className="font-devanagari text-xs sm:text-sm text-royal-cream/90 max-w-xl mx-auto leading-relaxed">
              <span className="text-gold/90">सुपौत्री:</span> स्व. श्री दामोदर जी गर्गसार
              <span className="mx-2 text-gold">|</span>
              <span className="text-gold/90">सुपुत्री:</span> श्री तारा जी गर्गसार, इन्दौर (म.प्र.)
            </p>
          </div>

          <RoyalDivider />

          {/* Save The Date Highlight Ribbon */}
          <div className="my-4 inline-block">
            <div className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold/15 via-gold/30 to-gold/15 border border-gold/60 shadow-inner">
              <div className="text-xs uppercase font-poppins text-gold/80 tracking-widest">
                शुभ विवाह एवं स्नेहभोज तिथि
              </div>
              <div className="font-rozha text-xl sm:text-2xl text-gold font-bold mt-0.5">
                रविवार, 13 दिसम्बर 2026
              </div>
            </div>
          </div>

          {/* Live Countdown Timer */}
          <CountdownTimer />

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              onClick={handleAddToCalendar}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-royal-burgundy font-poppins text-xs sm:text-sm font-semibold shadow-royal-gold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-royal-burgundy" />
              <span>कैलेंडर में जोड़ें (Calendar)</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-emerald-700/80 hover:bg-emerald-600 text-white font-poppins text-xs sm:text-sm font-semibold border border-emerald-400/40 shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Share2 className="w-4 h-4" />
              <span>व्हाट्सएप पर शेयर करें</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Down Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-4">
        <button
          onClick={() => scrollToSection('invitation-note')}
          className="flex flex-col items-center text-gold/70 hover:text-gold transition-colors duration-300 group"
          aria-label="नीचे स्क्रॉल करें"
        >
          <span className="font-yatra text-xs tracking-wider mb-1 group-hover:translate-y-0.5 transition-transform">
            स्नेहिल आमंत्रण एवं कार्यक्रम
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
