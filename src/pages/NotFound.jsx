import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { PageHeader } from "../components/common/SiteBlocks";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" noindex />
      <div className="shell page narrow">
        <PageHeader kicker="404" title="Page not found">This page does not exist or has moved.</PageHeader>
        <p className="not-found-links"><Link to="/">Home</Link> · <Link to="/publications">Publications</Link> · <Link to="/projects">Projects</Link></p>
      </div>
    </>
  );
}
