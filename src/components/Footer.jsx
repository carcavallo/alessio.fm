import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6 mt-10">
      <motion.div variants={textVariant()} className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} alessio.fm - All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="mailto:alessio@alessio.fm" className="text-secondary hover:text-gray-400">Contact</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
