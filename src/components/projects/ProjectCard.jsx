import Button from '../common/Button';
import Icon from '../common/Icons';
import './ProjectCard.css';

export default function ProjectCard({ project, onOpenDetails }) {
  const { title, subtitle, tagline, description, tags, githubUrl, liveUrl, featured, statusBadge } = project;

  return (
    <div className={`card project-card ${featured ? 'featured-card' : ''}`}>
      <div className="project-card-header">
        <div className="project-card-badge-row">
          <span className="badge">
            <span className="badge-dot"></span>
            {statusBadge || (featured ? 'Featured' : 'Project')}
          </span>
        </div>

        <h3 className="project-title">{title}</h3>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
        {tagline && <p className="project-tagline">{tagline}</p>}
      </div>

      <p className="project-description">{description}</p>

      {tags && tags.length > 0 && (
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="project-card-actions">
        {liveUrl && (
          <Button
            href={liveUrl}
            variant="primary"
            size="sm"
            target="_blank"
            icon={<Icon name="externallink" size={14} />}
            iconPosition="right"
          >
            Live Demo
          </Button>
        )}

        {githubUrl && (
          <Button
            href={githubUrl}
            variant="secondary"
            size="sm"
            target="_blank"
            icon={<Icon name="github" size={14} />}
          >
            GitHub Code
          </Button>
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => onOpenDetails(project)}
          icon={<Icon name="eye" size={14} />}
        >
          Details
        </Button>
      </div>
    </div>
  );
}
