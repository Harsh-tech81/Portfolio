import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingScreen from './components/layout/LoadingScreen';
import CustomCursor from './components/layout/CustomCursor';
import useScrollspy from './hooks/useScrollspy';

// Section components
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
// import Experience from './sections/Experience';
import Projects from './sections/Projects';
import CodingProfiles from './sections/CodingProfiles';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

// Section IDs for scroll spy
const sectionIds = [
  'home',
  'about',
  'education',
  'skills',
  // 'experience',
  'projects',
  'coding-profiles',
  'certifications',
  'contact',
];

/**
 * Main App Component
 * Assembles all sections with layout components
 */
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const activeSection = useScrollspy(sectionIds);

  useEffect(() => {
    // Disable browser's automatic scroll restoration on refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Always redirect to Home (remove any hash) and scroll to top on refresh/load
    if (window.location.hash) {
      window.location.replace(window.location.origin + window.location.pathname);
      return;
    }

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    try {
      sessionStorage.removeItem('portfolio_active_section');
    } catch {
      // ignore
    }

    // Also reset before unload so next reload starts at top of Home page
    const handleBeforeUnload = () => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Restore smooth scroll behavior for user clicks after loading completes
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 100);
  };

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        {/* Custom cursor (mouse devices only) */}
        <CustomCursor />

        {/* Loading Screen */}
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Content */}
        <main className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Hero />
          <About />
          <Education />
          <Skills />
          {/* <Experience /> */}
          <Projects />
          <CodingProfiles />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
