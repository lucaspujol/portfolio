import ProjectMark from './ProjectMark.jsx';
import { ui } from '../data/ui.js';

const items = ui.projects.legend;

export default function ProjectLegend() {
  return (
    <div className="project-legend">
      {items.map((item) => (
        <span key={item.kind} className="legend-item">
          <ProjectMark kind={item.kind} />
          {item.label}
        </span>
      ))}
    </div>
  );
}
