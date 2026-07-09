import { LinkTypeIcon } from './icons/index.jsx';

const label = {
  github: 'Code',
  docs: 'Docs',
  demo: 'Demo',
  store: 'Store',
};

export default function ProjectLinks({ links = [], compact = false }) {
  if (!links.length) {
    return <span className="link-muted">private repo</span>;
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
          {label[l.type] ?? 'Link'}
        </a>
      ))}
    </div>
  );
}
