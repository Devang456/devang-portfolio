import Icon from '../common/Icons';
import { personalInfo } from '../../data/personalInfo';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#hero" className="footer-brand">
              <span className="brand-code-symbol">&lt;</span>
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-dot">.dev</span>
              <span className="brand-code-symbol"> /&gt;</span>
            </a>
            <p className="footer-role">{personalInfo.role}</p>
            <p className="footer-status-tag">{personalInfo.status}</p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links-grid">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-connect-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-list">
              <a
                href={personalInfo.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <Icon name="github" size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <Icon name="linkedin" size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
                aria-label="Send Email"
              >
                <Icon name="mail" size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {CURRENT_YEAR} {personalInfo.name}. Designed & Built with React.js & Vite.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <Icon name="arrowright" size={16} className="rotate-up" />
          </button>
        </div>
      </div>
    </footer>
  );
}
