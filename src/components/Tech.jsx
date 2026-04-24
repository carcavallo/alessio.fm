import React from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className="w-28 h-28 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <div className="w-full h-full bg-tertiary rounded-xl flex items-center justify-center p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
              title={technology.name}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
