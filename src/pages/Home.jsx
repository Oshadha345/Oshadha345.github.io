// =============================================================================
// HOME PAGE
// =============================================================================

import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Brain,
  BookOpen,
  Newspaper,
  Award,
  Trophy,
  Sparkles,
} from "lucide-react";

import Hero from "../components/sections/Hero";
import ProjectCard from "../components/cards/ProjectCard";
import BlogCard from "../components/cards/BlogCard";
import SEO from "../components/common/SEO";

import {
  education,
  getFeaturedBlogs,
  getFeaturedProjects,
  getLatestAchievements,
  getPopularBlogs,
  getFeaturedResearchNews,
  research as researchRoles,
  researchOverview,
  researchPublications,
  researchStats,
} from "../data";

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const featuredBlogs = getFeaturedBlogs().slice(0, 2);
  const popularBlogs = getPopularBlogs(3);
  const recentAchievements = getLatestAchievements().slice(0, 3);
  const spotlightPublications = researchPublications.slice(0, 2);
  const researchRolePreview = researchRoles.slice(0, 2);
  const homeResearchStats = researchStats.slice(0, 3);
  const homeNews = getFeaturedResearchNews(3);
  const [leadNews, ...secondaryNews] = homeNews;

  return (
    <>
      <SEO />

      <Hero />

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <GraduationCap className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="glass-card p-6 border-l-4 border-blue-500">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-white font-semibold">{edu.institution}</h3>
                        <p className="text-blue-400 text-sm">{edu.degree}</p>
                        {edu.department && (
                          <p className="text-gray-500 text-xs mt-1">{edu.department}</p>
                        )}
                      </div>
                      <span className="text-gray-500 text-sm">{edu.period}</span>
                    </div>

                    {edu.gpa && (
                      <div className="mt-3 flex items-center gap-4 text-sm">
                        <span className="text-green-400">GPA: {edu.gpa}</span>
                        {edu.rank && <span className="text-gray-400">Rank: {edu.rank}</span>}
                      </div>
                    )}

                    {edu.highlights && (
                      <ul className="mt-3 space-y-1">
                        {edu.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">-</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Brain className="text-blue-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">Research Portfolio</h2>
              </div>

              <div className="glass-card p-6 border-l-4 border-blue-500 space-y-6">
                <div>
                  <p className="text-blue-400 text-sm font-medium uppercase tracking-[0.24em]">
                    Research Snapshot
                  </p>
                  <h3 className="text-white text-xl font-semibold mt-3">
                    {researchOverview.summary}
                  </h3>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {researchOverview.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  {homeResearchStats.map((stat) => (
                    <div key={stat.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h4 className="text-white font-semibold">Publication Highlights</h4>
                    <Link
                      to="/research"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View full portfolio
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {spotlightPublications.map((publication) => (
                      <div key={publication.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-[11px] uppercase tracking-[0.2em] text-blue-300">
                            {publication.kind}
                          </span>
                          <span className="text-xs text-gray-500">{publication.status}</span>
                        </div>
                        <h5 className="text-white font-medium leading-snug">{publication.title}</h5>
                        <p className="text-gray-400 text-sm mt-2">{publication.venue}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Experience</h4>
                  <div className="space-y-3">
                    {researchRolePreview.map((role) => (
                      <div key={role.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h5 className="text-white font-medium">{role.title}</h5>
                            <p className="text-blue-400 text-sm mt-1">{role.organization}</p>
                          </div>
                          <span className="text-xs text-gray-500">{role.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Explore research portfolio
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {leadNews && (
        <section id="news" className="relative z-20 py-16 md:py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-blue-400 font-medium">Latest Updates</span>
                <h2 className="section-title mt-2">Research News</h2>
              </div>
              <Link
                to="/research"
                className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                View Research Page
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <Link to={leadNews.href} className="glass-card glass-card-hover p-8 block">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Newspaper className="text-blue-300" size={22} />
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm uppercase tracking-[0.24em]">
                      {leadNews.category}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {new Date(leadNews.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                  {leadNews.title}
                </h3>
                <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
                  {leadNews.description}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-400 mt-6">
                  {leadNews.cta}
                  <ArrowRight size={18} />
                </span>
              </Link>

              <div className="space-y-4">
                {secondaryNews.map((item) => (
                  <Link key={item.id} to={item.href} className="glass-card glass-card-hover p-5 block">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-blue-300 text-xs uppercase tracking-[0.2em]">
                        {item.category}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mt-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/research"
              className="sm:hidden flex items-center justify-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Research Page
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}

      <section id="projects" className="relative z-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blue-400 font-medium">My Work</span>
              <h2 className="section-title mt-2">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <Link
            to="/projects"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section id="blog" className="relative z-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blue-400 font-medium">Latest Articles</span>
              <h2 className="section-title mt-2">From the Blog</h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              View All Posts
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            <div className="space-y-6">
              <Link
                to="/book-sunday"
                className="glass-card p-6 block hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-blue-400" size={24} />
                </div>
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                  Book Sunday
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Weekly reflections on philosophy, AI, mathematics, and consciousness.
                </p>
                <span className="text-blue-400 text-sm mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>

              <div>
                <h3 className="text-white font-semibold mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} compact />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/blog"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section id="achievements" className="relative z-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blue-400 font-medium">Recognition</span>
              <h2 className="section-title mt-2">Achievements</h2>
            </div>
            <Link
              to="/achievements"
              className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="glass-card glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                    {achievement.type === "certification" ? (
                      <Award size={20} className="text-blue-300" />
                    ) : achievement.type === "award" ? (
                      <Trophy size={20} className="text-yellow-300" />
                    ) : achievement.type === "education" ? (
                      <GraduationCap size={20} className="text-green-300" />
                    ) : achievement.type === "research" ? (
                      <Brain size={20} className="text-purple-300" />
                    ) : (
                      <Sparkles size={20} className="text-pink-300" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold line-clamp-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{achievement.organization}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      {new Date(achievement.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/achievements"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Achievements
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
