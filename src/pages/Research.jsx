// =============================================================================
// RESEARCH PAGE
// =============================================================================

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  FileCode2,
  FileText,
  Images,
  Microscope,
  Newspaper,
  Orbit,
  Sparkles,
  Trophy,
} from "lucide-react";

import SEO from "../components/common/SEO";
import {
  getFeaturedResearchNews,
  getLinkedProjects,
  getPublicationsBySection,
  publicationSections,
  researchCompetitions,
  researchExperience,
  researchMedia,
  researchOverview,
  researchProjects,
  researchStats,
} from "../data";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const SectionHeader = ({ icon: Icon, eyebrow, title, description }) => (
  <div className="mb-8">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs uppercase tracking-[0.28em] text-blue-300">
      <Icon size={14} />
      <span>{eyebrow}</span>
    </div>
    <h2 className="section-title mt-4 text-3xl sm:text-4xl">{title}</h2>
    <p className="text-gray-400 mt-3 max-w-3xl">{description}</p>
  </div>
);

const ResourceLink = ({ href, label, icon: Icon, placeholder = false }) => {
  const commonClassName =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors";

  if (!href || placeholder) {
    return (
      <span className={`${commonClassName} border border-white/10 bg-white/5 text-gray-500`}>
        <Icon size={16} />
        {label}
      </span>
    );
  }

  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link to={href} className={`${commonClassName} bg-blue-500/15 text-blue-300 border border-blue-500/20 hover:bg-blue-500/25`}>
        <Icon size={16} />
        {label}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${commonClassName} bg-blue-500/15 text-blue-300 border border-blue-500/20 hover:bg-blue-500/25`}
    >
      <Icon size={16} />
      {label}
    </a>
  );
};

const Research = () => {
  const featuredNews = getFeaturedResearchNews(4);

  return (
    <>
      <SEO
        title="Research"
        description="Research portfolio covering publications, submissions, competition entries, experience, and media across state-space models, solar forecasting, remote sensing, and biomedical AI."
      />

      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <section className="relative overflow-hidden glass-card p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_30%)] pointer-events-none" />
            <div className="relative grid gap-10 lg:grid-cols-[1.35fr_0.9fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  <Microscope size={16} />
                  {researchOverview.eyebrow}
                </div>

                <div>
                  <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">
                    {researchOverview.title}
                  </h1>
                  <p className="text-xl text-gray-300 mt-5 max-w-3xl">
                    {researchOverview.summary}
                  </p>
                  <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
                    {researchOverview.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {researchOverview.expertise.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                    Browse related projects
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    to="/achievements"
                    className="glass-button inline-flex items-center gap-2 hover:border-blue-500/40"
                  >
                    Recognition and milestones
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {researchStats.map((stat) => (
                  <div key={stat.id} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-gray-500">{stat.label}</p>
                    <div className="text-4xl font-bold text-white mt-3">{stat.value}</div>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">{stat.detail}</p>
                  </div>
                ))}

                <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:col-span-2 lg:col-span-1">
                  <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Mathematical Depth</p>
                  <div className="mt-4 space-y-3">
                    {researchOverview.mathDepth.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Orbit}
              eyebrow="Publications"
              title="Publications and Submissions"
              description="Paper records are organized by review stage so the portfolio can represent accepted work, active submissions, and future updates without restructuring the page."
            />

            <div className="space-y-10">
              {publicationSections.map((section) => {
                const items = getPublicationsBySection(section.id);

                if (!items.length) return null;

                return (
                  <div key={section.id} className="space-y-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                        <p className="text-gray-500 mt-1">{section.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {items.length} record{items.length === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div className="space-y-5">
                      {items.map((publication) => (
                        <article key={publication.id} className="glass-card p-6 sm:p-7 space-y-5">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                              {publication.kind}
                            </span>
                            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                              {publication.status}
                            </span>
                            <span className="text-sm text-gray-500">{publication.scope}</span>
                          </div>

                          <div className="space-y-3">
                            <h3 className="text-2xl font-semibold text-white leading-tight">
                              {publication.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                              {publication.authors.map((author, index) => (
                                <span key={author}>
                                  <span className={author === "Oshadha Samarakoon" ? "text-blue-300 font-medium" : ""}>
                                    {author}
                                  </span>
                                  {index < publication.authors.length - 1 ? ", " : ""}
                                </span>
                              ))}
                            </p>
                            <p className="text-gray-400">
                              <span className="text-white font-medium">{publication.venue}</span>
                            </p>
                          </div>

                          <div className="grid gap-4 lg:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                              <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Focus</p>
                              <p className="text-gray-300 mt-3 leading-relaxed">{publication.focus}</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                              <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Contribution</p>
                              <p className="text-gray-300 mt-3 leading-relaxed">{publication.contribution}</p>
                            </div>
                          </div>

                          <p className="text-gray-400 leading-relaxed">{publication.summary}</p>

                          <div className="flex flex-wrap gap-2">
                            {publication.keywords.map((keyword) => (
                              <span key={keyword} className="tag">
                                {keyword}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-3 pt-1">
                            <ResourceLink
                              href={publication.links.project}
                              label="Project"
                              icon={ArrowUpRight}
                              placeholder={!publication.links.project}
                            />
                            <ResourceLink
                              href={publication.links.code}
                              label="Code"
                              icon={FileCode2}
                              placeholder={!publication.links.code}
                            />
                            <ResourceLink
                              href={publication.links.arxiv}
                              label="arXiv placeholder"
                              icon={FileText}
                              placeholder={!publication.links.arxiv}
                            />
                            <ResourceLink
                              href={publication.links.bibtex}
                              label="BibTeX placeholder"
                              icon={FileText}
                              placeholder={!publication.links.bibtex}
                            />
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Trophy}
              eyebrow="Competitions"
              title="Research Competition Submissions"
              description="Competition work is tracked separately from publication records because the deliverables, timelines, and output format are different, even when the technical depth overlaps."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {researchCompetitions.map((entry) => (
                <article key={entry.id} className="glass-card overflow-hidden">
                  <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                    <div className="relative min-h-56 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-emerald-500/10">
                      {entry.image ? (
                        <img src={entry.image} alt={entry.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="rounded-full border border-white/10 bg-black/20 p-6">
                            <Sparkles size={40} className="text-blue-300" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                          {entry.type}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
                          {entry.status}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">{entry.title}</h3>
                        <p className="text-blue-300 mt-1">{entry.subtitle}</p>
                        <p className="text-gray-500 mt-2">{entry.scope}</p>
                      </div>

                      <p className="text-gray-300 leading-relaxed">{entry.focus}</p>
                      <p className="text-gray-400 leading-relaxed">{entry.contribution}</p>

                      <div className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                        <p className="text-gray-300 leading-relaxed">{entry.context}</p>
                        <p className="text-gray-500 leading-relaxed">{entry.outcome}</p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <ResourceLink
                          href={entry.links.project}
                          label="Project"
                          icon={ArrowUpRight}
                          placeholder={!entry.links.project}
                        />
                        <ResourceLink
                          href={entry.links.code}
                          label="Code"
                          icon={FileCode2}
                          placeholder={!entry.links.code}
                        />
                        <ResourceLink
                          href={entry.links.report}
                          label="Report"
                          icon={FileText}
                          placeholder={!entry.links.report}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Microscope}
              eyebrow="Projects"
              title="Active Research Project Portfolio"
              description="These project tracks connect publications, experiments, benchmarks, and competition-oriented work to the technical implementation already present in the portfolio."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {researchProjects.map((project) => {
                const linkedProjects = getLinkedProjects(project.linkedProjectIds);

                return (
                  <article key={project.id} className="glass-card p-6 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
                        {project.track}
                      </span>
                      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                        {project.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="text-gray-400">{project.focus}</p>
                    </div>

                    {project.image && (
                      <div className="overflow-hidden rounded-2xl border border-white/10">
                        <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
                      </div>
                    )}

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Contribution</p>
                        <p className="text-gray-300 mt-3 leading-relaxed">{project.contribution}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Target Venue / Context</p>
                        <p className="text-gray-300 mt-3 leading-relaxed">{project.venue}</p>
                      </div>
                    </div>

                    {linkedProjects.length > 0 && (
                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Linked portfolio projects</p>
                        <div className="flex flex-wrap gap-3">
                          {linkedProjects.map((linkedProject) => (
                            <Link
                              key={linkedProject.id}
                              to={`/projects/${linkedProject.id}`}
                              className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 hover:bg-blue-500/20"
                            >
                              {linkedProject.title}
                              <ArrowUpRight size={15} />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Briefcase}
              eyebrow="Experience"
              title="Research Experience"
              description="Institutional work provides the context behind the publications and projects, especially the shift from materials research into AI systems for energy and Earth Observation."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {researchExperience.map((role) => (
                <article key={role.id} className="glass-card p-6 space-y-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{role.title}</h3>
                      <p className="text-blue-300 mt-1">{role.organization}</p>
                      <p className="text-gray-500 mt-1">{role.location}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                      <div>{role.period}</div>
                      <div className="text-emerald-300 mt-1">{role.status}</div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed">{role.description}</p>

                  {role.projects && (
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.24em] text-gray-500">Key projects</p>
                      {role.projects.map((item) => (
                        <div key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <h4 className="text-white font-medium">{item.name}</h4>
                          <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {item.tech.map((tech) => (
                              <span key={tech} className="tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {role.learnings && (
                    <div className="space-y-3">
                      <p className="text-sm uppercase tracking-[0.24em] text-gray-500">What I learned</p>
                      <div className="space-y-2">
                        {role.learnings.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                            <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Images}
              eyebrow="Media"
              title="Certificates and Competition Media"
              description="The page already supports certificates, acceptance letters, award photos, and research visuals. Placeholder cards are included where the final assets are not yet in the repository."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {researchMedia.map((asset) => (
                <article key={asset.id} className="glass-card overflow-hidden">
                  {asset.image ? (
                    <div className="h-52 overflow-hidden border-b border-white/10">
                      <img src={asset.image} alt={asset.title} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div className="flex h-52 items-center justify-center border-b border-dashed border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.08),rgba(148,163,184,0.04))]">
                      <div className="text-center px-6">
                        <Images size={34} className="text-gray-500 mx-auto" />
                        <p className="text-sm uppercase tracking-[0.24em] text-gray-500 mt-4">Placeholder Ready</p>
                      </div>
                    </div>
                  )}

                  <div className="p-5 space-y-3">
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
                      {asset.type}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{asset.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{asset.caption}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{asset.note}</p>

                    {asset.href ? (
                      <Link
                        to={asset.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
                      >
                        Open related page
                        <ArrowUpRight size={15} />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                        Add final asset path in `src/data/research.js`
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Newspaper}
              eyebrow="News"
              title="Recent Research News"
              description="A compact running log of research milestones, suitable for the home page preview and for future expansion into a dedicated archive if needed."
            />

            <div className="grid gap-5 lg:grid-cols-2">
              {featuredNews.map((item) => (
                <article key={item.id} className="glass-card p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
                  >
                    {item.cta}
                    <ArrowUpRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Research;
