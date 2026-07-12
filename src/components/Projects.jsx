import { featuredProjects, minorProjects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import MinorProjectRow from './MinorProjectRow.jsx';
import SectionHeading from './SectionHeading.jsx';
import ProjectLegend from './ProjectLegend.jsx';

export default function Projects() {
  return (
    <section id="work" className="section">
      <SectionHeading index="03" title="Selected work" />
      <ProjectLegend />
      <div className="project-grid">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <h3 className="subheading">Other projects</h3>
      <ul className="minor-list">
        {minorProjects.map((p) => (
          <MinorProjectRow key={p.name} project={p} />
        ))}
      </ul>
    </section>
  );
}
