import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/PrimaryButton';
import SectionTitle from '../components/SectionTitle';
import { featuredProjects, projectCategories, projectsData } from '../data/projectsData';
import { sitePath } from '../utils/sitePaths';

const homepageProjectLimit = 4;

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects = activeCategory === 'All'
    ? featuredProjects.slice(0, homepageProjectLimit)
    : projectsData
        .filter((project) => project.category === activeCategory)
        .slice(0, homepageProjectLimit);

  return (
    <section id="projects" className="section-shell bg-cream">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Work that shipped."
            description="Projects built around real business problems - from client-facing capstones to production ML pipelines."
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
                    ? 'border-rubine bg-rubine text-white'
                    : 'border-camel-coat/60 bg-cream text-italian-roast hover:border-rubine hover:text-rubine'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <PrimaryButton variant="secondary" href={sitePath('/#/projects')}>
            View More Projects
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
