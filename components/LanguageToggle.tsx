import { Language } from '../utils/translations';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ currentLanguage, onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 shadow-lg">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'en'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('pt')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
          currentLanguage === 'pt'
            ? 'bg-blue-500 text-white'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        PT
      </button>
    </div>
  );
}
