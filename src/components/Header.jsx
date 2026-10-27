import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, Calendar, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Header = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'ur' ? 'ہوم' : 'Home', href: '#home' },
    { name: lang === 'ur' ? 'سروسز' : 'Services', href: '#services' },
    { name: lang === 'ur' ? 'پیکیجز' : 'Packages', href: '#packages' },
    { name: lang === 'ur' ? 'گیلری' : 'Gallery', href: '#gallery' },
    { name: lang === 'ur' ? 'ریویوز' : 'Reviews', href: '#reviews' },
    { name: lang === 'ur' ? 'رابطہ' : 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-ivory-50/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-maroon-900 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-maroon-900 tracking-tight block">
              {lang === 'ur' ? siteData.business.urduName : siteData.business.name}
            </span>
            <span className="text-xs text-gold-600 font-medium tracking-widest uppercase block">
              {lang === 'ur' ? 'ڈی ایچ اے لاہور' : 'DHA Lahore • Est. 2011'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-maroon-900 font-medium text-sm transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Language Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500 text-maroon-900 text-xs font-semibold hover:bg-gold-500/10 transition-colors"
            title="Switch Language / زبان تبدیل کریں"
          >
            <Globe className="w-3.5 h-3.5 text-gold-600" />
            <span>{lang === 'en' ? 'اردو' : 'English'}</span>
          </button>

          <a
            href="#booking"
            className="bg-maroon-900 hover:bg-maroon-800 text-gold-400 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-maroon-900/20 hover:shadow-xl transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>{lang === 'ur' ? 'بکنگ کریں' : 'Book Now'}</span>
          </a>
        </div>

        {/* Mobile Menu & Language Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLang(lang === 'en' ? 'ur' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-gold-500 text-maroon-900 text-xs font-semibold"
          >
            <Globe className="w-3 h-3 text-gold-600" />
            <span>{lang === 'en' ? 'اردو' : 'EN'}</span>
          </button>

          <a
            href={`tel:${siteData.business.phone.replace(/\s+/g, '')}`}
            className="p-2 rounded-full bg-blush-100 text-maroon-900"
            aria-label="Call Salon"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-700 hover:text-maroon-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-ivory-50/98 backdrop-blur-lg shadow-xl border-t border-blush-200 py-6 px-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-maroon-900 font-medium text-lg py-1 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-maroon-900 text-gold-400 py-3 rounded-xl text-center font-medium shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{lang === 'ur' ? 'آن لائن بکنگ کریں' : 'Book Appointment'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
