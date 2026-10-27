import React from 'react';
import { Sparkles, Award, Users, Star, Clock } from 'lucide-react';
import { siteData } from '../data/siteData';

export const About = ({ lang }) => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80"
                  alt="Salon interior"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-48 bg-maroon-900 p-6 flex flex-col justify-center text-white">
                <Sparkles className="w-8 h-8 text-gold-400 mb-2" />
                <span className="font-serif text-2xl font-bold text-gold-400">15+</span>
                <span className="text-sm text-ivory-100 font-medium">
                  {lang === 'ur' ? 'سالوں سے آپ کی خدمت میں' : 'Years of Beauty & Elegance'}
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden shadow-lg h-48 bg-blush-100 p-6 flex flex-col justify-center text-maroon-900 border border-blush-200">
                <Star className="w-8 h-8 text-gold-600 mb-2 fill-current" />
                <span className="font-serif text-2xl font-bold">4.1 ⭐</span>
                <span className="text-sm text-gray-700 font-medium">
                  {lang === 'ur' ? '71+ گوگل ریویوز' : '71+ Google Reviews'}
                </span>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                  alt="Bridal styling"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-6">
              <Award className="w-4 h-4 text-gold-600" />
              <span>{lang === 'ur' ? 'ہمارا ورثہ اور کہانی' : 'Our Legacy & Story'}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight mb-6">
              {lang === 'ur' ? 'لاہور کے دل میں دلہنوں کی پہلی پسند' : 'A Decade & Half of Crafting Bridal Perfection'}
            </h2>

            <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
              {lang === 'ur' ? siteData.business.urduAbout : siteData.business.about}
            </p>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              {lang === 'ur'
                ? 'ڈی ایچ اے فیز 2 ٹی بلاک میں واقع، ہمارا سیلون حفظان صحت کے اصولوں، بہترین برانڈڈ مصنوعات اور ماہر عملے کے لیے مشہور ہے۔'
                : 'Located at 51, DHA T-Block, Commercial Sector T, DHA Phase 2, Lahore, Shafaq\'s Bridal Salon has been the go-to destination for brides looking for timeless sophistication, modern techniques, and personalized pampering.'}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              {siteData.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900 block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-medium">
                    {lang === 'ur' ? stat.urduLabel : stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
