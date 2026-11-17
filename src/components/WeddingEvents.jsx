import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Heart, Bell, Flame, Utensils, Music2, SunMedium } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: 'खलमिट्टी एवं लगुन', 
    date: '06 दिसम्बर 2026',
    day: 'रविवार',
    time: 'सायं 4 बजे',
    desc: 'शुभ लगुन लेखन एवं मांगलिक रस्मों का श्रीगणेश,अपनी मिट्टी, अपने संस्कार , खल मिट्टी पूजन के साथ शुरू हुआ खुशियों का त्यौहार',
    icon: Bell,
    badge: 'पहला मांगलिक प्रसंग',
  },
  {
    id: 2,
    title: 'माता पूजन',
    date: '09 दिसम्बर 2026',
    day: 'बुधवार',
    time: 'सायं 4 बजे',
    desc: 'कुलदेवी माता का विधि-विधान पूर्वक पूजन एवं सुख-समृद्धि की मंगल कामना , लाल-लाल चुनरी चढ़ायेंगे माता रानी का पुजन कर धन्य हो जायेंगे',
    icon: SunMedium,
    badge: 'कुलदेवी पूजन',
  },
  {
    id: 3,
    title: 'मंडप',
    date: '10 दिसम्बर 2026',
    day: 'गुरुवार',
    time: 'सायं 4 बजे',
    desc: 'पवित्र मंडप रोपण एवं हरिद्रा (हल्दी) लेपन संस्कार ,हरे-हरे पत्ते, पीले-पीले हाथ,मंडप सजेगा जीजाजी के साथ। ',
    icon: Flame,
    badge: 'मंडप स्थापना',
  },
  {
    id: 4,
    title: 'बारात',
    date: '11 दिसम्बर 2026',
    day: 'शुक्रवार',
    time: 'सायं 7 बजे',
    desc: 'ढोल-नगाड़ों और शहनाई की मंगल धुन के साथ बारात प्रस्थान',
    icon: Music2,
    badge: 'शाही बारात',
  },
  {
    id: 5,
    title: 'आशीर्वाद समारोह एवं स्वरुचिभोज',
    date: '13 दिसम्बर 2026',
    day: 'रविवार',
    time: 'सायं 7 बजे से आपके आगमन तक',
    desc: 'नवदंपति को शुभाशीर्वाद एवं शाही स्वरुचिभोज',
    icon: Utensils,
    badge: 'मुख्य विवाह समारोह',
    highlight: true,
  },
];

const WeddingEvents = () => {
  return (
    <section
      id="events"
      style={{
        position: 'relative',
        padding: '90px 20px',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(36, 5, 13, 0.4) 0%, rgba(90, 16, 32, 0.4) 50%, rgba(36, 5, 13, 0.4) 100%)',
      }}
    >
      <div className="royal-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="section-badge">
            <Calendar size={16} />
            <span>उत्सव एवं रस्में</span>
          </div>
          <h2 className="section-title text-gold-shimmer">
            ॥ मांगलिक कार्यक्रम ॥
          </h2>
          <p className="section-subtitle">
            विवाह उत्सव के प्रत्येक क्षण को आपके पावन सानिध्य से मंगलमय बनाएं
          </p>
          <div className="royal-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Center Vertical Golden Thread (Desktop) */}
          <div
            className="timeline-center-line"
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              background: 'linear-gradient(180deg, transparent, #D4AF37 15%, #D4AF37 85%, transparent)',
              zIndex: 1,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 2 }}>
            {eventsData.map((ev, index) => {
              const isEven = index % 2 === 0;
              const IconComp = ev.icon;

              return (
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    width: '100%',
                  }}
                  className={`timeline-row ${isEven ? 'even-row' : 'odd-row'}`}
                >
                  {/* Event Card */}
                  <div
                    className={`royal-card ${ev.highlight ? 'highlight-card' : ''}`}
                    style={{
                      width: '100%',
                      maxWidth: '420px',
                      padding: '28px 24px',
                      border: ev.highlight ? '2px solid #FFDF73' : '1px solid rgba(212, 175, 55, 0.45)',
                      boxShadow: ev.highlight
                        ? '0 15px 40px rgba(212, 175, 55, 0.35), inset 0 0 20px rgba(212, 175, 55, 0.15)'
                        : '0 8px 25px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    {/* Badge & Step Number */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '14px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: '700',
                          padding: '3px 12px',
                          borderRadius: '20px',
                          background: ev.highlight
                            ? 'linear-gradient(135deg, #D4AF37, #AA771C)'
                            : 'rgba(212, 175, 55, 0.15)',
                          color: ev.highlight ? '#24050D' : '#FFEAA7',
                          border: '1px solid rgba(212, 175, 55, 0.4)',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {ev.badge}
                      </span>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, #5A1020 0%, #24050D 100%)',
                          border: '1.5px solid #D4AF37',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFDF73',
                        }}
                      >
                        <IconComp size={18} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-hindi"
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        color: ev.highlight ? '#FFEAA7' : '#FFF8E7',
                        marginBottom: '14px',
                        lineHeight: '1.3',
                      }}
                    >
                      {ev.title}
                    </h3>

                    {/* Date and Time pill */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: 'rgba(36, 5, 13, 0.65)',
                        border: '1px solid rgba(212, 175, 55, 0.25)',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        className="font-hindi"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#FFDF73',
                          fontSize: '1rem',
                          fontWeight: '600',
                        }}
                      >
                        <Calendar size={16} />
                        <span>
                          {ev.date}, {ev.day}
                        </span>
                      </div>
                      <div
                        className="font-hindi"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: '#E8D5A3',
                          fontSize: '0.95rem',
                        }}
                      >
                        <Clock size={16} />
                        <span>{ev.time}</span>
                      </div>
                    </div>

                    <p
                      className="font-hindi"
                      style={{
                        fontSize: '0.9rem',
                        color: '#E8D5A3',
                        lineHeight: '1.5',
                        opacity: 0.9,
                      }}
                    >
                      {ev.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .timeline-center-line {
            display: block !important;
          }
          .even-row {
            align-items: flex-start !important;
            padding-right: calc(50% + 25px);
          }
          .odd-row {
            align-items: flex-end !important;
            padding-left: calc(50% + 25px);
          }
        }
        @media (max-width: 767px) {
          .timeline-center-line {
            display: none !important;
          }
          .even-row, .odd-row {
            align-items: center !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WeddingEvents;
