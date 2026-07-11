import SectionTitle from '../components/SectionTitle';

const experiences = [
  {
    role: 'Graduate Teaching Assistant',
    organization: 'Pamplin Engage TA Program',
    period: 'Jan 2026 - May 2026',
    highlights: [
      'Facilitated structured learning for 90+ students across Leadership Skills and Strategic Management, designing curriculum frameworks and assessment tools that translated complex concepts into measurable outcomes.',
    ],
  },
  {
    role: 'IT Intern',
    organization: 'L&T Realty',
    period: 'May 2023 - July 2023',
    highlights: [
      'Built a Power BI dashboard consolidating sales call data for a 30+ person sales team, replacing manual Excel work estimated to save 8-10 hours of monthly consolidation.',
      'Developed custom Power Automate API connectors and trained an AI model to digitize 20-30 property invoices per month from unstructured documents.',
      'Conducted RPA performance benchmarking using Power Query and Excel, presenting automation efficiency findings directly to executive leadership.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell bg-bg">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Experience"
          title="Internship and applied analytics experience."
          description="Hands-on work across BI dashboards, automation workflows, and stakeholder-facing analytics."
        />

        <div className="mt-10 grid gap-5">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.organization}`}
              className="reveal surface-card relative rounded-2xl p-6 sm:pl-8"
            >
              <span
                className="absolute left-0 top-6 hidden h-[calc(100%-3rem)] w-1 rounded-full bg-gradient-to-b from-brand to-accent sm:block"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-ink">{experience.role}</h3>
                  <p className="mt-1 font-semibold text-brand">{experience.organization}</p>
                </div>
                <p className="chip">{experience.period}</p>
              </div>

              <ul className="mt-5 grid gap-3">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
