import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import Home from "/pages/Home";
import About from "/components/About";
import Skills from "/components/Skills";
import Projects from "/components/Projects";
import Contact from "/components/Contact";
import Footer from "/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
        {/* Background Glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
          <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]" />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* <ProjectCard project={project} index={index} /> */}

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
