"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 left-0 w-full z-50 px-6">
      <nav
        className="max-w-6xl mx-auto backdrop-blur-md bg-black/50 
                      border border-white/20 text-white 
                      px-6 py-3 rounded-2xl 
                      flex justify-between items-center"
      >
        <h1 className="font-bold text-lg tracking-wide">
          <span className="text-red-500">AL</span>.dev
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
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

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 max-w-6xl mx-auto
                       backdrop-blur-md bg-black/70 
                       border border-white/20
                       rounded-2xl px-6 py-6"
          >
            <ul className="flex flex-col gap-6 text-center text-sm">
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
