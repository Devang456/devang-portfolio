import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Icon from '../components/common/Icons';
import { personalInfo } from '../data/personalInfo';
import { useHeroTypewriter } from '../hooks/useHeroTypewriter';
import './Hero.css';

export default function Hero() {
  const { greeting, name, role, currentLine } = useHeroTypewriter({
    greetingTarget: "Hello, World! I am",
    nameTarget: personalInfo.name,
    roleTargets: [
      personalInfo.role,
      "React.js & Node.js Developer",
      "Full-Stack Web Developer"
    ],
    typingSpeed: 45,
    deletingSpeed: 28,
    pauseDelay: 2400
  });

  return (
    <section id="hero" className="hero-section">
      <Container className="hero-container">
        {/* Left Column: Introductions & CTAs */}
        <div className="hero-text-col">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="hero-status-dot"></span>
            <span className="hero-status-label">{personalInfo.status}</span>
          </div>

          {/* Name & Title with Auto Typing Effect (Zero Layout Shift) */}
          <div className="hero-identity">
            <span className="hero-greeting">
              <span>{greeting || '\u00A0'}</span>
              {currentLine === 1 && <span className="typewriter-cursor greeting-cursor" />}
            </span>

            <h1 className="hero-name">
              <span>{name || '\u00A0'}</span>
              {currentLine === 2 && <span className="typewriter-cursor name-cursor" />}
            </h1>

            <h2 className="hero-title">
              <span className="gradient-text">{role || '\u00A0'}</span>
              {currentLine === 3 && <span className="typewriter-cursor role-cursor" />}
            </h2>
          </div>

          {/* Impact Headline */}
          <p className="hero-headline">
            &ldquo;{personalInfo.headline}&rdquo;
          </p>

          {/* Pitch / Description */}
          <p className="hero-description">
            {personalInfo.aboutBrief}
          </p>

          {/* Location & Quick Meta */}
          <div className="hero-meta-row">
            <span className="hero-meta-item">
              <Icon name="location" size={16} />
              <span>{personalInfo.location}</span>
            </span>
            <span className="hero-meta-divider">•</span>
            <span className="hero-meta-item">
              <Icon name="graduationcap" size={16} />
              <span>BCA Graduate (2025)</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<Icon name="arrowright" size={16} />}
              iconPosition="right"
            >
              Explore Projects
            </Button>

            <Button
              href={personalInfo.resumePath}
              variant="secondary"
              size="lg"
              target="_blank"
              download="Devang_Parmar_Resume.pdf"
              icon={<Icon name="download" size={16} />}
            >
              Download Resume
            </Button>

            <Button
              href="#contact"
              variant="outline"
              size="lg"
              icon={<Icon name="mail" size={16} />}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Profiles */}
          <div className="hero-socials">
            <span className="hero-social-label">Find me on:</span>
            <div className="hero-social-icons">
              <a
                href={personalInfo.socialLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Devang Parmar on GitHub"
              >
                <Icon name="github" size={20} />
              </a>
              <a
                href={personalInfo.socialLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Devang Parmar on LinkedIn"
              >
                <Icon name="linkedin" size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-icon-btn"
                aria-label="Send Devang Parmar an Email"
              >
                <Icon name="mail" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Devang's Actual Professional Photo with Creative Framing */}
        <div className="hero-visual-col">
          <div className="hero-photo-wrapper">
            {/* Ambient Background Glow */}
            <div className="photo-ambient-glow"></div>

            {/* Photo Card Frame */}
            <div className="photo-frame">
              <img
                src={personalInfo.profilePhoto}
                alt={`${personalInfo.name} - MERN Stack Developer`}
                className="hero-photo-img"
                loading="eager"
              />

              {/* Verified Fresher Developer Badge overlay */}
              <div className="photo-badge-chip">
                <span className="chip-icon">🚀</span>
                <div className="chip-text">
                  <span className="chip-primary">MERN Stack Developer</span>
                  <span className="chip-secondary">Fresher • Virtual Height Intern</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react">
              <Icon name="react" size={18} />
              <span>React.js</span>
            </div>

            <div className="floating-badge badge-node">
              <Icon name="nodejs" size={18} />
              <span>Node.js</span>
            </div>

            <div className="floating-badge badge-mongo">
              <Icon name="mongodb" size={18} />
              <span>MongoDB</span>
            </div>

            <div className="floating-badge badge-express">
              <Icon name="express" size={18} />
              <span>Express.js</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
