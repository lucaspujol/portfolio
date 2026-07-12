import { profile } from '../data/profile.js';
import { ui } from '../data/ui.js';
import SectionHeading from './SectionHeading.jsx';
import Experience from './Experience.jsx';

export default function About() {
  const { about, experience } = profile;

  return (
    <section id="about" className="section">
      <SectionHeading {...ui.sections.about} />
      <div className="about-text">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Experience items={experience} />
    </section>
  );
}
