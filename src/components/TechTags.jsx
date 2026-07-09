export default function TechTags({ tech = [] }) {
  return (
    <ul className="tech-tags">
      {tech.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
