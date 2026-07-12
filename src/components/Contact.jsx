import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/index.jsx';

export default function Contact() {
  const { links } = profile;

  return (
    <section id="contact" className="section">
      <SectionHeading index="05" title="Get in touch" />
      <p className="contact-lead">
        Feel free to reach out to me via email or connect with me on GitHub and 
        LinkedIn. 
      </p>
      <div className="contact-links">
        <a className="contact-link" href={`mailto:${links.email}`}>
          <MailIcon />
          {links.email}
        </a>
        <a className="contact-link" href={links.github} target="_blank" rel="noreferrer">
          <GitHubIcon />
          github.com/lucaspujol
        </a>
        <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
          Lucas Pujol
        </a>
      </div>
    </section>
  );
}
