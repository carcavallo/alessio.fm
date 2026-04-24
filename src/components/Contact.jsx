import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_scdz5c8',
        'template_5uvnl5z',
        formRef.current,
        'iE6wApo1dOmedbaC8'
      )
      .then(
        () => {
          setLoading(false);
          alert('Danke für deine Nachricht! Ich melde mich so schnell wie möglich.');

          setForm({
            from_name: '',
            from_email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Etwas ist schiefgelaufen. Bitte versuche es nochmal.');
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Kontakt aufnehmen</p>
        <h3 className={styles.sectionHeadText}>Kontakt</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <input type="hidden" name="to_name" value="Alessio Carcavallo" />
          <input type="hidden" name="to_email" value="me@alessio.fm" />

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Dein Name</span>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="Wie heisst du?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:shadow-lg transition-all"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Deine E-Mail</span>
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="deine@email.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Deine Nachricht</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Was möchtest du mir mitteilen?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-lg transition-all"
          >
            {loading ? 'Wird gesendet...' : 'Senden'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
