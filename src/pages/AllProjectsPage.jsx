import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import { projectCategories, projectsData } from '../data/projectsData';
import { sitePath } from '../utils/sitePaths';
import useScrollReveal from '../hooks/useScrollReveal';

const AllProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  useScrollReveal();

  const visibleProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.categories.includes(activeCategory));

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <section className="section-shell">
          <div className="container-shell">
            <PrimaryButton variant="link" href={sitePath('/#projects')}>
              ← Back to homepage
            </PrimaryButton>

            <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionTitle
                eyebrow="All Projects"
                title="Project library."
                description="A complete view of analytics, product, finance, dashboarding, and programming work. Featured projects are prioritized on the homepage; this page keeps the broader body of work accessible."
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
