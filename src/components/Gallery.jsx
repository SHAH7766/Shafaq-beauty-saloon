import React, { useState } from 'react';
import { Sparkles, Instagram, ZoomIn, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Gallery = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Bridal', 'Makeup', 'Hair', 'Nails'];

  const filteredImages = activeFilter === 'All'
    ? siteData.gallery
    : siteData.gallery.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="gallery" className="py-20 bg-ivory-100/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-4">
            <Instagram className="w-4 h-4 text-gold-600" />
            <span>{lang === 'ur' ? 'ہماری گیلری' : 'Salon Gallery'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 mb-4">
            {lang === 'ur' ? 'خوبصورت دلہنوں اور لکس کی جھلک' : 'Glimpse of Our Masterpieces'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'ur'
              ? 'دیکھیے ہمارے حالیہ برائیڈل میک اوور، ہیئر اسٹائلنگ اور نیل آرٹ کی تصاویر'
              : 'Browse our latest bridal makeovers, elegant hair styling, and luxury nail designs.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-maroon-900 text-gold-400 shadow-lg shadow-maroon-900/20'
                  : 'bg-white text-gray-700 hover:bg-blush-100 border border-blush-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-md cursor-pointer aspect-[4/5] bg-gradient-to-br from-maroon-900 via-maroon-950 to-gold-700 flex items-center justify-center"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gold-400 p-6 text-center z-0">
                <Sparkles className="w-10 h-10 mb-2 opacity-50" />
                <span className="font-serif text-lg font-bold text-ivory-100">{item.title}</span>
                <span className="text-xs text-gold-400 mt-1 uppercase tracking-widest">{item.category}</span>
              </div>

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0 z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-maroon-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                <span className="text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-white text-xs font-semibold bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-full w-fit">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>{lang === 'ur' ? 'بڑا کر کے دیکھیں' : 'Click to View'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center">
          <Instagram className="w-10 h-10 text-gold-400 mb-4" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3 text-gold-400">
            {lang === 'ur' ? 'انسٹاگرام پر ہمیں فالو کریں' : 'Follow Us on Instagram'}
          </h3>
          <p className="text-ivory-100 text-sm sm:text-base max-w-lg mb-6">
            {lang === 'ur'
              ? 'روزانہ کی تازہ ترین برائیڈل لکس اور بیوٹی ٹپس کے لیے ہمیں فالو کریں @shafaqsbridalsalon'
              : 'Stay updated with our daily bridal makeovers, client reels, and exclusive salon updates.'}
          </p>
          <a
            href={siteData.business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-400 hover:bg-gold-500 text-maroon-950 font-bold px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2 text-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>@shafaqsbridalsalon</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-ivory-50 flex items-center justify-between">
              <div>
                <span className="text-gold-600 text-xs uppercase tracking-widest font-semibold block mb-1">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-maroon-900">
                  {selectedImage.title}
                </h3>
              </div>
              <a
                href={siteData.business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-maroon-900 text-gold-400 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-maroon-800 transition-colors flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>View on IG</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
