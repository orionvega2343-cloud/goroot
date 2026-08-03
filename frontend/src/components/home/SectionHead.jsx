export default function SectionHead({ tag, title, children }) {
  return (
    <div className="section-head reveal">
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}
