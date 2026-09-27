import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import { PageHeader, Section, TextLinks } from "../components/common/SiteBlocks";
import { studies, writing } from "../data/site";
import { writingCover } from "../lib/media";

export default function Writing() {
  return (
    <>
      <SEO title="Writing" description="Essays and study notes by Oshadha Samarakoon on signal processing, state-space models, and applied mathematics." />
      <div className="shell page">
        <PageHeader kicker="Writing" title="Writing">Technical essays and independent study notes.</PageHeader>
        <Section number="01" title="Articles" id="articles">
          <div className="article-list">
            {writing.map((item) => {
              const cover = writingCover(item.slug);
              return (
                <article key={item.slug} className={cover ? "article-card" : "article-card no-image"}>
                  {cover && <Img src={cover} alt="" />}
                  <div>
                    {item.venue && <span className="venue">{item.venue}</span>}
                    <h3><Link to={`/writing/${item.slug}`}>{item.title}</Link></h3>
                    <p>{item.description}</p>
                    <TextLinks links={item.links} />
                  </div>
                </article>
              );
            })}
          </div>
        </Section>
        <Section number="02" title="Study notes" id="studies">
          <ul className="study-list">
            {studies.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">{item.title} <ExternalLink size={14} aria-hidden="true" /></a>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </>
  );
}
