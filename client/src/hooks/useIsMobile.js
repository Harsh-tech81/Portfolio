import { useState, useEffect } from 'react';

/**
 * Custom hook to detect mobile viewport.
 * Uses matchMedia for efficient, event-driven detection (no resize polling).
 * @param {number} breakpoint - Max width in px to consider "mobile" (default: 768)
 * @returns {boolean} True if viewport width <= breakpoint
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= breakpoint;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
