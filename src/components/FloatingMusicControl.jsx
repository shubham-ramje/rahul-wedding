import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Share2, ArrowUp } from 'lucide-react';
import { royalAudio } from '../utils/audioHelper';

const FloatingMusicControl = ({ isMusicPlaying, setIsMusicPlaying }) => {
  const toggleMusic = () => {
    const playing = royalAudio.toggle();
    setIsMusicPlaying(playing);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `॥ श्री गणेशाय नमः ॥\n\n` +
      `राहुल संग शिल्पा के पावन परिणयोत्सव में आप सपरिवार सादर आमंत्रित हैं!\n\n` +
      `📅 विवाह तिथि: 13 दिसम्बर 2026, रविवार\n` +
      `📍 स्थल: कबीटखेड़ी, इन्दौर (म.प्र.)\n\n` +
      `कृपया इस लिंक पर हमारा डिजिटल निमंत्रण पत्र देखें:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 45,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      {/* WhatsApp Quick Share Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={shareWhatsApp}
        title="व्हाट्सएप पर निमंत्रण शेयर करें"
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#25D366',
          border: '2px solid #FFF',
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.5)',
        }}
      >
        <Share2 size={22} />
      </motion.button>

      {/* Floating Music Toggle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMusic}
        title={isMusicPlaying ? 'शहनाई रोकें (Mute Shehnai)' : 'शहनाई बजाएँ (Play Shehnai)'}
        style={{
          height: '46px',
          padding: '0 16px',
          borderRadius: '30px',
          background: isMusicPlaying
            ? 'linear-gradient(135deg, #D4AF37 0%, #AA771C 100%)'
            : 'rgba(59, 9, 21, 0.9)',
          border: '2px solid #FFEAA7',
          color: isMusicPlaying ? '#24050D' : '#FFEAA7',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.4)',
        }}
      >
        {isMusicPlaying ? (
          <>
            <Volume2 size={20} color="#24050D" />
            <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>शहनाई ♫</span>
            {/* Animated sound bars */}
            <span style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '14px' }}>
              <motion.span
                animate={{ height: ['4px', '14px', '6px'] }}
                transition={{ repeat: Infinity, duration: 0.7 }}
                style={{ width: '2px', backgroundColor: '#24050D' }}
              />
              <motion.span
                animate={{ height: ['12px', '4px', '14px'] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                style={{ width: '2px', backgroundColor: '#24050D' }}
              />
              <motion.span
                animate={{ height: ['6px', '14px', '4px'] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                style={{ width: '2px', backgroundColor: '#24050D' }}
              />
            </span>
          </>
        ) : (
          <>
            <VolumeX size={20} />
            <span style={{ fontSize: '0.82rem', fontWeight: '600' }}>शहनाई बजाएँ</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingMusicControl;
