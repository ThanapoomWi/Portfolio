import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "your-email@example.com",
      description: "ช่องทางที่ติดต่อได้เร็วที่สุด",
      href: "mailto:your-email@example.com",
    },
    {
      label: "GitHub",
      value: "github.com/ThanapoomWi",
      description: "ดูโค้ดและโปรเจกต์ที่ผ่านมา",
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
        "สร้าง Web Interfaces ที่ Responsive และทันสมัย ด้วย React, JavaScript, Tailwind CSS และ Best Practices ต่างๆ",
    },
    {
      number: "02",
      title: "UI / UX Design",
      description:
        "ออกแบบ Interface ที่ดูคลีน ใช้งานง่าย โฟกัสที่ User Experience และความสวยงามสม่ำเสมอ (Visual Consistency)",
    },
    {
      number: "03",
      title: "Web Applications",
      description:
        "พัฒนา Web App ที่ใช้งานได้จริง พร้อมเชื่อมต่อ Frontend เข้ากับ REST APIs และ Backend Services",
    },
  ];

  const faqs = [
    {
      question: "ตอนนี้รับงานหรือหาที่ฝึกงานอยู่ไหม?",
      answer:
        "Yes! ตอนนี้ผมกำลังมองหาโอกาสฝึกงาน (Internship) เพื่อพัฒนาสกิล Front-End และร่วมทำโปรเจกต์จริงๆ ของบริษัทครับ",
    },
    {
      question: "ใช้ Tech Stack อะไรเป็นหลัก?",
      answer:
        "Technologies หลักๆ ที่ผมใช้คือ React, JavaScript, Tailwind CSS, HTML, CSS, REST API, Git, Node.js และ MySQL ครับ",
    },
    {
      question: "สามารถทำงานกับโค้ดเก่า (Existing Project) ได้ไหม?",
      answer:
        "แน่นอนครับ ผมคุ้นเคยกับการแกะ Codebase เก่า ทำความเข้าใจ Project Structure และพร้อมช่วยพัฒนาฟีเจอร์ใหม่ๆ หรือปรับ UI ให้ดีขึ้น",
    },
    {
      question: "ติดต่อช่องทางไหนสะดวกสุด?",
      answer:
        "สามารถทักมาทางอีเมลที่แปะไว้ในหน้านี้ได้เลยครับ หรือจะไปคอนเนคกันต่อใน GitHub ก็ได้เช่นกัน",
    },
  ];

  // ตั้งค่า Animation พื้นฐานเพื่อเอาไปใช้ซ้ำ
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[-10%] top-[30%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[160px]"
        />
        <div className="absolute bottom-0 left-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[140px]" />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative border-b border-white/[0.06] pt-32">
        {/* Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            {/* Small label */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-500">
                Contact Me
              </p>
            </div>


          

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
          </motion.div>

          {/* Bottom stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 grid border-y border-white/[0.06] sm:grid-cols-3"
          >
            <div className="border-b border-white/[0.06] py-7 sm:border-b-0 sm:border-r sm:pr-8">
              <p className="text-3xl font-bold">3rd</p>
              <p className="mt-1 text-sm text-zinc-600">
                Year Computer Science Student
              </p>
            </div>
            <div className="border-b border-white/[0.06] py-7 sm:border-b-0 sm:border-r sm:px-8">
              <p className="text-3xl font-bold">UI + Code</p>
              <p className="mt-1 text-sm text-zinc-600">Design & Development</p>
            </div>
            <div className="py-7 sm:pl-8">
              <p className="text-3xl font-bold">Thailand</p>
              <p className="mt-1 text-sm text-zinc-600">Based in Bangkok</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION + FORM
      ===================================================== */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT: Contact Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Get in touch
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Have a project
                <span className="block text-zinc-500">in mind?</span>
              </h2>
              <p className="mt-6 max-w-md leading-7 text-zinc-500">
                ผมยินดีเสมอที่จะได้เรียนรู้โปรเจกต์ใหม่ๆ, โอกาสฝึกงาน,
                และได้ร่วมงานกับคนที่มีไอเดียเจ๋งๆ
              </p>

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
            </motion.div>

            {/* RIGHT: FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 shadow-xl backdrop-blur-sm"
            >
              <div className="mb-8">
                <p className="text-sm font-medium text-zinc-300">
                  Send me a message
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  ทิ้งข้อความไว้ได้เลย แล้วผมจะรีบตอบกลับครับ
                </p>
              </div>

              <form className="space-y-6">
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

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Subject
                  </label>
                  <select className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b0c11] px-4 py-3.5 text-sm text-zinc-400 outline-none transition focus:border-blue-500/50">
                    <option>Internship Opportunity</option>
                    <option>Project Discussion</option>
                    <option>Collaboration</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

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

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-zinc-200"
                >
                  Send Message
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              What I can help with
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Let's create something
              <span className="text-zinc-500"> useful.</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                <h3 className="mt-12 text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              FAQ
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently asked
              <span className="text-zinc-500"> questions.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-14 divide-y divide-white/[0.06] border-y border-white/[0.06]"
          >
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group py-6">
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
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative py-32">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Start a conversation
          </p>
          <h2 className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Have an opportunity?
            <span className="block text-zinc-500">Let's talk.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-zinc-500">
            ผมพร้อมเปิดรับการเรียนรู้สิ่งใหม่ๆ, งาน Collaboration,
            และความท้าทายที่จะช่วยให้ผมเติบโตขึ้นในสายอาชีพนี้ครับ
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
        </motion.div>
      </section>
    </main>
  );
}

export default Contact;
