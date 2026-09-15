import SEO from "../components/common/SEO";
import { EvidenceGrid, MetricText, PageIntro } from "../components/common/SiteBlocks";
import { awards, evidence } from "../data/site";

export default function Achievements() {
  return <><SEO title="Awards" /><div className="shell page"><PageIntro eyebrow="Awards" title="Competitions and academic results">A selected record of programming competitions and examinations.</PageIntro>
    <section className="section"><div className="section-title-block"><h2>Programming competitions</h2><p>PreCoders is the University of Peradeniya intra-university selection for Coders. Both are organized by ACES, Department of Computer Engineering, University of Peradeniya.</p></div><div className="award-list">{awards.map(([year, title, result]) => <article key={`${year}-${title}`}><span className="meta">{year}</span><h3>{title}</h3><p><MetricText>{result}</MetricText></p></article>)}</div></section>
    <section className="section"><div className="section-title-block"><span className="eyebrow">Evidence</span><h2>Certificates and result documents</h2><p>Original files from competition and examination records.</p></div><EvidenceGrid items={evidence} /></section>
  </div></>;
}
