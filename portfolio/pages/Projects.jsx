import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    image: "",
    github: "https://github.com/ThanapoomWi/e-commerce",
    category: "E-COMMERCE",
    title: "Gaming Gear E-Commerce",
    description:
      "A modern e-commerce platform for gaming gear with product management, shopping cart, promotions, payment features, and role-based access control.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    number: "02",
    image: "",
    github: "https://github.com/ThanapoomWi/posmain",
    category: "DASHBOARD",
    title: "Towing Service Dashboard",
    description:
      "A dashboard designed for managing towing service operations and presenting important information through a clean and intuitive interface.",
    tech: ["React", "Tailwind CSS", "Chart"],
  },
  {
    number: "03",
    image: "",
    github: "https://github.com/ThanapoomWi/projectza",
    category: "AI / RAG",
    title: "NongPlaChatBot",
    description:
      "A freshwater fisheries information chatbot using RAG to help users access accurate knowledge through a conversational interface.",
    tech: ["RAG", "n8n", "Supabase", "LINE"],
  },
];

function Projects() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen bg-[#08090d] text-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-24">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
            My Work
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Selected
            <span className="text-zinc-500"> Projects.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
            A collection of projects where I explored Front-End Development,
            UI/UX Design, dashboards, e-commerce systems, and AI-powered
            applications.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Preview */}
                <div
                  className={`relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent ${
                    index === 0 ? "h-72" : "h-60"
                  }`}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)]" />

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />

                  <span className="absolute bottom-4 left-6 text-8xl font-bold text-white/[0.04]">
                    {project.number}
                  </span>

                  <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm text-zinc-600">
                        PROJECT {project.number}
                      </p>

                      <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                        {project.title}
                      </h2>
                    </div>

                    <span className="hidden text-2xl text-zinc-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500 sm:block">
                      ↗
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-500 md:text-base">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-blue-400"
                  >
                    View Project
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            Have a project in mind?
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Let's build something
            <span className="text-zinc-500"> great.</span>
          </h2>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200"
          >
            Contact Me
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </motion.main>
  );
}

export default Projects;
