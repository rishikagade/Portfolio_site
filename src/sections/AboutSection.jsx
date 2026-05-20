import SectionTitle from '../components/SectionTitle';

const AboutSection = () => {
  const highlights = [
    {
      title: 'M.S. Business Administration (MSBA)',
      points: [
        'Virginia Tech — Pamplin College of Business',
        'GPA 3.9 · May 2026',
        'Minor in Global Business Analytics',
        'Coursework across applied data science, analytics strategy, and business intelligence',
      ],
    },
    {
      title: 'B.S. Business Information Technology & B.S. Computer Science Engineering',
      points: [
        'Dual undergraduate degree',
        'Concentrations in Cybersecurity Management & Analytics and Data Science',
        'Combined business systems, security, and technical computing',
      ],
    },
  ];

  return (
    <section id="about" className="section-shell bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="About"
              title="Analytics with business context."
              description="I turn raw and messy data into structured analysis, clear recommendations, and stakeholder-ready narratives — connecting technical rigor to business decisions that teams can act on."
            />
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              I hold an M.S. in Business Administration from Virginia Tech's Pamplin College of Business, with a foundation in data science and hands-on project work across dashboards, modeling, simulations, and explainable AI.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-secondary">
              I focus on making analytical work useful beyond the notebook: clarifying tradeoffs, shaping visual stories, and translating findings into decisions stakeholders can trust.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:pt-14">
            {highlights.map((item) => (
              <article key={item.title} className="focus-card rounded-lg p-6">
                <h3 className="text-lg font-semibold text-italian-roast">{item.title}</h3>
                <ul className="mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-secondary">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-rubine" aria-hidden="true" />
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
