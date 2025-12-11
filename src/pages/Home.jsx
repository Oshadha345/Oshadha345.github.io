// =============================================================================
// HOME PAGE
// =============================================================================
// 
// Main landing page featuring:
// - Hero section with intro
// - Education & Research
// - Featured projects preview
// - Latest blog posts preview
// - Quick achievements overview
//
// =============================================================================

import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Brain, Zap, BookOpen } from 'lucide-react'

// Components
import Hero from '../components/sections/Hero'
import ProjectCard from '../components/cards/ProjectCard'
import BlogCard from '../components/cards/BlogCard'
import SEO from '../components/common/SEO'

// Data
import { 
  getFeaturedProjects, 
  getFeaturedBlogs, 
  getPopularBlogs, 
  getLatestAchievements,
  education,
  research 
} from '../data'

// =============================================================================
// HOME PAGE COMPONENT
// =============================================================================

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 4)
  const featuredBlogs = getFeaturedBlogs().slice(0, 2)
  const popularBlogs = getPopularBlogs(3)
  const recentAchievements = getLatestAchievements().slice(0, 3)
  
  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <Hero />
      
      {/* ------------------------------------------------------------------------- */}
      {/* EDUCATION & RESEARCH SECTION                                              */}
      {/* ------------------------------------------------------------------------- */}
      
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Education */}
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
                    <div className="flex items-start justify-between">
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
                        {edu.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Research */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Brain className="text-purple-400" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-white">Research Experience</h2>
              </div>
              
              <div className="space-y-6">
                {research.map((res) => (
                  <div key={res.id} className="glass-card p-6 border-l-4 border-purple-500">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-white font-semibold">{res.title}</h3>
                        <p className="text-purple-400 text-sm">{res.organization}</p>
                        <p className="text-gray-500 text-xs mt-1">{res.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-500 text-sm">{res.period}</span>
                        {res.status === 'Ongoing' && (
                          <span className="block text-xs text-green-400 mt-1">● {res.status}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-3">{res.description}</p>
                    {res.projects && (
                      <div className="mt-4 space-y-2">
                        {res.projects.map((proj, i) => (
                          <div key={i} className="bg-white/5 rounded-lg p-3">
                            <h4 className="text-white text-sm font-medium">{proj.name}</h4>
                            <p className="text-gray-500 text-xs mt-1">{proj.description}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {proj.tech.map((t, j) => (
                                <span key={j} className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ------------------------------------------------------------------------- */}
      {/* FEATURED PROJECTS SECTION                                                 */}
      {/* ------------------------------------------------------------------------- */}
      
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Mobile View All Link */}
          <Link
            to="/projects"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      
      {/* ------------------------------------------------------------------------- */}
      {/* BLOG PREVIEW SECTION                                                      */}
      {/* ------------------------------------------------------------------------- */}
      
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
            {/* Featured Blog Posts */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {featuredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book Sunday CTA */}
              <Link 
                to="/book-sunday"
                className="glass-card p-6 block hover:border-blue-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-blue-400" size={24} />
                  <span className="text-xl">📚</span>
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
              
              {/* Popular Posts */}
              <div>
                <h3 className="text-white font-semibold mb-4">🔥 Popular Posts</h3>
                <div className="space-y-4">
                  {popularBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} compact />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile View All Link */}
          <Link
            to="/blog"
            className="sm:hidden flex items-center justify-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      
      {/* ------------------------------------------------------------------------- */}
      {/* ACHIEVEMENTS PREVIEW                                                      */}
      {/* ------------------------------------------------------------------------- */}
      
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
          
          {/* Quick Achievement Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentAchievements.map((achievement) => (
              <div key={achievement.id} className="glass-card glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                    {achievement.type === 'certification' ? '🏆' : 
                     achievement.type === 'award' ? '🥇' : 
                     achievement.type === 'education' ? '🎓' : 
                     achievement.type === 'research' ? '🔬' :
                     achievement.type === 'recognition' ? '⭐' : '🏅'}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold line-clamp-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {achievement.organization}
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      {new Date(achievement.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile View All Link */}
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
  )
}

export default Home
