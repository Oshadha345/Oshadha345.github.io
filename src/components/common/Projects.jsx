import { Link } from "react-router-dom";
import Img from "./Img";
import { AreaLabel, StatusBadge, TextLinks } from "./SiteBlocks";
import { projectCover } from "../../lib/media";

export function ProjectCard({ item }) {
  const cover = projectCover(item);
  const to = `/projects/${item.slug}`;
  return (
    <article className={cover ? "project-card" : "project-card no-image"}>
      {cover && <Link to={to} className="card-media" tabIndex={-1} aria-hidden="true"><Img src={cover} alt="" /></Link>}
      <div className="card-body">
        <div className="card-meta">
          {item.area ? <AreaLabel area={item.area} /> : <span className="area-label">{item.category}</span>}
          {item.period && <span>{item.period}</span>}
          <StatusBadge status={item.status} />
        </div>
        <h3><Link to={to}>{item.title}</Link></h3>
        <p>{item.description}</p>
        {item.tags && <p className="tag-line">{item.tags.join(" · ")}</p>}
        <div className="card-actions"><Link to={to} className="text-link">Details</Link><TextLinks links={item.links} /></div>
      </div>
    </article>
  );
}

export function CompactCard({ item }) {
  const cover = projectCover(item);
  const to = `/projects/${item.slug}`;
  return (
    <article className="compact-card">
      {cover && <Link to={to} className="compact-media" tabIndex={-1} aria-hidden="true"><Img src={cover} alt="" /></Link>}
      <div className="compact-body">
        <h3><Link to={to}>{item.title}</Link></h3>
        <p>{item.description}</p>
        <TextLinks links={item.links} />
      </div>
    </article>
  );
}

export function OngoingCard({ item }) {
  const cover = projectCover(item);
  const to = `/projects/${item.slug}`;
  return (
    <article className="ongoing-card">
      {cover && <Link to={to} className="card-media" tabIndex={-1} aria-hidden="true"><Img src={cover} alt="" /></Link>}
      <div className="card-body">
        <div className="card-meta"><AreaLabel area={item.area} /><StatusBadge status={item.status} /></div>
        <h3><Link to={to}>{item.title}</Link></h3>
        <p className="card-period">{item.period}</p>
        <p>{item.description}</p>
      </div>
    </article>
  );
}
