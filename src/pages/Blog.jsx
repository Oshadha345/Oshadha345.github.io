// =============================================================================
// BLOG PAGE
// =============================================================================
// 
// Blog listing page with:
// - Category filter tabs (All, Tech, Life, Tutorials)
// - Search functionality
// - Popular posts sidebar
// - Responsive grid layout
//
// =============================================================================

import { useState, useMemo } from 'react'
import { Search, LayoutGrid, Code, Heart, BookOpen } from 'lucide-react'

// Components
import BlogCard from '../components/cards/BlogCard'
import SEO from '../components/common/SEO'

// Data
import { blogs, blogCategories, getLatestBlogs, getPopularBlogs, getAllTags } from '../data'

// ---------------------------------------------------------------------------
// CATEGORY ICON MAPPING
// ---------------------------------------------------------------------------

const categoryIcons = {
  LayoutGrid: LayoutGrid,
  Code: Code,
  Heart: Heart,
  BookOpen: BookOpen,
}

// =============================================================================
// BLOG PAGE COMPONENT
// =============================================================================

const Blog = () => {
  // State
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Get data
  const allBlogs = getLatestBlogs()
  const popularBlogs = getPopularBlogs(5)
  const allTags = getAllTags()
  
  // ---------------------------------------------------------------------------
  // FILTERED BLOGS
  // ---------------------------------------------------------------------------
  
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      // Search filter
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => 
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      
      // Category filter
      const matchesCategory = 
        selectedCategory === 'all' || blog.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [allBlogs, searchQuery, selectedCategory])
  
  return (
    <>
      <SEO 
        title="Blog" 
        description="Read my latest articles on web development, programming tutorials, tech insights, and personal experiences in the software industry."
      />
      
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PAGE HEADER                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-blue-400 font-medium">Articles & Tutorials</span>
            <h1 className="section-title mt-2 text-4xl sm:text-5xl">Blog</h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, 
              programming, and life as a developer.
            </p>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* SEARCH BAR                                                              */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input pl-12 text-center"
              />
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* CATEGORY TABS                                                           */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up animation-delay-400">
            {blogCategories.map((category) => {
              const Icon = categoryIcons[category.icon]
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200
                    ${selectedCategory === category.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'glass-card text-gray-400 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {Icon && <Icon size={18} />}
                  {category.label}
                </button>
              )
            })}
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* MAIN CONTENT                                                            */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Blog Grid */}
            <div className="lg:col-span-3">
              {filteredBlogs.length > 0 ? (
                <>
                  <p className="text-gray-500 text-sm mb-6">
                    Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {filteredBlogs.map((blog, index) => (
                      <div 
                        key={blog.id}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <BlogCard blog={blog} />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                /* No Results */
                <div className="text-center py-20 glass-card">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-white text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-gray-400">
                    Try adjusting your search or category filter
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                    }}
                    className="btn-primary mt-6"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Popular Posts */}
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  🔥 Popular Posts
                </h3>
                <div className="space-y-3">
                  {popularBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} compact />
                  ))}
                </div>
              </div>
              
              {/* Tags Cloud */}
              <div className="glass-card p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  🏷️ Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="tag text-xs hover:bg-blue-500/30 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Newsletter CTA (Optional) */}
              <div className="glass-card p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <h3 className="text-white font-semibold mb-2">📬 Stay Updated</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get notified when I publish new articles.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="glass-input text-sm mb-3"
                />
                <button className="btn-primary w-full text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
