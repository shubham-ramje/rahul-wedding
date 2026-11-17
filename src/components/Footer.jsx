import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        padding: '70px 20px 40px',
        backgroundColor: '#1E0308',
        borderTop: '2px solid #D4AF37',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Golden Decorative Arc Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #D4AF37 20%, #FFF3C4 50%, #D4AF37 80%, transparent)',
        }}
      />

      <div className="royal-container" style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
        {/* Lord Ganesha Invocation */}
        <div style={{ marginBottom: '18px' }}>
          <span
            className="font-hindi"
            style={{
              color: '#FFDF73',
              fontSize: '1.4rem',
              fontWeight: '700',
              letterSpacing: '2px',
            }}
          >
            ॥ श्री गणेशाय नमः ॥
          </span>
        </div>

        {/* Small Ganesha Center Icon */}
        <div
          style={{
            width: '56px',
            height: '56px',
            margin: '0 auto 18px',
            borderRadius: '50%',
            border: '1.5px solid #D4AF37',
            padding: '6px',
            background: 'radial-gradient(circle, #5A1020 0%, #24050D 100%)',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)',
          }}
        >
          <img
            src="/assets/ganesh.svg"
            alt="Lord Ganesha"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        {/* Couple Name */}
        <h3
          className="font-hindi"
          style={{
            fontSize: '2.4rem',
            fontWeight: '700',
            color: '#FFF8E7',
            marginBottom: '16px',
            textShadow: '0 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          राहुल <span style={{ color: '#E91E63' }}>❤️</span> शिल्पा
        </h3>

        {/* Warm Gratitude Note */}
        <p
          className="font-hindi"
          style={{
            color: '#FFEAA7',
            fontSize: '1.25rem',
            lineHeight: '1.9',
            maxWidth: '580px',
            margin: '0 auto 24px',
            fontWeight: '500',
          }}
        >
          आपकी उपस्थिति हमारे लिए सौभाग्य एवं प्रसन्नता का विषय होगी।
        </p>

        {/* Invitation Line */}
        <div
          className="font-hindi"
          style={{
            padding: '16px 28px',
            borderRadius: '30px',
            display: 'inline-block',
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            marginBottom: '35px',
          }}
        >
          <span style={{ color: '#E8D5A3', fontSize: '1.1rem', marginRight: '6px' }}>
            आमंत्रण:
          </span>
          <span style={{ color: '#FFDF73', fontSize: '1.25rem', fontWeight: '700' }}>
            समस्त रामजे परिवार
          </span>
        </div>

        <div className="royal-divider">
          <Heart size={14} className="divider-icon" />
        </div>

        {/* Back to Top Button */}
        <div style={{ marginTop: '20px' }}>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="btn-royal-outline"
            style={{ fontSize: '0.88rem', padding: '10px 22px' }}
          >
            <ArrowUp size={16} />
            <span>शीर्ष पर जाएँ (Back to Top)</span>
          </motion.button>
        </div>

        {/* Copyright / Blessing Date */}
        <div
          style={{
            marginTop: '30px',
            fontSize: '0.85rem',
            color: '#B39282',
            letterSpacing: '0.5px',
          }}
        >
          <p>॥ 13 दिसम्बर 2026 • इन्दौर (म.प्र.) • सप्रेम सपरिवार सादर आमंत्रित ॥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
