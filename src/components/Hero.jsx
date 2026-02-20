"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage(2);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Beranda"
      className="relative min-h-screen pt-12 md:pt-0 bg-black text-white flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[160px]" />
      </div>

      <AnimatePresence mode="wait">
        {stage === 1 && (
          <motion.div
            key="stage1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full flex justify-center items-center"
          >
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="text-5xl md:text-7xl font-bold text-center"
            >
              Hi, I'm <span className="text-red-500">AL</span>
            </motion.h1>
          </motion.div>
        )}

        {stage === 2 && (
          <motion.div
            key="stage2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-red-500">AL</span>
              </h1>

              <p className="mt-6 text-gray-400 text-base md:text-lg max-w-lg mx-auto md:mx-0">
                Membangun aplikasi web yang cepat, scalable, dan clean. Fokus
                pada struktur kode yang rapi dan solusi yang sustainable.
              </p>

              <div className="mt-8 flex justify-center md:justify-start gap-3">
                <button className="px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base bg-red-600 hover:bg-red-700 transition rounded-lg font-medium">
                  <Link href="#Projects">Lihat Project</Link>
                </button>

                <button className="px-3 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base border border-gray-600 hover:border-red-500 hover:text-red-500 transition rounded-lg font-medium">
                  <Link href="#Contact">Hubungi Saya</Link>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="order-1 md:order-2 lex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full scale-110" />
                <Image
                  src="/foto.png"
                  alt="profile"
                  width={400}
                  height={400}
                  className="relative w-48 sm:w-56 md:w-64 lg:w-72 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
