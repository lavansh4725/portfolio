import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function PortfolioContent() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'skills',
      'projects',
      'education',
      'certifications',
      'profiles',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0b0e] text-zinc-100 dark:bg-[#0a0b0e] dark:text-zinc-100 transition-colors duration-300">
      {/* Background grid texture overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Main sticky navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main semantic content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
