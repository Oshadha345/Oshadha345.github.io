import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import AlbumMosaic from "../components/common/AlbumMosaic";
import { MoreLink, PageHeader, Section } from "../components/common/SiteBlocks";
import { awards, education, profile, skills } from "../data/site";
import { albumsNewestFirst } from "../data/gallery";

function AwardList({ items }) {
  return (
    <ul className="award-list">
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`}>
          <span className="award-year">{item.year}</span>
          <div><strong>{item.title}</strong><span>{item.result}</span></div>
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  const { university } = education;
  const visibleAwards = awards.filter((item) => !item.participant);
  const topAwards = visibleAwards.filter((item) => item.top);
  const otherAwards = visibleAwards.filter((item) => !item.top);
  const topAlbumSlugs = topAwards.map((item) => item.album).filter(Boolean);
  const competitionAlbums = albumsNewestFirst.filter((album) => topAlbumSlugs.includes(album.slug)).slice(0, 2);
  const bio = profile.longBio.length ? profile.longBio : [profile.bio];

  return (
    <>
      <SEO title="About" description="Biography, education, honors, skills, and contact details for Oshadha Samarakoon." />
      <div className="shell page">
        <PageHeader kicker="About" title="About" />
        <div className="prose about-bio">{bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>

        <Section number="01" title="Education" id="education">
          <article className="edu-card">
            <Img src={university.logo} alt={`${university.institution} crest`} className="edu-logo" />
            <div>
              <span className="timeline-period">{university.period}</span>
              <h3>{university.institution}</h3>
              <p>{university.program} · {university.specialization}</p>
              <dl className="edu-metrics">{university.metrics.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </div>
          </article>
          <p className="school-line">{education.school}</p>
        </Section>

        <Section number="02" title="Honors & awards" id="honors" subtitle="Programming competitions. Certificates available on request.">
          <AwardList items={topAwards} />
          {otherAwards.length > 0 && (
            <details className="more-awards">
              <summary>All competitions</summary>
              <AwardList items={otherAwards} />
            </details>
          )}
          {competitionAlbums.length > 0 && (
            <div className="album-stack">
              {competitionAlbums.map((album, index) => <AlbumMosaic key={album.slug} album={album} index={index} headingId={`about-${album.slug}`} />)}
              <MoreLink to="/gallery?category=competition">More in Gallery</MoreLink>
            </div>
          )}
        </Section>

        <Section number="03" title="Skills" id="skills">
          <dl className="skill-rows">{skills.map(([label, items]) => <div key={label}><dt>{label}</dt><dd>{items}</dd></div>)}</dl>
        </Section>

        <Section number="04" title="Contact" id="contact">
          <div className="contact">
            <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
            {profile.status && <p className="status-line"><span className="status-dot" aria-hidden="true" />{profile.status}</p>}
            <a className="button secondary" href={profile.cv} target="_blank" rel="noreferrer">Download CV</a>
          </div>
        </Section>
      </div>
    </>
  );
}
