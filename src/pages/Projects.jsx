import SEO from "../components/common/SEO";
import { PageIntro, ProjectList } from "../components/common/SiteBlocks";
import { engineeringProjects, projectArchive, researchProjects } from "../data/site";

export default function Projects() {
  return <><SEO title="Projects" /><div className="shell page"><PageIntro eyebrow="Projects" title="Research and engineering">Research work first; selected systems projects follow.</PageIntro>
    <section className="section"><div className="section-title-block"><span className="eyebrow">Selected</span><h2>Research projects</h2><p>Unpublished work is intentionally described at a high level.</p></div><ProjectList items={researchProjects} /></section>
    <section className="section"><div className="section-title-block"><span className="eyebrow">Built systems</span><h2>Engineering projects</h2></div><ProjectList items={engineeringProjects} /></section>
    <section className="section archive"><div className="section-title-block"><span className="eyebrow">Archive</span><h2>Coursework and independent builds</h2></div><ProjectList items={projectArchive} /></section>
  </div></>;
}
