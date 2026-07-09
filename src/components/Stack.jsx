import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';

export default function Stack() {
  const groups = Object.entries(profile.stack);

  return (
    <section id="stack" className="section">
      <SectionHeading index="03" title="Stack" />
      <div className="stack-grid">
        {groups.map(([group, items]) => (
          <div className="stack-group" key={group}>
            <h4>{group}</h4>
            <ul className="tech-tags">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
