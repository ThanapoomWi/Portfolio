import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-2"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Designing with
              <span className="text-zinc-500"> purpose.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ delay: 0.15 }}>
            <p className="text-lg leading-8 text-zinc-400">
              ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีที่ 3 จากมหาวิทยาลัย
              ศรีปทุม และมีความสนใจเป็นพิเศษด้าน Front-End Development และ UI/UX
              Design
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              ผมพร้อมพัฒนาทักษะผ่านโปรเจกต์จริงและการทดลองสร้างผลงานใหม่ๆ
              อย่างต่อเนื่องครับผม
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
