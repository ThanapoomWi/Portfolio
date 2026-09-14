import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "tanapoomsulak@gmail.com",
      description: "ช่องทางที่ติดต่อได้เร็วที่สุด",
      href: "mailto:tanapoomsulak@gmail.com",
      icon: "✉",
    },
    {
      label: "GitHub",
      value: "github.com/ThanapoomWi",
      description: "ดูโค้ดและโปรเจกต์ที่ผ่านมา",
      href: "https://github.com/ThanapoomWi",
      icon: "◎",
    },
    {
      label: "Facebook",
      value: "Poom Thana",
      description: "ติดต่อผมผ่าน social media",
      href: "https://www.facebook.com/poom.thana",
      icon: "ⓕ",
    },
    {
      label: "LINE",
      value: "@poompoomzaza",
      description: "ติดต่อผมผ่าน LINE",
      href: "https://line.me/ti/p/@poompoomzaza",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      qrImage: "qrcode.jpg", 
    }
  ];

  const faqs = [
    {
      number: "01",
      title: "ตอนนี้หาที่ฝึกงานอยู่ไหม?",
      description:
        "ครับผม! ตอนนี้ผมกำลังมองหาโอกาสฝึกงานเพื่อพัฒนาทักษะและประสบการณ์ในสายงานนี้อยู่ครับ",
    },
    {
      number: "02",
      title: "ใช้ Tech Stack อะไรเป็นหลัก?",
      description:
        "Technologies หลักๆ ที่ผมใช้คือ React, JavaScript, Tailwind CSS, HTML, CSS, REST API, Git, Node.js และ MySQL ครับ",
    },
    {
      number: "03",
      title: "ติดต่อช่องทางไหนสะดวกสุด?",
      description:
        "สามารถติดต่อผม ผ่าน Email หรือ Line ได้เลยครับผม",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white relative">
      
      {/* =====================================================
          CONTACT INFORMATION + FORM
      ===================================================== */}
      <section className="border-b border-white/[0.06] pb-24 pt-32 relative">
       <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="mb-14">
              {/* ปรับ Badge ให้เหมือนหน้า Projects */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-blue-500/[0.06] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                contact
              </div>

              {/* ปรับ h1 ให้ใหญ่เท่าหน้า Projects */}
              <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
                Contact
                <span className="text-zinc-500"> Me.</span>
              </h1>

              {/* ปรับขนาดตัวอักษรคำอธิบายให้เท่าหน้า Projects */}
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
                สามารถติดต่อผมได้ตามช่องทางที่แปะไว้ตามด้านล่างนี้ได้เลยครับผม
              </p>
            </div>

            <div className="space-y-4 max-w-7xl">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "GitHub" || item.label === "Email" ? "_blank" : undefined}
                  rel={item.label === "GitHub" || item.label === "Email" ? "noreferrer" : undefined}
                  className="group block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/[0.04] hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-blue-300 transition duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/10">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate font-medium text-zinc-200 transition group-hover:text-blue-400">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        {item.description}
                      </p>
                    </div>

                    {/* ตรวจสอบว่ามี QR Code ไหม ถ้ามีให้แสดงรูป ถ้าไม่มีให้แสดงข้อความ */}
                    {item.qrImage ? (
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1 transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <img 
                          src={item.qrImage} 
                          alt={`${item.label} QR Code`} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <span className="text-medium gap-10 text-blue-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-400">
                        Click To Contact ↗
                      </span>
                    )}
                    
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
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
              FAQ
            </p>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-700">
                    {faq.number}
                  </span>
                  <span className="text-xl text-zinc-700 transition group-hover:text-blue-500">
                    ↗
                  </span>
                </div>
                <h3 className="mt-12 text-xl font-semibold">{faq.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {faq.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative py-28 overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

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
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Have an opportunity?
            <span className="block text-zinc-500 mt-2">Let's talk.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-zinc-500">
            ผมพร้อมเรียนรู้สิ่งใหม่ๆและพัฒนาสกิลของผมเพื่อทำให้ผมเติบโตขึ้นในสายอาชีพนี้ครับ
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tanapoomsulak@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              Email Me
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-500/40 bg-blue-500/10 px-8 py-4 font-bold text-blue-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-500/20 hover:text-blue-200"
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