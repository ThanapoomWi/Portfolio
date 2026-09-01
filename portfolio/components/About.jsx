function About() {
  return (
    <section id="about" className="relative border-t border-white/[0.06] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              Designing with
              <span className="text-zinc-500"> purpose.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-400">
              ผมเป็นนักศึกษาวิทยาการคอมพิวเตอร์ชั้นปีที่ 3 จากมหาวิทยาลัย
              ศรีปทุม และมีความสนใจเป็นพิเศษด้าน Front-End Development และ UI/UX
              Design
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              ผมสนุกกับการสร้างอินเทอร์เฟซที่สวยงาม ใช้งานง่าย
              รองรับทุกขนาดหน้าจอ และสื่อสารกับผู้ใช้ได้อย่างเป็นธรรมชาติ
              พร้อมพัฒนาทักษะผ่านโปรเจกต์จริง และการทดลองสร้างผลงานใหม่ๆ
              อย่างต่อเนื่อง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
