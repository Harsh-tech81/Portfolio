import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to track which section is currently active based on scroll position.
 * Keeps the Navbar active indicators in sync with the current section in view.
 * @param {string[]} sectionIds - Array of section IDs to track.
 * @returns {string} The ID of the currently active section.
 */
export const useScrollspy = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0 || typeof window === 'undefined') {
      return;
    }

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;

        let currentSection = sectionIds[0];

        // 1. Top of page is always home
        if (scrollY < 120) {
          currentSection = sectionIds[0];
        } 
        // 2. Near bottom of page is always the last section (contact)
        else if (windowHeight + scrollY >= docHeight - 80) {
          currentSection = sectionIds[sectionIds.length - 1];
        } 
        // 3. In-between: find section overlapping the trigger point (35% down the viewport)
        else {
          const triggerPoint = scrollY + windowHeight * 0.35;

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i];
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (triggerPoint >= top && triggerPoint < top + height) {
                currentSection = id;
                break;
              }
            }
          }
        }

        if (currentSection && currentSection !== activeIdRef.current) {
          activeIdRef.current = currentSection;
          setActiveId(currentSection);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [sectionIds]);

  return activeId;
};

export default useScrollspy;
