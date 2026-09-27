import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import { Manuscripts } from "../components/common/Papers";
import { PageHeader, Section, StatusBadge, Timeline } from "../components/common/SiteBlocks";
import { areas, experience, manuscripts, profile, publications, researchProjects } from "../data/site";

function AreaSection({ area, number }) {
  const papers = publications.filter((item) => item.area === area.id);
  const drafts = manuscripts.filter((item) => item.area === area.id);
  const projects = researchProjects.filter((item) => item.area === area.id);
  return (
    <Section number={number} title={area.name} subtitle={area.subtitle} id={area.id} className="area-section">
      <div className="area-layout">
        {area.image && <figure className="figure-card"><Img src={area.image} alt={`${area.name} overview figure`} /></figure>}
        <div className="area-lists">
          {area.description && <p>{area.description}</p>}
          {papers.length > 0 && <><h3 className="kicker">Papers</h3><ul className="link-list">{papers.map((item) => <li key={item.slug}><Link to={`/publications#${item.slug}`}>{item.title}</Link> <span className="muted">{item.venue}</span></li>)}</ul></>}
          {drafts.length > 0 && <><h3 className="kicker">Manuscripts in preparation</h3><ul className="link-list">{drafts.map((item) => <li key={item.slug}><Link to="/publications#manuscripts">{item.title}</Link> <span className="muted">{item.venue}</span></li>)}</ul></>}
          {projects.length > 0 && <><h3 className="kicker">Research projects</h3><ul className="link-list">{projects.map((item) => <li key={item.slug}><Link to={`/projects/${item.slug}`}>{item.title}</Link> <StatusBadge status={item.status} /></li>)}</ul></>}
        </div>
      </div>
    </Section>
  );
}

export default function Research() {
  return (
    <>
      <SEO title="Research" description="Research areas, experience, and manuscripts in preparation: remote sensing, multimodal solar forecasting, and vision encoders." />
      <div className="shell page">
        <PageHeader kicker="Research" title="Research">{profile.bio}</PageHeader>
        {profile.researchStatement.length > 0 && <div className="prose statement">{profile.researchStatement.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
        {areas.map((area, index) => <AreaSection key={area.id} area={area} number={String(index + 1).padStart(2, "0")} />)}
        <Section number="04" title="Experience" id="experience"><Timeline items={experience} /></Section>
        <Section number="05" title="Manuscripts in preparation" id="manuscripts"><Manuscripts items={manuscripts} /></Section>
      </div>
    </>
  );
}
