import React from 'react';
import { motion } from 'motion/react';
import AnimatedText from '../ui/AnimatedText';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4 }}
      className={`mb-16 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        <AnimatedText text={title} stagger={0.05} />
      </h2>

      {/* Underline that draws itself in with a glow tip */}
      <motion.div
        className="relative w-[60px] h-1 rounded-full mt-4 mb-6 overflow-visible"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 origin-left" />
        <motion.div
          className="absolute -right-1 -top-[3px] w-[10px] h-[10px] rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.4, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.75 }}
        />
      </motion.div>

      {subtitle && (
        <AnimatedText
          text={subtitle}
          className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg"
          delay={0.3}
          stagger={0.02}
        />
      )}
    </motion.div>
  );
};

export default SectionHeading;
