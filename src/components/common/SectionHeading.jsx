import './SectionHeading.css';

export default function SectionHeading({
  badge,
  title,
  gradientWord,
  description,
  align = 'center',
  className = '',
  children
}) {
  return (
    <div className={`section-heading align-${align} ${className}`.trim()}>
      {badge && (
        <div className="section-badge-wrapper">
          <span className="badge">
            <span className="badge-dot"></span>
            {badge}
          </span>
        </div>
      )}

      {title && (
        <h2 className="section-title">
          {title}{' '}
          {gradientWord && <span className="gradient-text">{gradientWord}</span>}
        </h2>
      )}

      {description && <p className="section-description">{description}</p>}

      {children}
    </div>
  );
}
