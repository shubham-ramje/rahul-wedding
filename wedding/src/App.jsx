import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Music, Heart } from 'lucide-react';
import { HeaderNavbar } from './components/HeaderNavbar';
import { Hero } from './components/Hero';
import { InvitationNote } from './components/InvitationNote';
import { EventsTimeline } from './components/EventsTimeline';
import { VenueCards } from './components/VenueCards';
import { FamilySection } from './components/FamilySection';
import { KidsCorner } from './components/KidsCorner';
import { BlessingsWall } from './components/BlessingsWall';
import { FooterContact } from './components/FooterContact';
import { MusicPlayer } from './components/MusicPlayer';
import { PetalShower } from './components/PetalShower';
import { shehnaiPlayer } from './utils/audioSynth';

export default function App() {
  const [hasOpenedInvite, setHasOpenedInvite] = useState(false);

  const handleOpenInvitation = () => {
    setHasOpenedInvite(true);

    // Trigger auspicious golden petals & confetti
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#F3E5AB', '#4A0404', '#FF9933', '#FFFFFF']
    });

    // Start serene royal shehnai audio
    try {
      shehnaiPlayer.start();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative min-h-screen bg-royal-burgundy text-royal-cream selection:bg-gold selection:text-royal-burgundy">
      {/* Floating Petal Shower Particles across the whole site */}
      <PetalShower />

      {/* Royal Opening Ceremony Splash Modal (First Load) */}
      <AnimatePresence>
        {!hasOpenedInvite && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-royal-darkred/95 backdrop-blur-xl p-4"
          >
            {/* Ambient Gold Aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none animate-pulse-glow" />

            <div className="relative max-w-md w-full glass-maroon p-8 sm:p-10 rounded-3xl border-2 border-gold text-center shadow-royal-gold-lg">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold" />

              <p className="font-rozha text-xl sm:text-2xl text-gold-shimmer mb-1">
                ॥ श्री गणेशाय नमः ॥
              </p>
              
              <div className="my-3 py-1">
                <span className="font-poppins text-[11px] uppercase tracking-widest text-gold/80 block">
                  Royal Wedding Invitation
                </span>
                <h2 className="font-rozha text-2xl sm:text-3xl text-gold mt-1">
                  हृदयांश राहुल संग हृदयांशी शिल्पा
                </h2>
                <p className="font-yatra text-gold-champagne text-sm mt-1">
                  मंगल परिणयोत्सव • 13 दिसम्बर 2026
                </p>
              </div>

              {/* Interlocking Monogram Seal */}
              <div className="my-6 flex justify-center">
                <div className="relative w-20 h-20 rounded-full bg-gold-gradient p-1 shadow-royal-gold flex items-center justify-center animate-bounce">
                  <div className="w-full h-full rounded-full bg-royal-burgundy flex items-center justify-center font-cinzel font-bold text-2xl text-gold-shimmer">
                    R&amp;S
                  </div>
                </div>
              </div>

              <p className="font-devanagari text-xs sm:text-sm text-royal-cream/90 leading-relaxed mb-6">
                इस पावन वैवाहिक उत्सव में आपका स्नेहिल अभिनंदन है। कृपया निमंत्रण पत्रिका का दर्शन करें।
              </p>

              {/* Open Invite Button (Initiates audio & smooth reveal) */}
              <button
                onClick={handleOpenInvitation}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-gold-gradient text-royal-burgundy font-poppins font-bold text-sm sm:text-base shadow-royal-gold hover:opacity-95 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>डिजिटल निमंत्रण पत्रिका खोलें</span>
                <Music className="w-4 h-4 ml-1" />
              </button>

              <p className="text-[10px] text-gold/60 font-poppins mt-3">
                संगीत एवं मंगल शहनाई ध्वनियों के साथ
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Sticky Header Navigation */}
      <HeaderNavbar />

      {/* Main Wedding Invitation Page Content */}
      <main>
        {/* Section 1: Sacred Opening & Hero Banner */}
        <Hero />

        {/* Section 2: Family Blessings & Invitation Note */}
        <InvitationNote />

        {/* Section 3: मांगलिक कार्यक्रम (Wedding Events Timeline) */}
        <EventsTimeline />

        {/* Section 4: कार्यक्रम स्थल (Venues & Google Maps) */}
        <VenueCards />

        {/* Section 5: परिवार एवं स्वागत समिति (Royal Family Directory) */}
        <FamilySection />

        {/* Section 6: बाल मनुहार (Kids' Cute Corner) */}
        <KidsCorner />

        {/* Interactive RSVP / Blessings Wall */}
        <BlessingsWall />

        {/* Section 7: प्रेषक एवं संपर्क (Contact & Footer) */}
        <FooterContact />
      </main>

      {/* Interactive Background Shehnai / Instrumental Music Toggle Button */}
      <MusicPlayer />
    </div>
  );
}
