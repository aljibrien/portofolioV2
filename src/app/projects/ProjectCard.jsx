"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, image }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md 
                 rounded-2xl overflow-hidden shadow-lg 
                 hover:border-red-500/40 transition-all"
    >
      <div className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-52 object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}
