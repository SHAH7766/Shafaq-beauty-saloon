import React from 'react';
import { Star, Quote, ExternalLink, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Reviews = ({ lang }) => {
  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-4">
            <Star className="w-4 h-4 text-gold-600 fill-current" />
            <span>{lang === 'ur' ? 'کلائنٹ کے تبصرے' : 'Client Testimonials'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 mb-4">
            {lang === 'ur' ? 'ہماری پیاری دلہنیں کیا کہتی ہیں' : 'Loved by Brides Across Lahore'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'ur'
              ? 'گوگل پر 4.1 ریٹنگ اور 71+ ریویوز کے ساتھ ہماری بہترین خدمات کا ثبوت'
              : 'Read genuine experiences from our brides who trusted us for their special days.'}
          </p>

          {/* Google Rating Badge */}
          <div className="mt-8 inline-flex items-center gap-4 bg-ivory-50 border border-blush-200 px-6 py-3 rounded-2xl shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <span className="font-bold text-maroon-900 text-sm block">
                {siteData.business.googleRating} / 5.0 Google Rating
              </span>
              <a
                href={siteData.business.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold-600 hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>{siteData.business.googleReviewsCount} Google Reviews • Write a review</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.reviews.map((rev) => {
            const text = lang === 'ur' ? rev.urduText : rev.text;
            const role = lang === 'ur' ? rev.urduRole : rev.role;

            return (
              <div
                key={rev.id}
                className="bg-ivory-50/70 border border-blush-200 rounded-3xl p-8 shadow-md relative flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-6 right-6 text-blush-300">
                  <Quote className="w-10 h-10 opacity-50" />
                </div>

                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-base italic mb-6 leading-relaxed relative z-10">
                    "{text}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-blush-200/60">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-maroon-900">
                      {rev.name}
                    </h3>
                    <span className="text-xs text-gold-600 font-medium">
                      {role}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{rev.date}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
