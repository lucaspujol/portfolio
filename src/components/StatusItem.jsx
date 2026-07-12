export default function StatusItem({ label, value }) {
  return (
    <div className="status-item">
      <dt className="status-item-label">{label}</dt>
      <dd className="status-item-value">{value}</dd>
    </div>
  );
}
