function About() {
  return (
    <section
      id="about"
      className="relative border-t border-white/[0.06] py-32"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Designing with
              <span className="text-zinc-500"> purpose.</span>
            </h2>

          </div>


          <div>

            <p className="text-lg leading-8 text-zinc-400">
              I'm a third-year Computer Science student at Sripatum
              University with a strong interest in Front-End Development
              and UI/UX Design.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I enjoy creating interfaces that are not only visually
              appealing but also intuitive, responsive, and easy to use.
              I'm continuously improving my development skills through
              real-world projects and personal experiments.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;