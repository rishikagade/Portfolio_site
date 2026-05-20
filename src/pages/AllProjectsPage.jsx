import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projectCategories, projectsData } from '../data/projectsData';
import { sitePath } from '../utils/sitePaths';

const AllProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream text-italian-roast">
      <Header />
      <main>
        <section className="section-shell">
          <div className="container-shell">
            <PrimaryButton variant="link" href={sitePath('/#projects')}>
              Back to homepage
            </PrimaryButton>

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionTitle
                eyebrow="All Projects"
                title="Project library."
                description="A complete view of analytics, product, finance, dashboarding, and programming projects. Featured projects are prioritized on the homepage; this page keeps the broader body of work accessible."
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
                        : 'border-camel-coat/60 bg-white text-italian-roast hover:border-rubine hover:text-rubine'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjectsPage;
