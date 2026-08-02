import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently active based on scroll position.
 * @param {string[]} sectionIds - Array of section IDs to track.
 * @returns {string} The ID of the currently active section.
 */
export const useScrollspy = (sectionIds) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    // If no section IDs provided or on server, return early
    if (!sectionIds || sectionIds.length === 0 || typeof window === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeId;
};

export default useScrollspy;
