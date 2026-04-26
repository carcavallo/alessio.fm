import { motion } from 'framer-motion';
import { styles } from '../styles';
import { logoAC } from '../assets';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Site Reliability Engineer', 'Daytrader', 'Co-Founder Alpin Signals'];
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  // Floating particles configuration
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(145, 94, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(145, 94, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, #915EFF 0%, transparent 60%)',
              'radial-gradient(circle at 80% 70%, #915EFF 0%, transparent 60%)',
              'radial-gradient(circle at 40% 90%, #915EFF 0%, transparent 60%)',
              'radial-gradient(circle at 90% 20%, #915EFF 0%, transparent 60%)',
              'radial-gradient(circle at 20% 30%, #915EFF 0%, transparent 60%)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/40 rounded-full"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main Content - properly centered */}
      <div className={`relative h-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-center z-10 pb-20`}>
        <motion.img
          src={logoAC}
          alt="AC"
          className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="font-black text-white text-center text-[32px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] leading-tight mb-2 sm:mb-4 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow effect behind text */}
          <span className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-purple-600 to-pink-600" />
          <span className="relative text-[#BEBEBE] hover:text-[#915EFF] transition-colors duration-300">
            Alessio Carcavallo
          </span>
        </motion.h1>

        <motion.div
          className="text-[#dfd9ff] font-medium text-center text-[14px] xs:text-[16px] sm:text-[20px] lg:text-[26px] leading-snug mb-6 sm:mb-8 max-w-2xl min-h-[32px] sm:min-h-[40px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {displayedText}
          <motion.span
            className="inline-block w-0.5 h-5 sm:h-7 bg-purple-500 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="https://github.com/carcavallo" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="hidden sm:inline text-[14px]">GitHub</span>
          </a>
          <a href="https://alpinsignals.com" target="_blank" rel="noopener noreferrer"
             className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span className="hidden sm:inline text-[14px]">Alpin Signals</span>
          </a>
          <a href="mailto:contact@alessio.fm"
             className="text-white hover:text-[#915EFF] transition-colors duration-300 flex items-center gap-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span className="hidden sm:inline text-[14px]">Email</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow - fixed at bottom */}
      <div className="absolute bottom-6 sm:bottom-10 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
