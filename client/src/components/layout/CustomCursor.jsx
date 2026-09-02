import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Custom cursor — a small dot that tracks the pointer instantly plus a
 * trailing ring with spring physics. The ring expands over interactive
 * elements. Rendered only on devices with a fine pointer (mouse).
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Only enable for precise pointers (mouse/trackpad)
    const fineQuery = window.matchMedia('(pointer: fine)');
    if (!fineQuery.matches) return undefined;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-enabled');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e) => {
      const target = e.target;
      setHovering(
        Boolean(
          target.closest?.(
            'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
          )
        )
      );
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="custom-cursor-dot"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: pressed ? 0.6 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="custom-cursor-ring"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: pressed ? 0.8 : hovering ? 1.7 : 1,
          opacity: hovering ? 0.9 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
