function Contact() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>


      {/* Contact */}
      <section className="relative flex min-h-screen items-center px-6 pt-24">

        <div className="mx-auto w-full max-w-6xl">

          {/* Header */}
          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              Contact
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Let's build
              <span className="block text-zinc-500">
                something great.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              I'm currently looking for internship opportunities in
              Front-End Development. If you'd like to discuss a project,
              opportunity, or just say hello, feel free to reach out.
            </p>

          </div>


          {/* Contact Grid */}
          <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">


            {/* Contact Information */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8">

              <p className="text-sm text-zinc-500">
                Get in touch
              </p>

              <div className="mt-8 space-y-6">

                {/* Email */}
                <a
                  href="mailto:your-email@example.com"
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Email
                  </p>

                  <p className="mt-2 text-lg font-medium text-zinc-200 transition group-hover:text-blue-400">
                    your-email@example.com
                  </p>
                </a>


                {/* GitHub */}
                <a
                  href="https://github.com/ThanapoomWi"
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    GitHub
                  </p>

                  <p className="mt-2 text-lg font-medium text-zinc-200 transition group-hover:text-blue-400">
                    github.com/ThanapoomWi
                  </p>
                </a>


                {/* Location */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Location
                  </p>

                  <p className="mt-2 text-lg font-medium text-zinc-200">
                    Bangkok, Thailand
                  </p>
                </div>

              </div>


              {/* Status */}
              <div className="mt-10 flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/[0.05] px-4 py-3">

                <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />

                <span className="text-sm text-zinc-400">
                  Available for internship
                </span>

              </div>

            </div>


            {/* Contact Form */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8">

              <form className="space-y-6">

                {/* Name */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/50 focus:bg-white/[0.05]"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/50 focus:bg-white/[0.05]"
                  />

                </div>


                {/* Subject */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Internship opportunity"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/50 focus:bg-white/[0.05]"
                  />

                </div>


                {/* Message */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/50 focus:bg-white/[0.05]"
                  />

                </div>


                {/* Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  Send Message

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;