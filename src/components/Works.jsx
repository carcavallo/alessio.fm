import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const isGitHub = source_code_link.includes('github.com');
  
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 sm:p-5 rounded-2xl sm:w-[360px] w-full group relative overflow-hidden"
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
          whileHover={{
            translateX: '200%',
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        />
        
        <div className="relative w-full h-[180px] sm:h-[230px] overflow-hidden rounded-2xl">
          <motion.img 
            src={image} 
            alt="project_image" 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              {isGitHub ? (
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              ) : (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 relative z-10">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-1.5 sm:mt-2 text-secondary text-[13px] sm:text-[14px]">{description}</p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
          {tags.map((tag) => (
            <motion.p 
              key={`${name}-${tag.name}`} 
              className={`text-[12px] sm:text-[14px] ${tag.color} px-2 py-0.5 sm:py-1 rounded relative`}
              whileHover={{ 
                scale: 1.05,
                textShadow: '0 0 8px rgba(14, 165, 233, 0.8)'
              }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hier sind einige meiner Projekte. Von Trading-Plattformen über Kunden-Websites bis zu Open-Source — jedes Projekt zeigt einen anderen Aspekt meiner Arbeit.
        </motion.p>
      </div>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-5 sm:gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');
