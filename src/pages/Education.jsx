import SEO from "../components/common/SEO";
import { MetricText, PageIntro } from "../components/common/SiteBlocks";
import { educationInstitutions } from "../data/site";

export default function Education() {
  return <><SEO title="Education" /><div className="shell page education-page">
    <PageIntro eyebrow="Education" title="Academic journey">Engineering education and examination milestones, with verified result documents.</PageIntro>
    <div className="institution-list">
      {educationInstitutions.map((item) => <section className="institution-card glass" key={item.institution}>
        <header className="institution-header">
          <img className="institution-logo" src={item.logo} alt={`${item.institution} crest`} />
          <div><span className="meta">{item.period}</span><h2>{item.institution}</h2><h3>{item.program}</h3>{item.specialization && <p>{item.specialization}</p>}</div>
        </header>
        {item.metrics && <div className="academic-metrics">{item.metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>}
        {item.note && <p className="education-note">{item.note}</p>}
        {item.exams && <div className="exam-list">{item.exams.map((exam) => <article key={exam.title}>
          <div className="exam-heading"><div><h3>{exam.title}</h3>{exam.subtitle && <p>{exam.subtitle}</p>}</div><span className="meta">{exam.date} · Kandy, Sri Lanka</span></div>
          <p className="exam-result"><MetricText>{exam.summary}</MetricText></p>
          {exam.note && <p className="education-note">{exam.note}</p>}
          <a className="record-link" href={exam.evidence} target="_blank" rel="noreferrer">View result document →</a>
        </article>)}</div>}
      </section>)}
    </div>
  </div></>;
}
