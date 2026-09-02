import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NAME = 'HARSH';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        setTimeout(onLoadingComplete, 700); // Wait for curtain exit
      }
    }, 1900);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Letter-by-letter name reveal */}
          <div className="flex overflow-hidden">
            {NAME.split('').map((letter, i) => (
              <motion.span
                key={`${letter}-${i}`}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle fade */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-gray-500"
          >
            Portfolio
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-16 w-48 sm:w-64 h-[3px] rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>

          {/* Percentage counter */}
          <motion.span
            className="absolute bottom-6 text-[10px] tracking-[0.3em] text-gray-600 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            LOADING
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
