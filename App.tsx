
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Brands from './components/Brands';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BookingCalendar from './components/BookingCalendar';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import HomePageSEO from './components/HomePageSEO';
import CustomCursor from './components/CustomCursor';
import LanguageToggle from './components/LanguageToggle';
import { Language } from './utils/translations';

const HomePage: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <>
      <HomePageSEO />
      <Hero language={language} />
      <Brands />
      <ValueProps language={language} />
      <Testimonials language={language} />
      <ContactForm language={language} />
      <BookingCalendar />
    </>
  );
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <LanguageToggle currentLanguage={language} onLanguageChange={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer language={language} />
    </div>
  );
};

export default App;
