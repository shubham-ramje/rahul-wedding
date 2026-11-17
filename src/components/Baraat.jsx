import React from 'react';
import { motion } from 'framer-motion';
import { Music2, Calendar, Clock, MapPin, Navigation, Sparkles } from 'lucide-react';

const Baraat = () => {
  const destinationAddress = 'गजानंद मंगल परिसर, भागीरथ पुरा, पुलिस चौकी के सामने, इन्दौर (म.प्र.)';
  const baraatMapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Gajanand Mangal Parisar Bhagirath Pura Near Police Chowki Indore Madhya Pradesh');
  const baraatDirectionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent('Gajanand Mangal Parisar Bhagirath Pura Near Police Chowki Indore Madhya Pradesh');

  return (
    <section
      id="baraat"
      style={{
        position: 'relative',
        padding: '90px 20px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(36, 5, 13, 0.5) 0%, rgba(90, 16, 32, 0.55) 50%, rgba(36, 5, 13, 0.5) 100%)',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '950px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">
            <Music2 size={16} />
            <span>शुभ बारात आगमन</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ बारात प्रस्थान ॥
          </h2>
          <p className="section-subtitle">
            ढोल, ताशे एवं शहनाई की मंगल गूंज के साथ सज-धज कर निकलेगी शाही बारात
          </p>
          <div className="royal-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        {/* Traditional Baraat Procession Illustration Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card ornate-corners"
          style={{
            padding: '35px 25px 40px',
            border: '2px solid #D4AF37',
            background: 'linear-gradient(155deg, rgba(90, 16, 32, 0.95) 0%, rgba(59, 9, 21, 0.98) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(212, 175, 55, 0.1)',
            textAlign: 'center',
          }}
        >
          {/* Baraat Procession Artwork */}
          <div
            style={{
              width: '100%',
              maxWidth: '820px',
              height: 'auto',
              minHeight: '180px',
              margin: '0 auto 28px',
              borderRadius: '16px',
              padding: '16px 12px',
              background: 'radial-gradient(ellipse at center, rgba(36, 5, 13, 0.8) 0%, rgba(20, 2, 7, 0.95) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/assets/baraat.svg"
              alt="Traditional Royal Baraat Illustration"
              style={{ width: '100%', height: 'auto', maxHeight: '240px', objectFit: 'contain' }}
            />
          </div>

          {/* Date & Time Highlight Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '26px',
            }}
          >
            <div
              className="font-hindi"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '30px',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid #D4AF37',
                color: '#FFEAA7',
                fontSize: '1.15rem',
                fontWeight: '700',
              }}
            >
              <Calendar size={18} color="#FFDF73" />
              <span>दि. 11/12/2026, शुक्रवार को</span>
            </div>

            <div
              className="font-hindi"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
                color: '#24050D',
                fontSize: '1.15rem',
                fontWeight: '700',
              }}
            >
              <Clock size={18} color="#24050D" />
              <span>सायं 7 बजे जावेगी</span>
            </div>
          </div>

          {/* Host Mention */}
          <p
            className="font-hindi"
            style={{
              color: '#FFDF73',
              fontSize: '1.35rem',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.7',
            }}
          >
            श्रीमान तारा जी गर्गसार, इन्दौर वालों के यहाँ 
          </p>

          {/* Route & Destination Box */}
          <div
            className="font-hindi"
            style={{
              padding: '26px 20px',
              borderRadius: '16px',
              background: 'rgba(36, 5, 13, 0.75)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              maxWidth: '650px',
              margin: '0 auto 28px',
            }}
          >
            <p
              style={{
                color: '#FFF8E7',
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.9',
              }}
            >
              सफेद मंदिर से
            </p>
            <h4
              style={{
                color: '#FFDF73',
                fontSize: '1.6rem',
                fontWeight: '800',
                margin: '6px 0',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              गजानंद मंगल परिसर,
            </h4>
            <p
              style={{
                color: '#FFF8E7',
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.8',
              }}
            >
              भागीरथ पुरा, पुलिस चौकी के सामने,
            </p>
            <p
              style={{
                color: '#E8D5A3',
                fontSize: '1.25rem',
                fontWeight: '700',
              }}
            >
              इन्दौर।
            </p>
          </div>

          {/* Directions Button for Baraat Venue */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={baraatDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-gold"
            >
              <Navigation size={18} />
              <span>बारात स्थल का रास्ता (Get Directions to Baraat)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Baraat;
