import { useEffect, useState } from 'react';
import { getCurrentSitePath, isProjectsRoute, sitePath } from '../utils/sitePaths';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const isHomePage = getCurrentSitePath() === '/' && !isProjectsRoute();
  const initialActiveSection = isHomePage ? window.location.hash.replace('#', '') || 'home' : 'projects';
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('projects');
      return undefined;
    }

    let animationFrameId = null;

    const updateActiveSection = () => {
      const sectionPositions = navItems
        .map((item) => {
          const section = document.getElementById(item.id);
          return section ? { id: item.id, top: section.getBoundingClientRect().top } : null;
        })
        .filter(Boolean);

      if (!sectionPositions.length) {
        return;
      }

      const viewportTarget = Math.min(160, window.innerHeight * 0.3);
      const currentSection = sectionPositions.reduce((current, section) => {
        if (section.top <= viewportTarget) {
          return section;
        }

        return current;
      }, sectionPositions[0]);

      setActiveSection(currentSection.id);
    };

    const requestActiveSectionUpdate = () => {
      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', requestActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', requestActiveSectionUpdate);
    window.addEventListener('hashchange', requestActiveSectionUpdate);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener('scroll', requestActiveSectionUpdate);
      window.removeEventListener('resize', requestActiveSectionUpdate);
      window.removeEventListener('hashchange', requestActiveSectionUpdate);
    };
  }, [isHomePage]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 shadow-sm backdrop-blur">
      <nav className="container-shell" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between">
          <a href={isHomePage ? '#home' : sitePath('/#home')} onClick={() => handleNavClick('home')} className="flex-shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
            <span className="font-heading text-xl font-bold text-ink">
              Rishika Gade
            </span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={isHomePage ? `#${item.id}` : sitePath(`/#${item.id}`)}
                onClick={() => handleNavClick(item.id)}
                className={activeSection === item.id ? 'active-link' : 'nav-link'}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-md border border-line p-2 text-ink transition hover:border-brand/50 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
            >
              <span aria-hidden="true">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id="mobile-menu" className="grid gap-2 border-t border-line py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={isHomePage ? `#${item.id}` : sitePath(`/#${item.id}`)}
                onClick={() => handleNavClick(item.id)}
                className={activeSection === item.id ? 'active-link' : 'nav-link'}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
