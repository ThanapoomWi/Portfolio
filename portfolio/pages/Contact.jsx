import { Link } from "react-router-dom";

function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "your-email@example.com",
      description: "Best way to reach me",
      href: "mailto:your-email@example.com",
    },
    {
      label: "GitHub",
      value: "github.com/ThanapoomWi",
      description: "View my projects & code",
      href: "https://github.com/ThanapoomWi",
    },
    {
      label: "Location",
      value: "Bangkok, Thailand",
      description: "Based in Thailand",
      href: "#",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Front-End Development",
      description:
        "Building responsive and modern web interfaces using React, JavaScript, Tailwind CSS, and modern development practices.",
    },
    {
      number: "02",
      title: "UI / UX Design",
      description:
        "Creating clean, intuitive, and user-focused interfaces with attention to usability, layout, and visual consistency.",
    },
    {
      number: "03",
      title: "Web Applications",
      description:
        "Developing practical web applications and connecting frontend interfaces with REST APIs and backend services.",
    },
  ];

  const faqs = [
    {
      question: "Are you currently available for an internship?",
      answer:
        "Yes. I'm currently looking for internship opportunities where I can improve my Front-End Development skills and contribute to real-world projects.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "My main technologies include React, JavaScript, Tailwind CSS, HTML, CSS, REST API, Git, Node.js, and MySQL.",
    },
    {
      question: "Can you work with an existing project?",
      answer:
        "Yes. I'm comfortable learning an existing codebase, understanding the project structure, and contributing to new features or UI improvements.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact me through the email listed on this page or connect with me through GitHub.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]" />

        <div className="absolute bottom-0 left-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-white/[0.06] pt-32">

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-28">

          <div className="max-w-4xl">

            {/* Small label */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-blue-500" />

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
                Contact
              </p>

            </div>


            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">

              Let's start a

              <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                conversation.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">

              Whether you're looking for a Front-End Developer intern,
              want to discuss a project, or simply want to connect,
              I'd love to hear from you.

            </p>


            {/* Status */}
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-green-500/10 bg-green-500/[0.05] px-4 py-2.5">

              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />

              </span>

              <span className="text-sm text-zinc-400">
                Available for internship opportunities
              </span>

            </div>

          </div>


          {/* Bottom stats */}
          <div className="mt-20 grid border-y border-white/[0.06] sm:grid-cols-3">

            <div className="border-b border-white/[0.06] py-7 sm:border-b-0 sm:border-r sm:pr-8">

              <p className="text-3xl font-bold">
                3rd
              </p>

              <p className="mt-1 text-sm text-zinc-600">
                Year Computer Science Student
              </p>

            </div>


            <div className="border-b border-white/[0.06] py-7 sm:border-b-0 sm:px-8 sm:border-r">

              <p className="text-3xl font-bold">
                UI + Code
              </p>

              <p className="mt-1 text-sm text-zinc-600">
                Design & Development
              </p>

            </div>


            <div className="py-7 sm:pl-8">

              <p className="text-3xl font-bold">
                Thailand
              </p>

              <p className="mt-1 text-sm text-zinc-600">
                Based in Bangkok
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT INFORMATION + FORM
      ===================================================== */}

      <section className="border-b border-white/[0.06] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">


            {/* LEFT */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Get in touch
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Have a project
                <span className="block text-zinc-500">
                  in mind?
                </span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-zinc-500">
                I'm always interested in learning about new projects,
                internship opportunities, and people working on interesting
                ideas.
              </p>


              {/* Contact Cards */}
              <div className="mt-10 space-y-3">

                {contactItems.map((item) => (

                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "GitHub" ? "_blank" : undefined}
                    rel={item.label === "GitHub" ? "noreferrer" : undefined}
                    className="group block rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs uppercase tracking-widest text-zinc-600">
                          {item.label}
                        </p>

                        <p className="mt-2 font-medium text-zinc-200 transition group-hover:text-blue-400">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs text-zinc-600">
                          {item.description}
                        </p>

                      </div>

                      <span className="text-xl text-zinc-600 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                        ↗
                      </span>

                    </div>

                  </a>

                ))}

              </div>

            </div>


            {/* RIGHT FORM */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">

              <div className="mb-8">

                <p className="text-sm font-medium text-zinc-300">
                  Send me a message
                </p>

                <p className="mt-1 text-sm text-zinc-600">
                  I'll get back to you as soon as possible.
                </p>

              </div>


              <form className="space-y-6">

                {/* Name */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/50 focus:bg-white/[0.03]"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/50 focus:bg-white/[0.03]"
                  />

                </div>


                {/* Subject */}
                <div>

                  <label className="mb-2 block text-sm text-zinc-400">
                    Subject
                  </label>

                  <select
                    className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b0c11] px-4 py-3.5 text-sm text-zinc-400 outline-none transition focus:border-blue-500/50"
                  >

                    <option>
                      Internship Opportunity
                    </option>

                    <option>
                      Project Discussion
                    </option>

                    <option>
                      Collaboration
                    </option>

                    <option>
                      General Inquiry
                    </option>

                  </select>

                </div>


                {/* Message */}
                <div>

                  <div className="flex items-center justify-between">

                    <label className="mb-2 block text-sm text-zinc-400">
                      Message
                    </label>

                    <span className="text-xs text-zinc-700">
                      Tell me what's on your mind
                    </span>

                  </div>

                  <textarea
                    rows="6"
                    placeholder="Hi Thanapoom, I'd like to talk about..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-700 focus:border-blue-500/50 focus:bg-white/[0.03]"
                  />

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200"
                >

                  Send Message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>


                <p className="text-center text-xs text-zinc-700">
                  By sending this message, you agree to be contacted
                  regarding your inquiry.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="border-b border-white/[0.06] py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              What I can help with
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's create something
              <span className="text-zinc-500">
                {" "}useful.
              </span>
            </h2>

          </div>


          <div className="mt-14 grid gap-4 lg:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.number}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm text-zinc-700">
                    {service.number}
                  </span>

                  <span className="text-xl text-zinc-700 transition group-hover:text-blue-500">
                    ↗
                  </span>

                </div>

                <h3 className="mt-12 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="border-b border-white/[0.06] py-28">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              FAQ
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently asked
              <span className="text-zinc-500">
                {" "}questions.
              </span>
            </h2>

          </div>


          <div className="mt-14 divide-y divide-white/[0.06] border-y border-white/[0.06]">

            {faqs.map((faq, index) => (

              <details
                key={faq.question}
                className="group py-6"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">

                  <div className="flex items-start gap-5">

                    <span className="hidden text-xs text-zinc-700 sm:block">
                      0{index + 1}
                    </span>

                    <span className="font-medium text-zinc-200 transition group-hover:text-white">
                      {faq.question}
                    </span>

                  </div>

                  <span className="text-xl text-zinc-600 transition duration-300 group-open:rotate-45 group-open:text-blue-500">
                    +
                  </span>

                </summary>

                <div className="mt-4 pl-0 sm:pl-10">

                  <p className="max-w-2xl text-sm leading-7 text-zinc-500">
                    {faq.answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative py-32">

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Start a conversation
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">

            Have an opportunity?

            <span className="block text-zinc-500">
              Let's talk.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-zinc-500">
            I'm always open to learning, collaborating, and taking on
            new challenges that help me grow as a developer.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="mailto:your-email@example.com"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200"
            >
              Email Me

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>

            </a>


            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Back to Portfolio
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;