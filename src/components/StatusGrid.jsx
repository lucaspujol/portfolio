import StatusItem from './StatusItem.jsx';

export default function StatusGrid({ items }) {
  return (
    <dl className="status-grid">
      {items.map((item) => (
        <StatusItem key={item.label} label={item.label} value={item.value} />
      ))}
    </dl>
  );
}
