export default function Experience({ items = [] }) {
  return (
    <div className="experience">
      {items.map((exp) => (
        <div className="exp-item" key={exp.title}>
          <span className="exp-dot" />
          <div className="exp-line">
            <span className="exp-period">{exp.period}</span>
            <span className="exp-title">{exp.title}</span>
          </div>
          <span className="exp-org">{exp.org}</span>
          <p className="exp-desc">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
