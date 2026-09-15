import { Helmet } from "react-helmet-async";

export default function SEO({ title, description = "Oshadha Samarakoon — undergraduate researcher in visual state-space models, remote sensing, and multimodal forecasting." }) {
  const pageTitle = title ? `${title} · Oshadha Samarakoon` : "Oshadha Samarakoon · Undergraduate Researcher";
  return <Helmet>
    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta name="theme-color" content="#f5f4ef" />
  </Helmet>;
}
