
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'portfolio', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          if (
            element.offsetTop <= scrollPos &&
            element.offsetTop + element.offsetHeight > scrollPos
          ) {
            setActiveSection(section);
          }
        }
      }

      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-[#050816] text-[#f8fafc]">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-[#149ddd] text-white rounded-full shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isSidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      <Sidebar 
        activeSection={activeSection} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className="flex-1 lg:ml-[300px] w-full">
        <section id="home">
          <Hero />
        </section>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <section id="about" className="py-20">
            <About />
          </section>

          <section id="skills" className="py-20 bg-[#0b1121] -mx-4 lg:-mx-12 px-4 lg:px-12 border-y border-[#1e293b]">
            <Skills />
          </section>

          <section id="resume" className="py-20">
            <Resume />
          </section>

          <section id="services" className="py-20 bg-[#0b1121] -mx-4 lg:-mx-12 px-4 lg:px-12 border-y border-[#1e293b]">
            <Services />
          </section>

          <section id="portfolio" className="py-20">
            <Portfolio />
          </section>

          <section id="contact" className="py-20 bg-[#0b1121] -mx-4 lg:-mx-12 px-4 lg:px-12 border-t border-[#1e293b]">
            <Contact />
          </section>
        </div>

        <footer className="py-12 bg-[#040b14] text-white text-center border-t border-[#1e293b]">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Raja Muhammad Kamran Afzal</h3>
            <p className="text-[#94a3b8] mb-6 italic max-w-md mx-auto">"Building the future of AI-driven web applications with precision and passion."</p>
            <div className="text-sm text-[#64748b]">
              &copy; Copyright <strong><span>Raja Muhammad Kamran Afzal</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
      </main>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-[#149ddd] text-white rounded-md flex items-center justify-center transition-all duration-300 z-50 hover:bg-[#1f5297] hover:shadow-[0_0_15px_#149ddd] ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default App;
