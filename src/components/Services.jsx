import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { offerings } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, features, price, cta }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-tertiary p-6 sm:p-8 rounded-2xl sm:w-[360px] w-full flex flex-col justify-between"
  >
    <div>
      <h3 className="text-white font-bold text-[20px] sm:text-[22px] mb-3">{title}</h3>
      <p className="text-secondary text-[14px] sm:text-[15px] leading-[24px] sm:leading-[26px] mb-5">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-5">
        {features.map((feature, i) => (
          <li key={i} className="text-[12px] sm:text-[13px] text-white bg-black-100 px-3 py-1.5 rounded-full">
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div>
      {price && (
        <p className="text-[#915EFF] font-semibold text-[14px] sm:text-[15px] mb-4">{price}</p>
      )}
      <a
        href={cta.link}
        {...(cta.link.startsWith('mailto:') || cta.link.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        className="inline-block bg-[#915EFF] hover:bg-[#7a4de0] text-white font-medium px-5 sm:px-6 py-2.5 rounded-lg transition-all duration-300 text-[13px] sm:text-[14px]"
      >
        {cta.text} →
      </a>
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

      <p className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]">
        Von der einfachen Website bis zur komplexen Applikation, vom IT-Support bis zum Trading-Coaching — ich biete massgeschneiderte Lösungen für jedes Budget.
      </p>

      <div className="mt-10 sm:mt-16 flex flex-wrap gap-6 sm:gap-8 justify-center">
        {offerings.map((offering, index) => (
          <ServiceCard key={offering.title} index={index} {...offering} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
