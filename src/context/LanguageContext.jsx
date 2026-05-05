import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'de');

  useEffect(() => { localStorage.setItem('language', language); }, [language]);

  const t = (key, vars) => {
    const keys = key.split('.');
    let val = translations[language];
    for (const k of keys) {
      val = val?.[k];
    }
    if (typeof val === 'string' && vars) {
      return val.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
    }
    return val || key;
  };

  const tObj = (key) => {
    const keys = key.split('.');
    let val = translations[language];
    for (const k of keys) {
      val = val?.[k];
    }
    return val;
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, tObj }}>
      {children}
    </LanguageContext.Provider>
  );
};
