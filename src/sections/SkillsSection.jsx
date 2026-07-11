import SkillCategory from '../components/SkillCategory';
import SectionTitle from '../components/SectionTitle';

const SkillsSection = () => {
  const analyticsSkills = [
    'Machine Learning',
    'Predictive Analytics',
    'Statistical Modeling',
    'Classification & Clustering',
    'Regression Analysis',
    'PCA',
    'SHAP / Model Explainability',
    'Text Analysis',
    'Financial Modeling',
  ];

  const programmingSkills = [
    'Python',
    'SQL',
    'R',
    'Excel Advanced',
    'Git',
    'REST APIs',
    'ETL',
    'MongoDB',
    'AWS (S3, Lambda, IAM)',
    'Docker',
    'SAS Viya',
    'JMP',
  ];

  const businessSkills = [
    'Power BI',
    'Tableau',
    'Power Automate',
    'Power Apps',
    'Dashboarding',
    'Data Storytelling',
    'Stakeholder Communication',
    'Requirements Gathering',
  ];

  const aiSkills = [
    'Generative AI (Claude, ChatGPT)',
    'AI-Assisted Development (Claude Code, Codex)',
    'Prompt Engineering',
    'Privacy-Safe AI Reporting',
  ];

  return (
    <section id="skills" className="section-shell bg-surface">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Skills"
          title="What I work with."
          description="From exploratory analysis to executive-ready dashboards and deployed tools — comfortable across the full analytics stack."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SkillCategory title="Analytics & Modeling" skills={analyticsSkills} coreSkills={['Machine Learning', 'SHAP / Model Explainability']} />
          <SkillCategory title="Languages & Tools" skills={programmingSkills} coreSkills={['Python', 'SQL', 'R']} />
          <SkillCategory title="Business Intelligence" skills={businessSkills} coreSkills={['Power BI', 'Tableau']} />
          <SkillCategory title="AI & Automation" skills={aiSkills} coreSkills={['Prompt Engineering']} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
