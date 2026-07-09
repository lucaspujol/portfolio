import TechTags from './TechTags.jsx';
import ProjectLinks from './ProjectLinks.jsx';

export default function ProjectCard({ project }) {
  const { name, blurb, tech, links, team } = project;

  return (
    <article className="card">
      <div className="card-head">
        <h3 className="card-title">{name}</h3>
        <span className={team ? 'tag-team' : 'tag-solo'}>
          {team ? 'team' : 'solo'}
        </span>
      </div>
      <p className="card-blurb">{blurb}</p>
      <TechTags tech={tech} />
      <ProjectLinks links={links} />
    </article>
  );
}
