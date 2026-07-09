import resumePdf from '../assets/resume.pdf';
import { profile } from '../data/profile.js';
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './icons/index.jsx';

export default function Hero() {
  const { name, role, tagline, intro, links } = profile;

  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">{role}</p>
      <h1 className="hero-name">{name}</h1>
      <p className="hero-tagline">{tagline}</p>
      <p className="hero-location">{intro}</p>

      <div className="hero-actions">
        <a className="btn" href="#work">View work</a>
        <a className="btn btn-ghost" href={resumePdf} download>
          <DownloadIcon />
          Resume
        </a>
      </div>

      <div className="hero-socials">
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${links.email}`} aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </section>
  );
}
