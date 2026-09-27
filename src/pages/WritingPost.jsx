import { Link, useParams } from "react-router-dom";
import SEO from "../components/common/SEO";
import { TextLinks } from "../components/common/SiteBlocks";
import { writing } from "../data/site";
import NotFound from "./NotFound";

export default function WritingPost() {
  const { slug } = useParams();
  const item = writing.find((entry) => entry.slug === slug);
  if (!item) return <NotFound />;
  return (
    <>
      <SEO title={item.title} description={item.description} />
      <article className="shell page narrow">
        <Link className="back-link" to="/writing">← Writing</Link>
        <header className="page-header">
          <span className="kicker">{item.venue || "Essay"}</span>
          <h1>{item.title}</h1>
          <p className="page-lede">{item.description}</p>
        </header>
        <TextLinks links={item.links} />
      </article>
    </>
  );
}
