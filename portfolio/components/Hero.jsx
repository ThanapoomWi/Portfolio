import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import heroImg from "../public/poom.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-screen items-center pt-20"
    >
      {/* Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-[0.35]" />

      <div className="orb-glow absolute left-10 top-24 h-48 w-48 rounded-full bg-blue-500/20 blur-[90px]" />
      <div className="orb-glow absolute right-20 top-32 h-56 w-56 rounded-full bg-violet-500/20 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-[1590px] items-center gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Hero Text */}
        <div>
          <div className="floating-badge mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-4 py-2 text-sm text-emerald-300 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#4ade80]" />
            Available for Internship
          </div>
          <p className="mb-5 text-lg font-bold uppercase tracking-[0.35em] text-blue-500">
            Front-End Developer
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
          >
            I build
          </motion.h1>
          <span className="block from-white via-zinc-300 to-zinc-600 bg-clip-text text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl">
            <TypeAnimation
              sequence={[
                "digital experiences.",
                1500,
                "clean interfaces.",
                1500,
                "modern products.",
                1500,
              ]}
              wrapper="span"
              speed={40}
              deletionSpeed={60}
              repeat={Infinity}
              cursor={true}
            />
          </span>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 font-medium"
          >
            นักศึกษาวิทยาการคอมพิวเตอร์ที่หลงใหลในงาน Front-End Development และ
            UI/UX Design ผมชอบเปลี่ยนไอเดียให้กลายเป็น digital experiences
            ที่สะอาด รองรับการใช้งาน และมีความหมาย
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="btn-primary group relative inline-flex items-center rounded-full px-7 py-3.5 font-medium text-black"
            >
              View My Work
              <span className="ml-2 inline-block transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <Link
              to="/contact"
              className="btn-secondary relative inline-flex items-center rounded-full px-7 py-3.5 font-medium text-white"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-10 flex items-center gap-5 text-sm text-zinc-500"
          >
            <a
              href="https://github.com/ThanapoomWi"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <span>Bangkok, Thailand</span>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-[80px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-3 shadow-[0_30px_80px_rgba(59,130,246,0.16)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-zinc-900 ring-1 ring-white/10">
              <motion.img
                src={heroImg}
                alt="Thanapoom"
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Card */}
          <div className="floating-badge absolute -bottom-6 -left-8 hidden rounded-2xl border border-white/10 bg-[#101116]/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
            <p className="mt-1 font-semibold">UI / UX + Front-End</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
