import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

// ตั้งค่า Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Projects() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="min-h-screen bg-[#08090d] text-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-blue-500/[0.06] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            project
          </div>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Selected
            <span className="text-zinc-500"> Projects.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
            รวมผลงานที่ผมนำทักษะด้าน development, UI/UX Design มาประยุกต์ใช้
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.article
                variants={fadeInUp}
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
              >
                {/* Preview Image / Placeholder */}
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)]" />

                  {/* Grid Pattern */}
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

                  <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium backdrop-blur-xl transition-colors group-hover:border-blue-500/30 group-hover:text-blue-300">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-center gap-6">
                    <div>
                      <p className="text-sm font-medium text-zinc-500">
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-zinc-100 transition-colors group-hover:text-white">
                        {project.title}
                      </h2>
                    </div>

                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={`${project.title}-${tech.label}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs transition-colors group-hover:bg-blue-500/10 group-hover:text-blue-400"
                        >
                          <span>{Icon && <Icon className="text-sm" />}</span> {/* เรนเดอร์เป็น Component */}
                          <span>{tech.label}</span>
                        </span>
                      );
                    })}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/repository mt-8 inline-flex items-center gap-2 self-start rounded-2xl bg-blue-900 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-blue-800 hover:text-blue-400"
                  >
                    View Repository
                    <span className="transition-transform group-hover/repository:translate-x-1">
                      →
                    </span>
                  </a>

                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/[0.06] py-28 relative overflow-hidden">
        {/* CTA Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Let&apos;s Connect
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Click the button below to get in touch
          </h2>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 hover:shadow-blue-500/40"
          >
            Contact Me
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}

export default Projects;