import React, { useState, useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, useInView } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// Count-up component
const CountUp = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Stat Card component
const StatCard = ({ number, suffix, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-tertiary p-6 rounded-2xl text-center min-w-[140px]"
  >
    <h3 className="text-[#915EFF] text-4xl sm:text-5xl font-bold mb-2">
      <CountUp end={number} suffix={suffix} />
    </h3>
    <p className="text-secondary text-sm sm:text-base">{label}</p>
  </motion.div>
);

// Helper function to calculate age
const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const age = calculateAge('2002-10-08');

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Mit {age} Jahren habe ich meine Lehre als Applikationsentwickler abgeschlossen und arbeite heute als Site Reliability Engineer bei der{' '}
        <a
          href="https://www.inventx.ch/"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Inventx AG
        </a>
        . Neben meiner Haupttätigkeit bin ich aktiver Daytrader und Co-Founder von{' '}
        <a
          href="https://alpinsignals.com"
          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Alpin Signals
        </a>{' '}
        — einer Trading-Community für ambitionierte Trader.
        <br />
        <br />
        <b>Site Reliability Engineering:</b> Überwachung, Wartung und Migration komplexer IT-Infrastrukturen. Automatisierung mit Ansible, Monitoring und Incident Response. Expertise in Linux, Docker, Kubernetes und Cloud-Infrastrukturen.
        <br />
        <br />
        <b>Trading:</b> Aktiver Daytrader mit Fokus auf US-Indizes (Nasdaq, S&P 500) und Gold. Trading-Stil basiert auf ICT/SMC-Konzepten — Liquidity Sweeps, Order Blocks, Fair Value Gaps.
        <br />
        <br />
        <b>Entrepreneurship:</b> Aufbau von Alpin Signals als Trading-Community mit automatisierten Marktanalysen, Telegram-Bot und Coaching-Angeboten.
      </motion.p>

      {/* Stats Cards */}
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        <StatCard number={5} suffix="+" label="Jahre Erfahrung" index={0} />
        <StatCard number={50} suffix="+" label="Projekte" index={1} />
        <StatCard number={10} suffix="+" label="Kunden" index={2} />
      </div>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
