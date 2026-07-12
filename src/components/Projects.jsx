import { featuredProjects, minorProjects } from '../data/projects.js';
import { ui } from '../data/ui.js';
import ProjectCard from './ProjectCard.jsx';
import MinorProjectRow from './MinorProjectRow.jsx';
import SectionHeading from './SectionHeading.jsx';
import ProjectLegend from './ProjectLegend.jsx';

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading {...ui.sections.work} />
      <ProjectLegend />
      <div className="project-grid">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <h3 className="subheading">{ui.projects.otherHeading}</h3>
      <ul className="minor-list">
        {minorProjects.map((p) => (
          <MinorProjectRow key={p.name} project={p} />
        ))}
      </ul>
    </section>
  );
}
