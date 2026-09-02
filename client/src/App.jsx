import React, { useState, lazy, Suspense } from 'react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import ScrollToTop from './components/layout/ScrollToTop';
import LoadingScreen from './components/layout/LoadingScreen';
import CustomCursor from './components/layout/CustomCursor';
import useScrollspy from './hooks/useScrollspy';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Education = lazy(() => import('./sections/Education'));
const Skills = lazy(() => import('./sections/Skills'));
// const Experience = lazy(() => import('./sections/Experience'));
const Projects = lazy(() => import('./sections/Projects'));
const CodingProfiles = lazy(() => import('./sections/CodingProfiles'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Contact = lazy(() => import('./sections/Contact'));

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

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // After loading screen disappears, scroll to the hash if it exists
    setTimeout(() => {
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  // Simple fallback for lazy-loaded sections
  const SectionFallback = () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

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
          <Suspense fallback={<SectionFallback />}>
            <Hero />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Education />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>

          {/* <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense> */}

          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <CodingProfiles />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Certifications />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
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
