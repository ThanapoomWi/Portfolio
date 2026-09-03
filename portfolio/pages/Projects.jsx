import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // แนะนำให้ใช้ Link สำหรับการเปลี่ยนหน้าใน React

const projects = [
  {
    number: "01",
    image: "", // ใส่ Path รูปภาพของคุณที่นี่ เช่น "/assets/project1.png"
    github: "https://github.com/ThanapoomWi/e-commerce",
    category: "E-COMMERCE",
    title: "Gaming Gear E-Commerce",
    description:
      "แพลตฟอร์ม E-commerce สำหรับขายอุปกรณ์เกมมิ่งเกียร์ มาพร้อมระบบจัดการสินค้า, Shopping Cart, โปรโมชัน, ระบบชำระเงิน และการแบ่งสิทธิ์ผู้ใช้งาน (Role-based Access Control)",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    number: "02",
    image: "",
    github: "https://github.com/ThanapoomWi/posmain",
    category: "DASHBOARD",
    title: "Towing Service Dashboard",
    description:
      "ระบบ Dashboard สำหรับจัดการคิวและข้อมูลรถยก (Towing Service) เน้นการแสดงผล Data ที่สำคัญผ่าน Interface ที่ดูคลีนและใช้งานง่าย",
    tech: ["React", "Tailwind CSS", "Chart.js"],
  },
  {
    number: "03",
    image: "project3img.png",
    github: "https://thanapoomwi.github.io/Clipboard/",
    category: "AI / RAG",
    title: "NongPla ChatBot",
    description:
      "แชทบอทให้ข้อมูลสัตว์น้ำจืด (NongPla) ขับเคลื่อนด้วยเทคโนโลยี RAG เพื่อดึงข้อมูลที่ถูกต้องมาตอบคำถามผู้ใช้งานผ่าน LINE Official แบบเรียลไทม์",
    tech: ["RAG", "n8n", "Supabase", "LINE API"],
  },
  
];

// ตั้งค่า Animation
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function Projects() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="min-h-screen bg-[#08090d] text-white"
    >
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24">
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
            รวมผลงานและโปรเจกต์ที่ผมได้ลงมือพัฒนา ตั้งแต่ฝั่ง Front-End, 
            UI/UX Design, ระบบ E-commerce ไปจนถึงการประยุกต์ใช้ AI เข้ากับ Web Application
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 pt-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {projects.map((project, index) => (
              <motion.article
                variants={fadeInUp}
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
              >
                {/* Preview Image / Placeholder */}
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.14),transparent_60%)]" />

                  {/* Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />

                  <span className="absolute bottom-4 left-6 text-8xl font-bold text-white/[0.04] transition-colors group-hover:text-white/[0.08]">
                    {project.number}
                  </span>

                  <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl transition-colors group-hover:border-blue-500/30 group-hover:text-blue-300">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-center gap-6">
                    <div>
                      <p className="text-sm font-medium text-zinc-500">
                        PROJECT {project.number}
                      </p>

                      <h2 className="mt-3 text-2xl font-semibold md:text-3xl text-zinc-100 transition-colors group-hover:text-white">
                        {project.title}
                      </h2>
                    </div>

                    <span className="hidden text-2xl text-zinc-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500 sm:block">
                      ↗
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-400 transition-colors group-hover:bg-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-blue-400 group-hover:text-blue-400"
                  >
                    View Repository
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/[0.06] py-28 relative overflow-hidden">
        {/* CTA Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Have a project in mind?
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Let's build something
            <span className="text-zinc-500"> great.</span>
          </h2>

          <Link
            to="/contact"
            className="group mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:-translate-y-1 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Contact Me
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </section>
    </motion.main>
  );
}

export default Projects;