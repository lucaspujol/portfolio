import resumePdf from '../assets/resume.pdf';
import { profile } from '../data/profile.js';
import { ui } from '../data/ui.js';
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from './icons/index.jsx';

export default function Hero() {
  const { name, role, tagline, intro, links } = profile;
  const { viewWork, resume, social } = ui.hero;

  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">{role}</p>
      <h1 className="hero-name">
        <span className="hero-prompt" aria-hidden="true">
          &gt;<span className="hero-caret">_</span>
        </span>
        {name}
      </h1>
      <p className="hero-tagline">{tagline}</p>
      <p className="hero-location">{intro}</p>

      <div className="hero-actions">
        <a className="btn" href="#work">{viewWork}</a>
        <a className="btn btn-ghost" href={resumePdf} download>
          <DownloadIcon />
          {resume}
        </a>
      </div>

      <div className="hero-socials">
        <a href={links.github} target="_blank" rel="noreferrer" aria-label={social.github}>
          <GitHubIcon />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label={social.linkedin}>
          <LinkedInIcon />
        </a>
        <a href={`mailto:${links.email}`} aria-label={social.email}>
          <MailIcon />
        </a>
      </div>
    </section>
  );
}
