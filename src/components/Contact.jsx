"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="Contact"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Punya ide, proyek, atau kolaborasi? Kirim pesan dan kita diskusi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Let's Build Something Great
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Saya terbuka untuk proyek freelance, kolaborasi, atau diskusi
              terkait pengembangan web modern.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: aljibriengemilang@gmail.com</p>
              <p>Location: Indonesia</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-white/5 border border-white/10 
                       rounded-3xl p-10 backdrop-blur-md space-y-6"
          >
            <div className="absolute inset-0 bg-red-600/5 blur-2xl rounded-3xl pointer-events-none" />

            <div className="relative">
              <label className="block text-sm mb-2 text-gray-400">Name</label>
              <input
                type="text"
                className="w-full bg-black/50 border border-white/10 
                           rounded-xl px-4 py-3 text-sm 
                           focus:outline-none focus:border-red-500/60 
                           transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-gray-400">Email</label>
              <input
                type="email"
                className="w-full bg-black/50 border border-white/10 
                           rounded-xl px-4 py-3 text-sm 
                           focus:outline-none focus:border-red-500/60 
                           transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2 text-gray-400">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full bg-black/50 border border-white/10 
                           rounded-xl px-4 py-3 text-sm 
                           focus:outline-none focus:border-red-500/60 
                           transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-500 
                         transition text-white py-3 rounded-xl 
                         text-sm font-semibold"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
