/**
 * Utility functions for portfolio application
 */

/**
 * Conditionally joins class names together.
 * @param  {...any} classes
 * @returns {string}
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scrolls to a target DOM element by ID.
 * @param {string} id
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

