export default function Container({ children, className = '', id, ...props }) {
  return (
    <div id={id} className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

