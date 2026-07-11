import SectionTitle from '../components/SectionTitle';

const AboutSection = () => {
  const education = [
    {
      title: 'M.S. in Business Administration',
      meta: 'Virginia Tech — Pamplin College of Business',
      points: [
        '3.9 GPA · May 2026',
        'Minor in Global Business Analytics',
        'Coursework across applied data science, analytics strategy, and business intelligence',
      ],
    },
    {
      title: 'B.S. in Business Information Technology',
      meta: 'Virginia Tech — Pamplin College of Business · May 2025',
      points: [
        '3.88 GPA',
        'Concentration in Cybersecurity Management & Analytics',
      ],
    },
    {
      title: 'B.S. in Computer Science Engineering',
      meta: 'NMIMS, Mumbai · May 2025',
      points: [
        'Minor in Data Science',
        'Foundation in technical computing and data systems',
      ],
    },
  ];

  return (
    <section id="about" className="section-shell bg-surface">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal">
            <SectionTitle
              eyebrow="About"
              title="Analytics with business context."
              description="I turn raw, messy data into structured analysis, clear recommendations, and stakeholder-ready narratives — connecting technical rigor to business decisions teams can act on."
            />
            <p className="mt-6 text-lg leading-relaxed text-muted">
              I hold an M.S. in Business Administration from Virginia Tech&apos;s Pamplin College of Business, built on dual undergraduate degrees in business information technology and computer science engineering — a foundation that spans dashboards, modeling, simulations, and explainable AI.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              I focus on making analytical work useful beyond the notebook: clarifying tradeoffs, shaping visual stories, and translating findings into decisions stakeholders can trust.
            </p>
          </div>

          <div className="reveal grid gap-4">
            {education.map((item) => (
              <article key={item.title} className="surface-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{item.meta}</p>
                <ul className="mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
