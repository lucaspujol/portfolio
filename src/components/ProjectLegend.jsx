import ProjectMark from './ProjectMark.jsx';

const items = [
  { kind: 'perso', label: 'Personal' },
  { kind: 'school', label: 'Epitech' },
];

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
