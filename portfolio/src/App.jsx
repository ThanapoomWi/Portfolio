import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";

const Home = lazy(() => import("/pages/Home"));
const Projects = lazy(() => import("/pages/Projects"));
const Contact = lazy(() => import("/pages/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="min-h-screen bg-[#08090d] text-white">
        {/* Background Glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>

        <Navbar />

        <Suspense fallback={<div className="min-h-screen" /> }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
