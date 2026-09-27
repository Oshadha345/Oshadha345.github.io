import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE_URL, profile } from "../../data/site";

const DEFAULT_DESCRIPTION = "Oshadha Samarakoon, undergraduate researcher at MARC, University of Peradeniya, working on visual state-space models for remote sensing, multimodal solar forecasting, and vision encoders.";

export default function SEO({ title, description = DEFAULT_DESCRIPTION, jsonLd, noindex = false }) {
  const { pathname } = useLocation();
  const pageTitle = title ? `${title} · ${profile.name}` : `${profile.name} · Undergraduate Researcher`;
  const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname.toLowerCase().replace(/\/$/, "")}`;
  const image = `${SITE_URL}/media/profile/og-card.png`;
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
