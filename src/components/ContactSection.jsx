import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, Check, MessageSquare, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const phoneNumbers = [
    { number: '8109860849', display: '81098 60849' },
    { number: '7566186719', display: '75661 86719' },
  ];

  const handleCopy = (num, idx) => {
    navigator.clipboard.writeText(num);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '90px 20px 70px',
        overflow: 'hidden',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '800px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">
            <Send size={16} />
            <span>शुभ संदेश एवं संपर्क</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ प्रेषक ॥
          </h2>
          <div className="royal-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        {/* Sender Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card ornate-corners"
          style={{
            padding: '45px 32px',
            border: '2px solid #D4AF37',
            background: 'linear-gradient(150deg, rgba(90, 16, 32, 0.95) 0%, rgba(36, 5, 13, 0.98) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
          }}
        >
          {/* Sender Name */}
          <h3
            className="font-hindi"
            style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: '#FFDF73',
              marginBottom: '16px',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            ओंकार प्रसाद रामजे
          </h3>

          {/* Residence Address */}
          <div
            className="font-hindi"
            style={{
              padding: '18px 20px',
              borderRadius: '12px',
              background: 'rgba(36, 5, 13, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              maxWidth: '520px',
              margin: '0 auto 28px',
            }}
          >
            <p
              style={{
                color: '#FFF8E7',
                fontSize: '1.2rem',
                lineHeight: '1.9',
              }}
            >
              जी-55, लाहिया कॉलोनी,<br />
              कबीटखेड़ी, इन्दौर (म.प्र.)
            </p>
          </div>

          <p
            className="font-hindi"
            style={{
              color: '#E8D5A3',
              fontSize: '1.05rem',
              fontWeight: '600',
              marginBottom: '18px',
            }}
          >
            संपर्क सूत्र (Mobile Numbers):
          </p>

          {/* Phone Numbers Grid */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            {phoneNumbers.map((phone, idx) => (
              <div
                key={phone.number}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid #D4AF37',
                }}
              >
                <a
                  href={`tel:${phone.number}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FFEAA7',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    fontFamily: 'monospace',
                  }}
                  title="कॉल करने के लिए क्लिक करें"
                >
                  <Phone size={18} color="#D4AF37" />
                  <span>{phone.display}</span>
                </a>

                <button
                  onClick={() => handleCopy(phone.number, idx)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copiedIndex === idx ? '#4CAF50' : '#E8D5A3',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title="नंबर कॉपी करें"
                >
                  {copiedIndex === idx ? <Check size={16} /> : <span style={{ fontSize: '0.75rem' }}>कॉपी</span>}
                </button>

                <a
                  href={`https://wa.me/91${phone.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                  }}
                  title="व्हाट्सएप पर संदेश भेजें"
                >
                  <MessageSquare size={16} />
                </a>
              </div>
            ))}
          </div>

          <p
            className="font-hindi"
            style={{
              color: '#FFF8E7',
              fontSize: '1rem',
              lineHeight: '1.7',
              maxWidth: '560px',
              margin: '0 auto',
              opacity: 0.9,
            }}
          >
            किसी भी जानकारी, मार्ग-दर्शन अथवा शुभकामना हेतु कृपया उपरोक्त नंबरों पर संपर्क करें।
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
