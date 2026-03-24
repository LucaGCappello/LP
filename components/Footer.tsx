import React from 'react';
import { Language, useTranslation } from '../utils/translations';

interface FooterProps {
  language?: Language;
}

const Footer: React.FC<FooterProps> = ({ language = 'en' }) => {
  const t = useTranslation(language);
  return (
    <footer className="py-20 border-t border-white/5 relative bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
  src="Logo/nexta_no_background.png"
  alt="Nexta Agency Logo"
  className="h-24 w-auto"
/>
            </div>
            <p className="text-gray-400 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:justify-end">
            <a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Solutions</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">ROI Calculator</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2025 Nexta Intelligence. {t.footer.rights}
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
