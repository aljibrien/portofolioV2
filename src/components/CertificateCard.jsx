"use client";

import { motion } from "framer-motion";

export default function CertificateCard({ title, issuer, year, image }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 rounded-2xl 
                 overflow-hidden backdrop-blur-md 
                 hover:border-red-500/40 transition-all"
    >
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{issuer}</p>
        <p className="text-gray-500 text-xs mt-2">{year}</p>
      </div>
    </motion.div>
  );
}
