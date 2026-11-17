import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Smile } from 'lucide-react';

const childrenList = [
  { name: 'अयान', emoji: '👦', role: 'प्यारा भांजा / भतीजा' },
  { name: 'लाभान्सी (लाडो)', emoji: '👧', role: 'लाड़ली बिटिया' },
  { name: 'कनिष्का', emoji: '👧', role: 'दुलारी राजकुमारी' },
  { name: 'रिद्धी', emoji: '🌸', role: 'शुभता की मूरत' },
  { name: 'सिद्धी', emoji: '🌸', role: 'मांगलिक आनंद' },
];

const ChildrenSection = () => {
  return (
    <section
      id="children"
      style={{
        position: 'relative',
        padding: '80px 20px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, rgba(90, 16, 32, 0.35) 0%, rgba(36, 5, 13, 0.8) 100%)',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '850px', textAlign: 'center' }}>
        {/* Header */}
        <div className="section-badge">
          <Smile size={16} />
          <span>नन्हें-मुन्नों का आमंत्रण</span>
        </div>
        <h2 className="section-title text-gold-shimmer">
          ॥ बाल मनुहार ॥
        </h2>
        <div className="royal-divider">
          <Star size={16} className="divider-icon" />
        </div>

        {/* Cute Royal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card ornate-corners"
          style={{
            padding: '45px 30px',
            border: '2px solid #FFDF73',
            background: 'linear-gradient(150deg, rgba(90, 16, 32, 0.9) 0%, rgba(59, 9, 21, 0.95) 100%)',
            boxShadow: '0 15px 45px rgba(212, 175, 55, 0.25)',
          }}
        >
          {/* Poetic Verse */}
          <div
            style={{
              padding: '26px 20px',
              borderRadius: '16px',
              background: 'rgba(36, 5, 13, 0.75)',
              border: '1px dashed #D4AF37',
              marginBottom: '32px',
            }}
          >
            <p
              className="font-hindi"
              style={{
                color: '#FFF8E7',
                fontSize: '1.25rem',
                lineHeight: '2.2',
                fontWeight: '600',
              }}
            >
              "हमारे मामा / चाचा की शादी का शुभ अवसर आया है,<br />
              घर आँगन खुशियों से सजाया है,<br />
              बजेगी शहनाई होगी खुशियों की बरसात,<br />
              होगी नई जिंदगी की शुरू होगी प्यारी शुरुआत।"
            </p>
          </div>

          <p
            className="font-hindi"
            style={{
              color: '#FFDF73',
              fontSize: '1.15rem',
              fontWeight: '700',
              marginBottom: '20px',
              letterSpacing: '1px',
            }}
          >
            ― आपकी राह देखते नन्हें मनुहारी ―
          </p>

          {/* Children Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {childrenList.map((child, index) => (
              <motion.div
                key={child.name}
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(90, 16, 32, 0.6) 100%)',
                  border: '1.5px solid #D4AF37',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{child.emoji}</span>
                <span
                  className="font-hindi"
                  style={{
                    color: '#FFF8E7',
                    fontSize: '1.15rem',
                    fontWeight: '700',
                  }}
                >
                  {child.name}
                </span>
              </motion.div>
            ))}
          </div>

          <p
            className="font-hindi"
            style={{
              marginTop: '28px',
              color: '#FFEAA7',
              fontSize: '1.05rem',
              fontStyle: 'italic',
            }}
          >
            "चाचा / मामा की शादी में आपका आना जरूरी है, वरना हमारी खुशियां अधूरी हैं!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ChildrenSection;
