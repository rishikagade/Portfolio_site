import PrimaryButton from '../components/PrimaryButton';
import { RESUME_URL } from '../data/siteLinks';

const focusAreas = [
  { title: 'Analytics & Modeling', detail: 'ML, forecasting, and risk models' },
  { title: 'BI & Dashboards', detail: 'Power BI, Tableau, and data storytelling' },
  { title: 'Data Engineering', detail: 'SQL, ETL, REST APIs, MongoDB' },
  { title: 'AI & Automation', detail: 'Applied AI and workflow automation' },
];

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

        <aside className="reveal surface-card rounded-2xl p-6 sm:p-8" aria-label="Credentials and focus areas">
          <p className="eyebrow">Credentials</p>
          <div className="mt-4 border-b border-line pb-5">
            <p className="text-lg font-bold text-ink">M.S. in Business Administration</p>
            <p className="mt-1 text-sm text-muted">Virginia Tech · Pamplin College of Business</p>
            <p className="mt-1 text-sm font-medium text-muted">3.9 GPA · May 2026</p>
          </div>

          <div className="mt-5">
            <p className="eyebrow mb-4">What I do</p>
            <ul className="grid gap-4">
              {focusAreas.map((area) => (
                <li key={area.title} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-ink">{area.title}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-muted">{area.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default HomeSection;
