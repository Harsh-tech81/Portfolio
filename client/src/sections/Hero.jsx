import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter,FaInstagram } from 'react-icons/fa6';
import { FiDownload, FiMail, FiChevronDown, FiCode } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Button from '../components/common/Button';
import HeroBackground from '../components/three/HeroBackground';
import useIsMobile from '../hooks/useIsMobile';

// Only import Spline lazily — will not be used on mobile
const LazySplineScene = React.lazy(() =>
  import('@/components/ui/splite').then((mod) => ({ default: mod.SplineScene }))
);

/**
 * Mobile fallback — show profile image instead of the heavy Spline robot.
 * Styled with a gradient ring + ambient glow for a premium feel.
 */
const MobileSplineFallback = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    {/* Ambient glow behind the image */}
    <div
      className="absolute w-[65%] h-[65%] rounded-full opacity-30 blur-3xl"
      style={{
        background: 'radial-gradient(circle, #818cf8 0%, #6366f1 40%, transparent 70%)',
        animation: 'mobileOrb1 6s ease-in-out infinite alternate',
      }}
    />
    {/* Profile image with gradient border */}
    <div className="relative w-[36vw] h-[36vw] max-w-48 max-h-48 sm:max-w-56 sm:max-h-56 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-[3px] animate-float shadow-2xl shadow-purple-500/20">
      <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
        <img
          src="/profile2.jpeg"
          alt={personalInfo.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  </div>
);

const Hero = () => {
  const isMobile = useIsMobile();
  const titles = personalInfo.titles || ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'];
  const sequence = titles.flatMap(title => [title, 2000]);

  // --- Viewport gating for Spline scene ---
  const splineContainerRef = useRef(null);
  const [isSplineVisible, setIsSplineVisible] = useState(false);
  const splineAppRef = useRef(null);

  useEffect(() => {
    // On mobile we never mount Spline, so skip observer
    if (isMobile) return;

    const el = splineContainerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSplineVisible(entry.isIntersecting),
      { rootMargin: '200px' } // preload slightly before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  // --- Pause Spline render loop during scroll for smooth scrolling ---
  useEffect(() => {
    if (isMobile) return;

    let scrollTimeout = null;

    const handleScrollStart = () => {
      // Pause Spline's render loop while scrolling
      if (splineAppRef.current?.stop) {
        splineAppRef.current.stop();
      }

      // Resume after scrolling stops (debounced 150ms)
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (splineAppRef.current?.play) {
          splineAppRef.current.play();
        }
      }, 150);
    };

    window.addEventListener('scroll', handleScrollStart, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  const handleSplineLoad = (splineApp) => {
    splineAppRef.current = splineApp;
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Three.js Background Component */}
      <HeroBackground />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-5 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">Hello, I'm</span>
              <span className="text-xl sm:text-2xl md:text-3xl origin-bottom-right inline-block hover:animate-pulse cursor-default">👋</span>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                  {personalInfo.name.split(' ')[0]}
                </span>{' '}
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </h1>
              
              <div className="h-10 sm:h-12 md:h-16 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={sequence}
                  speed={50}
                  deletionSpeed={30}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400"
                />
              </div>
            </motion.div>

            <motion.p 
              variants={fadeInUp} 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.bio || "I build pixel-perfect, engaging, and accessible digital experiences."}
            </motion.p>

            <motion.div 
              variants={fadeInUp} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Button 
                variant="primary" 
                href={personalInfo.resumeUrl || 'https://drive.google.com/file/d/1EyYxzG9nVlCUnXTghb7OQvloDoTQOzRV/view?usp=drive_link'} 
                icon={<FiDownload className="text-lg" />}
                download
              >
                Download Resume
              </Button>
              <Button 
                variant="secondary" 
                href="#contact" 
                icon={<FiMail className="text-lg" />}
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
            >
              {[
                { icon: FaGithub, url: personalInfo.socials?.github || 'https://github.com/Harsh-tech81' },
                { icon: FaLinkedinIn, url: personalInfo.socials?.linkedin || 'https://www.linkedin.com/in/harsh-kumar-1ba21731a' },
                { icon: FaTwitter, url: personalInfo.socials?.twitter || 'https://x.com/HarshKumar55518' },
                { icon: FaInstagram, url: personalInfo.socials?.instagram || 'https://www.instagram.com/harsh_kumar.555/' },
              ].map((social, index) => (  
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                >
                  <social.icon className="text-lg sm:text-xl" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive 3D Spline Scene */}
          <motion.div 
            ref={splineContainerRef}
            variants={fadeInUp} 
            className="relative flex justify-center items-center order-1 lg:order-2 w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-br from-primary-500/10 to-indigo-600/10 blur-3xl z-0" />
            
            <div className="relative w-full h-full z-10 flex items-center justify-center" style={{ contain: 'layout style paint' }}>
              {isMobile ? (
                <MobileSplineFallback />
              ) : isSplineVisible ? (
                <React.Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="loader"></span>
                    </div>
                  }
                >
                  <LazySplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                    onLoad={handleSplineLoad}
                  />
                </React.Suspense>
              ) : (
                /* Placeholder while waiting for viewport intersection */
                <div className="w-full h-full flex items-center justify-center">
                  <span className="loader"></span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors">
          <span className="text-sm font-medium mb-2 uppercase tracking-widest hidden md:block text-[10px]">Scroll</span>
          <FiChevronDown className="text-2xl" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

