import { motion } from "framer-motion";
import projects from "../data/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function Projects() {
  return (
    <section id="projects" className="border-t border-white/[0.06] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Projects
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Selected work.
            </h2>
          </div>

          <p className="max-w-md text-zinc-500">
            รวมผลงานที่ผมนำทักษะด้าน development, UI/UX และการแก้ปัญหา
            มาประยุกต์ใช้เพื่อสร้างประสบการณ์การใช้งานที่ดี
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeInUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
            >
              <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                )}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)]" />

                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />

                <span className="absolute bottom-4 left-6 text-8xl font-bold text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl transition-colors group-hover:border-blue-500/30 group-hover:text-blue-300">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-sm font-medium text-zinc-500">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-zinc-100 transition-colors group-hover:text-white">
                  {project.title}
                </h3>

                <p className="mt-5 flex-1 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400 transition-colors group-hover:bg-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="group/button mt-8 inline-flex items-center gap-2 self-start rounded-2xl bg-blue-900 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-blue-800 hover:text-blue-400">
                  View Project
                  <span className="transition-transform group-hover/button:translate-x-1">→</span>
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
