import React from 'react';
import { motion } from 'motion/react';

/**
 * Word-by-word reveal. Splits the text into words and staggers them
 * upward with a slight blur-out. Triggered while in view.
 */
const AnimatedText = ({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
}) => {
  const words = String(text).split(' ');

  return (
    <Tag className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once, margin: '-60px' }}
            transition={{
              duration: 0.55,
              delay: delay + i * stagger,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default AnimatedText;
