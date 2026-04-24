import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tertiary text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-gray-400">
          &copy; 2026 alessio.fm
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/carcavallo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://alpinsignals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Alpin Signals
          </a>
          <a
            href="mailto:me@alessio.fm"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
