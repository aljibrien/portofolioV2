"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            <Link href="#" className="hover:text-red-400 transition">
              Beranda
            </Link>
          </li>
          <li>
            <Link href="#About" className="hover:text-red-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#Projects" className="hover:text-red-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#Contact" className="hover:text-red-400 transition">
              Contact
            </Link>
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
                <Link href="#" className="hover:text-red-400 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#About" className="hover:text-red-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#Projects"
                  className="hover:text-red-400 transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#Contact" className="hover:text-red-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
