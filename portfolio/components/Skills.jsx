import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.06] py-32"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Tools I use to
            <span className="text-zinc-500"> build.</span>
          </h2>

        </div>


        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (

            <div
              key={skill.name}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >

              <div className="flex items-center justify-between">

                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>

                <span className="text-xl text-zinc-600 transition group-hover:text-blue-500">
                  ↗
                </span>

              </div>


              <h3 className="mt-8 text-xl font-semibold">
                {skill.name}
              </h3>


              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {skill.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;