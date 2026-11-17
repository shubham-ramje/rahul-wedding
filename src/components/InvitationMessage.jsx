import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ScrollText } from 'lucide-react';

const InvitationMessage = () => {
  return (
    <section
      id="invitation"
      style={{
        position: 'relative',
        padding: '90px 20px',
        overflow: 'hidden',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '850px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-badge">
            <ScrollText size={16} />
            <span>हार्दिक आमंत्रण पत्र</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ स्नेह निमंत्रण ॥
          </h2>
          <div className="royal-divider">
            <Heart size={16} className="divider-icon" />
          </div>
        </div>

        {/* Traditional Royal Card (Lagan Patrika Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="royal-card ornate-corners"
          style={{
            padding: '50px 36px',
            textAlign: 'center',
            border: '2px solid #D4AF37',
            background: 'linear-gradient(160deg, rgba(90, 16, 32, 0.95) 0%, rgba(59, 9, 21, 0.98) 60%, rgba(36, 5, 13, 0.98) 100%)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(212, 175, 55, 0.1)',
          }}
        >
          {/* Top Sacred Shloka */}
          <div
            style={{
              padding: '16px 20px',
              borderRadius: '12px',
              background: 'rgba(36, 5, 13, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              marginBottom: '32px',
            }}
          >
            <p
              className="font-hindi"
              style={{
                color: '#FFDF73',
                fontSize: '1.25rem',
                fontWeight: '700',
                lineHeight: '1.9',
                textShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
              }}
            >
              ॥ मंगलम् भगवान विष्णुः, मंगलम् गरुडध्वजः ।<br />
              मंगलम् पुण्डरीकाक्षः, मंगलाय तनो हरिः ॥
            </p>
          </div>

          {/* Salutation */}
          <h3
            className="font-hindi text-gold-shimmer"
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginBottom: '18px',
            }}
          >
            स्नेही स्वजन,
          </h3>

          <p
            className="font-hindi"
            style={{
              color: '#FFF8E7',
              fontSize: '1.15rem',
              lineHeight: '2.1',
              maxWidth: '680px',
              margin: '0 auto 26px',
            }}
          >
            कुलदेवी की असीम कृपा से एवं पूर्वजों के आशीर्वाद से हमारे परिवार में शुभ प्रसंग के मधुर पल आए हैं।
          </p>

          <p
            className="font-hindi"
            style={{
              color: '#E8D5A3',
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '24px',
            }}
          >
            प्रसंग है हमारे लाड़ले सुपुत्र....
          </p>

          {/* Couple Announcement Box */}
          <div
            style={{
              padding: '28px 20px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(90, 16, 32, 0.6) 0%, rgba(36, 5, 13, 0.8) 100%)',
              border: '1.5px solid rgba(212, 175, 55, 0.5)',
              marginBottom: '26px',
            }}
          >
            {/* Groom Details */}
            <div style={{ marginBottom: '16px' }}>
              <h4
                className="font-hindi"
                style={{
                  fontSize: '2rem',
                  color: '#FFDF73',
                  fontWeight: '700',
                  marginBottom: '6px',
                }}
              >
                हृदयांश राहुल
              </h4>
              <p className="font-hindi" style={{ color: '#FFF8E7', fontSize: '1rem', lineHeight: '1.7' }}>
                सुपौत्र स्व. श्री हल्कू प्रसाद रामजे<br />
                सुपुत्र ओंकार प्रसाद रामजे<br />
                इन्दौर (म.प्र.)
              </p>
            </div>

            {/* Sang Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                margin: '12px 0',
              }}
            >
              <span style={{ width: '40px', height: '1px', background: '#D4AF37' }} />
              <span
                className="font-hindi"
                style={{
                  color: '#FFEAA7',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  background: 'rgba(212, 175, 55, 0.2)',
                  border: '1px solid #D4AF37',
                }}
              >
                संग
              </span>
              <span style={{ width: '40px', height: '1px', background: '#D4AF37' }} />
            </div>

            {/* Bride Details */}
            <div style={{ marginTop: '16px' }}>
              <h4
                className="font-hindi"
                style={{
                  fontSize: '2rem',
                  color: '#FFDF73',
                  fontWeight: '700',
                  marginBottom: '6px',
                }}
              >
                हृदयांशी शिल्पा
              </h4>
              <p className="font-hindi" style={{ color: '#FFF8E7', fontSize: '1rem', lineHeight: '1.7' }}>
                सुपौत्री स्व. श्री दामोदर जी गर्गसार<br />
                सुपुत्री श्री तारा जी गर्गसार<br />
                इन्दौर (म.प्र.)
              </p>
            </div>
          </div>

          <p
            className="font-hindi"
            style={{
              color: '#FFDF73',
              fontSize: '1.4rem',
              fontWeight: '700',
              marginBottom: '32px',
              letterSpacing: '1px',
            }}
          >
            के मंगल परिणयोत्सव की।
          </p>

          {/* Emotional Poem / Welcome Quote */}
          <div
            style={{
              padding: '24px 28px',
              borderRadius: '16px',
              background: 'rgba(36, 5, 13, 0.85)',
              border: '1px dashed #D4AF37',
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            <p
              className="font-hindi"
              style={{
                color: '#FFF8E7',
                fontSize: '1.15rem',
                lineHeight: '2.1',
                fontStyle: 'italic',
              }}
            >
              "जब होती है प्रभु की कृपा, संयोग स्वयं जुड़ जाते हैं,<br />
              अपनों के स्वागत के अवसर यूँ ही मिल जाते हैं,<br />
              हमारी खुशियों में आपका अभिनंदन है......"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationMessage;
