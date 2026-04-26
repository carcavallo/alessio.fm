import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const serviceOptions = [
  'Allgemein',
  'Websites & Landing Pages',
  'Web-Applikationen & APIs',
  'Mobile & Desktop Apps',
  'IT-Support & Technik-Hilfe',
  'Hosting & Wartung',
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Allgemein',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

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
  }, []);

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
        body: JSON.stringify(form),
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
        <p className={styles.sectionSubText}>Schreib mir</p>
        <h3 className={styles.sectionHeadText}>Kontakt</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-6 sm:mt-8 md:mt-12 flex flex-col gap-5 sm:gap-6 md:gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">Dein Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Wie heisst du?"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] sm:text-base"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">Deine E-Mail</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="deine@email.com"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-[14px] sm:text-base"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">Service</span>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 text-white rounded-lg outline-none border-none font-medium cursor-pointer appearance-none text-[14px] sm:text-base"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%23aaa6c3'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            >
              {serviceOptions.map(opt => (
                <option key={opt} value={opt} style={{ background: '#151030', color: '#fff' }}>{opt}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2 sm:mb-3 text-[14px] sm:text-base">Deine Nachricht</span>
            <textarea
              rows={5}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Was kann ich für dich tun?"
              className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none text-[14px] sm:text-base"
            />
          </label>

          {status === 'success' && (
            <div className="bg-green-900/30 border border-green-500/30 text-green-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[13px] sm:text-[14px]">
              ✅ Nachricht gesendet! Ich melde mich innerhalb von 24h bei dir.
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-900/30 border border-red-500/30 text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-[13px] sm:text-[14px]">
              ❌ Etwas ist schiefgelaufen. Bitte versuche es nochmal oder schreib direkt an me@alessio.fm
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#915EFF] hover:bg-[#7a4de0] disabled:opacity-50 py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 text-[14px] sm:text-base"
          >
            {loading ? 'Wird gesendet...' : 'Nachricht senden'}
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
