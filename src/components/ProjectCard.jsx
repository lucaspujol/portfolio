import TechTags from './TechTags.jsx';
import ProjectLinks from './ProjectLinks.jsx';
import ProjectMark from './ProjectMark.jsx';

export default function ProjectCard({ project }) {
  const { name, blurb, tech, links, kind } = project;

  return (
    <article className="card">
      <div className="card-head">
        <ProjectMark kind={kind} />
        <h3 className="card-title">{name}</h3>
      </div>
      <p className="card-blurb">{blurb}</p>
      <TechTags tech={tech} />
      <ProjectLinks links={links} />
    </article>
  );
}
