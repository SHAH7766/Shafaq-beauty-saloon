import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Send, CheckCircle, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const BookingForm = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: siteData.services[0].title,
    date: '',
    time: '11:00 AM',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError(lang === 'ur' ? 'براہ کرم اپنا نام اور فون نمبر درج کریں۔' : 'Please provide your name and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);

    // Construct WhatsApp pre-filled message
    const waText = `Hi Shafaq's Bridal Salon,%0A%0AI would like to book/inquire about an appointment:%0A- *Name:* ${encodeURIComponent(formData.name)}%0A- *Phone:* ${encodeURIComponent(formData.phone)}%0A- *Service:* ${encodeURIComponent(formData.service)}%0A- *Preferred Date:* ${encodeURIComponent(formData.date || 'As soon as possible')}%0A- *Preferred Time:* ${encodeURIComponent(formData.time)}%0A- *Message:* ${encodeURIComponent(formData.message || 'None')}`;

    const waUrl = `${siteData.business.whatsappLink}?text=${waText}`;

    // Open WhatsApp after a short delay so success message renders
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-ivory-50 via-blush-100/30 to-ivory-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blush-100 px-4 py-1.5 rounded-full text-maroon-900 text-xs sm:text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4 text-gold-600" />
            <span>{lang === 'ur' ? 'آن لائن بکنگ اور انکوائری' : 'Online Booking & Inquiry'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900 mb-4">
            {lang === 'ur' ? 'اپنا وقت بک کروائیں' : 'Reserve Your Appointment'}
          </h2>
          <p className="text-gray-600 text-base">
            {lang === 'ur'
              ? 'اپنے مطلوبہ دن اور وقت کی تفصیلات درج کریں اور فوری طور پر واٹس ایپ پر رابطہ کریں۔'
              : 'Fill in your details below and instantly send your appointment request to our WhatsApp concierge.'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-blush-200 p-8 sm:p-12 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-maroon-900 mb-4">
                {lang === 'ur' ? 'بکنگ کی درخواست کامیابی سے تیار ہو گئی!' : 'Booking Request Ready!'}
              </h3>
              <p className="text-gray-600 text-base max-w-md mx-auto mb-8">
                {lang === 'ur'
                  ? 'واٹس ایپ خود بخود کھل رہا ہے جہاں آپ اپنی تفصیلات ہماری ٹیم کو بھیج سکتے ہیں۔'
                  : 'Opening WhatsApp with your pre-filled details. If it doesn\'t open automatically, click the button below.'}
              </p>
              <a
                href={`${siteData.business.whatsappLink}?text=Hi%20Shafaq's%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20for%20${encodeURIComponent(formData.service)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg inline-flex items-center gap-3"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{lang === 'ur' ? 'دوبارہ واٹس ایپ کھولیں' : 'Open WhatsApp Manually'}</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ur' ? 'آپ کا نام *' : 'Your Full Name *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={lang === 'ur' ? 'مریم خان' : 'e.g. Ayesha Khan'}
                      className="w-full bg-ivory-50 border border-blush-200 rounded-2xl py-3.5 pl-12 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-maroon-900"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ur' ? 'فون / واٹس ایپ نمبر *' : 'Phone / WhatsApp Number *'}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0324 4456711"
                      className="w-full bg-ivory-50 border border-blush-200 rounded-2xl py-3.5 pl-12 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-maroon-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Service Dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ur' ? 'خدمت کا انتخاب کریں' : 'Select Service'}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-ivory-50 border border-blush-200 rounded-2xl py-3.5 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  >
                    {siteData.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {lang === 'ur' ? s.urduTitle : s.title}
                      </option>
                    ))}
                    <option value="Custom Bridal Package">Custom Bridal Package</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ur' ? 'پسندیدہ تاریخ' : 'Preferred Date'}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-ivory-50 border border-blush-200 rounded-2xl py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {lang === 'ur' ? 'پسندیدہ وقت' : 'Preferred Time'}
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-ivory-50 border border-blush-200 rounded-2xl py-3.5 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-maroon-900"
                  >
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {lang === 'ur' ? 'کوئی خاص پیغام یا سوال (اختیاری)' : 'Special Request or Note (Optional)'}
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={lang === 'ur' ? 'کوئی اضافی تفصیلات درج کریں...' : 'Any specific requests, event type, or timing notes...'}
                  className="w-full bg-ivory-50 border border-blush-200 rounded-2xl p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-maroon-900"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-maroon-900 hover:bg-maroon-800 text-gold-400 py-4 rounded-2xl font-bold shadow-xl shadow-maroon-900/20 hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-lg"
              >
                <Send className="w-5 h-5" />
                <span>{lang === 'ur' ? 'واٹس ایپ پر بکنگ بھیجیں' : 'Send Booking to WhatsApp'}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
