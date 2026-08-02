import { useState, useEffect } from 'react';

/**
 * Custom hook to check if a media query matches the current viewport.
 * @param {string} query - The media query string (e.g., '(min-width: 768px)').
 * @returns {boolean} True if the media query matches, false otherwise.
 */
export const useMediaQuery = (query) => {
  // Return false on the server side to avoid hydration mismatch
  const getMatches = (query) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(query);
    
    // Initial check
    setMatches(mediaQueryList.matches);

    // Listener for changes
    const listener = (event) => setMatches(event.matches);
    
    // Modern API for adding listener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(listener);
    }

    // Cleanup function
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        // Fallback for older browsers
        mediaQueryList.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
