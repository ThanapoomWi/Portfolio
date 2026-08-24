import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0b0c11]/75 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black transition duration-300 group-hover:rotate-6">
            T
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-white">
              Thanapoom
            </p>

            <p className="text-[10px] tracking-widest text-zinc-500">
              DEVELOPER
            </p>
          </div>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-1 rounded-xl border border-white/[0.05] bg-white/[0.03] p-1 md:flex">

         <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            About
          </Link>

          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            Skills
          </Link>

          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-lg px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/[0.06] hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/ThanapoomWi"
            target="_blank"
            rel="noreferrer"
            className="hidden h-9 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 text-sm text-zinc-400 transition duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            GitHub
          </a>

          {/* Resume */}
          <a
            href="./assets/Thanapoom_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
          >
            Resume
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
