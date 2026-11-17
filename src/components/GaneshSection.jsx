import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const GaneshSection = () => {
  return (
    <section
      id="ganesh-blessing"
      style={{
        position: 'relative',
        padding: '60px 20px',
        backgroundColor: 'rgba(36, 5, 13, 0.75)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge">
            <Sparkles size={16} />
            <span>॥ विघ्नहर्ता मंगलकर्ता ॥</span>
          </div>

          <h3
            className="font-serif text-gold-shimmer"
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '16px',
            }}
          >
            परम पूज्य भगवान श्री गणेश जी के पावन आशीर्वाद से
          </h3>

          <p
            className="font-hindi"
            style={{
              fontSize: '1.15rem',
              lineHeight: '2.1',
              color: '#FFF8E7',
              maxWidth: '680px',
              margin: '0 auto 20px',
              fontStyle: 'normal',
            }}
          >
            वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥<br />
            <span style={{ fontSize: '0.98rem', color: '#E8D5A3', opacity: 0.9 }}>
              (हे विशाल शरीर वाले, करोड़ों सूर्यों के समान तेजस्वी, वक्र सूंड वाले श्री गणेश! मेरे सभी कार्यों को सदा बाधा-रहित संपन्न करें।)
            </span>
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '10px',
            }}
          >
            <span style={{ height: '1px', width: '60px', background: 'linear-gradient(90deg, transparent, #D4AF37)' }} />
            <span style={{ color: '#D4AF37', fontSize: '1.2rem' }}>卐 ॐ 卐</span>
            <span style={{ height: '1px', width: '60px', background: 'linear-gradient(270deg, transparent, #D4AF37)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GaneshSection;
