import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingForm } from './components/BookingForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'ur'

  return (
    <div className={`min-h-screen bg-ivory-50 text-gray-800 font-sans ${lang === 'ur' ? 'rtl' : 'ltr'}`} dir={lang === 'ur' ? 'rtl' : 'ltr'}>
      <AnnouncementBar lang={lang} />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Packages lang={lang} />
        <Gallery lang={lang} />
        <Reviews lang={lang} />
        <BookingForm lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
    </div>
  );
}
