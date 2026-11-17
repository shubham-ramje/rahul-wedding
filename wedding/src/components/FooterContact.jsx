import React from 'react';
import { Phone, MapPin, Send, Heart, Calendar, Share2, Sparkles } from 'lucide-react';
import { CornerOrnament, RoyalDivider, KalashMotif } from './RoyalDividers';
import { CoupleMonogram } from './CoupleMonogram';

export const FooterContact = () => {
  const contacts = [
    { label: "संपर्क सूत्र 1", number: "8109860849", href: "tel:8109860849" },
    { label: "संपर्क सूत्र 2", number: "7566186719", href: "tel:7566186719" },
  ];

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      "॥ श्री गणेशाय नमः ॥\n\nस्नेहभोज एवं मंगल परिणयोत्सव\nहृदयांश राहुल संग हृदयांशी शिल्पा\n\nदिनांक: रविवार, 13 दिसम्बर 2026\nस्थान: इन्दौर (म.प्र.)\n\nकृपया हमारे इस पावन प्रसंग का डिजिटल निमंत्रण पत्र देखें:\n" + window.location.href
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <footer id="contact" className="relative pt-16 pb-24 px-4 bg-royal-darkred text-royal-cream overflow-hidden border-t-2 border-gold/40">
      {/* Decorative Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Monogram in Footer */}
        <div className="mb-2">
          <CoupleMonogram size="normal" />
        </div>

        <h3 className="font-rozha text-2xl sm:text-3xl text-gold-shimmer font-bold mt-2">
          हृदयांश राहुल संग हृदयांशी शिल्पा
        </h3>
        <p className="font-poppins text-xs text-gold/70 tracking-widest uppercase mt-1">
          13 दिसम्बर 2026 • इन्दौर (म.प्र.)
        </p>

        <RoyalDivider />

        {/* Sender & Address Details */}
        <div className="max-w-2xl mx-auto my-6 p-6 sm:p-8 rounded-3xl glass-maroon border border-gold/40 shadow-royal-card">
          <div className="inline-block px-4 py-1 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-poppins uppercase tracking-wider mb-3">
            प्रेषक विवरण
          </div>

          <div className="space-y-3 font-devanagari">
            <div>
              <span className="text-gold/80 text-sm">प्रेषक: </span>
              <h4 className="font-rozha text-2xl text-gold-champagne font-bold inline">
                ओंकार प्रसाद रामजे
              </h4>
            </div>

            <div className="flex items-center justify-center gap-2 text-royal-cream/90 text-sm sm:text-base max-w-md mx-auto">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>
                <strong>पता:</strong> जी-55, लाहिया कॉलोनी, कबीटखेड़ी, इन्दौर (म.प्र.)
              </span>
            </div>
          </div>

          {/* Click to Call Buttons */}
          <div className="mt-6 pt-5 border-t border-gold/25">
            <p className="font-poppins text-xs text-gold/80 uppercase tracking-widest mb-3">
              संपर्क सूत्र (Click to Call)
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.number}
                  href={contact.href}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gold/15 hover:bg-gold hover:text-royal-burgundy border border-gold/50 text-gold font-poppins font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>📞 {contact.number}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Share Button & Auspicious Closing */}
        <div className="flex flex-wrap items-center justify-center gap-4 my-6">
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-poppins text-xs sm:text-sm font-semibold border border-emerald-400/40 shadow-lg transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>निमंत्रण पत्रिका दोस्तों/परिजनों को भेजें</span>
          </button>
        </div>

        {/* Auspicious Mangal Footer Text */}
        <div className="mt-10 pt-6 border-t border-gold/20 text-xs text-gold/70 font-devanagari space-y-1">
          <p className="font-medium text-gold/90">
            ॥ शुभं भवतु कल्याणं आरोग्यं धनसंपदा ॥
          </p>
          <p className="font-poppins text-[11px] opacity-75">
            डिजिटल आमंत्रण पत्रिका • समस्त रामजे एवं गर्गसार परिवार, इन्दौर
          </p>
        </div>
      </div>
    </footer>
  );
};
