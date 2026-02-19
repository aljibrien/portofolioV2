"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/app/projects/ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="Projects"
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[200px]" />
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
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Beberapa project terbaik yang saya bangun dengan fokus pada
            performa, struktur, dan pengalaman pengguna. (malaska screenshot)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <ProjectCard
            title="Warung Rara"
            desc="Website manajemen warung modern berbasis Next.js & Supabase."
            image="/project1.png"
          />
          <ProjectCard
            title="E-Learning Platform"
            desc="Sistem pembelajaran berbasis Laravel dan Blade."
            image="/file.svg"
          />
          <ProjectCard
            title="SIM-SARPARS"
            desc="Sistem Manajemen Barang berbasis Codeigniter 4"
            image="/project3.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}
