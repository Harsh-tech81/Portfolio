import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skills } from '../data/skills';
import SectionHeading from '../components/common/SectionHeading';
import AnimatedSection from '../components/common/AnimatedSection';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Programming Languages');

  // Extract all unique categories
  const categories = skills.map(s => s.category);

  // Filter skills based on active category
  const displayedSkills = useMemo(() => {
    return skills.find(s => s.category === activeCategory)?.skills || [];
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 relative">
      <AnimatedSection>
        <SectionHeading title="Skills & Technologies" subtitle="Technologies I work with" />
        
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Category filter tabs */}
          <div className="flex justify-center w-full mb-12">
            <div className="flex overflow-x-auto py-2 px-2 gap-2 scrollbar-hide max-w-full snap-x ">
              {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 cursor-pointer py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap z-10 ${
                  activeCategory === category 
                    ? 'text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                {category}
              </button>
            ))}
            </div>
          </div>

          {/* Skills grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {displayedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white dark:bg-[#1a1a1a] rounded-xl p-4 border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-pointer group"
                >
                  <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors flex items-center justify-center h-12 w-12">
                    {/* Safely clone the element to pass the size prop if applicable */}
                    {React.isValidElement(skill.icon) ? React.cloneElement(skill.icon, { size: 36 }) : skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;
