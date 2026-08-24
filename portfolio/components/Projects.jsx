import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/[0.06] py-32"
    >

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
            A selection of projects where I applied development,
            UI/UX, and problem-solving skills.
          </p>

        </div>


        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {projects.map((project, index) => (

            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;