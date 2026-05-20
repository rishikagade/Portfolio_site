import PrimaryButton from './PrimaryButton';

const ProjectCard = ({
  title,
  context,
  category,
  problem,
  tools,
  methods,
  contributions,
  outcome,
  links,
}) => {
  return (
    <article className="focus-card flex h-full flex-col rounded-lg p-6">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase text-rubine">
          {category}
        </p>
        <h3 className="text-xl font-semibold text-italian-roast">{title}</h3>
        {context && (
          <p className="mt-2 font-semibold text-rubine">{context}</p>
        )}
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm font-semibold text-italian-roast">Business Problem</p>
            <p className="mt-1 leading-relaxed text-secondary">{problem}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-italian-roast">Analysis / Methods</p>
            <p className="mt-1 leading-relaxed text-secondary">{methods.join(', ')}</p>
          </div>
          {contributions && (
            <div>
              <p className="text-sm font-semibold text-italian-roast">Key Contributions</p>
              <ul className="mt-2 grid gap-2">
                {contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3 leading-relaxed text-secondary">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rubine" aria-hidden="true" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="text-sm font-semibold text-italian-roast">Business Impact</p>
            <p className="mt-1 leading-relaxed text-secondary">{outcome}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="skill-tag">
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 pt-2">
        {links.map((link) => (
          <PrimaryButton
            key={link.label}
            variant="secondary"
            href={link.href}
            external={link.href.startsWith('http')}
            className="px-4 py-2"
          >
            {link.label}
          </PrimaryButton>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
