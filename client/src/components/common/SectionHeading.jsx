import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the gradient underline animation when the heading scrolls into view
  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={headingRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-16 flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white section-underline ${isVisible ? 'visible' : ''}`}>
        {title}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg mt-5"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
