import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/siteLinks';

const Footer = () => {
  return (
    <footer className="border-t border-line bg-surface py-8">
      <div className="container-shell flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Rishika Gade · Analytics portfolio
        </p>
        <div className="flex justify-center gap-5">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted transition-colors hover:text-brand">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted transition-colors hover:text-brand">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-muted transition-colors hover:text-brand">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
