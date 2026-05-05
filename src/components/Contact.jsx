import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const { t, tObj } = useLanguage();
  const serviceOptions = tObj('contact.serviceOptions');
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: serviceOptions[0] || '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [honeypot, setHoneypot] = useState('');
  const [formTs] = useState(Date.now());

  // Listen for service selection from Services component
  useEffect(() => {
    const handleServiceSelect = (e) => {
      if (e.detail?.service && serviceOptions.includes(e.detail.service)) {
        setForm(prev => ({ ...prev, service: e.detail.service }));
      }
    };
    window.addEventListener('selectService', handleServiceSelect);

    // Also check URL hash on mount
    const hash = window.location.hash;
    if (hash.includes('service=')) {
      try {
        const params = new URLSearchParams(hash.split('?')[1]);
        const svc = params.get('service');
        if (svc && serviceOptions.includes(svc)) {
          setForm(prev => ({ ...prev, service: svc }));
        }
      } catch {}
    }

    return () => window.removeEventListener('selectService', handleServiceSelect);
  }, [serviceOptions]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, website: honeypot, _ts: formTs }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', service: 'Allgemein', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 bg-black-100 p-5 sm:p-6 md:p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t('contact.subtitle')}</p>
        <h3 className={styles.sectionHeadText}>{t('contact.title')}</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-12 flex flex-col gap-5 sm:gap-6 md:gap-8">
          <div style={{position:'absolute',left:'-9999px'}} aria-hidden="true">
            <input type="text" name="website" value={honeypot} onChange={(e)=>setHoneypot(e.target.value)} tabIndex="-1" autoComplete="off" />
          </div>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">{t('contact.form.name')}</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={t('contact.form.namePlaceholder')}
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] sm:text-base"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">{t('contact.form.email')}</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={t('contact.form.emailPlaceholder')}
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] sm:text-base"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">{t('contact.form.service')}</span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 text-white rounded-lg outline-none border-none font-medium cursor-pointer appearance-none text-[14px] sm:text-base"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%2394A3B8'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            >
              {serviceOptions.map(opt => (
                <option key={opt} value={opt} style={{ background: '#151030', color: '#fff' }}>{opt}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">{t('contact.form.message')}</span>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder={t('contact.form.messagePlaceholder')}
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none text-[14px] sm:text-base"
            />
          </label>

          {status === 'success' && (
            <div className="bg-green-900/30 border border-green-500/30 text-green-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[13px] sm:text-[14px]">
              ✅ {t('contact.form.success')}
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-900/30 border border-red-500/30 text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[13px] sm:text-[14px]">
              ❌ {t('contact.form.error')}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#0EA5E9] hover:bg-[#0284C7] disabled:opacity-50 py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 text-[14px] sm:text-base"
          >
            {loading ? t('contact.form.sending') : t('contact.form.send')}
          </button>
        </form>
      </motion.div>

      {/* Hide EarthCanvas on mobile - too heavy */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="hidden md:block xl:flex-1 xl:h-[550px] md:h-[550px] xl:sticky xl:top-32"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
