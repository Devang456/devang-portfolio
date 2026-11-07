export default function Icon({ name, size = 20, className = '', ...props }) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `svg-icon ${className}`.trim(),
    ...props
  };

  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg {...iconProps} viewBox="-11.5 -10.23174 23 20.46348" stroke="currentColor" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'nodejs':
      return (
        <svg {...iconProps}>
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M12 22V12" />
          <path d="M21 7l-9 5" />
          <path d="M3 7l9 5" />
        </svg>
      );

    case 'express':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <text x="3" y="17" fontSize="13" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="monospace">ex</text>
          <path d="M14 6h7M17 12h4M14 18h7" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg {...iconProps}>
          <path d="M12 2s-6 5.5-6 11.5c0 4.5 3.5 8.5 6 8.5s6-4 6-8.5C18 7.5 12 2 12 2z" />
          <path d="M12 2v20" />
        </svg>
      );

    case 'javascript':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M10 12v4a2 2 0 0 1-2 2H7" />
          <path d="M14 18c1.5 0 3-1 3-2.5S15 13 14 12c-1-.5-2-1-2-2.5S13 7 15 7c1 0 2 .5 2 1" />
        </svg>
      );

    case 'html5':
      return (
        <svg {...iconProps}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
          <path d="M8 8h8M8 12h7l-.5 5-2.5.8-2.5-.8-.2-2" />
        </svg>
      );

    case 'css3':
      return (
        <svg {...iconProps}>
          <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
          <path d="M16 8H8v4h7.5L15 16.5 12 17.5l-3-.8-.2-2" />
        </svg>
      );

    case 'bootstrap':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 7h4a2.5 2.5 0 0 1 0 5H9V7z" />
          <path d="M9 12h4.5a2.5 2.5 0 0 1 0 5H9v-5z" />
        </svg>
      );

    case 'git':
      return (
        <svg {...iconProps}>
          <circle cx="6" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="9" r="3" />
          <path d="M6 9v6" />
          <path d="M9 9l6-2" />
        </svg>
      );

    case 'github':
      return (
        <svg {...iconProps}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );

    case 'vscode':
      return (
        <svg {...iconProps}>
          <path d="M16.5 2L5 10.5 2 8v8l3-2.5L16.5 22 22 19V5z" />
          <path d="M16.5 2v20" />
        </svg>
      );

    case 'npm':
      return (
        <svg {...iconProps}>
          <path d="M3 5h18v14H3z" />
          <path d="M7 9v6h5V9h5v6h2V9" />
        </svg>
      );

    case 'postman':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" />
          <path d="M7 13l4-4 4 4" />
          <path d="M11 9v8" />
          <path d="M15 15l2-2" />
        </svg>
      );

    case 'jwt':
    case 'jwtauthentication':
      return (
        <svg {...iconProps}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );

    case 'middleware':
      return (
        <svg {...iconProps}>
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      );

    case 'restapi':
    case 'api':
      return (
        <svg {...iconProps}>
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth={3} />
          <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth={3} />
          <path d="M14 6h4M14 18h4" />
        </svg>
      );

    case 'mongoose':
    case 'mongooseorm':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M12 8v14" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg {...iconProps}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case 'mail':
    case 'email':
      return (
        <svg {...iconProps}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case 'phone':
      return (
        <svg {...iconProps}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );

    case 'mappin':
    case 'location':
      return (
        <svg {...iconProps}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );

    case 'externallink':
      return (
        <svg {...iconProps}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );

    case 'download':
      return (
        <svg {...iconProps}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      );

    case 'copy':
      return (
        <svg {...iconProps}>
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      );

    case 'check':
      return (
        <svg {...iconProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );

    case 'close':
      return (
        <svg {...iconProps}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );

    case 'briefcase':
      return (
        <svg {...iconProps}>
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );

    case 'graduationcap':
      return (
        <svg {...iconProps}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );

    case 'calendar':
      return (
        <svg {...iconProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );

    case 'eye':
      return (
        <svg {...iconProps}>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case 'arrowright':
      return (
        <svg {...iconProps}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );

    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}

