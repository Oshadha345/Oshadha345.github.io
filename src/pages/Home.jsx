import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { ProjectList, Publication, TextLinks, Timeline } from "../components/common/SiteBlocks";
import { education, experience, profile, publications, researchProjects, skills } from "../data/site";

export default function Home() {
  return <><SEO /><div className="shell page">
    <section className="hero">
      <div className="portrait-wrap glass"><img src="/images/avatars/avatar.png" alt="Oshadha Samarakoon" /><span className="portrait-glow" /></div>
      # PhD and 
      <div className="hero-copy"><div className="availability"><i /> Open to  research internship opportunities</div><span className="eyebrow">{profile.role}</span><h1>Oshadha<br /><span>Samarakoon</span></h1><p className="lead">{profile.bio}</p><p className="affiliation">{profile.affiliation}</p>
        <div className="hero-actions"><Link className="button primary" to="/research">Explore research</Link><a className="button glass" href={profile.cv} target="_blank" rel="noreferrer">Download CV ↓</a></div>
        <TextLinks links={[...profile.links, ["Email", `mailto:${profile.email}`]]} />
      </div>
    </section>

    <section className="section"><div className="section-head"><div><span className="eyebrow">Current work</span><h2>Selected projects</h2></div><Link to="/projects">All projects →</Link></div><ProjectList items={researchProjects.slice(0, 4)} /></section>
    <section className="section"><div className="section-head"><div><span className="eyebrow">Publications</span><h2>Accepted papers</h2></div><Link to="/research">Full research record →</Link></div>{publications.map((item) => <Publication key={item.title} item={item} />)}</section>
    <section className="section split"><div><h2>Research experience</h2><Timeline items={experience} /></div><aside><div className="mini-heading"><h2>Education</h2><Link to="/education">Full education record →</Link></div><Timeline items={education} /><h2 className="subhead">Technical work</h2><p className="compact">{skills}</p></aside></section>
  </div></>;
}
