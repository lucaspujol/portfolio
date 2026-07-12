import ProjectLinks from './ProjectLinks.jsx';
import ProjectMark from './ProjectMark.jsx';

export default function MinorProjectRow({ project }) {
  const { name, blurb, tech, links, kind } = project;

  return (
    <li className="minor-row">
      <div className="minor-main">
        <span className="minor-name">
          <ProjectMark kind={kind} />
          {name}
        </span>
        <span className="minor-tech">{tech.join(' · ')}</span>
      </div>
      <p className="minor-blurb">{blurb}</p>
      <ProjectLinks links={links} compact />
    </li>
  );
}
