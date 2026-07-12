import { LinkTypeIcon } from './icons/index.jsx';
import { ui } from '../data/ui.js';

const { labels, fallback, private: privateLabel } = ui.projects.links;

export default function ProjectLinks({ links = [], compact = false }) {
  if (!links.length) {
    return <span className="link-muted">{privateLabel}</span>;
  }
  return (
    <div className={compact ? 'links compact' : 'links'}>
      {links.map((l) => (
        <a
          key={l.type + l.href}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <LinkTypeIcon type={l.type} />
          {labels[l.type] ?? fallback}
        </a>
      ))}
    </div>
  );
}
