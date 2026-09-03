import { motion } from "framer-motion";
import skills from "../data/skills";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.06] py-32"
    >

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
            Skills
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
            Tools I use to
            <span className="text-zinc-500"> build.</span>
          </h2>

        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              variants={fadeInUp}
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

              <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="h-8 w-8 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {skill.name}
              </h3>


              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {skill.description}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Skills;