import React, { useState, useEffect } from 'react';
import { Language } from '../utils/translations';

interface CookieBannerProps {
  language?: Language;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ language = 'en' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isPortuguese = language === 'pt';

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-[slideUp_0.5s_ease-out]">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {isPortuguese ? 'Cookies e Privacidade' : 'Cookies & Privacy'}
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-2">
                {isPortuguese
                  ? 'Usamos cookies essenciais para garantir o funcionamento adequado do nosso site e cookies analíticos para entender como você interage com nossos serviços. Esses cookies nos ajudam a melhorar sua experiência.'
                  : 'We use essential cookies to ensure our website functions properly and analytics cookies to understand how you interact with our services. These cookies help us improve your experience.'}
              </p>
              <a
                href="/privacy"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors inline-flex items-center gap-1"
              >
                {isPortuguese ? 'Saiba mais na nossa Política de Privacidade' : 'Learn more in our Privacy Policy'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all text-sm font-medium whitespace-nowrap"
              >
                {isPortuguese ? 'Apenas Essenciais' : 'Essential Only'}
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all text-sm font-bold shadow-lg hover:shadow-blue-500/50 whitespace-nowrap"
              >
                {isPortuguese ? 'Aceitar Todos' : 'Accept All'}
              </button>
            </div>
          </div>
        </div>

        <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-b-2xl"></div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
