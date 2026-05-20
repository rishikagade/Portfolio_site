const SectionTitle = ({ title, eyebrow, description, align = 'left' }) => {
  return (
    <div className={`section-title ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase text-rubine">
          {eyebrow}
        </p>
      )}
      <h2 className="font-bold text-italian-roast">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-secondary">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
