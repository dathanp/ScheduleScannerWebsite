'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({
  isDark,
  onDarkToggle,
  onColorBlindToggle,
}: {
  isDark: boolean;
  onDarkToggle: () => void;
  onColorBlindToggle: () => void;
}) {
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(currentScrollY < scrollY || currentScrollY < 10);
      setScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur shadow-md px-6 py-3 flex justify-between items-center transition duration-300"
    >
      <h1 className="text-xl font-bold">Schedule Scanner</h1>
      <div className="flex space-x-3 items-center">
        {/* Light/Dark Toggle */}
        <div className="flex items-center space-x-2 bg-white dark:bg-black px-2 py-1 rounded">
          <span className="text-sm">Light</span>
          <button
            onClick={() => {
              onDarkToggle();
            }}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              isDark ? 'bg-gray-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isDark ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="text-sm">Dark</span>
        </div>

        {/* Colorblind Toggle */}
        <button
          onClick={onColorBlindToggle}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded text-sm"
        >
          Color Mode
        </button>
      </div>
    </motion.nav>
  );
}