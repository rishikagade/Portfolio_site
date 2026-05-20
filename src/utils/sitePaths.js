export const basePath = import.meta.env.BASE_URL;

export const sitePath = (path = '/') => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return `${basePath}${cleanPath}`;
};

export const getCurrentSitePath = () => {
  const baseWithoutTrailingSlash = basePath.replace(/\/$/, '');
  const { pathname } = window.location;

  if (baseWithoutTrailingSlash && pathname.startsWith(baseWithoutTrailingSlash)) {
    return pathname.slice(baseWithoutTrailingSlash.length) || '/';
  }

  return pathname || '/';
};

export const isProjectsRoute = () => (
  window.location.hash === '#/projects' || getCurrentSitePath() === '/projects'
);
