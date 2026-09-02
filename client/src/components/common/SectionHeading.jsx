import React from 'react';
import { motion } from 'motion/react';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-16 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg mt-3">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
