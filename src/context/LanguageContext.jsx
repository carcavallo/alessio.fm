import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n';

const LanguageContext = createContext();
const supportedLangs = ['de', 'en', 'it'];

function getLangFromURL() {
  const path = window.location.pathname.split('/')[1];
  if (supportedLangs.includes(path)) return path;
  return null;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return getLangFromURL() || localStorage.getItem('language') || 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Update URL: /en, /it for non-default; / for de
    const currentPath = window.location.pathname;
    const hash = window.location.hash;
    const langInUrl = currentPath.split('/')[1];
    
    if (language === 'de') {
      if (supportedLangs.includes(langInUrl)) {
        window.history.replaceState(null, '', '/' + hash);
      }
    } else {
      if (langInUrl !== language) {
        window.history.replaceState(null, '', '/' + language + hash);
      }
    }
  }, [language]);

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
