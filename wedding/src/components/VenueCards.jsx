import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Copy, Check, Calendar, Sparkles } from 'lucide-react';
import { CornerOrnament, RoyalDivider, MandalaWatermark } from './RoyalDividers';

export const VenueCards = () => {
  const [copiedId, setCopiedId] = useState(null);

  const venues = [
    {
      id: "venue-main",
      title: "मुख्य कार्यक्रम स्थल एवं स्वरुचिभोज",
      eventDate: "रविवार, 13 दिसम्बर 2026",
      eventType: "स्नेहभोज एवं आशीर्वाद समारोह",
      locationName: "निज निवास (रामजे सदन)",
      address: "जी-55, लाहिया कॉलोनी, खाटू श्याम मंदिर के पास, कबीटखेड़ी, इन्दौर (म.प्र.)",
      landmark: "खाटू श्याम मंदिर के पास, कबीटखेड़ी",
      mapQuery: "G-55 Lahiya Colony near Khatu Shyam Mandir Kabitkhedi Indore MP",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=G-55+Lahiya+Colony+near+Khatu+Shyam+Mandir+Kabitkhedi+Indore",
      badge: "मुख्य आयोजन स्थल",
      image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b132?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "venue-baraat",
      title: "बारात स्वागत स्थल",
      eventDate: "शुक्रवार, 11 दिसम्बर 2026",
      eventType: "बारात अगवानी व तोरण रस्म",
      locationName: "गजानंद मंगल परिसर",
      address: "गजानंद मंगल परिसर, भागीरथ पुरा, पुलिस चौकी के सामने, इन्दौर (म.प्र.)",
      landmark: "भागीरथ पुरा पुलिस चौकी के सामने",
      mapQuery: "Gajanand Mangal Parisar Bhagirath Pura Indore MP",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gajanand+Mangal+Parisar+Bhagirath+Pura+Indore",
      badge: "बारात स्वागत",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80",
    }
  ];

  const handleCopyAddress = (id, address) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="venues" className="relative py-20 px-4 bg-royal-cream text-royal-burgundy overflow-hidden">
      {/* Background Ornamentation */}
      <div className="absolute inset-0 mandala-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-dark text-xs font-poppins uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-gold-dark" />
            स्थान एवं मार्ग निर्देशिका
          </div>
          <h2 className="font-rozha text-3xl sm:text-5xl text-royal-maroon font-bold">
            कार्यक्रम स्थल
          </h2>
          <p className="font-devanagari text-royal-maroon/80 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            सुगमता से आयोजन स्थल तक पहुँचने के लिए गूगल मैप्स पर नेविगेशन का उपयोग करें
          </p>
          <RoyalDivider />
        </div>

        {/* 2 Venue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col justify-between bg-white rounded-3xl border-2 border-gold/40 shadow-xl overflow-hidden group hover:border-gold hover:shadow-2xl transition-all duration-300"
            >
              {/* Corner Ornaments */}
              <CornerOrnament position="top-left" />
              <CornerOrnament position="top-right" />

              {/* Venue Image Header */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-burgundy/90 via-royal-burgundy/40 to-transparent" />
                
                {/* Date & Badge Tag on image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-royal-burgundy text-xs font-poppins font-bold shadow-md">
                    <Sparkles className="w-3 h-3" />
                    {venue.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 text-gold-champagne text-xs font-poppins">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{venue.eventDate}</span>
                  </div>
                  <h3 className="font-rozha text-xl sm:text-2xl text-royal-cream font-bold mt-0.5">
                    {venue.title}
                  </h3>
                </div>
              </div>

              {/* Venue Body Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-5 h-5 text-gold-dark shrink-0 mt-1" />
                    <div>
                      <h4 className="font-yatra text-lg text-royal-maroon font-bold">
                        {venue.locationName}
                      </h4>
                      <p className="font-devanagari text-sm text-royal-maroon/90 leading-relaxed mt-1">
                        {venue.address}
                      </p>
                    </div>
                  </div>

                  <div className="pl-7 pt-1">
                    <span className="inline-block text-xs font-poppins text-gold-dark font-medium bg-gold/10 px-2.5 py-1 rounded-md border border-gold/20">
                      पहचान चिन्ह: {venue.landmark}
                    </span>
                  </div>
                </div>

                {/* Actions: Google Maps & Copy Address */}
                <div className="pt-4 border-t border-gold/20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={venue.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-royal-maroon hover:bg-royal-burgundy text-gold font-poppins text-xs sm:text-sm font-semibold shadow-md transition-all duration-300 group/btn"
                  >
                    <Navigation className="w-4 h-4 text-gold group-hover/btn:rotate-45 transition-transform" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <button
                    onClick={() => handleCopyAddress(venue.id, venue.address)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-gold/40 hover:bg-gold/10 text-royal-maroon font-poppins text-xs font-medium transition-colors"
                    title="पता कॉपी करें"
                  >
                    {copiedId === venue.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">कॉपी हुआ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gold-dark" />
                        <span>कॉपी पता</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
