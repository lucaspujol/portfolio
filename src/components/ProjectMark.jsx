import { ui } from '../data/ui.js';

const marks = ui.projects.marks;

export default function ProjectMark({ kind }) {
  const mark = marks[kind] ?? marks.perso;

  return (
    <span
      className={`project-mark project-mark-${kind === 'school' ? 'school' : 'perso'}`}
      role="img"
      aria-label={mark.label}
      title={mark.label}
    >
      {mark.glyph}
    </span>
  );
}
