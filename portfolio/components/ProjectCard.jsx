function ProjectCard({ project, index }) {
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-blue-500/30"
    >

      {/* Project Preview */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />

        <span className="relative text-6xl font-bold text-white/[0.05]">
          0{index + 1}
        </span>

        <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
          {project.category}
        </div>

      </div>


      {/* Project Content */}
      <div className="flex flex-1 flex-col p-7">

        <h3 className="text-2xl font-semibold">
          {project.title}
        </h3>


        <p className="mt-4 flex-1 text-sm leading-7 text-zinc-500">
          {project.description}
        </p>


        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500"
            >
              {tech}
            </span>

          ))}

        </div>


        <button className="mt-7 flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-blue-400">

          View Project

          <span className="transition group-hover:translate-x-1">
            →
          </span>

        </button>

      </div>

    </article>
  );
}

export default ProjectCard;