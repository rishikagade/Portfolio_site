import PrimaryButton from '../components/PrimaryButton';
import SectionTitle from '../components/SectionTitle';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, PHONE, RESUME_URL } from '../data/siteLinks';

const ContactSection = () => {
  return (
    <section id="contact" className="section-shell bg-surface">
      <div className="container-shell">
        <div className="reveal surface-card rounded-2xl p-6 sm:p-8 lg:p-10">
          <SectionTitle
            eyebrow="Contact"
            title="Ready to talk analytics roles."
            description="Open to full-time roles in Data Science, Data & Business Analysis, BI and Analytics Engineering, and strategy-focused analytics."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="grid gap-4">
              <div>
                <p className="eyebrow">Email</p>
                <a href={`mailto:${EMAIL}`} className="mt-1 inline-block text-lg font-semibold text-ink hover:text-brand">
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="eyebrow">Phone</p>
                <a href={`tel:${PHONE.replace(/[^+\d]/g, '')}`} className="mt-1 inline-block text-lg font-semibold text-ink hover:text-brand">
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <PrimaryButton variant="primary" href={`mailto:${EMAIL}`}>Email Me</PrimaryButton>
              <PrimaryButton variant="secondary" href={LINKEDIN_URL} external>LinkedIn</PrimaryButton>
              <PrimaryButton variant="secondary" href={GITHUB_URL} external>GitHub</PrimaryButton>
              <PrimaryButton variant="outline" href={RESUME_URL} download>Download Resume</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
