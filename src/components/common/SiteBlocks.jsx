import { Link } from "react-router-dom";

export function PageIntro({ eyebrow, title, children, className = "" }) {
  return <header className={`page-intro ${className}`}><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{children && <p>{children}</p>}</header>;
}

export function TextLinks({ links = [] }) {
  if (!links.length) return null;
  return <div className="text-links">{links.map(([label, href]) => <a key={`${label}-${href}`} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label} ↗</a>)}</div>;
}

export function MetricText({ children }) {
  if (typeof children !== "string") return children;
  return children.split(/((?:Top\s+)?\d+(?:\.\d+)?(?:st|nd|rd|th)?(?:\/[\d.]+)?(?:\+)?)/gi).map((part, index) =>
    /^(?:Top\s+)?\d/i.test(part) ? <strong className="metric" key={index}>{part}</strong> : part
  );
}

export function Publication({ item }) {
  const highlightName = (authors) => {
    if (!authors) return null;
    const parts = authors.split(/(O\. Samarakoon|Oshadha Samarakoon)/g);
    return parts.map((part, index) => /^(O\. Samarakoon|Oshadha Samarakoon)$/.test(part) ? <strong key={index}>{part}</strong> : part);
  };
  return <article className="publication glass">
    <div className="publication-copy"><div className="meta">{item.venue}</div><h3>{item.title}</h3>
      {item.authors && <p className="authors">{highlightName(item.authors)}</p>}
      {item.description && <p>{item.description}</p>}
      {item.note && <p className="notice">{item.note}</p>}
      <TextLinks links={item.links} />
    </div>
  </article>;
}

export function Timeline({ items }) {
  return <div className="timeline">{items.map((item) => <article key={`${item.period}-${item.title}`}>
    <div className="meta">{item.period}</div>
    <div><h3>{item.title}</h3>{item.place && <p className="place">{item.place}</p>}{item.supervisor && <p className="muted">{item.supervisor}</p>}<p><MetricText>{item.description}</MetricText></p></div>
  </article>)}</div>;
}

export function ProjectList({ items }) {
  return <div className="project-grid">{items.map((item) => <article className="project-card glass" key={item.id}>
    <Link className={item.image ? "project-media" : "project-media project-placeholder"} to={`/projects/${item.id}`}>
      {item.image ? <img src={item.image} alt="" /> : <span>{item.title.split(" ").map((word) => word[0]).join("").slice(0, 3)}</span>}
    </Link>
    <div className="project-copy"><div className="project-kicker"><span>{item.category}</span>{item.period && <span>{item.period}</span>}</div>
      <Link to={`/projects/${item.id}`}><h3>{item.title}</h3></Link><p>{item.description}</p>
      {item.tags && <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}
      <div className="project-actions"><Link to={`/projects/${item.id}`}>Details →</Link><TextLinks links={item.links} /></div>
    </div>
  </article>)}</div>;
}

export function EvidenceGrid({ items }) {
  return <div className="evidence-grid">{items.map((item, index) => <article className="evidence-card glass" key={item.file}>
    <div className={item.preview ? "evidence-preview" : `evidence-preview evidence-art evidence-art-${index % 4}`}>
      {item.preview ? <img src={item.preview} alt="Certificate preview" /> : <span>Verified<br />document</span>}
    </div>
    <div className="evidence-copy"><div className="meta">{item.detail}</div><h3>{item.title}</h3><a href={item.file} target="_blank" rel="noreferrer">View</a><a href={item.file} download>Download ↓</a></div>
  </article>)}</div>;
}
