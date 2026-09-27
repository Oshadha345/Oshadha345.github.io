import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Img from "./Img";
import { useLightbox } from "./Lightbox";
import { getArea } from "../../data/site";

export const isExternal = (href) => /^https?:/.test(href) || href.endsWith(".pdf") || href.startsWith("mailto:");

export function SmartLink({ href, children, className, ...rest }) {
  if (isExternal(href)) {
    const newTab = !href.startsWith("mailto:");
    return <a href={href} className={className} target={newTab ? "_blank" : undefined} rel={newTab ? "noreferrer" : undefined} {...rest}>{children}</a>;
  }
  return <Link to={href} className={className} {...rest}>{children}</Link>;
}

export function PageHeader({ kicker, title, children, aside }) {
  return (
    <header className="page-header">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      {children && <p className="page-lede">{children}</p>}
      {aside}
    </header>
  );
}

export function Section({ number, title, subtitle, id, children, action, className = "" }) {
  return (
    <section className={`section ${className}`} id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="section-head">
        <div>
          {number && <span className="section-number">{number}</span>}
          <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function MoreLink({ to, children }) {
  return <SmartLink href={to} className="more-link">{children} <ArrowRight size={15} aria-hidden="true" /></SmartLink>;
}

const statusLabels = { accepted: "Accepted", published: "Published", preprint: "Preprint", "in-preparation": "In preparation", ongoing: "Ongoing" };

export function StatusBadge({ status }) {
  if (!status) return null;
  const tone = ["accepted", "published"].includes(status) ? "ok" : status === "ongoing" ? "blue" : "muted";
  return <span className={`badge badge-${tone}`}>{statusLabels[status] || status}</span>;
}

export function AreaLabel({ area }) {
  const found = getArea(area);
  return found ? <span className="area-label">{found.name}</span> : null;
}

const SELF_SPLIT = /(O\. Samarakoon†?|Oshadha Samarakoon†?)/;
const SELF_MATCH = /^(O\. Samarakoon†?|Oshadha Samarakoon†?)$/;

export function Authors({ authors }) {
  if (!authors) return null;
  return <p className="authors">{authors.split(SELF_SPLIT).map((part, index) => (SELF_MATCH.test(part) ? <strong key={index}>{part}</strong> : part))}</p>;
}

export function TextLinks({ links = [] }) {
  if (!links.length) return null;
  return <div className="text-links">{links.map(([label, href]) => <SmartLink key={`${label}-${href}`} href={href}>{label}</SmartLink>)}</div>;
}

export function Timeline({ items, compact = false }) {
  return (
    <ol className={compact ? "timeline compact" : "timeline"}>
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`}>
          <span className="timeline-period">{item.period}</span>
          <div>
            <h3>{item.title}</h3>
            {item.place && <p className="timeline-place">{item.place}</p>}
            {item.supervisor && <p className="timeline-meta">{item.supervisor}</p>}
            {!compact && item.description && <p>{item.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function useFilterParam(name, allowed) {
  const [params, setParams] = useSearchParams();
  const raw = params.get(name);
  const value = allowed.includes(raw) ? raw : "all";
  const setValue = (next) => {
    const updated = new URLSearchParams(params);
    if (next === "all") updated.delete(name); else updated.set(name, next);
    setParams(updated, { replace: true, preventScrollReset: true });
  };
  return [value, setValue];
}

export function FilterChips({ label, options, value, onChange }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map((option) => (
        <button key={option.id} type="button" className="chip" aria-pressed={value === option.id} onClick={() => onChange(option.id)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function FigureCard({ src, alt, lead, caption, gallery, index = 0, eager = false, className = "" }) {
  const openLightbox = useLightbox();
  const items = gallery || [{ src, alt, caption: lead ? `${lead} ${caption || ""}`.trim() : caption }];
  return (
    <figure className={`figure-card ${className}`}>
      <button type="button" className="figure-button" onClick={() => openLightbox(items, index)} aria-label={`Enlarge: ${alt}`}>
        <Img src={src} alt={alt} eager={eager} />
      </button>
      {(lead || caption) && <figcaption>{lead && <strong>{lead}</strong>} {caption}</figcaption>}
    </figure>
  );
}
