import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import AllProjectsPage from './pages/AllProjectsPage';
import { isProjectsRoute } from './utils/sitePaths';
import useScrollReveal from './hooks/useScrollReveal';

const App = () => {
  const [isAllProjectsPage, setIsAllProjectsPage] = useState(isProjectsRoute);

  useScrollReveal();

  useEffect(() => {
    const handleLocationChange = () => {
      setIsAllProjectsPage(isProjectsRoute());
    };

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  if (isAllProjectsPage) {
    return <AllProjectsPage />;
  }

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
