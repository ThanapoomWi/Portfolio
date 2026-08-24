import heroImg from "../src/assets/poom.jpg";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">

        {/* Hero Text */}
        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">

            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />

            Available for Internship

          </div>


          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
            Front-End Developer
          </p>


          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

            I build

            <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              digital experiences.
            </span>

          </h1>


          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            I'm Thanapoom, a Computer Science student passionate about
            Front-End Development and UI/UX Design. I enjoy turning ideas
            into clean, responsive, and meaningful digital experiences.
          </p>


          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="group rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200"
            >
              View My Work

              <span className="ml-2 inline-block transition group-hover:translate-x-1">
                →
              </span>

            </a>


            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Contact Me
            </a>

          </div>


          {/* Social */}
          <div className="mt-10 flex items-center gap-5 text-sm text-zinc-500">

            <a
              href="https://github.com/ThanapoomWi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span>
              Bangkok, Thailand
            </span>

          </div>

        </div>


        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-md">

          <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-3 shadow-2xl">

            <div className="overflow-hidden rounded-[1.5rem] bg-zinc-900">

              <img
                src={heroImg}
                alt="Thanapoom"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </div>


          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-8 hidden rounded-2xl border border-white/10 bg-[#101116]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">

            <p className="text-xs text-zinc-500">
              Focus
            </p>

            <p className="mt-1 font-semibold">
              UI / UX + Front-End
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;