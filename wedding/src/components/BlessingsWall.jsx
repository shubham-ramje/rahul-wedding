import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, Heart, Sparkles, MessageCircleHeart, User, MapPin } from 'lucide-react';
import { CornerOrnament, RoyalDivider } from './RoyalDividers';

export const BlessingsWall = () => {
  const defaultBlessings = [
    {
      id: "blessing-1",
      name: "कमलेश रामजे",
      city: "इन्दौर",
      message: "हृदयांश राहुल और हृदयांशी शिल्पा को जीवन की इस नई यात्रा के लिए हृदय से मंगलकामनाएं! ईश्वर आपकी जोड़ी को सदा खुशहाल रखे।",
      time: "17 नवम्बर 2026",
    },
    {
      id: "blessing-2",
      name: "राजकुमार जी (फूफाजी)",
      city: "इन्दौर",
      message: "सदा सुखी रहो, फूलो-फलो! आप दोनों का जीवन प्रेम, विश्वास और खुशियों से महकता रहे। ढेर सारा शुभाशीर्वाद।",
      time: "17 नवम्बर 2026",
    },
    {
      id: "blessing-3",
      name: "शुभम एवं मित्रगण",
      city: "इन्दौर",
      message: "राहुल भाई एवं भाभीजी को परिणयोत्सव की कोटिशः बधाई! शादी में धमाकेदार डांस और ढोल के साथ धमाल मचेगा!",
      time: "17 नवम्बर 2026",
    }
  ];

  const [blessings, setBlessings] = useState(() => {
    try {
      const saved = localStorage.getItem("wedding_blessings_rahul_shilpa");
      return saved ? JSON.parse(saved) : defaultBlessings;
    } catch {
      return defaultBlessings;
    }
  });

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("wedding_blessings_rahul_shilpa", JSON.stringify(blessings));
    } catch (e) {
      console.error(e);
    }
  }, [blessings]);

  const quickPills = [
    "सदा सुखी रहो!",
    "जोड़ी सदा सलामत रहे!",
    "मंगल परिणय की हार्दिक शुभकामनाएं!",
    "ढेर सारा प्यार एवं आशीर्वाद!",
    "ईश्वर सदैव खुशहाल रखे!"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Trigger royal confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F3E5AB', '#4A0404', '#FF9933', '#FFFFFF']
    });

    const newBlessing = {
      id: Date.now().toString(),
      name: name.trim(),
      city: city.trim() || "शुभचिंतक",
      message: message.trim(),
      time: "अभी-अभी"
    };

    setBlessings([newBlessing, ...blessings]);
    setName("");
    setCity("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="blessings" className="relative py-20 px-4 bg-royal-burgundy text-royal-cream overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-poppins uppercase tracking-widest mb-3">
            <MessageCircleHeart className="w-3.5 h-3.5 text-gold" />
            आशीर्वाद एवं शुभकामनाएं
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-gold-shimmer font-bold">
            स्नेह आशीर्वाद पटल (Blessings Wall)
          </h2>
          <p className="font-devanagari text-gold/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            राहुल एवं शिल्पा के सुखद दांपत्य जीवन के लिए अपना स्नेहिल आशीर्वाद व मंगलकामनाएं प्रेषित करें
          </p>
          <RoyalDivider />
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-maroon p-6 sm:p-8 rounded-3xl border border-gold/40 shadow-royal-card mb-12"
        >
          <CornerOrnament position="top-left" />
          <CornerOrnament position="top-right" />

          <h3 className="font-rozha text-xl sm:text-2xl text-gold mb-4 text-center">
            नवदंपति को शुभाशीर्वाद प्रेषित करें
          </h3>

          {/* Quick Blessing Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
            {quickPills.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => setMessage((prev) => (prev ? `${prev} ${pill}` : pill))}
                className="text-xs px-3 py-1 rounded-full bg-gold/10 hover:bg-gold/25 border border-gold/30 text-gold-champagne font-devanagari transition-colors"
              >
                + {pill}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-poppins text-gold/80 mb-1">
                  आपका शुभ नाम (Your Name) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gold/50 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="उदा. शैलेन्द्र रामजे"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-royal-darkred/70 border border-gold/40 text-royal-cream text-sm placeholder:text-gold/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-poppins text-gold/80 mb-1">
                  शहर / संबंध (City / Relation)
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gold/50 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="उदा. इन्दौर / स्नेही स्वजन"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-royal-darkred/70 border border-gold/40 text-royal-cream text-sm placeholder:text-gold/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-poppins text-gold/80 mb-1">
                आपका आशीर्वाद संदेश (Blessing Message) *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="राहुल संग शिल्पा के लिए अपने पावन आशीर्वाद एवं मंगलकामनाएं लिखें..."
                className="w-full p-3 rounded-xl bg-royal-darkred/70 border border-gold/40 text-royal-cream text-sm placeholder:text-gold/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {submitted ? (
                <span className="text-sm text-emerald-400 font-devanagari flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  आपका आशीर्वाद संदेश सफलता से दर्ज हुआ! धन्यवाद!
                </span>
              ) : (
                <span className="text-xs text-gold/60 font-poppins">
                  आपका संदेश तुरंत पटल पर दिखेगा
                </span>
              )}

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gold-gradient text-royal-burgundy font-poppins font-bold text-xs sm:text-sm shadow-royal-gold hover:opacity-90 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>शुभकामनाएं भेजें</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Live Blessings Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-gold/70 font-poppins px-1">
            <span>प्राप्त मंगलकामनाएं ({blessings.length})</span>
            <span>⚜️ स्नेहिल शुभकामनाएं ⚜️</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {blessings.map((b) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative p-5 rounded-2xl glass-royal border border-gold/30 hover:border-gold/60 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-yatra text-base text-gold font-bold">
                        {b.name}
                      </h4>
                      <p className="text-xs text-gold/60 font-poppins">
                        {b.city} • {b.time}
                      </p>
                    </div>
                    <Heart className="w-4 h-4 text-gold/60 fill-gold/20" />
                  </div>
                  <p className="font-devanagari text-sm text-royal-cream/90 leading-relaxed">
                    “{b.message}”
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
