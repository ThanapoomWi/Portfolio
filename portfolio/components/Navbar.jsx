import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    // ใช้ motion.nav เพื่อให้ Navbar ค่อยๆ เลื่อนลงมาตอนเปิดเว็บ
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 shadow-lg shadow-black/20 backdrop-blur-md sm:px-5">
        
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white to-gray-300 text-sm font-bold text-black shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            T
            <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-[#0b0c11] bg-blue-400" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
              Thanapoom
            </p>
            <p className="text-[10px] tracking-[0.28em] text-zinc-400">
              DEVELOPER
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 rounded-xl border border-white/[0.05] bg-white/[0.02] p-1 shadow-inner md:flex">
          {navItems.map((item) => {
            // เช็กว่า URL ปัจจุบันตรงกับลิงก์นี้หรือไม่
            const isActive = location.pathname === item.href || (location.pathname === "/" && item.href === "/#about" && location.hash === "#about");
            
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 bg-white/[0.08]"
                    : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
                {/* ขีดเส้นใต้จะโชว์ค้างไว้ถ้าเป็นหน้าที่กำลังเปิดอยู่ */}
                <span className={`absolute inset-x-4 -bottom-0.5 h-px origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100 bg-blue-400" : "scale-x-0 bg-white group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/ThanapoomWi"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)] sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>

          {/* Resume */}
          <a
            href="/Tanapoom's Resumee.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">Resume</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
            {/* แอนิเมชันแสงวิ่งผ่านปุ่ม */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;