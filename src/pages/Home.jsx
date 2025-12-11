// =============================================================================
// HOME PAGE
// =============================================================================
// 
// Main landing page featuring:
// - Hero section with intro
// - Featured projects preview
// - Latest blog posts preview
// - Quick achievements overview
//
// =============================================================================

import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Components
import Hero from '../components/sections/Hero'
import ProjectCard from '../components/cards/ProjectCard'
import BlogCard from '../components/cards/BlogCard'
import SEO from '../components/common/SEO'

// Data
import { getFeaturedProjects, getFeaturedBlogs, getPopularBlogs, getLatestAchievements } from '../data'

// =============================================================================
// HOME PAGE COMPONENT
// =============================================================================

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3)
  const featuredBlogs = getFeaturedBlogs().slice(0, 2)
  const popularBlogs = getPopularBlogs(3)
  const recentAchievements = getLatestAchievements().slice(0, 3)
  
  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <Hero />
      
      {/* ------------------------------------------------------------------------- */}
      {/* FEATURED PROJECTS SECTION                                                 */}
      {/* ------------------------------------------------------------------------- */}
      
      <section className="py-20">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            {/* Popular Posts Sidebar */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold mb-4">🔥 Popular Posts</h3>
              {popularBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} compact />
              ))}
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
                     achievement.type === 'education' ? '🎓' : '⭐'}
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
