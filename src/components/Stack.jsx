import { profile } from '../data/profile.js';
import { ui } from '../data/ui.js';
import SectionHeading from './SectionHeading.jsx';
import TechTags from './TechTags.jsx';

export default function Stack() {
  const groups = Object.entries(profile.stack);

  return (
    <section id="stack" className="section">
      <SectionHeading {...ui.sections.stack} />
      <div className="stack-grid">
        {groups.map(([group, items]) => (
          <div className="stack-group" key={group}>
            <h4>{group}</h4>
            <TechTags tech={items} />
          </div>
        ))}
      </div>
    </section>
  );
}
