import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';
import StatusBadge from './StatusBadge.jsx';
import StatusGrid from './StatusGrid.jsx';

export default function Status() {
  const { status } = profile;

  return (
    <section id="status" className="section">
      <SectionHeading index="01" title="Status" />
      <div className="status-card">
        <div className="status-card-head">
          <StatusBadge available={status.available} label={status.label} />
        </div>
        <p className="status-statement">{status.statement}</p>
        <StatusGrid items={status.items} />
      </div>
    </section>
  );
}
