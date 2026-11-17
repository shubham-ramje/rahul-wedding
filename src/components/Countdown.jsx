import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sparkles, Heart } from 'lucide-react';

const Countdown = () => {
  // Target Wedding Date: 13 December 2026, 19:00:00 IST
  const targetDate = new Date('2026-12-13T19:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const addToGoogleCalendar = () => {
    const title = encodeURIComponent('राहुल एवं शिल्पा का पावन परिणयोत्सव');
    const details = encodeURIComponent(
      'राहुल संग शिल्पा के पावन परिणयोत्सव में आप सपरिवार सादर आमंत्रित हैं।\nस्थल: जी-55, लाहिया कॉलोनी, खाटू श्याम मंदिर के पास, कबीटखेड़ी, इन्दौर (म.प्र.)'
    );
    const location = encodeURIComponent('जी-55, लाहिया कॉलोनी, कबीटखेड़ी, इन्दौर (म.प्र.)');
    const start = '20261213T133000Z'; // 19:00 IST = 13:30 UTC
    const end = '20261213T183000Z';
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank');
  };

  const timeUnits = [
    { label: 'दिन', sub: 'Days', value: timeLeft.days },
    { label: 'घंटे', sub: 'Hours', value: timeLeft.hours },
    { label: 'मिनट', sub: 'Minutes', value: timeLeft.minutes },
    { label: 'सेकंड', sub: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      style={{
        position: 'relative',
        padding: '90px 20px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 50%, rgba(90, 16, 32, 0.45) 0%, rgba(36, 5, 13, 0.9) 100%)',
      }}
    >
      <div className="royal-container" style={{ maxWidth: '850px', textAlign: 'center' }}>
        {/* Header */}
        <div className="section-badge">
          <Clock size={16} />
          <span>शुभ लग्न बेला</span>
        </div>
        <h2 className="section-title text-gold-shimmer">
          ॥ विवाह शुभ मुहूर्त उलटी गिनती ॥
        </h2>
        <p className="section-subtitle">
          उस पावन पल की प्रतीक्षा जब दो हृदय एक बंधन में बंधेंगे... 13 दिसम्बर 2026
        </p>
        <div className="royal-divider">
          <Sparkles size={16} className="divider-icon" />
        </div>

        {timeLeft.isPassed ? (
          /* When Wedding Date has passed */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="royal-card ornate-corners"
            style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}
          >
            <h3
              className="font-hindi text-gold-shimmer"
              style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '14px' }}
            >
              शुभ विवाह की हार्दिक शुभकामनाएँ!
            </h3>
            <p className="font-hindi" style={{ color: '#FFF8E7', fontSize: '1.2rem' }}>
              नवदंपति राहुल एवं शिल्पा को सुखी वैवाहिक जीवन का हार्दिक शुभाशीर्वाद।
            </p>
          </motion.div>
        ) : (
          /* Live Dynamic Countdown */
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                maxWidth: '720px',
                margin: '0 auto 36px',
              }}
              className="countdown-grid"
            >
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="royal-card ornate-corners"
                  style={{
                    padding: '24px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1.5px solid rgba(212, 175, 55, 0.5)',
                    background: 'linear-gradient(145deg, rgba(90, 16, 32, 0.9) 0%, rgba(36, 5, 13, 0.95) 100%)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(212, 175, 55, 0.1)',
                  }}
                >
                  {/* Number */}
                  <span
                    className="font-serif text-gold-shimmer"
                    style={{
                      fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                      fontWeight: '800',
                      lineHeight: '1.1',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </span>

                  {/* Hindi Label */}
                  <span
                    className="font-hindi"
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: '#FFF8E7',
                      letterSpacing: '1px',
                    }}
                  >
                    {unit.label}
                  </span>

                  {/* English Sublabel */}
                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: '#E8D5A3',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      opacity: 0.8,
                    }}
                  >
                    {unit.sub}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Calendar Integration Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addToGoogleCalendar}
              className="btn-royal-outline"
            >
              <Calendar size={18} color="#D4AF37" />
              <span>कैलेंडर में याद रखें (Add to Google Calendar)</span>
            </motion.button>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 580px) {
          .countdown-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Countdown;
