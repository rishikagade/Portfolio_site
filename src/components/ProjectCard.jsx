import PrimaryButton from './PrimaryButton';

const ProjectCard = ({
  title,
  categories = [],
  timeframe,
  roleTags = [],
  stats = [],
  problem,
  methods,
  contributions,
  outcome,
  tools,
  links,
}) => {
  return (
    <article className="surface-card flex h-full flex-col rounded-2xl p-6 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <p className="eyebrow">{categories[0]}</p>
        {timeframe && (
          <p className="text-xs font-medium text-subtle">{timeframe}</p>
        )}
      </div>

      <h3 className="mt-3 text-xl font-bold text-ink">{title}</h3>

      {roleTags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {roleTags.map((tag) => (
            <span key={tag} className="role-tag">{tag}</span>
          ))}
        </div>
      )}

      {stats.length > 0 && (
        <div className="mt-5 grid grid-cols-3 gap-3 rounded-xl border border-line bg-surface-2/60 p-4">
          {stats.map((stat) => (
            <div key={stat.value + stat.label} className="min-w-0">
              <p className="stat-value text-lg leading-tight">{stat.value}</p>
              <p className="mt-1 text-[0.72rem] leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Problem</p>
          <p className="mt-1 leading-relaxed text-muted">{problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Approach</p>
          <p className="mt-1 leading-relaxed text-muted">{methods.join(' · ')}</p>
        </div>
        {contributions && (
          <ul className="grid gap-2">
            {contributions.map((contribution) => (
              <li key={contribution} className="flex gap-2.5 leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        )}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-subtle">Impact</p>
          <p className="mt-1 leading-relaxed text-ink">{outcome}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="chip">{tool}</span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3 pt-1">
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
      )}
    </article>
  );
};

export default ProjectCard;
