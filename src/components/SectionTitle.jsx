const SectionTitle = ({ title, eyebrow, description, align = 'left' }) => {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-ink">{title}</h2>
      <div className={`section-divider mt-5 ${align === 'center' ? 'mx-auto' : ''}`} />
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
