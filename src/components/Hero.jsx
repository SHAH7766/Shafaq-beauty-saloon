import React from 'react';
import { Sparkles, Calendar, ArrowRight, MessageCircle, Star } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Hero = ({ lang }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-blush-100/50 via-ivory-50 to-ivory-50 overflow-hidden py-16 lg:py-24">
      {/* Decorative background blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blush-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blush-100 border border-blush-300 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>{lang === 'ur' ? 'ڈی ایچ اے لاہور میں 15 سالہ شاندار کامیابی' : '15 Years of Bridal Excellence in DHA Lahore'}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-maroon-900 tracking-tight leading-[1.1] mb-6">
              {lang === 'ur' ? (
                <>آپ کی شادی کا دن، <span className="text-gold-600 italic">شاہانہ خوبصورتی</span> کے ساتھ</>
              ) : (
                <>Your Dream Wedding, Touched With <span className="text-gold-600 italic">Royal Elegance</span></>
              )}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {lang === 'ur' ? siteData.business.urduAbout : siteData.business.about}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={`${siteData.business.whatsappLink}?text=Hi%20Shafaq's%20Bridal%20Salon,%20I%20would%20like%20to%20inquire%20about%20bridal%20bookings.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all flex items-center justify-center gap-3 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{lang === 'ur' ? 'واٹس ایپ پر رابطہ کریں' : 'Book on WhatsApp'}</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto bg-white hover:bg-ivory-100 text-maroon-900 border-2 border-maroon-900/20 px-8 py-4 rounded-2xl font-semibold shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>{lang === 'ur' ? 'سروسز دیکھیں' : 'View Services'}</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </a>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-gray-200/60">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                <span className="font-bold text-maroon-900">{siteData.business.googleRating} ⭐</span> from <span className="font-bold text-maroon-900">{siteData.business.googleReviewsCount} Google Reviews</span>
              </div>
            </div>

          </div>

          {/* Right Image Grid / Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main large image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gradient-to-br from-maroon-900 via-maroon-800 to-gold-600 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1594552072238-b8a3da72ae9a?auto=format&fit=crop&w=800&q=80"
                  alt="Shafaq's Bridal Salon Lahore"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 absolute inset-0 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 flex flex-col items-center justify-center text-center p-8 z-0">
                  <Sparkles className="w-12 h-12 text-gold-400 mb-4 animate-pulse" />
                  <span className="font-serif text-2xl font-bold text-gold-400 mb-2">Shafaq's Bridal Salon</span>
                  <span className="text-ivory-100 text-sm">DHA Phase 2, Lahore</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent flex items-end p-6 z-20 pointer-events-none">
                  <div className="text-white">
                    <span className="text-gold-400 font-semibold text-xs tracking-widest uppercase block mb-1">
                      {lang === 'ur' ? 'سگنیچر برائیڈل میک اوور' : 'Signature Bridal Makeover'}
                    </span>
                    <span className="font-serif text-xl font-bold">DHA Phase 2, Lahore</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-blush-200 hidden sm:flex items-center gap-3 z-30">
                <div className="w-12 h-12 rounded-xl bg-gold-400/20 flex items-center justify-center text-gold-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">{lang === 'ur' ? 'تجربہ' : 'Experience'}</span>
                  <span className="font-serif text-lg font-bold text-maroon-900">15 Years Trusted</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
