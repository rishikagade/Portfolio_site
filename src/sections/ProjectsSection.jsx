import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/PrimaryButton';
import SectionTitle from '../components/SectionTitle';
import { featuredProjects, projectCategories, projectsData } from '../data/projectsData';
import { sitePath } from '../utils/sitePaths';

const homepageProjectLimit = 6;

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const isDefaultView = activeCategory === 'All';

  const visibleProjects = isDefaultView
    ? featuredProjects.slice(0, homepageProjectLimit)
    : projectsData
        .filter((project) => project.categories.includes(activeCategory))
        .slice(0, homepageProjectLimit);

  // In the default (featured) view, lead with a full-width spotlight card.
  const spotlight = isDefaultView ? visibleProjects[0] : null;
  const gridProjects = isDefaultView ? visibleProjects.slice(1) : visibleProjects;

  return (
    <section id="projects" className="section-shell bg-bg">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Selected work."
            description="Projects built around real problems — from a client-facing capstone to independently built, deployed analytics tools."
          />
          <div className="flex flex-wrap gap-2" aria-label="Project filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'border-brand bg-brand text-brand-contrast'
                    : 'border-line bg-surface text-muted hover:border-brand/50 hover:text-brand'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {spotlight && (
          <div className="reveal mt-10">
            <ProjectCard {...spotlight} />
          </div>
        )}

        <div className={`grid gap-6 lg:grid-cols-2 ${spotlight ? 'mt-6' : 'mt-10'}`}>
          {gridProjects.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryButton variant="secondary" href={sitePath('/#/projects')}>
            View All Projects
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
