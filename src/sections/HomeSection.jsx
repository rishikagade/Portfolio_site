import PrimaryButton from '../components/PrimaryButton';
import { RESUME_URL } from '../data/siteLinks';

const heroStats = [
  { value: '37K+', label: 'records analyzed in capstone' },
  { value: '0.894', label: 'best model validation AUC' },
  { value: 'Honorary Mention', label: "Marriott's CodeFest" },
];

const focusAreas = ['Python', 'SQL', 'Tableau', 'Power BI', 'Machine Learning'];

const HomeSection = () => {
  return (
    <section id="home" className="section-shell min-h-[calc(100vh-64px)]">
      <div className="container-shell grid min-h-[calc(100vh-12rem)] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal">
          <p className="eyebrow mb-4">Data Scientist &amp; Business Analyst</p>
          <h1 className="mb-6 text-ink">Rishika Gade</h1>
          <p className="max-w-2xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            Turning data into decisions — through ML models, BI dashboards, and automated pipelines.
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            M.S. in Business Administration graduate of Virginia Tech&apos;s Pamplin College of Business, with client-facing experience in financial services and consumer insights — known for connecting technical analysis to executive-ready storytelling.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/70 px-4 py-1.5 text-sm font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Available now · On-site / Hybrid / Remote
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PrimaryButton variant="primary" href="#projects">View Projects</PrimaryButton>
            <PrimaryButton variant="secondary" href={RESUME_URL} download>Download Resume</PrimaryButton>
            <PrimaryButton variant="outline" href="#contact">Contact Me</PrimaryButton>
          </div>
        </div>

        <aside className="reveal surface-card rounded-2xl p-6 sm:p-8" aria-label="Credentials and highlights">
          <p className="eyebrow">Credentials</p>
          <div className="mt-4 border-b border-line pb-5">
            <p className="text-lg font-bold text-ink">M.S. in Business Administration</p>
            <p className="mt-1 text-sm text-muted">Virginia Tech · Pamplin College of Business</p>
            <p className="mt-1 text-sm font-medium text-muted">3.9 GPA · May 2026</p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="stat-value text-xl leading-tight">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <p className="eyebrow mb-3">Core toolkit</p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="chip chip-core">{area}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeSection;
