import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Volume2, VolumeX, Calendar, Share2, Heart } from 'lucide-react';
import { royalAudio } from '../utils/audioHelper';

const Navbar = ({ isMusicPlaying, setIsMusicPlaying }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    const playing = royalAudio.toggle();
    setIsMusicPlaying(playing);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      `॥ श्री गणेशाय नमः ॥\n\n` +
      `राहुल संग शिल्पा के पावन परिणयोत्सव में आप सपरिवार सादर आमंत्रित हैं!\n\n` +
      `📅 विवाह तिथि: 13 दिसम्बर 2026, रविवार\n` +
      `📍 स्थल: कबीटखेड़ी, इन्दौर (म.प्र.)\n\n` +
      `कृपया इस लिंक पर हमारा डिजिटल निमंत्रण पत्र देखें:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const navLinks = [
    { label: 'मुख्य पृष्ठ', href: '#hero' },
    { label: 'वर-वधू', href: '#couple' },
    { label: 'कार्यक्रम', href: '#events' },
    { label: 'आमंत्रण', href: '#invitation' },
    { label: 'शुभ मुहूर्त', href: '#countdown' },
    { label: 'कार्यक्रम स्थल', href: '#venue' },
    { label: 'बारात', href: '#baraat' },
    { label: 'परिवार', href: '#family' },
    { label: 'बाल मनुहार', href: '#children' },
    { label: 'संपर्क', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(36, 5, 13, 0.95)' : 'rgba(59, 9, 21, 0.65)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.4)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 25px rgba(0, 0, 0, 0.5)' : 'none',
          padding: scrolled ? '10px 0' : '16px 0',
        }}
      >
        <div
          className="royal-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo & Invocation */}
          <a
            href="#hero"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1.5px solid #D4AF37',
                padding: '4px',
                background: 'radial-gradient(circle, #5A1020 0%, #24050D 100%)',
                boxShadow: '0 0 10px rgba(212, 175, 55, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/assets/ganesh.svg"
                alt="Ganesh Icon"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <span
                className="font-hindi"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#FFF8E7',
                  display: 'block',
                  lineHeight: '1.2',
                }}
              >
                राहुल <span style={{ color: '#D4AF37' }}>❤️</span> शिल्पा
              </span>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#E8D5A3',
                  letterSpacing: '1px',
                  display: 'block',
                }}
              >
                13 DEC 2026 • INDORE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '20px',
            }}
            className="desktop-nav-menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#F7EBD5',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#D4AF37')}
                onMouseLeave={(e) => (e.target.style.color = '#F7EBD5')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons (Music & WhatsApp & Mobile Toggle) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Music Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMusic}
              title={isMusicPlaying ? 'शहनाई रोकें' : 'शहनाई बजाएँ'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: isMusicPlaying ? 'rgba(212, 175, 55, 0.25)' : 'rgba(90, 16, 32, 0.5)',
                border: '1px solid #D4AF37',
                borderRadius: '30px',
                padding: '7px 14px',
                color: '#FFF3C4',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {isMusicPlaying ? (
                <>
                  <Volume2 size={18} color="#FFDF73" />
                  <span style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '14px' }}>
                    <motion.span
                      animate={{ height: ['4px', '14px', '6px'] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      style={{ width: '2px', backgroundColor: '#D4AF37' }}
                    />
                    <motion.span
                      animate={{ height: ['12px', '4px', '14px'] }}
                      transition={{ repeat: Infinity, duration: 0.6 }}
                      style={{ width: '2px', backgroundColor: '#D4AF37' }}
                    />
                    <motion.span
                      animate={{ height: ['6px', '14px', '4px'] }}
                      transition={{ repeat: Infinity, duration: 0.7 }}
                      style={{ width: '2px', backgroundColor: '#D4AF37' }}
                    />
                  </span>
                </>
              ) : (
                <>
                  <VolumeX size={18} color="#B39282" />
                  <span style={{ fontSize: '0.8rem', color: '#E8D5A3' }}>शहनाई</span>
                </>
              )}
            </motion.button>

            {/* WhatsApp Share Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={shareWhatsApp}
              title="व्हाट्सएप पर निमंत्रण भेजें"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#25D366',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                color: '#FFFFFF',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(37, 211, 102, 0.4)',
              }}
            >
              <Share2 size={18} />
            </motion.button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'rgba(90, 16, 32, 0.7)',
                border: '1px solid #D4AF37',
                borderRadius: '8px',
                color: '#FFF8E7',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              background: 'linear-gradient(180deg, #3B0915 0%, #24050D 100%)',
              borderBottom: '2px solid #D4AF37',
              zIndex: 49,
              padding: '20px 24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: '#FFF8E7',
                    fontSize: '1.05rem',
                    fontWeight: '500',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: 'rgba(212, 175, 55, 0.06)',
                    borderLeft: '3px solid #D4AF37',
                  }}
                >
                  {link.label}
                </a>
              ))}

              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  gap: '12px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(212, 175, 55, 0.25)',
                }}
              >
                <button
                  onClick={() => {
                    toggleMusic();
                    setMobileMenuOpen(false);
                  }}
                  className="btn-royal-gold"
                  style={{ flex: 1, padding: '10px 16px', fontSize: '0.9rem' }}
                >
                  <Music size={18} />
                  <span>{isMusicPlaying ? 'शहनाई बंद करें' : 'शहनाई चालू करें'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-menu {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
