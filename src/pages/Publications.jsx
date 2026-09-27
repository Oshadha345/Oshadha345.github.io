import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import { Manuscripts, PaperTile } from "../components/common/Papers";
import { FilterChips, PageHeader, Section, useFilterParam } from "../components/common/SiteBlocks";
import { areas, getArea, manuscripts, profile, publications, venues } from "../data/site";
import { hasMedia } from "../lib/media";

export default function Publications() {
  const areaIds = areas.map((area) => area.id);
  const [area, setArea] = useFilterParam("area", areaIds);
  const options = [{ id: "all", label: "All" }, ...areas.filter((a) => a.id === area || publications.some((p) => p.area === a.id)).map((a) => ({ id: a.id, label: a.name }))];
  const visible = publications.filter((item) => area === "all" || item.area === area);
  const years = [...new Set(visible.map((item) => item.year))].sort((a, b) => b - a);
  const logos = venues.filter((venue) => hasMedia(venue.logo));

  return (
    <>
      <SEO title="Publications" description="Peer-reviewed papers by Oshadha Samarakoon in visual state-space models, remote sensing, and multimodal forecasting." />
      <div className="shell page">
        <PageHeader
          kicker="Research output"
          title="Publications"
          aside={logos.length > 0 && (
            <ul className="venue-row" aria-label="Venues">
              {logos.map((venue) => <li key={venue.name}><Img src={venue.logo} alt={venue.name} /></li>)}
            </ul>
          )}
        >
          Peer-reviewed papers in visual state-space models, remote sensing, and multimodal forecasting. <a href={profile.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
        </PageHeader>

        <FilterChips label="Filter by research area" options={options} value={area} onChange={setArea} />

        {visible.length === 0 && (
          <p className="empty-state">
            No papers in {getArea(area)?.name} yet. See the <Link to={`/research#${area}`}>ongoing work in this area</Link>.
          </p>
        )}

        {years.map((year) => (
          <section key={year} className="year-group" aria-labelledby={`year-${year}`}>
            <h2 className="year-label" id={`year-${year}`}>{year}</h2>
            <div className="paper-list">{visible.filter((item) => item.year === year).map((item) => <PaperTile key={item.slug} item={item} />)}</div>
          </section>
        ))}

        <Section title="Manuscripts in preparation" id="manuscripts">
          <Manuscripts items={manuscripts.filter((item) => area === "all" || item.area === area)} />
        </Section>
      </div>
    </>
  );
}
