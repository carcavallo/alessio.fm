import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { logoAC } from '../assets';
import { useLanguage } from '../context/LanguageContext';
import { languages } from '../i18n';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const navLinks = [
    { id: 'about', title: t('nav.about') },
    { id: 'work', title: t('nav.work') },
    { id: 'projects', title: t('nav.projects') },
    { id: 'services', title: t('nav.services') },
    { id: 'contact', title: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [toggle]);

  return (
    <>
      <nav className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050816] shadow-lg' : 'bg-transparent'}`}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => { setActive(''); window.scrollTo(0, 0); }}
          >
            <img src={logoAC} alt="AC" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
            <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer">
              alessio<span className="text-[#0EA5E9]">.fm</span>
            </p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-6 lg:gap-8">
            <ul className="list-none flex flex-row gap-6 lg:gap-8">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white text-[16px] lg:text-[18px] font-medium cursor-pointer transition-colors duration-200`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-6">
              {languages.map((lang, i) => (
                <React.Fragment key={lang.code}>
                  {i > 0 && <span className="text-white/20 text-[13px]">|</span>}
                  <button
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-[13px] font-medium px-1 transition-colors duration-200 ${
                      language === lang.code ? 'text-[#0EA5E9]' : 'text-secondary hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-50 relative"
            onClick={() => setToggle(!toggle)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {toggle && (
        <div className="sm:hidden fixed inset-0 bg-black/60 z-40" onClick={() => setToggle(false)} />
      )}

      <div className={`sm:hidden fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${toggle ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-[#050816] pt-24 pb-8 px-8 shadow-2xl border-b border-white/5">
          <ul className="list-none flex flex-col gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[20px] ${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white transition-colors`}
                onClick={() => { setToggle(false); setActive(nav.title); }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Language & Social in Mobile */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
            {languages.map((lang, i) => (
              <React.Fragment key={lang.code}>
                {i > 0 && <span className="text-white/20 text-[13px]">|</span>}
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`text-[14px] font-medium transition-colors ${
                    language === lang.code ? 'text-[#0EA5E9]' : 'text-secondary hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-5 mt-6 pt-6 border-t border-white/10">
            <a href="https://github.com/carcavallo" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors text-[15px]">GitHub</a>
            <a href="https://alpinsignals.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors text-[15px]">Alpin Signals</a>
            <a href="mailto:contact@alessio.fm" className="text-secondary hover:text-white transition-colors text-[15px]">Email</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
