import { projects } from "@/data/projects";
import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white p-20 text-center">Project tidak ditemukan</div>
    );
  }

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      {/* glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[200px]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          href="/"
          className="inline-block mb-12 text-sm text-gray-400 hover:text-red-500 transition"
        >
          ← Kembali
        </Link>

        {/* Header */}
        <div className="mb-20">
          <p className="text-sm tracking-widest text-red-500 mb-3">
            FEATURED PROJECT
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>

          <p className="text-gray-400 max-w-2xl leading-relaxed">
            {project.desc}
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold mb-10">
            Project <span className="text-red-500">Preview</span>
          </h2>

          <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="min-w-[350px] md:min-w-[500px] snap-center rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                <img
                  src={img}
                  draggable="false"
                  className="w-full h-full object-contain pointer-events-none select-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech + Features */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-10">
            Tech & <span className="text-red-500">Features</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Features */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 text-red-500">
                Key Features
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.features?.map((f, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/10 hover:border-red-500/40 transition px-4 py-2 rounded-lg text-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 text-red-500">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-white/10 border border-white/10 hover:border-red-500/40 transition px-4 py-2 rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
