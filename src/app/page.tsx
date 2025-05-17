'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Full-screen hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold tracking-tight"
        >
          Schedule Scanner
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl mt-4 max-w-xl"
        >
          A smarter way to add shifts to your calendar. Just scan, tap, and done.
        </motion.p>
      </section>

      {/* Feature 1 */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-white text-black">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-left space-y-4"
        >
          <h2 className="text-4xl font-semibold">Name Detection</h2>
          <p>
            Just input your name and the app will find your shifts automatically from the list.
          </p>
        </motion.div>
        <motion.img
          src="/images/schedule-scan-example.png"
          alt="App screenshot"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-10 md:mt-0"
        />
      </section>

      {/* Feature 2 */}
      <section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-6 bg-gray-100 text-black">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-left space-y-4"
        >
          <h2 className="text-4xl font-semibold">Offline & Private</h2>
          <p>
            Everything is processed on your device. Nothing leaves your phone.
          </p>
        </motion.div>
        <motion.img
          src="/images/local-processing.png"
          alt="Privacy graphic"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:w-1/2 mt-10 md:mt-0"
        />
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to simplify your schedule?</h2>
        <a
          href="/support"
          className="bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-200 transition"
        >
          Get Support
        </a>
      </section>
    </main>
  );
}
