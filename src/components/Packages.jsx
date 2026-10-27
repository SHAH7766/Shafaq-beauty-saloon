import React from 'react';
import { Sparkles, Check, Crown, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Packages = ({ lang }) => {
  return (
    <section id="packages" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-4">
            <Crown className="w-4 h-4 text-gold-600" />
            <span>{lang === 'ur' ? 'عروسی پیکجز' : 'Bridal Packages'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 mb-4">
            {lang === 'ur' ? 'آپ کے خاص دن کے لیے خصوصی پیکجز' : 'Curated Packages for Your Big Day'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'ur'
              ? 'کلاسک سے لے کر رائل ایمپریس تک، ہمارے پاس ہر دلہن کے لیے بہترین پیکج موجود ہے۔'
              : 'Choose from our Classic, Premium, or Royal packages designed to give you an unforgettable glow.'}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteData.packages.map((pkg) => {
            const name = lang === 'ur' ? pkg.urduName : pkg.name;
            const description = lang === 'ur' ? pkg.urduDescription : pkg.description;
            const price = lang === 'ur' ? pkg.urduPrice : pkg.price;
            const features = lang === 'ur' ? pkg.urduFeatures : pkg.features;

            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-maroon-900 text-white shadow-2xl lg:-translate-y-4 border-2 border-gold-400'
                    : 'bg-ivory-50 text-gray-800 border border-blush-200 shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-maroon-950 font-bold text-xs uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'ur' ? 'سب سے مقبول' : 'Most Popular'}</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={`font-serif text-2xl font-bold mb-1 ${pkg.popular ? 'text-gold-400' : 'text-maroon-900'}`}>
                        {name}
                      </h3>
                      <p className={`text-sm ${pkg.popular ? 'text-ivory-100' : 'text-gray-600'}`}>
                        {description}
                      </p>
                    </div>
                  </div>

                  <div className="my-6 pb-6 border-b border-white/10">
                    <span className={`text-3xl sm:text-4xl font-serif font-bold ${pkg.popular ? 'text-gold-400' : 'text-maroon-900'}`}>
                      {price}
                    </span>
                    <span className={`text-xs ml-2 ${pkg.popular ? 'text-ivory-100' : 'text-gray-500'}`}>
                      {lang === 'ur' ? 'مکمل میک اوور' : 'Complete Makeover'}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.popular ? 'bg-gold-400/20 text-gold-400' : 'bg-maroon-900/10 text-maroon-900'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={pkg.popular ? 'text-ivory-50' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`${siteData.business.whatsappLink}?text=Hi%20Shafaq's%20Salon,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(pkg.name)} (${pkg.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.popular
                      ? 'bg-gold-400 hover:bg-gold-500 text-maroon-950 shadow-gold-400/20'
                      : 'bg-maroon-900 hover:bg-maroon-800 text-gold-400 shadow-maroon-900/10'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{lang === 'ur' ? 'واٹس ایپ پر انکوائری کریں' : 'Inquire on WhatsApp'}</span>
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
