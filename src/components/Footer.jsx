import React from 'react';
import { logoAC } from '../assets';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0a0816] border-t border-white/5">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-16 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoAC} alt="AC" className="w-8 h-8" />
              <span className="text-white text-[16px] font-bold">
                alessio<span className="text-[#0EA5E9]">.fm</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-[13px] leading-relaxed">
              Software Development, IT-Support & Trading
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#about" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('nav.about')}</a>
              <a href="#work" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('nav.work')}</a>
              <a href="#projects" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('nav.projects')}</a>
              <a href="#services" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('nav.services')}</a>
              <a href="#contact" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('nav.contact')}</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">{t('footer.legal')}</h4>
            <div className="flex flex-col gap-2.5">
              <a href="/impressum" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('footer.impressum')}</a>
              <a href="/datenschutz" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('footer.datenschutz')}</a>
              <a href="/agb" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('footer.agb')}</a>
              <a href="/risikohinweis" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">{t('footer.risikohinweis')}</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-[14px] mb-4">Social</h4>
            <div className="flex flex-col gap-2.5">
              <a href="https://github.com/carcavallo" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">GitHub</a>
              <a href="https://alpinsignals.com" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] text-[13px] hover:text-white transition-colors">Alpin Signals</a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 border-t border-white/5">
          <p className="text-[#64748B] text-[12px] text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
