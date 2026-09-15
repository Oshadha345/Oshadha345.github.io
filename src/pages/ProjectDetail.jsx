import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import { PageIntro, TextLinks } from "../components/common/SiteBlocks";
import { getProject } from "../data/site";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <div className="shell page"><PageIntro eyebrow="Projects" title="Project not found">This older project is no longer part of the selected portfolio.</PageIntro><Link to="/projects">Back to projects →</Link></div>;
  return <><SEO title={project.title} /><article className="shell page detail project-detail"><Link className="back" to="/projects">← Projects</Link><PageIntro eyebrow={`${project.category || "Project"}${project.period ? ` · ${project.period}` : ""}`} title={project.title}>{project.description}</PageIntro>
    {project.image && <div className="detail-visual glass"><img src={project.image} alt={`${project.title} project visual`} /></div>}
    <div className="detail-grid"><section><span className="eyebrow">Overview</span><h2>Project information</h2><p>{project.details || project.description}</p><TextLinks links={project.links} /></section>{project.tags?.length > 0 && <aside className="glass"><span className="eyebrow">Tools and topics</span><div className="tags large">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></aside>}</div>
  </article></>;
}
