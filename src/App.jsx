import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GaneshSection from './components/GaneshSection';
import CoupleSection from './components/CoupleSection';
import WeddingEvents from './components/WeddingEvents';
import InvitationMessage from './components/InvitationMessage';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import Baraat from './components/Baraat';
import FamilySection from './components/FamilySection';
import ChildrenSection from './components/ChildrenSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PetalsOverlay from './components/PetalsOverlay';
import RoyalOpeningModal from './components/RoyalOpeningModal';
import FloatingMusicControl from './components/FloatingMusicControl';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initial Spiritual Splash Loading Screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Auto show royal envelope modal after loading screen for a breathtaking welcome
      setIsEnvelopeOpen(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="royal-app-wrapper" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 10. Beautiful Loading Animation with Lord Ganesha */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'radial-gradient(circle at center, #5A1020 0%, #24050D 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {/* Rotating Mandala behind Ganesha in Loader */}
            <div style={{ position: 'relative', width: '180px', height: '180px', marginBottom: '24px' }}>
              <div
                className="animate-spin-slow"
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  opacity: 0.6,
                }}
              >
                <img
                  src="/assets/mandala.svg"
                  alt="Mandala Aura"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Glowing Ganesha Icon */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '3px solid #D4AF37',
                  padding: '8px',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
                  background: 'radial-gradient(circle, #5A1020 20%, #1A0207 100%)',
                }}
              >
                <img
                  src="/assets/ganesh.svg"
                  alt="Lord Ganesha"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </motion.div>
            </div>

            {/* Sacred Shloka */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-hindi text-gold-shimmer"
              style={{
                fontSize: '1.6rem',
                letterSpacing: '2px',
                marginBottom: '10px',
              }}
            >
              ॥ श्री गणेशाय नमः ॥
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-hindi"
              style={{
                color: '#FFEAA7',
                fontSize: '1.1rem',
                letterSpacing: '1px',
              }}
            >
              राहुल संग शिल्पा • शाही विवाह आमंत्रण
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Rose Petals and Golden Particles */}
      <PetalsOverlay />

      {/* Sticky Royal Navigation */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Hero Section */}
      <Hero
        onOpenInvitation={() => setIsEnvelopeOpen(true)}
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Spiritual Ganesha Blessing Section */}
      <GaneshSection />

      {/* Couple Introduction Section */}
      <CoupleSection />

      {/* Wedding Events (Timeline) */}
      <WeddingEvents />

      {/* Main Wedding Invitation Message (Patrika) */}
      <InvitationMessage />

      {/* Wedding Countdown Timer */}
      <Countdown />

      {/* Wedding Venue Section */}
      <Venue />

      {/* Baraat Details Section */}
      <Baraat />

      {/* Family Invitation Section */}
      <FamilySection />

      {/* Children's Special Section (Bal Manuhar) */}
      <ChildrenSection />

      {/* Sender Section (Preskak) */}
      <ContactSection />

      {/* Footer Section */}
      <Footer />

      {/* Floating Music and Quick Action Controls */}
      <FloatingMusicControl
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Interactive Royal Envelope / Invitation Modal */}
      <RoyalOpeningModal
        isOpen={isEnvelopeOpen}
        onClose={() => setIsEnvelopeOpen(false)}
        onMusicStart={(playing) => setIsMusicPlaying(playing)}
      />
    </div>
  );
}

export default App;
