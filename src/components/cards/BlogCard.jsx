// =============================================================================
// BLOG CARD COMPONENT
// =============================================================================
// 
// Glass-morphism card for displaying blog post previews
// Shows title, excerpt, metadata, and engagement stats
//
// PROPS:
// - blog: Object containing blog data (from blogs.js)
// - compact: Boolean for smaller variant (used in sidebar)
//
// =============================================================================

import { Link } from 'react-router-dom'
import { Calendar, Clock, Heart, MessageCircle, ArrowRight } from 'lucide-react'

// =============================================================================
// BLOG CARD COMPONENT
// =============================================================================

const BlogCard = ({ blog, compact = false }) => {
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }
  
  // ---------------------------------------------------------------------------
  // COMPACT VARIANT (for sidebar/featured section)
  // ---------------------------------------------------------------------------
  
  if (compact) {
    return (
      <Link
        to={`/blog/${blog.slug}`}
        className="glass-card glass-card-hover p-4 flex gap-4 group"
      >
        {/* Thumbnail */}
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
        
        {/* Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">
            {blog.title}
          </h4>
          <div className="flex items-center gap-3 mt-2 text-gray-500 text-xs">
            <span className="flex items-center gap-1">
              <Heart size={12} />
              {blog.likes}
            </span>
            <span>{formatDate(blog.publishedAt)}</span>
          </div>
        </div>
      </Link>
    )
  }
  
  // ---------------------------------------------------------------------------
  // FULL VARIANT (for main blog grid)
  // ---------------------------------------------------------------------------
  
  return (
    <article className="glass-card glass-card-hover overflow-hidden group">
      {/* ----------------------------------------------------------------------- */}
      {/* COVER IMAGE                                                             */}
      {/* ----------------------------------------------------------------------- */}
      
      <Link to={`/blog/${blog.slug}`} className="block relative h-48 overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        
        {/* Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 items-center justify-center hidden">
          <span className="text-4xl">📝</span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30 capitalize">
            {blog.category}
          </span>
        </div>
        
        {/* Featured Badge */}
        {blog.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-medium border border-yellow-500/30">
              ⭐ Featured
            </span>
          </div>
        )}
      </Link>
      
      {/* ----------------------------------------------------------------------- */}
      {/* CONTENT                                                                 */}
      {/* ----------------------------------------------------------------------- */}
      
      <div className="p-6 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(blog.publishedAt)}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {blog.readTime} min read
          </span>
        </div>
        
        {/* Title */}
        <Link to={`/blog/${blog.slug}`}>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </Link>
        
        {/* Excerpt */}
        <p className="text-gray-400 text-sm line-clamp-2">
          {blog.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {blog.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-gray-500">
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {/* Engagement Stats */}
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <span className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
              <Heart size={16} />
              {blog.likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={16} />
              {blog.comments.length}
            </span>
          </div>
          
          {/* Read More */}
          <Link
            to={`/blog/${blog.slug}`}
            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Read More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
