const PrimaryButton = ({
  children,
  variant = 'primary',
  href = '#',
  external = false,
  download = false,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-brand text-brand-contrast shadow-sm hover:-translate-y-0.5 hover:bg-brand-strong',
    secondary: 'bg-surface text-brand border border-brand/40 hover:-translate-y-0.5 hover:bg-brand-soft',
    outline: 'bg-transparent text-ink border border-line hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand',
    link: 'px-0 py-0 text-brand hover:text-brand-strong underline underline-offset-4',
  };

  const Component = href && href !== '#' ? 'a' : 'button';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      href={href && href !== '#' ? href : undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      download={download || undefined}
    >
      {children}
    </Component>
  );
};

export default PrimaryButton;
