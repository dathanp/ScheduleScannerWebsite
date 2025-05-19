'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Navbar({
  isDark,
  colorMode,
  onDarkToggle,
  onColorBlindToggle,
}: {
  isDark: boolean;
  colorMode: 'normal' | 'colorblind';
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
      className="no-colorblind fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur shadow-md px-6 py-3 flex justify-between items-center transition duration-300"
    >
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold">Sched Scan</h1>
        <nav className="hidden md:flex space-x-4 text-sm font-medium">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
          <Link href="/support" className="text-gray-700 dark:text-gray-200 hover:underline">Support</Link>
          <Link href="/privacy" className="text-gray-700 dark:text-gray-200 hover:underline">Privacy</Link>
        </nav>
      </div>

      <div className="flex space-x-3 items-center">
        {/* Light/Dark Toggle */}
        <div className="flex items-center space-x-2 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-black">
          <span className="text-sm">Light</span>
          <button
            onClick={onDarkToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              isDark ? 'bg-neutral-700' : 'bg-neutral-400'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white border border-gray-400 transition-transform ${
                isDark ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="text-sm">Dark</span>
        </div>

        {/* Colorblind Toggle */}
        <button
          onClick={onColorBlindToggle}
          className={`px-3 py-1 rounded text-sm border transition ${
            colorMode === 'colorblind'
              ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
              : 'bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600'
          }`}
        >
          Grey Scale
        </button>

      </div>
    </motion.nav>
  );
}
