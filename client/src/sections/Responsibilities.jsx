import React from 'react';
import { motion } from 'motion/react';
import { responsibilities } from '../data/responsibilities';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';
import { FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { FaUsers, FaCodeBranch, FaAward, FaLaptopCode } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../utils/animations';

const getOrgIcon = (type) => {
  if (type === 'Open Source Program') return <FaCodeBranch className="text-amber-500" />;
  if (type === 'Technical Club') return <FaUsers className="text-blue-500" />;
  return <FaAward className="text-purple-500" />;
};

const Responsibilities = () => {
  return (
    <section id="achievements" className="py-24 relative bg-gray-50/50 dark:bg-transparent transition-colors duration-300 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <SectionHeading
          title="Achievements"
          subtitle="Technical club member at WDC NITP, GSSoC’25 contributor & open-source community engagement"
        />

        <AnimatedSection variants={staggerContainer} className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {responsibilities.map((item, index) => {
              return (
                <motion.div
                  key={item.id || index}
                  variants={fadeInUp}
                  className="h-full flex"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card
                    tilt
                    className="w-full flex flex-col justify-between pt-7 sm:pt-9 p-6 sm:p-8 rounded-2xl border border-gray-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group relative overflow-hidden bg-white dark:bg-[#12121a]/90 backdrop-blur-md"
                  >
                    {/* Top gradient highlight strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                    <div className="pt-2 sm:pt-3">
                      {/* Top Badges Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {getOrgIcon(item.type)}
                          <span>{item.type}</span>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-mono">
                          <FiCalendar className="text-[11px]" />
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* Role Heading */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {item.role}
                      </h3>

                      {/* Organization & Location */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1.5 font-medium text-gray-800 dark:text-gray-200">
                          <FaLaptopCode className="text-blue-500 text-xs" />
                          <span>{item.organization}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
                            <FiMapPin className="text-[11px]" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Summary Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Bulleted Key Contributions */}
                      {item.responsibilities && item.responsibilities.length > 0 && (
                        <div className="mb-6 space-y-2.5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            Key Contributions
                          </p>
                          <ul className="space-y-2">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                <FiCheckCircle className="mt-1 text-emerald-500 shrink-0 text-xs" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Bottom Section: Technologies */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="pt-4 border-t border-gray-100 dark:border-white/5 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Responsibilities;
