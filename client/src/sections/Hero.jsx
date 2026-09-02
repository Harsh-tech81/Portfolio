import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa6';
import { FiDownload, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { fadeInUp } from '../utils/animations';
import Button from '../components/common/Button';
import HeroBackground from '../components/three/HeroBackground';
import Magnetic from '../components/ui/Magnetic';
import useIsMobile from '../hooks/useIsMobile';

// Only import Spline lazily — will not be used on mobile
const LazySplineScene = React.lazy(() =>
  import('@/components/ui/splite').then((mod) => ({ default: mod.SplineScene }))
);

// Hero entrance starts while the loading curtain lifts (loading = ~1.9s)
const HERO_INTRO_DELAY = 2.05;

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: HERO_INTRO_DELAY,
    },
  },
};

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
  const firstNameLetters = (personalInfo.name.split(' ')[0] || '').split('');

  const sectionRef = useRef(null);

  // --- Viewport gating for Spline scene ---
  const splineContainerRef = useRef(null);
  const [isSplineVisible, setIsSplineVisible] = useState(false);
  const splineAppRef = useRef(null);

  // --- Scroll parallax: content drifts up & fades as you scroll away ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

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
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Three.js Background Component */}
      <HeroBackground />

      {/* Scroll-linked parallax wrapper (keeps variant transforms separate) */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="w-full">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-5 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              {/* Availability badge */}
              <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-glow-pulse" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  Available for work
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">Hello, I'm</span>
                <span className="text-xl sm:text-2xl md:text-3xl origin-bottom-right inline-block hover:animate-pulse cursor-default">👋</span>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  {/* First name reveals letter-by-letter; gradient per letter
                      (parent-level bg-clip breaks when children transform) */}
                  <span className="inline-flex">
                    {firstNameLetters.map((letter, i) => (
                      <motion.span
                        key={`${letter}-${i}`}
                        className="text-shimmer inline-block will-change-transform"
                        style={{ animationDelay: `${i * 0.18}s` }}
                        initial={{ y: '110%', opacity: 0, rotate: 6 }}
                        animate={{ y: '0%', opacity: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: HERO_INTRO_DELAY + 0.15 + i * 0.055,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
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
                <Magnetic>
                  <Button
                    variant="primary"
                    href={personalInfo.resumeUrl || 'https://drive.google.com/file/d/1EyYxzG9nVlCUnXTghb7OQvloDoTQOzRV/view?usp=drive_link'}
                    icon={<FiDownload className="text-lg" />}
                    download
                  >
                    Download Resume
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    variant="secondary"
                    href="#contact"
                    icon={<FiMail className="text-lg" />}
                  >
                    Contact Me
                  </Button>
                </Magnetic>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6"
              >
                {[
                  { icon: FaGithub, url: personalInfo.socials?.github || 'https://github.com/Harsh-tech81', label: 'GitHub' },
                  { icon: FaLinkedinIn, url: personalInfo.socials?.linkedin || 'https://www.linkedin.com/in/harsh-kumar-1ba21731a', label: 'LinkedIn' },
                  { icon: FaTwitter, url: personalInfo.socials?.twitter || 'https://x.com/HarshKumar55518', label: 'Twitter' },
                  { icon: FaInstagram, url: personalInfo.socials?.instagram || 'https://www.instagram.com/harsh_kumar.555/', label: 'Instagram' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors duration-300 shadow-sm hover:shadow-md hover:shadow-blue-500/20"
                  >
                    <social.icon className="text-lg sm:text-xl" />
                  </motion.a>
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
      </motion.div>

      {/* Scroll Down Indicator — mouse with animated wheel */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: contentOpacity }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors">
          <span className="text-[10px] font-medium mb-2 uppercase tracking-widest hidden md:block">Scroll</span>
          <span className="mouse-scroll">
            <span className="mouse-scroll-wheel" />
          </span>
          <FiChevronDown className="text-lg mt-1" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
