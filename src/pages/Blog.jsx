import SEO from "../components/common/SEO";
import { PageIntro, TextLinks } from "../components/common/SiteBlocks";
import { studies, writing } from "../data/site";

export default function Blog() {
  return <><SEO title="Writing" /><div className="shell page"><PageIntro eyebrow="Writing" title="Notes and essays">Technical writing and independent study.</PageIntro>
    <section className="section"><h2>Essays</h2>{writing.map((item) => <article className="publication" key={item.title}><h3>{item.title}</h3><p>{item.description}</p>{item.note && <p className="notice">{item.note}</p>}<TextLinks links={item.links} /></article>)}</section>
    <section className="section"><div className="section-title-block"><h2>Independent study</h2></div><div className="study-list">{studies.map(([title, href]) => <a key={href} href={href} target="_blank" rel="noreferrer">{title}<span>GitHub ↗</span></a>)}</div></section>
  </div></>;
}
