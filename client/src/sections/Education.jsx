import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { education } from '../data/education';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';
import { FaTrophy } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi2';
import { FiCalendar } from 'react-icons/fi';
import { fadeInUp } from '../utils/animations';

const Education = () => {
  const timelineRef = useRef(null);

  // Timeline line draws itself as the section scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 55%'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const glowTop = useTransform(lineScale, [0, 1], ['0%', '100%']);

  return (
    <section id="education" className="py-20 relative">
      <AnimatedSection>
        <SectionHeading
          title="Education"
          subtitle="My continuous pursuit of education highlights my perseverance and knack for mastering new skills efficiently."
        />

        <div className="container mx-auto px-4 max-w-4xl mt-12">
          {/* Timeline container */}
          <div className="relative" ref={timelineRef}>
            {/* Track (faint) */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/5 rounded-full" />

            {/* Progress line — fills with scroll */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 rounded-full origin-top"
              style={{ scaleY: lineScale }}
            />

            {/* Glow head that travels along the line */}
            <motion.div
              className="absolute left-6 -translate-x-[3px] w-[8px] h-[8px] rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] z-10"
              style={{ top: glowTop }}
            />

            {/* Education entries */}
            <div className="space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative flex items-start gap-6"
                >
                  {/* Timeline dot — graduation cap icon, pops in with spring */}
                  <motion.div
                    className="relative z-10 flex-shrink-0"
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.15 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                      <HiAcademicCap className="text-white text-xl" />
                    </div>
                    {/* Pulse ring for current education */}
                    {edu.current && (
                      <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-ping" />
                    )}
                  </motion.div>

                  {/* Card */}
                  <div className="flex-1 bg-gray-100 dark:bg-[#1e1e30]/80 rounded-xl p-6 border border-gray-200 dark:border-purple-500/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold shadow-md shadow-pink-500/20">
                      <FiCalendar className="text-xs" />
                      {edu.duration}
                    </div>

                    {/* Degree title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-sm italic text-purple-500 dark:text-purple-300 mt-1">
                      {edu.institution}
                    </p>

                    {/* Grade */}
                    <div className="flex items-center gap-2 mt-3">
                      <FaTrophy className="text-amber-400 text-sm" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Grade: {edu.grade}
                      </span>
                    </div>

                    {/* Description (optional, subtle) */}
                    {edu.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Education;
