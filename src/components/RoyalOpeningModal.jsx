import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { royalAudio } from '../utils/audioHelper';

const RoyalOpeningModal = ({ isOpen, onClose, onMusicStart }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // Auspicious golden and maroon confetti shower
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FFE082', '#5A1020', '#C2185B', '#FFFFFF']
    });

    // Start royal wedding shehnai music
    royalAudio.start();
    if (onMusicStart) onMusicStart(true);

    setTimeout(() => {
      onClose();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="royal-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(20, 2, 7, 0.94)',
            backdropFilter: 'blur(10px)',
            padding: '20px'
          }}
        >
          {/* Royal Envelope Card */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.15, opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              maxWidth: '560px',
              width: '100%',
              background: 'linear-gradient(145deg, #5A1020 0%, #3B0915 60%, #24050D 100%)',
              border: '2px solid #D4AF37',
              borderRadius: '24px',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.35)',
              padding: '40px 30px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Corner Ornaments */}
            <div className="ornate-corners" />

            {/* Glowing Aura */}
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '280px',
                height: '280px',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}
            />

            {/* Top Invocation */}
            <p
              style={{
                color: '#E8D5A3',
                fontSize: '1.25rem',
                fontWeight: '600',
                letterSpacing: '2px',
                marginBottom: '16px'
              }}
            >
              ॥ श्री गणेशाय नमः ॥
            </p>

            {/* Ganesha Seal */}
            <motion.div
              animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #5A1020 30%, #24050D 100%)',
                border: '3px solid #D4AF37',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.5), inset 0 0 15px rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'
              }}
            >
              <img
                src="/assets/ganesh.svg"
                alt="Lord Ganesha"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </motion.div>

            {/* Royal Heading */}
            <h2
              className="font-serif text-gold-shimmer"
              style={{
                fontSize: '1.4rem',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                marginBottom: '8px'
              }}
            >
              The Royal Wedding Invitation
            </h2>

            {/* Couple Name */}
            <h1
              className="font-hindi"
              style={{
                fontSize: '2.5rem',
                color: '#FFF8E7',
                fontWeight: '700',
                margin: '10px 0',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)'
              }}
            >
              राहुल <span style={{ color: '#D4AF37', fontSize: '1.8rem' }}>संग</span> शिल्पा
            </h1>

            {/* Wedding Date */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 20px',
                borderRadius: '30px',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                color: '#F3E5AB',
                fontSize: '1.05rem',
                fontWeight: '600',
                marginBottom: '28px'
              }}
            >
              <span>13 दिसम्बर 2026, रविवार</span>
            </div>

            <p
              style={{
                color: '#E8D5A3',
                fontSize: '0.95rem',
                lineHeight: '1.7',
                maxWidth: '420px',
                margin: '0 auto 28px',
                opacity: 0.95
              }}
            >
              स्नेही स्वजन, हमारे परिवार के इस पावन एवं मांगलिक परिणयोत्सव में आपका सपरिवार हार्दिक स्वागत एवं अभिनंदन है।
            </p>

            {/* Open Button with Wax Seal feel */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(212, 175, 55, 0.7)' }}
              whileTap={{ scale: 0.96 }}
              onClick={handleOpenInvitation}
              disabled={isOpening}
              className="btn-royal-gold"
              style={{
                width: '100%',
                maxWidth: '340px',
                fontSize: '1.15rem',
                padding: '16px 28px',
                cursor: 'pointer'
              }}
            >
              <Sparkles size={22} style={{ color: '#5A1020' }} />
              <span>{isOpening ? 'निमंत्रण पत्र खुल रहा है...' : 'निमंत्रण पत्र खोलें (Open Invitation)'}</span>
              <Volume2 size={20} style={{ color: '#5A1020' }} />
            </motion.button>

            <p style={{ marginTop: '14px', fontSize: '0.85rem', color: '#D4AF37', opacity: 0.85 }}>
              ♫ क्लिक करने पर शहनाई वादन प्रारम्भ होगा
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoyalOpeningModal;
