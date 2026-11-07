import { useState, useEffect } from 'react';

/**
 * Custom hook to detect the currently visible section based on scroll position.
 * @param {string[]} sectionIds - Array of HTML element IDs to observe
 * @param {number} offset - Vertical offset threshold in pixels
 * @returns {string} activeId - The ID of the currently visible section
 */
export function useActiveSection(sectionIds = [], offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sectionIds[i]);
            return;
          }
        }
      }
      setActiveId(sectionIds[0] || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}

