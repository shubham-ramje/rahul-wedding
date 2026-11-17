import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MapPin } from 'lucide-react';

const CoupleSection = () => {
  return (
    <section
      id="couple"
      style={{
        position: 'relative',
        padding: '90px 20px 80px',
        overflow: 'hidden',
      }}
    >
      <div className="royal-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            <Heart size={16} fill="#D4AF37" color="#D4AF37" />
            <span>वर - वधू परिचय</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ शुभ परिणय ॥
          </h2>
          <p className="section-subtitle">
            दो परिवारों का स्नेह, दो आत्माओं का पावन संगम एवं प्रभु का अनमोल आशीर्वाद
          </p>
          <div className="royal-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        {/* Couple Cards Grid with Sacred Symbol in Between */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            alignItems: 'center',
            maxWidth: '1050px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-card ornate-corners"
            style={{
              padding: '45px 30px 40px',
              textAlign: 'center',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              position: 'relative',
            }}
          >
            {/* Royal Groom Crown Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 18px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
                color: '#24050D',
                fontWeight: '700',
                fontSize: '0.88rem',
                letterSpacing: '1px',
                marginBottom: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              <span>वर (GROOM)</span>
            </div>

            {/* Groom Royal Emblem / Illustration Avatar */}
            <div
              style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                border: '3px solid #D4AF37',
                padding: '6px',
                background: 'radial-gradient(circle, #5A1020 0%, #24050D 100%)',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 100 100" width="80" height="80">
                {/* Royal Groom with Turban / Pagdi & Kalgi */}
                <ellipse cx="50" cy="62" rx="22" ry="24" fill="#F7EBD5" />
                {/* Royal Safa / Pagdi */}
                <path d="M 24,48 C 24,28 76,28 76,48 C 76,55 24,55 24,48 Z" fill="#D32F2F" stroke="#D4AF37" stroke-width="2" />
                <path d="M 32,38 C 45,26 65,30 72,42" fill="none" stroke="#FFE082" stroke-width="2.5" />
                {/* Kalgi / Feather Brooch */}
                <path d="M 50,30 C 50,14 55,10 52,28 Z" fill="#D4AF37" />
                <circle cx="50" cy="30" r="3" fill="#FFE082" />
                {/* Sherwani Collar */}
                <path d="M 32,84 L 50,68 L 68,84" stroke="#D4AF37" stroke-width="3" fill="none" />
                {/* Pearl Necklace / Mala */}
                <path d="M 36,75 Q 50,90 64,75" stroke="#FFE082" stroke-width="2" stroke-dasharray="3,3" fill="none" />
              </svg>
            </div>

            {/* Groom Name */}
            <h3
              className="font-hindi"
              style={{
                fontSize: '2rem',
                color: '#FFF8E7',
                fontWeight: '700',
                marginBottom: '18px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              हृदयांश राहुल
            </h3>

            {/* Lineage Details */}
            <div
              className="font-hindi"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                color: '#E8D5A3',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(36, 5, 13, 0.6)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <p>
                <strong style={{ color: '#FFDF73' }}>सुपौत्र:</strong> स्व. श्री हल्कू प्रसाद रामजे
              </p>
              <p>
                <strong style={{ color: '#FFDF73' }}>सुपुत्र:</strong> श्री ओंकार प्रसाद रामजे
              </p>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <MapPin size={16} color="#D4AF37" />
                <span>इन्दौर (म.प्र.)</span>
              </p>
            </div>
          </motion.div>

          {/* Center Wedding Symbol */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 0',
              zIndex: 2,
            }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                width: '140px',
                height: '140px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/wedding-symbol.svg"
                alt="Sacred Wedding Symbol"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <span
              className="font-script text-gold-shimmer"
              style={{
                fontSize: '2.2rem',
                marginTop: '10px',
                letterSpacing: '1px',
              }}
            >
              Shubh Vivah
            </span>
            <span
              style={{
                fontSize: '0.85rem',
                color: '#E8D5A3',
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              ॥ परिणय सूत्र ॥
            </span>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="royal-card ornate-corners"
            style={{
              padding: '45px 30px 40px',
              textAlign: 'center',
              border: '2px solid rgba(212, 175, 55, 0.5)',
              position: 'relative',
            }}
          >
            {/* Royal Bride Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 18px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #D4AF37, #AA771C)',
                color: '#24050D',
                fontWeight: '700',
                fontSize: '0.88rem',
                letterSpacing: '1px',
                marginBottom: '20px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
            >
              <span>वधू (BRIDE)</span>
            </div>

            {/* Bride Royal Emblem / Illustration Avatar */}
            <div
              style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                border: '3px solid #D4AF37',
                padding: '6px',
                background: 'radial-gradient(circle, #5A1020 0%, #24050D 100%)',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg viewBox="0 0 100 100" width="80" height="80">
                {/* Royal Bride with Bridal Dupatta, Maang Tikka, & Nath */}
                <ellipse cx="50" cy="62" rx="20" ry="22" fill="#F7EBD5" />
                {/* Red Bridal Chunri / Dupatta */}
                <path d="M 22,45 C 22,25 78,25 78,45 C 84,65 80,85 75,90 C 65,70 35,70 25,90 C 20,85 16,65 22,45 Z" fill="#C2185B" stroke="#D4AF37" stroke-width="1.8" />
                {/* Golden Maang Tikka */}
                <line x1="50" y1="36" x2="50" y2="48" stroke="#D4AF37" stroke-width="2" />
                <circle cx="50" cy="50" r="3.5" fill="#FFE082" />
                {/* Traditional Bridal Nath (Nose Ring) */}
                <circle cx="43" cy="64" r="3.5" fill="none" stroke="#D4AF37" stroke-width="1.2" />
                <line x1="43" y1="62" x2="30" y2="58" stroke="#D4AF37" stroke-width="0.8" />
                {/* Red Bindi */}
                <circle cx="50" cy="54" r="2" fill="#B71C1C" />
                {/* Bridal Necklace */}
                <path d="M 38,76 Q 50,88 62,76" stroke="#D4AF37" stroke-width="2.5" fill="none" />
              </svg>
            </div>

            {/* Bride Name */}
            <h3
              className="font-hindi"
              style={{
                fontSize: '2rem',
                color: '#FFF8E7',
                fontWeight: '700',
                marginBottom: '18px',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              हृदयांशी शिल्पा
            </h3>

            {/* Lineage Details */}
            <div
              className="font-hindi"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                color: '#E8D5A3',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(36, 5, 13, 0.6)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
              }}
            >
              <p>
                <strong style={{ color: '#FFDF73' }}>सुपौत्री:</strong> स्व. श्री दामोदर जी गर्गसार
              </p>
              <p>
                <strong style={{ color: '#FFDF73' }}>सुपुत्री:</strong> श्री तारा जी गर्गसार
              </p>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <MapPin size={16} color="#D4AF37" />
                <span>इन्दौर (म.प्र.)</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
