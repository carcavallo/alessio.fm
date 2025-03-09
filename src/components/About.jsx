import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const age = calculateAge("2002-10-08");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Mit {age} Jahren habe ich erfolgreich meine Lehre als Applikationsentwickler abgeschlossen, wertvolle Berufserfahrung gesammelt und meine Leidenschaften als Musikproduzent, Softwareentwickler und Systemtechniker vereint.
        <br />
        <br />
        <b>Softwareentwicklung:</b> Fundierte Kenntnisse in TypeScript, JavaScript und Frameworks wie React. Erfahrungen in der Backend-Entwicklung mit PHP, APIs und Webservices ermöglichen mir, innovative IT-Lösungen zu schaffen.
        <br />
        <br />
        <b>Systemtechnik & Site Reliability Engineering:</b> Expertise in der Netzwerk- und Serveradministration mit Fokus auf Linux-Systeme wie Ubuntu, Debian und Arch Linux. Tiefgehendes Wissen zu Protokollen und IT-Infrastrukturen. 
        Als Site Reliability Engineer bei der <a href="https://www.inventx.ch/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Inventx AG</a> überwache, warte und migriere ich komplexe Systeme und Infrastrukturen. Zudem automatisiere ich Prozesse mit Ansible, um Effizienz und Zuverlässigkeit zu gewährleisten.
        <br />
        <br />
        Mein Ehrgeiz und meine schnelle Auffassungsgabe helfen mir, mich rasch in neue Herausforderungen einzuarbeiten. Ich arbeite gerne mit Kunden zusammen, um individuelle Lösungen zu gestalten.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
