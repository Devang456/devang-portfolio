import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  target,
  rel,
  download,
  icon,
  iconPosition = 'left',
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  const combinedClassName = `btn btn-${variant} btn-${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    const isBlank = target === '_blank';
    const safeRel = isBlank ? (rel || 'noopener noreferrer') : rel;

    return (
      <a
        href={href}
        className={combinedClassName}
        target={target}
        rel={safeRel}
        download={download}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
