import SkillCategory from '../components/SkillCategory';
import SectionTitle from '../components/SectionTitle';

const SkillsSection = () => {
  const analyticsSkills = [
    'Machine Learning',
    'Predictive Analytics',
    'Statistical Modeling',
    'Classification & Clustering',
    'Regression Analysis',
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
    'SAS Viya',
    'JMP',
    'Docker',
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
    'Prompt Engineering',
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Skills"
          title="What I work with."
          description="From exploratory analysis to executive-ready dashboards — I'm comfortable across the full analytics stack."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <SkillCategory title="Analytics & Modeling" skills={analyticsSkills} />
          <SkillCategory title="Languages & Tools" skills={programmingSkills} coreSkills={['Python', 'SQL', 'R']} />
          <SkillCategory title="Business Intellegence" skills={businessSkills} coreSkills={['Power BI', 'Tableau']} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
