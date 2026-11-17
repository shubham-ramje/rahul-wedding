import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, MapPin, Calendar, Users, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeaderNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "मुख्य", href: "#" },
    { name: "स्नेहिल संदेश", href: "#invitation-note" },
    { name: "मांगलिक कार्यक्रम", href: "#events" },
    { name: "स्थल", href: "#venues" },
    { name: "परिवार", href: "#family" },
    { name: "बाल मनुहार", href: "#kids-corner" },
    { name: "आशीर्वाद", href: "#blessings" },
    { name: "संपर्क", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-royal-burgundy/95 backdrop-blur-md border-b border-gold/30 shadow-royal-card py-2.5'
          : 'bg-gradient-to-b from-royal-burgundy/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left Brand Monogram Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-2 text-gold group"
        >
          <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/50 flex items-center justify-center font-cinzel font-bold text-xs text-gold-shimmer shadow">
            R&amp;S
          </div>
          <span className="font-yatra text-base sm:text-lg text-gold-champagne tracking-wide">
            राहुल संग शिल्पा
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-devanagari text-xs sm:text-sm text-royal-cream/80 hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#events"
            onClick={(e) => handleNavClick(e, "#events")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/15 hover:bg-gold hover:text-royal-burgundy border border-gold/50 text-gold text-xs font-poppins font-medium transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>कार्यक्रम सारणी</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-royal-maroon/80 border border-gold/40 text-gold hover:text-gold-light"
            aria-label="मेनू खोलें"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-royal-burgundy/98 border-b border-gold/40 backdrop-blur-xl px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col space-y-3 font-devanagari text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-2 text-royal-cream hover:text-gold border-b border-gold/10 text-base"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
