import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';

export const FloatingWhatsApp = ({ lang }) => {
  return (
    <a
      href={`${siteData.business.whatsappLink}?text=Hi%20Shafaq's%20Bridal%20Salon,%20I%20am%20visiting%20your%20website%20and%20want%20to%20inquire%20about...`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 bg-white text-maroon-900 font-semibold text-xs px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {lang === 'ur' ? 'واٹس ایپ پر چیٹ کریں' : 'Chat on WhatsApp'}
      </span>
    </a>
  );
};
