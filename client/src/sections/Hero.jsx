import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { FiDownload, FiMail, FiChevronDown } from 'react-icons/fi';
import { personalInfo } from '../data/personalInfo';
import { fadeInUp, staggerContainer } from '../utils/animations';
import Button from '../components/common/Button';
import HeroBackground from '../components/three/HeroBackground';

const Hero = () => {
  const titles = personalInfo.titles || ['Full Stack Developer', 'MERN Stack Developer', 'Problem Solver'];
  const sequence = titles.flatMap(title => [title, 2000]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Three.js Background Component */}
      <HeroBackground />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeInUp} className="flex items-center justify-center lg:justify-start space-x-2">
              <span className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">Hello, I'm</span>
              <span className="text-2xl md:text-3xl origin-bottom-right inline-block hover:animate-pulse cursor-default">👋</span>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">
                  {personalInfo.name.split(' ')[0]}
                </span>{' '}
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </h1>
              
              <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={sequence}
                  speed={50}
                  deletionSpeed={30}
                  wrapper="span"
                  repeat={Infinity}
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-600 dark:text-primary-400"
                />
              </div>
            </motion.div>

            <motion.p 
              variants={fadeInUp} 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.bio || "I build pixel-perfect, engaging, and accessible digital experiences."}
            </motion.p>

            <motion.div 
              variants={fadeInUp} 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
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
              className="flex items-center justify-center lg:justify-start gap-4 pt-6"
            >
              {[
                { icon: FaGithub, url: personalInfo.socials?.github || 'https://github.com/Harsh-tech81' },
                { icon: FaLinkedinIn, url: personalInfo.socials?.linkedin || 'https://www.linkedin.com/in/harsh-kumar-1ba21731a' },
                { icon: FaTwitter, url: personalInfo.socials?.twitter || 'https://x.com/HarshKumar55518' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div 
            variants={fadeInUp} 
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Decorative floating elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-primary-400/30 to-indigo-500/30 blur-2xl z-0"
                animate={{ 
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-500/30 blur-2xl z-0"
                animate={{ 
                  y: [0, -30, 0],
                  x: [0, -20, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-2xl p-2 bg-gradient-to-br from-primary-500 to-indigo-600 shadow-xl shadow-primary-500/20 dark:shadow-primary-500/10 z-10">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white dark:bg-gray-900 relative group flex items-center justify-center">
                  <img 
                    src="/profile.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback if image fails to load */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 hidden items-center justify-center text-5xl font-bold text-gray-400 dark:text-gray-600"
                    style={{ display: 'none' }}
                  >
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
