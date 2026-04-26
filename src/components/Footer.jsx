import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-tertiary text-white py-4 sm:py-6 mt-8 sm:mt-10">
      {/* Gradient divider line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6">
        <p className="text-xs sm:text-sm text-gray-400">
          &copy; 2026 alessio.fm
        </p>

        <div className="flex gap-4 sm:gap-6 mt-3 md:mt-0">
          <a
            href="https://github.com/carcavallo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 relative group text-xs sm:text-sm"
          >
            GitHub
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="https://alpinsignals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300 relative group text-xs sm:text-sm"
          >
            Alpin Signals
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
          <a
            href="mailto:contact@alessio.fm"
            className="text-gray-400 hover:text-white transition-colors duration-300 relative group text-xs sm:text-sm"
          >
            Email
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
