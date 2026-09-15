import SEO from "../components/common/SEO";
import { PageIntro, Publication, Timeline } from "../components/common/SiteBlocks";
import { experience, manuscripts, publications } from "../data/site";

export default function Research() {
  return <><SEO title="Research" /><div className="shell page"><PageIntro className="conference-intro" eyebrow="Research" title="Publications and ongoing work">Visual state-space models for remote sensing, vision, and multimodal forecasting.</PageIntro>
    <section className="section"><h2>Peer-reviewed conference papers</h2>{publications.map((item) => <Publication key={item.title} item={item} />)}</section>
    <section className="section"><h2>Manuscripts in preparation</h2><p className="section-note">High-level descriptions only; these projects are unpublished.</p>{manuscripts.map((item) => <Publication key={item.title} item={item} />)}</section>
    <section className="section"><h2>Experience</h2><Timeline items={experience} /></section>
  </div></>;
}
