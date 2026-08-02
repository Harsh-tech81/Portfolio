import React from 'react';
import { motion } from 'motion/react';

const AnimatedSection = ({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  stagger = false,
  ...props
}) => {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[variant] || variants.fadeUp;

  const transition = {
    duration: 0.6,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94],
    ...(stagger ? { staggerChildren: 0.08 } : {})
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={selectedVariant}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
