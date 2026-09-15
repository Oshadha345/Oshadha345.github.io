import { useParams } from "react-router-dom";
import Blog from "./Blog";
import { writing } from "../data/site";
import SEO from "../components/common/SEO";
import { PageIntro, TextLinks } from "../components/common/SiteBlocks";

export default function BlogPost() {
  const { slug } = useParams();
  const item = writing.find((entry) => entry.slug === slug);
  if (!item) return <Blog />;
  return <><SEO title={item.title} /><article className="shell page detail"><PageIntro eyebrow="Essay" title={item.title}>{item.description}</PageIntro>{item.note && <p className="notice">{item.note}</p>}<TextLinks links={item.links} /></article></>;
}
