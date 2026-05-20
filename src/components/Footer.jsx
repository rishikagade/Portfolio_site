import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/siteLinks';

const Footer = () => {
  return (
    <footer className="bg-italian-roast py-8 text-white">
      <div className="container-shell flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Rishika Gade. Analytics portfolio.
        </p>
        <div className="flex justify-center gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white transition-colors hover:text-camel-coat">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-white transition-colors hover:text-camel-coat">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`} className="text-sm text-white transition-colors hover:text-camel-coat">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
