import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import { profileIcons } from "../components/common/Icons";
import { PaperRow } from "../components/common/Papers";
import { OngoingCard } from "../components/common/Projects";
import { MoreLink, Section, SmartLink, Timeline } from "../components/common/SiteBlocks";
import { areas, experience, news, profile, publications, researchProjects, SITE_URL } from "../data/site";

const formatDate = (date) => {
  const [year, month] = date.split("-");
  return month ? new Date(Number(year), Number(month) - 1).toLocaleString("en-GB", { month: "short", year: "numeric" }) : year;
};

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}/media/profile/portrait.webp`,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  affiliation: { "@type": "Organization", name: "University of Peradeniya" },
  sameAs: profile.links.map(([, href]) => href),
};

export function ProfileIcons() {
  const items = [["Email", `mailto:${profile.email}`], ...profile.links, ["CV", profile.cv]];
  return (
    <ul className="icon-links">
      {items.map(([label, href]) => {
        const Icon = profileIcons[label];
        return <li key={label}><SmartLink href={href} className="icon-link" aria-label={label} title={label}><Icon size={18} aria-hidden="true" /></SmartLink></li>;
      })}
    </ul>
  );
}

function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-name">
      <div className="intro-side">
        <div className="portrait"><Img src={profile.portrait} alt={`Portrait of ${profile.name}`} eager /></div>
        <p className="role-line">{profile.roleLine}</p>
        <ProfileIcons />
      </div>
      <div className="intro-main">
        <h1 id="intro-name">{profile.name}</h1>
        {profile.headline && <p className="headline">{profile.headline}</p>}
        <p className="bio">
          {profile.bio} I am a B.Sc. Engineering undergraduate in {profile.affiliation} and a researcher at the {profile.lab}, supervised by {profile.supervisor}.
        </p>
        {profile.status && <p className="status-line"><span className="status-dot" aria-hidden="true" />{profile.status}</p>}
        <h2 className="interests-title">Research interests</h2>
        <ol className="interests">
          {profile.interests.map((interest) => (
            <li key={interest.area}><strong>{interest.title}</strong>{interest.detail && <span> ({interest.detail})</span>}</li>
          ))}
        </ol>
        <div className="intro-actions">
          <Link className="button primary" to="/publications">Publications</Link>
          <a className="button secondary" href={profile.cv} target="_blank" rel="noreferrer">Download CV</a>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const featured = publications.filter((item) => item.featured).slice(0, 3);
  const latest = [...news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  const ongoing = researchProjects.filter((item) => item.current);
  return (
    <>
      <SEO jsonLd={personLd} />
      <div className="shell">
        <Intro />

        <Section number="01" title="Research areas" subtitle="Remote sensing, multimodal solar forecasting, and vision encoders." id="areas">
          <div className="area-grid">
            {areas.map((area) => {
              const papers = publications.filter((item) => item.area === area.id).length;
              const projects = researchProjects.filter((item) => item.area === area.id).length;
              return (
                <Link key={area.id} to={`/publications?area=${area.id}`} className="area-tile">
                  {area.image && <div className="area-image"><Img src={area.image} alt={`${area.name} overview figure`} /></div>}
                  <div className="area-body">
                    <h3>{area.name}</h3>
                    {area.subtitle && <p>{area.subtitle}</p>}
                    <span className="area-count">{plural(papers, "paper")} · {plural(projects, "project")}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>

        <Section number="02" title="Selected papers" subtitle="Peer-reviewed work from 2026." id="selected">
          <div className="selected-grid">
            <div className="selected-papers">{featured.map((item) => <PaperRow key={item.slug} item={item} />)}</div>
            <aside className="updates" aria-labelledby="updates-title">
              <h3 id="updates-title" className="kicker">Recent updates</h3>
              <ul>
                {latest.map((item) => (
                  <li key={item.text}>
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                    <span>{item.href ? <SmartLink href={item.href}>{item.text}</SmartLink> : item.text}</span>
                  </li>
                ))}
              </ul>
              <MoreLink to="/publications">All publications</MoreLink>
            </aside>
          </div>
        </Section>

        <Section number="03" title="Ongoing research" subtitle="One active project in each research area." id="ongoing" action={<MoreLink to="/projects">All projects</MoreLink>}>
          <div className="ongoing-grid">{ongoing.map((item) => <OngoingCard key={item.slug} item={item} />)}</div>
        </Section>

        <Section number="04" title="Experience" id="experience">
          <Timeline items={experience} compact />
        </Section>
      </div>
    </>
  );
}
