import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Contact = ({ lang }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4 text-gold-600" />
            <span>{lang === 'ur' ? 'رابطہ اور مقام' : 'Contact & Location'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 mb-4">
            {lang === 'ur' ? 'ڈی ایچ اے لاہور میں تشریف لائیں' : 'Visit Our Luxury Salon in DHA'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'ur'
              ? 'ہم سے رابطہ کریں یا ہمارے سیلون پر تشریف لائیں'
              : 'We are conveniently located in DHA Phase 2 Commercial Sector T, Lahore.'}
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ivory-50 border border-blush-200 rounded-3xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-maroon-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">
                  {lang === 'ur' ? 'پتہ' : 'Our Address'}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {lang === 'ur' ? siteData.business.urduAddress : siteData.business.address}
                </p>
                <a
                  href="https://maps.google.com/?q=51+DHA+Phase+2+T-Block+Commercial+Sector+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-maroon-900"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{lang === 'ur' ? 'رستے کی ہدایات حاصل کریں' : 'Get Directions on Google Maps'}</span>
                </a>
              </div>
            </div>

            <div className="bg-ivory-50 border border-blush-200 rounded-3xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-maroon-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">
                  {lang === 'ur' ? 'فون / واٹس ایپ' : 'Phone & WhatsApp'}
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  {siteData.business.phone}
                </p>
                <a
                  href={siteData.business.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'ur' ? 'واٹس ایپ چیٹ شروع کریں' : 'Chat Instantly on WhatsApp'}</span>
                </a>
              </div>
            </div>

            <div className="bg-ivory-50 border border-blush-200 rounded-3xl p-6 shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-maroon-900 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-maroon-900 mb-1">
                  {lang === 'ur' ? 'اوقاتِ کار' : 'Opening Hours'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {lang === 'ur' ? siteData.business.urduOpeningHours : siteData.business.openingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px] sm:h-[450px] relative">
              <iframe
                title="Shafaq's Bridal Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.498115668482!2d74.398!3d31.481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzUzLjYiTiA3NMKwMjMnNTIuOCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-maroon-900 mb-2">
              {lang === 'ur' ? 'اکثر پوچھے گئے سوالات' : 'Frequently Asked Questions'}
            </h3>
            <p className="text-gray-600 text-sm">
              {lang === 'ur' ? 'برائیڈل بکنگ اور سیلون کی خدمات سے متعلق عام سوالات' : 'Got questions about your bridal booking or our salon? Find answers here.'}
            </p>
          </div>

          <div className="space-y-4">
            {siteData.faqs.map((faq, idx) => {
              const question = lang === 'ur' ? faq.urduQuestion : faq.question;
              const answer = lang === 'ur' ? faq.urduAnswer : faq.answer;
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-ivory-50 border border-blush-200 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left font-serif text-lg font-bold text-maroon-900 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span>{question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gold-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gold-600 shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-blush-100 pt-3 animate-fade-in">
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
