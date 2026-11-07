import { useEffect } from 'react';
import Button from '../common/Button';
import Icon from '../common/Icons';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <Icon name="close" size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="badge">
              <span className="badge-dot"></span>
              {project.statusBadge}
            </span>
            {project.featured && <span className="featured-pill">Primary Featured</span>}
          </div>

          <h2 id="modal-title" className="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        {/* Modal Scrollable Content */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Icon name="eye" size={16} />
              <span>Project Overview</span>
            </h3>
            <p className="modal-text">{project.longDescription || project.description}</p>
          </div>

          {/* Problem Solved */}
          {project.problemSolved && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <Icon name="briefcase" size={16} />
                <span>Problem Solved & Impact</span>
              </h3>
              <p className="modal-text">{project.problemSolved}</p>
            </div>
          )}

          {/* Key Implemented Features */}
          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">
                <Icon name="check" size={16} />
                <span>Verified Implemented Features</span>
              </h3>
              <ul className="modal-features-list">
                {project.features.map((feat, index) => (
                  <li key={index} className="modal-feature-item">
                    <span className="feature-check">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack */}
          <div className="modal-section">
            <h3 className="modal-section-title">
              <Icon name="code" size={16} />
              <span>Technologies Used</span>
            </h3>
            <div className="modal-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="modal-tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Notice if not deployed */}
          {project.deploymentNotice && (
            <div className="modal-notice">
              <span className="notice-icon">ℹ</span>
              <span>{project.deploymentNotice}</span>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              size="md"
              target="_blank"
              icon={<Icon name="externallink" size={16} />}
              iconPosition="right"
            >
              Launch Live Demo
            </Button>
          )}

          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="md"
              target="_blank"
              icon={<Icon name="github" size={16} />}
            >
              View GitHub Repository
            </Button>
          )}

          <Button variant="ghost" size="md" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

