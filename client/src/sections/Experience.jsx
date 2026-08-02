import React from 'react';
import { motion } from 'motion/react';
import { experience, experienceNote } from '../data/experience';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import { FiCalendar, FiBriefcase } from 'react-icons/fi';
import { fadeInUp } from '../utils/animations';

const Experience = () => {
  const hasExperience = experience && experience.length > 0;

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey"
        />

        <AnimatedSection className="mt-16 max-w-5xl mx-auto">
          {!hasExperience ? (
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col items-center justify-center p-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping absolute"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500 relative"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Journey starts here...</h3>
              <p className="text-gray-400 max-w-md">{experienceNote}</p>
              
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
              </div>
            </motion.div>
          ) : (
            <div className="relative">
              {/* Center line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full hidden sm:block"></div>
              
              <div className="space-y-12">
                {experience.map((exp, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 hidden sm:block"></div>
                      
                      {/* Empty space for other side */}
                      <div className="w-full sm:w-1/2 sm:px-8 hidden sm:block"></div>
                      
                      {/* Card Content */}
                      <div className="w-full sm:w-1/2 sm:px-8">
                        <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4">
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/20">
                              {exp.type || 'Full-time'}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1.5">
                              <FiBriefcase className="text-blue-500" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
                            <div className="flex items-center gap-1.5">
                              <FiCalendar className="text-purple-500" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 mb-4">{exp.description}</p>
                          
                          {exp.responsibilities && exp.responsibilities.length > 0 && (
                            <ul className="mb-6 space-y-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {exp.technologies.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </Card>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
