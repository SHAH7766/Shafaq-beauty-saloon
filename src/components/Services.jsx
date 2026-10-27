import React from 'react';
import { Sparkles, Crown, Scissors, Heart, Smile, ArrowRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Services = ({ lang }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-6 h-6 text-gold-600" />;
      case 'Scissors': return <Scissors className="w-6 h-6 text-gold-600" />;
      case 'Heart': return <Heart className="w-6 h-6 text-gold-600" />;
      case 'Smile': return <Smile className="w-6 h-6 text-gold-600" />;
      default: return <Sparkles className="w-6 h-6 text-gold-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-ivory-100/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-gold-600" />
            <span>{lang === 'ur' ? 'ہماری پریمیم خدمات' : 'Our Luxury Services'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 mb-4">
            {lang === 'ur' ? 'خوبصورتی اور دلکشی کے لیے خصوصی خدمات' : 'Artisanal Beauty & Salon Services'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'ur'
              ? 'ہر موقع کے لیے پیشہ ورانہ اور اعلیٰ معیار کی خدمات'
              : 'Explore our complete range of bridal makeovers, hair treatments, skin care, and spa services.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service) => {
            const title = lang === 'ur' ? service.urduTitle : service.title;
            const description = lang === 'ur' ? service.urduDescription : service.description;
            const price = lang === 'ur' ? service.urduPrice : service.price;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blush-100 flex flex-col group"
              >
                {/* Service Image with fallback background */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-maroon-900 to-maroon-950 flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gold-400 p-4 text-center">
                    <Sparkles className="w-8 h-8 mb-2 opacity-60" />
                    <span className="font-serif text-sm font-bold text-ivory-100">{title}</span>
                  </div>
                  <img
                    src={service.image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 absolute inset-0 z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/70 via-transparent to-transparent z-20 pointer-events-none" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md z-30">
                    {getIcon(service.icon)}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white z-30">
                    <span className="bg-gold-500 text-maroon-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-maroon-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {description}
                    </p>
                  </div>

                  <a
                    href={`${siteData.business.whatsappLink}?text=Hi%20Shafaq's%20Salon,%20I%20would%20like%20to%20book/inquire%20about%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-maroon-900 font-semibold text-sm bg-blush-50 hover:bg-maroon-900 hover:text-gold-400 p-3 rounded-xl transition-colors"
                  >
                    <span>{lang === 'ur' ? 'واٹس ایپ پر پوچھ گچھ کریں' : 'Inquire on WhatsApp'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
