import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, Heart } from 'lucide-react';

const FamilySection = () => {
  return (
    <section
      id="family"
      style={{
        position: 'relative',
        padding: '90px 20px',
        overflow: 'hidden',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '1100px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-badge">
            <Users size={16} />
            <span>स्नेहिल परिजन</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ परिवार आमंत्रण ॥
          </h2>
          <p className="section-subtitle">
            समस्त रामजे परिवार आपके पावन सत्कार एवं स्वागत हेतु प्रतीक्षारत है
          </p>
          <div className="royal-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        {/* 3 Pillars Grid: दर्शनाभिलाषी, स्वागतातुर, विनीत */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '28px',
            alignItems: 'stretch',
          }}
        >
          {/* 1. दर्शनाभिलाषी */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="royal-card ornate-corners"
            style={{
              padding: '36px 26px',
              border: '1.5px solid rgba(212, 175, 55, 0.45)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <span
                className="font-hindi"
                style={{
                  display: 'inline-block',
                  color: '#FFDF73',
                  fontSize: '1.45rem',
                  fontWeight: '700',
                  borderBottom: '2px solid #D4AF37',
                  paddingBottom: '6px',
                  letterSpacing: '1px',
                }}
              >
                ॥ दर्शनाभिलाषी ॥
              </span>
            </div>

            {/* भैया भाभीजी */}
            <div style={{ marginBottom: '20px' }}>
              <h4
                className="font-hindi"
                style={{
                  color: '#FFEAA7',
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  marginBottom: '10px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                }}
              >
                भैया भाभीजी:
              </h4>
              <ul
                className="font-hindi"
                style={{
                  listStyle: 'none',
                  padding: 0,
                  color: '#FFF8E7',
                  fontSize: '1.02rem',
                  lineHeight: '2',
                }}
              >
                <li>शैलेन्द्र - सौ. नेहा</li>
                <li>कमलेश - सौ. कमला</li>
                <li>रामू - सौ. भारती</li>
                <li>श्याम - सौ. मोनिका</li>
              </ul>
            </div>

            {/* Young Generation */}
            <div
              className="font-hindi"
              style={{
                marginTop: 'auto',
                paddingTop: '16px',
                borderTop: '1px dashed rgba(212, 175, 55, 0.3)',
                color: '#E8D5A3',
                fontSize: '1rem',
                lineHeight: '1.9',
              }}
            >
              <p>शुभम, हिमांशु, मयंक</p>
                <h4
                className="font-hindi"
                style={{
                  color: '#FFEAA7',
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  marginBottom: '10px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  padding: '4px 12px',
                  borderRadius: '6px',
                }}
              >
                भतीजे:
              </h4>
              <p>अमन, नमन, ध्रुव</p>
              <p>मीत आरव, विवान</p>
            </div>
          </motion.div>

          {/* 2. स्वागतातुर */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="royal-card ornate-corners"
            style={{
              padding: '36px 26px',
              border: '2px solid rgba(212, 175, 55, 0.65)',
              boxShadow: '0 12px 35px rgba(212, 175, 55, 0.15)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <span
                className="font-hindi"
                style={{
                  display: 'inline-block',
                  color: '#FFDF73',
                  fontSize: '1.45rem',
                  fontWeight: '700',
                  borderBottom: '2px solid #D4AF37',
                  paddingBottom: '6px',
                  letterSpacing: '1px',
                }}
              >
                ॥ स्वागतातुर ॥
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* बुआ फुफाजी */}
              <div>
                <h4
                  className="font-hindi"
                  style={{
                    color: '#FFEAA7',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '6px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                  }}
                >
                  बुआ फुफाजी:
                </h4>
                <p className="font-hindi" style={{ color: '#FFF8E7', fontSize: '1rem', paddingLeft: '8px' }}>
                  राजकुमार जी - सौ. तुलसा
                </p>
              </div>

              {/* जीजी - जीजा जी */}
              <div>
                <h4
                  className="font-hindi"
                  style={{
                    color: '#FFEAA7',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '6px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                  }}
                >
                  जीजी - जीजा जी:
                </h4>
                <ul
                  className="font-hindi"
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    paddingLeft: '8px',
                    color: '#FFF8E7',
                    fontSize: '0.98rem',
                    lineHeight: '1.85',
                  }}
                >
                  <li>सौ. हेमलता - संदीप जी</li>
                  <li>सा. संध्या - खेमचन्द्र जी</li>
                  <li>सौ. खुशबू - अश्विन जी</li>
                  <li>सौ. कंचन - मनीष जी</li>
                  <li>शिवानी</li>
                </ul>
              </div>

              {/* मौसा - मौसीजी */}
              <div>
                <h4
                  className="font-hindi"
                  style={{
                    color: '#FFEAA7',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '6px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                  }}
                >
                  मौसा - मौसीजी:
                </h4>
                <p className="font-hindi" style={{ color: '#FFF8E7', fontSize: '0.98rem', paddingLeft: '8px', lineHeight: '1.8' }}>
                  सुरेश जी - सौ. रंजना<br />
                  वीरेन्द्र जी - सौ. पिंकी
                </p>
              </div>

              {/* मामा - मामीजी */}
              <div>
                <h4
                  className="font-hindi"
                  style={{
                    color: '#FFEAA7',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    marginBottom: '6px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                  }}
                >
                  मामा - मामीजी:
                </h4>
                <p className="font-hindi" style={{ color: '#FFF8E7', fontSize: '0.98rem', paddingLeft: '8px' }}>
                  गुलाब जी - सौ. नीतू
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. विनीत */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="royal-card ornate-corners"
            style={{
              padding: '36px 26px',
              border: '1.5px solid rgba(212, 175, 55, 0.45)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <span
                className="font-hindi"
                style={{
                  display: 'inline-block',
                  color: '#FFDF73',
                  fontSize: '1.45rem',
                  fontWeight: '700',
                  borderBottom: '2px solid #D4AF37',
                  paddingBottom: '6px',
                  letterSpacing: '1px',
                }}
              >
                ॥ विनीत ॥
              </span>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <ul
                className="font-hindi"
                style={{
                  listStyle: 'none',
                  padding: 0,
                  color: '#FFF8E7',
                  fontSize: '1.05rem',
                  lineHeight: '2.1',
                }}
              >
                <li>लालचन्द्र - सौ. बेनी</li>
                <li>शंकरलाल - सौ. ललता </li>
                <li>भगवानदास - स्व. लक्ष्मी</li>
                <li>ओंकारप्रसाद - सौ. लता</li>
                <li>लीलाधर - सौ. शोभा</li>
              </ul>
            </div>

            <div
              className="font-hindi"
              style={{
                marginTop: 'auto',
                padding: '16px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(90, 16, 32, 0.4) 100%)',
                border: '1px solid #D4AF37',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  color: '#FFEAA7',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                }}
              >
                एवं समस्त रामजे परिवार।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
