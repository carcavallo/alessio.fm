import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const isDesktop = window.innerWidth >= 1024;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${
          styles.paddingX
        } flex ${isDesktop ? "flex-row" : "flex-col"} items-${
          isDesktop ? "start" : "center"
        } gap-5`}
      >
        {isDesktop && (
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 violet-gradient" />
          </div>
        )}

        <div>
          <h1
            className={`${styles.heroHeadText} text-white text-center ${
              isDesktop ? "" : "mb-4"
            }`}
          >
            <span className="text-[#915EFF]">Alessio Carcavallo</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            Always thinking about improvement
          </p>
        </div>
      </div>

      {isDesktop && <ComputersCanvas />}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
