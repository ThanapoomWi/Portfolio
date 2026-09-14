import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import poom from "/poom.jpg";
import { motion, useReducedMotion } from "framer-motion";

const typeSequence = [
  "Web Developer.",
  1200,
  "UI/UX Designer.",
  1200,
  "AI Developer.",
  1200,
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ThanapoomWi" },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={fadeUp.initial}
      animate={fadeUp.animate}
      transition={fadeUp.transition}
      className="relative flex min-h-screen items-center"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Grid */}
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-[0.22]" />

      {/* Left Glow */}
      <div className="orb-glow pointer-events-none absolute left-10 top-24 h-48 w-48 rounded-full bg-blue-500/20 blur-[90px]" />

      {/* Right Glow */}
      <div className="orb-glow pointer-events-none absolute right-20 top-32 h-56 w-56 rounded-full bg-violet-500/20 blur-[110px]" />


      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="min-w-0">

          {/* Availability Badge */}
          <div className="floating-badge mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-4 py-2 text-sm text-emerald-300 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#4ade80]" />
            Available for Internship In
          </div>


          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
          >
          </motion.h1>


          {/* Animated Heading */}
          <span className="mt-2 block min-h-[1.2em] w-full bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-8xl">
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={40}
              deletionSpeed={40}
              repeat={Infinity}
              cursor={false}
              className="inline-block whitespace-nowrap"
            />
          </span>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-8 max-w-2xl text-lg font-small leading-8 text-zinc-400"
          >
            สวัสดีครับ ผมนาย ธนภูมิ วิธานกรกุล ผมกำลังมองหาโอกาสในการฝึกสหกิจที่เกี่ยวกับด้านของ Software Development, AI Development หรือ UI/UX Design ครับผม
          </motion.p>


          {/* Buttons */}
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


          {/* Social / Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
            }}
            className="mt-10 flex items-center gap-5 text-sm text-zinc-500"
          >
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Bangkok, Thailand</span>
          </motion.div>

        </div>


        {/* =====================================================
            RIGHT: PROFILE IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-md shrink-0"
        >

          {/* Glow */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0.7 }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: [0.7, 1, 0.7] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
            className="absolute -inset-8 rounded-[3rem] bg-blue-500/15 blur-[80px]"
          />


          {/* Main Card */}
          <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm">

            {/* Gradient Border */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-transparent to-violet-500/30 opacity-80" />


            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2.15rem] border border-white/10 bg-zinc-950">

              {/* Image */}
              <img
                src={poom}
                alt="Thanapoom"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width={900}
                height={1125}
                className="relative aspect-[4/5] w-full object-cover saturate-110 contrast-110 transition duration-700 hover:scale-[1.03]"
                style={{
                  filter:
                    "drop-shadow(0 20px 30px rgba(0,0,0,0.35))",
                }}
              />


              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-blue-500/10" />


              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between gap-4">

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-300 sm:text-[15px]">
                      SRIPATUM UNIVERSITY
                    </p>

                    <p className="mt-1 truncate text-lg font-semibold text-white">
                      Tanapoom Witrankronkoon
                    </p>
                  </div>

                  <div className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-zinc-400 backdrop-blur-md">
                    <p>CGPA 3.58</p>
                  </div>

                </div>
              </div>

            </div>
          </div>


          {/* =====================================================
              TOP FLOATING BADGE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.5,
            }}
            className="absolute -right-4 -top-5 hidden rounded-2xl border border-white/10 bg-[#101116]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                &lt;/&gt;
              </div>

              <div>
                <p className="text-xs font-semibold text-white">
                  Computer Science
                </p>

                <p className="text-[10px] text-zinc-500">
                  4th Year Student
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default Hero;