import { profile } from '../data/profile.js';
import { ui } from '../data/ui.js';
import SectionHeading from './SectionHeading.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/index.jsx';

export default function Contact() {
  const { links } = profile;
  const { lead, github, linkedin } = ui.contact;

  return (
    <section id="contact" className="section">
      <SectionHeading {...ui.sections.contact} />
      <p className="contact-lead">{lead}</p>
      <div className="contact-links">
        <a className="contact-link" href={`mailto:${links.email}`}>
          <MailIcon />
          {links.email}
        </a>
        <a className="contact-link" href={links.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          {github}
        </a>
        <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          {linkedin}
        </a>
      </div>
    </section>
  );
}
