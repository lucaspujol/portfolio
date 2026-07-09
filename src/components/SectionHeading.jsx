export default function SectionHeading({ index, title }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <span className="section-rule" />
    </div>
  );
}
