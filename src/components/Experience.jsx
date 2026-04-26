import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a href={experience.company_link} target="_blank" rel="noopener noreferrer">
          <motion.div 
            className="flex justify-center items-center w-full h-full"
            whileHover={{ scale: 1.15 }}
            transition={{ scale: { duration: 0.3 } }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </motion.div>
        </a>
      }
    >
      <div>
        <h3 className="text-white text-[20px] sm:text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[14px] sm:text-[16px] font-semibold" style={{ margin: 0 }}>
          <a href={experience.company_link} target="_blank" rel="noopener noreferrer">
            {experience.company_name}
          </a>
        </p>
      </div>

      <ul className="mt-4 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            key={`experience-point-${index}`}
            className="text-white-100 text-[13px] sm:text-[14px] pl-1 tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
      </motion.div>

      <div className="mt-10 sm:mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
