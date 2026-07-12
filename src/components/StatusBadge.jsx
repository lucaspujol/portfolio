export default function StatusBadge({ available, label }) {
  return (
    <span className={`status-badge${available ? ' is-available' : ''}`}>
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
