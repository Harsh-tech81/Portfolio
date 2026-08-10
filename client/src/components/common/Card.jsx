import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import useIsMobile from '../../hooks/useIsMobile';

const Card = ({
  children,
  className = '',
  hover = true,
  tilt = false,
  spotlight = true,
  ...props
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const isMobile = useIsMobile();

  // Disable spotlight on mobile — no mouse cursor on touch devices
  const enableSpotlight = spotlight && !isMobile;

  const handleMouseMove = (e) => {
    if (!divRef.current || !enableSpotlight) return;
    
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => { if (enableSpotlight) setOpacity(1); };
  const handleMouseLeave = () => setOpacity(0);

  const baseClasses = "relative bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-white/10 p-6 overflow-hidden transition-all duration-300 ease-in-out";
  const hoverClasses = hover ? "hover:-translate-y-1 hover:shadow-xl dark:shadow-none shadow-sm" : "shadow-sm dark:shadow-none";
  
  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 ease-in-out z-0"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
