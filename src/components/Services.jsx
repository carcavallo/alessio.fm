import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { offerings } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, features, cta }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className="bg-tertiary p-8 rounded-2xl sm:w-[480px] w-full"
  >
    <h3 className="text-white font-bold text-[24px] mb-4">{title}</h3>
    <p className="text-secondary text-[16px] leading-[28px] mb-6">{description}</p>
    <ul className="flex flex-wrap gap-2 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="text-[14px] text-white bg-black-100 px-4 py-2 rounded-full">
          {feature}
        </li>
      ))}
    </ul>
    {cta.link.startsWith('#') ? (
      <a href={cta.link} className="text-[#915EFF] font-medium hover:text-white transition-colors duration-300">
        {cta.text} →
      </a>
    ) : (
      <a href={cta.link} target="_blank" rel="noopener noreferrer" className="text-[#915EFF] font-medium hover:text-white transition-colors duration-300">
        {cta.text} →
      </a>
    )}
  </motion.div>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Was ich anbiete</p>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {offerings.map((offering, index) => (
          <ServiceCard key={offering.title} index={index} {...offering} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
