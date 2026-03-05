import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
      >
        <img src={project.images[0]} className="w-full h-52 object-cover" />

        <div className="p-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
        </div>
      </motion.div>
    </Link>
  );
}
