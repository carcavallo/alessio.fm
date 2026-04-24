import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { offerings } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, features, price, cta }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.3, 0.75)}
    className="bg-tertiary p-8 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between"
  >
    <div>
      <h3 className="text-white font-bold text-[22px] mb-3">{title}</h3>
      <p className="text-secondary text-[15px] leading-[26px] mb-5">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-5">
        {features.map((feature, i) => (
          <li key={i} className="text-[13px] text-white bg-black-100 px-3 py-1.5 rounded-full">
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div>
      {price && (
        <p className="text-[#915EFF] font-semibold text-[15px] mb-4">{price}</p>
      )}
      {cta.link.startsWith('mailto:') || cta.link.startsWith('#') ? (
        <a href={cta.link} className="inline-block bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 text-[14px]">
          {cta.text} →
        </a>
      ) : (
        <a href={cta.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 text-[14px]">
          {cta.text} →
        </a>
      )}
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Was ich anbiete</p>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Von der einfachen Website bis zur komplexen Applikation, vom IT-Support bis zum Trading-Coaching — ich biete massgeschneiderte Lösungen für jedes Budget.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {offerings.map((offering, index) => (
          <ServiceCard key={offering.title} index={index} {...offering} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
