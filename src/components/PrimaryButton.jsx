const PrimaryButton = ({ 
  children, 
  variant = 'primary', 
  href = '#', 
  external = false,
  download = false,
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-rubine disabled:opacity-50 disabled:pointer-events-none';
  
  const variantClasses = {
    primary: 'bg-rubine text-white shadow-md shadow-rubine/20 hover:-translate-y-0.5 hover:bg-rubine/90 hover:shadow-lg hover:shadow-rubine/25',
    secondary: 'bg-white text-rubine border border-rubine/40 hover:-translate-y-0.5 hover:bg-rubine/10',
    outline: 'bg-transparent text-italian-roast border border-italian-roast/30 hover:-translate-y-0.5 hover:bg-italian-roast/5',
    link: 'px-0 py-0 text-rubine hover:text-rubine/80 underline underline-offset-4'
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
