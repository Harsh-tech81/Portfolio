import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/personalInfo';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import { FaGraduationCap, FaBullseye, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <AnimatedSection>
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column (image) */}
            <motion.div 
              className="relative mx-auto max-w-md w-full aspect-square"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Decorative gradient blur blob */}
              <div className="absolute inset-0 -mx-4 -my-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 z-0"></div>
              
              <motion.div 
                className="relative z-10 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <div className="w-full h-full bg-white dark:bg-[#121212] rounded-2xl overflow-hidden p-1 relative">
                  <img 
                    src="/profile.jpeg" 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Right column (info) */}
            <motion.div 
              className="flex flex-col space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp}>
                  <Card className="h-full flex flex-col justify-center items-start gap-3 p-5 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <div className="text-blue-500">
                      <FaGraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">Education</h4>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {personalInfo.about.education}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {personalInfo.about.university}
                      </p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full flex flex-col justify-center items-start gap-3 p-5 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <div className="text-purple-500">
                      <FaBullseye size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">Career Objective</h4>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2">
                        {personalInfo.about.objective}
                      </p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full flex flex-col justify-center items-start gap-3 p-5 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <div className="text-green-500">
                      <FaCode size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">Current Focus</h4>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Full Stack Development & Open Source
                      </p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="h-full flex flex-col justify-center items-start gap-3 p-5 bg-white/50 dark:bg-white/5 backdrop-blur-md">
                    <div className="text-red-500">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {personalInfo.location}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Interests</h4>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.about.interests.map((interest, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 rounded-full text-sm bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400 font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
