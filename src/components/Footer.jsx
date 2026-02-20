"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="relative bg-black text-white border-t border-white/10 py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 text-center md:text-left"
        >
          <div>
            <h3 className="text-xl font-bold tracking-wide">
              <span className="text-red-500">AL</span>.dev
            </h3>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Web developer fokus pada aplikasi modern, scalable, dan clean
              architecture.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection("Beranda")}
                  className="hover:text-red-400 transition cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("About")}
                  className="hover:text-red-400 transition cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Projects")}
                  className="hover:text-red-400 transition cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("Contact")}
                  className="hover:text-red-400 transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Connect
            </h4>
            <div className="flex justify-center md:justify-start gap-6 text-gray-400 text-sm">
              <span className="hover:text-red-400 transition cursor-pointer">
                GitHub
              </span>
              <span className="hover:text-red-400 transition cursor-pointer">
                Email
              </span>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} AL. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
