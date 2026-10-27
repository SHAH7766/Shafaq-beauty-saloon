import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export const AnnouncementBar = ({ lang }) => {
  const { announcement } = siteData;

  return (
    <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900 text-gold-400 py-2.5 px-4 text-center text-sm font-medium shadow-inner flex items-center justify-center gap-2">
      <Sparkles className="w-4 h-4 animate-pulse text-gold-400 shrink-0" />
      <span>{lang === 'ur' ? announcement.urduText : announcement.text}</span>
      <Sparkles className="w-4 h-4 animate-pulse text-gold-400 shrink-0 hidden sm:inline" />
    </div>
  );
};
