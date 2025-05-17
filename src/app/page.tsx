'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [colorMode, setColorMode] = useState<'normal' | 'colorblind'>('normal');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.classList.toggle('colorblind', colorMode === 'colorblind');
  }, [isDark, colorMode]);

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth text-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
      <Navbar
        isDark={isDark}
        colorMode={colorMode}
        onDarkToggle={() => setIsDark(!isDark)}
        onColorBlindToggle={() =>
          setColorMode((prev) => (prev === 'normal' ? 'colorblind' : 'normal'))
        }
      />

      <div className={colorMode === 'colorblind' ? 'colorblind-affected' : ''}>
        {/* HERO SECTION */}
        <section className="h-screen snap-start flex flex-col justify-center items-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold mb-4 text-[clamp(2.5rem,8vw,4rem)] leading-tight max-w-3xl"
          >
            Schedule Scanner
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[clamp(1rem,3vw,1.5rem)] max-w-xl"
          >
            Instantly scan and convert your work schedule into calendar events.
          </motion.p>
        </section>

        {/* FEATURES */}
        <section className="h-screen snap-start flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gray-50 dark:bg-neutral-900">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-left"
          >
            <h2 className="text-3xl font-semibold mb-2">🧍 Name Matching</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Enter your name — the app finds and extracts your shifts for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-left"
          >
            <h2 className="text-3xl font-semibold mb-2">📸 Smart Image Scanning</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Upload or share a screenshot of your schedule — our AI handles the rest.
            </p>
          </motion.div>
        </section>

        {/* PRIVACY SECTION */}
        <section className="h-screen snap-start flex flex-col justify-center items-center px-6 bg-white dark:bg-black text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2rem,5vw,3rem)] font-bold leading-tight mb-4"
          >
            Your Privacy Comes First
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl text-gray-700 dark:text-gray-300 mb-6"
          >
            Everything you scan stays on your device. No data is sent, stored, or tracked.
            Privacy is built into the core of Schedule Scanner.
          </motion.p>

          <a
            href="/privacy"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl text-lg hover:opacity-80 transition"
          >
            View Privacy Policy
          </a>
        </section>


        {/* CALL TO ACTION */}
        <section className="min-h-[80vh] snap-start flex flex-col items-center justify-center px-6 bg-white dark:bg-black">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-semibold mb-6"
          >
            Get Started with Schedule Scanner
          </motion.h2>

          <a
            href="/support"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-xl text-lg hover:opacity-80 transition"
          >
            Visit Support Page
          </a>
        </section>
      </div>
      {/* FOOTER (no snap, minimal height) */}
      <footer className="snap-none text-center py-6 text-sm text-gray-500 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Schedule Scanner. All rights reserved.
      </footer>
      
    </main>
  );
}