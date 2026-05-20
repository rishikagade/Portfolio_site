const SkillCategory = ({ title, skills, coreSkills = [] }) => {
  return (
    <article className="focus-card h-full rounded-lg p-6">
      <h3 className="mb-2 text-xl font-semibold text-italian-roast">
        {title}
      </h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          const isCoreSkill = coreSkills.includes(skill);

          return (
            <span
              key={skill || index}
              className={`skill-tag text-italian-roast ${isCoreSkill ? 'border-rubine/50 bg-rubine/10' : ''}`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </article>
  );
};

export default SkillCategory;
