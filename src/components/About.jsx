"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-red-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Developer yang fokus pada performa, struktur, dan scalability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              Saya membangun aplikasi web modern yang cepat dan terstruktur.
              Fokus pada clean architecture dan pengalaman pengguna yang
              optimal.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Menggunakan teknologi seperti Next.js dan Laravel untuk
              menciptakan solusi digital profesional dan scalable.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-red-600/10 blur-2xl rounded-3xl group-hover:blur-3xl transition" />

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Skills & Stack
              </h3>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  Next.js
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  React
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  Laravel
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  CodeIgniter 4
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  Python
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  Bootstrap
                </div>
                <div className="bg-white/5 p-3 rounded-xl text-center">
                  Tailwind
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
