import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';
import Experience from './Experience.jsx';

export default function About() {
  const { about, experience } = profile;

  return (
    <section id="about" className="section">
      <SectionHeading index="01" title="About" />
      <div className="about-text">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Experience items={experience} />
    </section>
  );
}
