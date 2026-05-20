import SectionTitle from '../components/SectionTitle';

const experiences = [
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
  {
    role: 'Teaching Assistant',
    organization: 'Pamplin Engage TA Program',
    period: 'Jan 2026 - May 2026',
    highlights: [
      'Facilitated structured learning for 90+ students across Leadership Skills and Strategic Management, designing curriculum frameworks and assessment tools that translated complex concepts into measurable outcomes.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-shell bg-cream">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Experience"
          title="Internship and applied analytics experience."
          description="Hands-on experience across model development, BI dashboards, automation workflows, and stakeholder-facing analytics."
        />

        <div className="mt-10 grid gap-5">
          {experiences.map((experience) => (
            <article key={`${experience.role}-${experience.organization}`} className="focus-card rounded-lg p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-italian-roast">{experience.role}</h3>
                  <p className="mt-1 font-semibold text-rubine">{experience.organization}</p>
                </div>
                <p className="text-sm font-semibold text-muted">{experience.period}</p>
              </div>

              <ul className="mt-5 grid gap-3">
                {experience.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-relaxed text-secondary">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rubine" aria-hidden="true" />
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
