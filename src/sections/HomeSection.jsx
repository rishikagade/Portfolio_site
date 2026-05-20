import PrimaryButton from '../components/PrimaryButton';
import { RESUME_URL } from '../data/siteLinks';

const HomeSection = () => {
  const highlights = [
    'MSBA @ Virginia Tech · 3.9 GPA',
    'Python • SQL • Tableau • Power BI',
  ];

  return (
    <section id="home" className="section-shell min-h-[calc(100vh-64px)]">
      <div className="container-shell grid min-h-[calc(100vh-10rem)] items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-rubine">
            Data & Business Analyst
          </p>
          <h1 className="mb-6 max-w-4xl">
            Rishika Gade
          </h1>
          <p className="max-w-3xl text-2xl font-semibold leading-snug text-secondary sm:text-3xl">
            Data & Business Analyst turning data into decisions through ML models, BI dashboards, and automated pipelines.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            M.S. in Business Administration graduate of Virginia Tech's Pamplin College of Business with client-facing experience in financial services and consumer insights, known for connecting technical analysis to executive-ready storytelling.
          </p>
          <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-muted">
            Available May 2026 · Open to full-time roles · On-site/ Hybrid / Remote
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton variant="primary" href="#projects">
              View Projects
            </PrimaryButton>
            <PrimaryButton
              variant="secondary"
              href={RESUME_URL}
              download
            >
              Download Resume
            </PrimaryButton>
            <PrimaryButton variant="outline" href="#contact">
              Contact Me
            </PrimaryButton>
          </div>
        </div>

        <aside className="focus-card rounded-lg p-6 sm:p-8" aria-label="Portfolio highlights">
          <p className="text-sm font-semibold uppercase text-rubine">
            Focus Areas
          </p>
          <div className="mt-6 grid gap-4">
            {highlights.map((highlight) => (
              <div key={highlight} className="rounded-lg border border-camel-coat/40 bg-cream/70 p-4">
                <p className="font-semibold text-italian-roast">{highlight}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeSection;
