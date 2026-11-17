import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown, Calendar, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { royalAudio } from '../utils/audioHelper';

const Hero = ({ onOpenInvitation, isMusicPlaying, setIsMusicPlaying }) => {
  const handleOpenClick = () => {
    // Auspicious confetti burst
    confetti({
      particleCount: 70,
      spread: 90,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FFDF73', '#5A1020', '#C2185B', '#FFF8E7'],
    });

    if (!isMusicPlaying) {
      royalAudio.start();
      if (setIsMusicPlaying) setIsMusicPlaying(true);
    }

    if (onOpenInvitation) {
      onOpenInvitation();
    } else {
      const el = document.getElementById('couple');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px 60px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Top Traditional Hanging Toran Garland */}
      <div
        style={{
          position: 'absolute',
          top: '55px',
          left: 0,
          right: 0,
          width: '100%',
          height: '60px',
          pointerEvents: 'none',
          zIndex: 5,
          opacity: 0.9,
        }}
      >
        <img
          src="/assets/flowers.svg"
          alt="Toran Garland"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Hero Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -20%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(90, 16, 32, 0.25) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="royal-container" style={{ position: 'relative', zIndex: 10, maxWidth: '850px' }}>
        {/* Top Sacred Shloka Invocation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '18px' }}
        >
          <span
            className="font-hindi"
            style={{
              color: '#FFDF73',
              fontSize: '1.45rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
              display: 'inline-block',
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </span>
        </motion.div>

        {/* Lord Ganesha Centerpiece with Rotating Golden Mandala & Golden Ornate Frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            position: 'relative',
            width: '240px',
            height: '240px',
            margin: '0 auto 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Rotating Golden Mandala behind Ganesha */}
          <div
            className="animate-spin-slow"
            style={{
              position: 'absolute',
              inset: '-35px',
              pointerEvents: 'none',
              opacity: 0.7,
            }}
          >
            <img
              src="/assets/mandala.svg"
              alt="Golden Mandala"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Decorative Golden Frame */}
          <div
            className="animate-pulse-glow"
            style={{
              position: 'relative',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              padding: '8px',
              background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #B38728, #AA771C)',
              boxShadow: '0 0 35px rgba(212, 175, 55, 0.6), 0 10px 25px rgba(0,0,0,0.6)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'radial-gradient(circle, #5A1020 0%, #24050D 100%)',
                border: '2px solid #FFF3C4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
              }}
            >
              <img
                src="/assets/ganesh.png"
                alt="Lord Ganesha - Royal Golden Illustration"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Sacred Sanskrit Shloka Below Ganesha */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginBottom: '26px',
            color: '#E8D5A3',
            fontSize: '1.15rem',
            lineHeight: '1.9',
            fontWeight: '600',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
          }}
          className="font-hindi"
        >
          <p>॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ॥</p>
          <p>॥ निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥</p>
        </motion.div>

        {/* Royal Decorative Divider */}
        <div className="royal-divider">
          <Heart size={18} className="divider-icon" />
        </div>

        {/* Main Heading: THE ROYAL WEDDING INVITATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2
            className="font-serif text-gold-shimmer"
            style={{
              fontSize: '1.35rem',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              fontWeight: '700',
            }}
          >
            THE ROYAL WEDDING INVITATION
          </h2>

          {/* Couple Names: राहुल संग शिल्पा */}
          <div
            style={{
              margin: '20px 0 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <h1
              className="font-hindi"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
                fontWeight: '800',
                color: '#FFF8E7',
                letterSpacing: '2px',
                lineHeight: '1.2',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.4)',
              }}
            >
              राहुल
            </h1>

            <span
              className="font-hindi"
              style={{
                fontSize: '1.6rem',
                color: '#D4AF37',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
              }}
            >
              <span style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
              संग
              <span style={{ width: '40px', height: '1px', background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
            </span>

            <h1
              className="font-hindi"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.2rem)',
                fontWeight: '800',
                color: '#FFF8E7',
                letterSpacing: '2px',
                lineHeight: '1.2',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.4)',
              }}
            >
              शिल्पा
            </h1>
          </div>

          {/* Date & Day Badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '12px 36px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, rgba(90, 16, 32, 0.8) 0%, rgba(36, 5, 13, 0.9) 100%)',
              border: '1.5px solid #D4AF37',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(212, 175, 55, 0.2)',
              marginBottom: '38px',
            }}
          >
            <div
              className="font-serif"
              style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                letterSpacing: '3px',
                color: '#FFEAA7',
                textTransform: 'uppercase',
              }}
            >
              13 DECEMBER 2026
            </div>
            <div
              className="font-hindi"
              style={{
                fontSize: '1.15rem',
                color: '#F7EBD5',
                fontWeight: '600',
                letterSpacing: '1px',
                marginTop: '2px',
              }}
            >
              रविवार
            </div>
          </motion.div>

          {/* Animated "Open Wedding Invitation" Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 10px 35px rgba(212, 175, 55, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpenClick}
              className="btn-royal-gold"
              style={{
                fontSize: '1.15rem',
                padding: '16px 42px',
                cursor: 'pointer',
              }}
            >
              <Sparkles size={20} />
              <span>Open Wedding Invitation</span>
              <ChevronDown size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#D4AF37',
          opacity: 0.75,
          cursor: 'pointer',
          zIndex: 10,
        }}
        onClick={() => {
          const el = document.getElementById('couple');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
};

export default Hero;
