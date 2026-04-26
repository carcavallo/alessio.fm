import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { offerings } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, description, features, price, cta }) => {
  const handleClick = (e) => {
    if (cta.link.startsWith('#contact')) {
      e.preventDefault();
      // Extract service name from the title
      window.dispatchEvent(new CustomEvent('selectService', { detail: { service: title } }));
      // Smooth scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full group"
    >
      {/* Gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
          padding: '2px',
          background: 'linear-gradient(to bottom right, #0EA5E9, #06B6D4)'
        }}
      />
      
      <div 
        className="relative bg-tertiary p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.03) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      >
        <div>
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] md:text-[22px] mb-2 sm:mb-3">{title}</h3>
          <p className="text-secondary text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-4 sm:mb-5">{description}</p>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            {features.map((feature, i) => (
              <li key={i} className="text-[11px] sm:text-[12px] md:text-[13px] text-white bg-black-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          {price && (
            <motion.p 
              className="font-bold text-[15px] sm:text-[16px] md:text-[17px] mb-3 sm:mb-4"
              style={{ color: '#0EA5E9' }}
              animate={{
                textShadow: [
                  '0 0 0px rgba(14, 165, 233, 0)',
                  '0 0 12px rgba(14, 165, 233, 0.6)',
                  '0 0 0px rgba(14, 165, 233, 0)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {price}
            </motion.p>
          )}
          <a
            href={cta.link}
            onClick={handleClick}
            {...(cta.link.startsWith('mailto:') || cta.link.startsWith('#') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
            className="inline-block bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold px-5 sm:px-6 py-2.5 rounded-lg transition-all duration-300 text-[14px] sm:text-[15px] hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(14, 165, 233, 0.5)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
          >
            {cta.text} →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

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

      <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 justify-center">
        {offerings.map((offering, index) => (
          <ServiceCard key={offering.title} index={index} {...offering} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
