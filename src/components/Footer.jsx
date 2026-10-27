import React from 'react';
import { Sparkles, Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Footer = ({ lang }) => {
  return (
    <footer className="bg-maroon-950 text-ivory-50 pt-16 pb-12 border-t border-maroon-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center text-maroon-950 shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-gold-400 tracking-tight">
                {lang === 'ur' ? siteData.business.urduName : siteData.business.name}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {lang === 'ur' ? siteData.business.urduTagline : siteData.business.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={siteData.business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-950 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteData.business.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-maroon-900 text-gold-400 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-950 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-gold-400 mb-4">
              {lang === 'ur' ? 'فوری لنکس' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {lang === 'ur' ? 'ہوم' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {lang === 'ur' ? 'ہمارے بارے میں' : 'About Us'}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {lang === 'ur' ? 'سروسز' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {lang === 'ur' ? 'عروسی پیکجز' : 'Bridal Packages'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-gold-400 transition-colors">
                  {lang === 'ur' ? 'گیلری' : 'Gallery'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold text-gold-400 mb-4">
              {lang === 'ur' ? 'اہم خدمات' : 'Top Services'}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>{lang === 'ur' ? 'برائیڈل میک اپ' : 'Bridal Makeup'}</li>
              <li>{lang === 'ur' ? 'ہیئر کٹنگ اور اسٹائلنگ' : 'Hair Styling & Cutting'}</li>
              <li>{lang === 'ur' ? 'کیراٹن اور بیلاج' : 'Keratin & Balayage'}</li>
              <li>{lang === 'ur' ? 'منییکیور اور پیڈییکیور' : 'Manicure & Pedicure'}</li>
              <li>{lang === 'ur' ? 'فیشلز اور اسکن کیئر' : 'Facials & Skin Care'}</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-lg font-bold text-gold-400 mb-4">
              {lang === 'ur' ? 'رابطہ کی معلومات' : 'Contact Info'}
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{lang === 'ur' ? siteData.business.urduAddress : siteData.business.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{siteData.business.phone}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-maroon-900 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {siteData.business.name}. {lang === 'ur' ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-gold-400 fill-current" />
            <span>for DHA Lahore</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
