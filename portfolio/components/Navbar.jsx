import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

function Navbar() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false); // State สำหรับควบคุมเมนูมือถือ

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 pt-4 sm:px-6"
    >
      {/* เปลี่ยนเป็น flex-col เพื่อให้ Dropdown เลื่อนลงมาด้านล่างได้ */}
      <div className="mx-auto flex max-w-6xl flex-col rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-black/50 to-black/40 px-4 py-3 shadow-lg shadow-blue-500/10 backdrop-blur-md sm:px-5 transition-all">
        
        {/* แถวบนสุด (Top Row) */}
        <div className="flex w-full items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              T
              <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-black bg-blue-400" />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-blue-300">
                Thanapoom
              </p>
              <p className="text-[10px] tracking-[0.28em] text-blue-400/70">DEVELOPER</p>
            </div>
          </Link>

          {/* เมนูสำหรับหน้าจอ Desktop */}
          <div className="hidden items-center gap-1 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-950/20 to-blue-900/10 p-1 backdrop-blur-sm md:flex">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (location.pathname === "/" && item.href === "/#about" && location.hash === "#about");

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-300 bg-blue-500/15"
                      : "text-zinc-400 hover:bg-blue-500/10 hover:text-blue-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-px origin-left transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100 bg-blue-400"
                        : "scale-x-0 bg-blue-400 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://github.com/ThanapoomWi"
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 text-sm text-blue-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-500/20 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-500/20 sm:flex"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>

            <a
              href="/Tanapoom's Resumee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1 hover:shadow-blue-500/40"
            >
              <span className="relative z-10">Resume</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">↗</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            {/* ปุ่ม Hamburger (แสดงเฉพาะบน Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 transition-colors hover:bg-blue-500/20 md:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* เมนู Dropdown สำหรับหน้าจอ Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-2 border-t border-blue-500/20 pt-4 pb-2">
                {navItems.map((item) => {
                  const isActive =
                    location.pathname === item.href ||
                    (location.pathname === "/" && item.href === "/#about" && location.hash === "#about");

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setIsOpen(false)} // ปิดเมนูเมื่อกดลิงก์
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-blue-500/15 text-blue-300"
                          : "text-zinc-400 hover:bg-blue-500/10 hover:text-blue-300"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                
                {/* เพิ่มปุ่ม GitHub ในเมนูมือถือ เพราะจอด้านบนซ่อนไว้ (sm:hidden) */}
                <a
                  href="https://github.com/ThanapoomWi"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-all hover:bg-blue-500/10 hover:text-blue-300 sm:hidden"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}

export default Navbar;