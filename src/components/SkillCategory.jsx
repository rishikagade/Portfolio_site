const SkillCategory = ({ title, skills, coreSkills = [] }) => {
  return (
    <article className="surface-card h-full rounded-2xl p-6">
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          const isCore = coreSkills.includes(skill);
          return (
            <span key={skill || index} className={`chip ${isCore ? 'chip-core' : ''}`}>
              {skill}
            </span>
          );
        })}
      </div>
    </article>
  );
};

export default SkillCategory;
