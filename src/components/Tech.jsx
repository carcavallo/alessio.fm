import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-10">
      {technologies.map((technology, index) => (
        <motion.div
          key={technology.name}
          className="w-16 h-16 sm:w-28 sm:h-28 flex items-center justify-center relative group"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ scale: 1.15, y: -5 }}
          onHoverStart={() => setHoveredTech(index)}
          onHoverEnd={() => setHoveredTech(null)}
        >
          <div className="w-full h-full bg-tertiary rounded-xl flex items-center justify-center p-4 shadow-lg transition-all duration-300 relative overflow-hidden"
               style={{ boxShadow: hoveredTech === index ? '0 25px 50px -12px rgba(14, 165, 233, 0.5)' : undefined }}>
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ background: 'linear-gradient(to bottom right, rgba(14, 165, 233, 0.2), rgba(6, 182, 212, 0.2))' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredTech === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          
          {/* Tooltip - hidden on mobile */}
          <motion.div
            className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap pointer-events-none"
            style={{ backgroundColor: '#0EA5E9' }}
            initial={{ opacity: 0, y: -5 }}
            animate={{ 
              opacity: hoveredTech === index ? 1 : 0,
              y: hoveredTech === index ? 0 : -5
            }}
            transition={{ duration: 0.2 }}
          >
            {technology.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
