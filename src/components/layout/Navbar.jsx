import { useState, useEffect } from 'react';
import Button from '../common/Button';
import Icon from '../common/Icons';
import { personalInfo } from '../../data/personalInfo';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const SECTION_IDS = navItems.map((n) => n.id);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS, 120);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-code-symbol">&lt;</span>
          <span className="brand-name">Devang</span>
          <span className="brand-dot">.dev</span>
          <span className="brand-code-symbol"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-only nav-links" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
                {isActive && <span className="active-pill-indicator" />}
              </a>
            );
          })}

          <Button
            href={personalInfo.resumePath}
            variant="outline"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Icon name="externallink" size={14} />}
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <span className={`hamburger-bar ${isOpen ? 'open-top' : ''}`} />
          <span className={`hamburger-bar ${isOpen ? 'open-mid' : ''}`} />
          <span className={`hamburger-bar ${isOpen ? 'open-bot' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-nav-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="mobile-active-dot" />}
                </a>
              );
            })}

            <div className="mobile-drawer-cta">
              <Button
                href={personalInfo.resumePath}
                variant="primary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Icon name="externallink" size={16} />}
                onClick={closeMenu}
              >
                View Resume
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
