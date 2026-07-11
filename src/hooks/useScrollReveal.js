import { useEffect } from 'react';

// Progressive-enhancement scroll reveal. Marks the root as reveal-ready (so CSS
// only hides elements once JS is running), then fades `.reveal` elements in as
// they enter the viewport. A MutationObserver picks up elements added later
// (e.g. cards swapped in by category filtering) so they never stay hidden.
// Respects prefers-reduced-motion via CSS and here.
const useScrollReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    root.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => io.observe(el));
    };

    observeAll();

    // Catch elements rendered after mount (filtered lists, route swaps).
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(() => {
        queued = false;
        observeAll();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};

export default useScrollReveal;
