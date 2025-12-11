// =============================================================================
// BLOG POST PAGE
// =============================================================================
// 
// Individual blog post page with:
// - Full article content
// - Author info
// - Like functionality
// - Comments section
// - Related posts
// - Share buttons
//
// =============================================================================

import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Heart, 
  MessageCircle, 
  Share2,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  User
} from 'lucide-react'

// Components
import BlogCard from '../components/cards/BlogCard'
import SEO from '../components/common/SEO'

// Data
import { getBlogBySlug, blogs, profile } from '../data'

// =============================================================================
// BLOG POST COMPONENT
// =============================================================================

const BlogPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  // Get blog data
  const blog = getBlogBySlug(slug)
  
  // State
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(blog?.likes || 0)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState(blog?.comments || [])
  
  // Handle blog not found
  if (!blog) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center glass-card p-12">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-white mb-2">Post Not Found</h1>
          <p className="text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    )
  }
  
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }
  
  // Handle like
  const handleLike = () => {
    if (!liked) {
      setLikeCount(prev => prev + 1)
      setLiked(true)
    } else {
      setLikeCount(prev => prev - 1)
      setLiked(false)
    }
  }
  
  // Handle share
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  const handleShare = (platform) => {
    const text = `Check out this article: ${blog.title}`
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    }
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400')
    }
    setShowShareMenu(false)
  }
  
  // Handle comment submit
  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    const comment = {
      id: Date.now(),
      author: 'Guest User',
      avatar: '/images/avatars/default.jpg',
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
    }
    
    setComments(prev => [comment, ...prev])
    setNewComment('')
  }
  
  // Get related posts
  const relatedPosts = blogs
    .filter(b => 
      b.slug !== blog.slug && 
      (b.category === blog.category || 
       b.tags.some(tag => blog.tags.includes(tag)))
    )
    .slice(0, 3)
  
  // ---------------------------------------------------------------------------
  // RENDER CONTENT (Simple markdown-like parsing)
  // ---------------------------------------------------------------------------
  
  const renderContent = (content) => {
    // Split by code blocks first
    const parts = content.split(/(```[\s\S]*?```)/g)
    
    return parts.map((part, index) => {
      // Code block
      if (part.startsWith('```')) {
        const lines = part.split('\n')
        const language = lines[0].replace('```', '').trim()
        const code = lines.slice(1, -1).join('\n')
        return (
          <pre key={index} className="bg-black/40 border border-white/10 rounded-xl p-4 overflow-x-auto my-6">
            <code className="text-sm text-gray-300 font-mono">{code}</code>
          </pre>
        )
      }
      
      // Regular content - split by lines and process
      return part.split('\n').map((line, lineIndex) => {
        const trimmedLine = line.trim()
        
        // Heading 2
        if (trimmedLine.startsWith('## ')) {
          return (
            <h2 key={`${index}-${lineIndex}`} className="text-2xl font-bold text-white mt-8 mb-4">
              {trimmedLine.replace('## ', '')}
            </h2>
          )
        }
        
        // Heading 3
        if (trimmedLine.startsWith('### ')) {
          return (
            <h3 key={`${index}-${lineIndex}`} className="text-xl font-semibold text-white mt-6 mb-3">
              {trimmedLine.replace('### ', '')}
            </h3>
          )
        }
        
        // List item
        if (trimmedLine.startsWith('- ')) {
          return (
            <li key={`${index}-${lineIndex}`} className="text-gray-400 ml-6 mb-2 list-disc">
              {processInlineStyles(trimmedLine.replace('- ', ''))}
            </li>
          )
        }
        
        // Numbered list
        if (/^\d+\.\s/.test(trimmedLine)) {
          return (
            <li key={`${index}-${lineIndex}`} className="text-gray-400 ml-6 mb-2 list-decimal">
              {processInlineStyles(trimmedLine.replace(/^\d+\.\s/, ''))}
            </li>
          )
        }
        
        // Empty line
        if (!trimmedLine) {
          return <br key={`${index}-${lineIndex}`} />
        }
        
        // Regular paragraph
        return (
          <p key={`${index}-${lineIndex}`} className="text-gray-400 mb-4 leading-relaxed">
            {processInlineStyles(trimmedLine)}
          </p>
        )
      })
    })
  }
  
  // Process inline styles (bold, italic, code, links)
  const processInlineStyles = (text) => {
    // This is a simplified version - for production, use a proper markdown parser
    return text
      .split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g)
      .map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i} className="bg-blue-500/20 px-2 py-0.5 rounded text-blue-300 text-sm">{part.slice(1, -1)}</code>
        }
        return part
      })
  }
  
  return (
    <>
      <SEO 
        title={blog.title}
        description={blog.excerpt}
        image={blog.coverImage}
        article={true}
      />
      
      <div className="min-h-screen pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* BACK BUTTON                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </button>
          
          {/* ----------------------------------------------------------------------- */}
          {/* ARTICLE HEADER                                                          */}
          {/* ----------------------------------------------------------------------- */}
          
          <header className="mb-12 animate-fade-in-up">
            {/* Category & Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/30 capitalize">
                {blog.category}
              </span>
              {blog.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-gray-500 text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{blog.author}</p>
                  <p className="text-sm text-gray-500">{profile.title}</p>
                </div>
              </div>
              
              <span className="text-gray-600">•</span>
              
              {/* Date */}
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {formatDate(blog.publishedAt)}
              </span>
              
              <span className="text-gray-600">•</span>
              
              {/* Read Time */}
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {blog.readTime} min read
              </span>
            </div>
          </header>
          
          {/* ----------------------------------------------------------------------- */}
          {/* COVER IMAGE                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="relative rounded-2xl overflow-hidden mb-12 animate-fade-in-up animation-delay-200">
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* ARTICLE CONTENT                                                         */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card p-6 sm:p-10 mb-12 animate-fade-in-up animation-delay-400">
            <div className="blog-content">
              {renderContent(blog.content)}
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* ENGAGEMENT BAR                                                          */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card p-6 flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex items-center gap-4">
              {/* Like Button */}
              <button
                onClick={handleLike}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200
                  ${liked 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'glass-card text-gray-400 hover:text-red-400'
                  }
                `}
              >
                <Heart size={20} className={liked ? 'fill-current' : ''} />
                <span>{likeCount}</span>
              </button>
              
              {/* Comments Count */}
              <div className="flex items-center gap-2 text-gray-400">
                <MessageCircle size={20} />
                <span>{comments.length} comments</span>
              </div>
            </div>
            
            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="glass-button flex items-center gap-2"
              >
                <Share2 size={18} />
                Share
              </button>
              
              {showShareMenu && (
                <div className="absolute right-0 top-full mt-2 glass-card p-2 min-w-[160px] z-10">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <Twitter size={18} />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <LinkIcon size={18} />
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* COMMENTS SECTION                                                        */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageCircle size={24} />
              Comments ({comments.length})
            </h2>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                rows={3}
                className="glass-input resize-none mb-4"
              />
              <button type="submit" className="btn-primary">
                Post Comment
              </button>
            </form>
            
            {/* Comments List */}
            <div className="space-y-6">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 p-4 rounded-xl bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                      <User size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-white font-medium">{comment.author}</span>
                        <span className="text-gray-500 text-sm">{formatDate(comment.date)}</span>
                      </div>
                      <p className="text-gray-400">{comment.content}</p>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-red-400 text-sm mt-2 transition-colors">
                        <Heart size={14} />
                        {comment.likes}
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">
                  No comments yet. Be the first to comment!
                </p>
              )}
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* RELATED POSTS                                                           */}
          {/* ----------------------------------------------------------------------- */}
          
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <BlogCard key={post.id} blog={post} />
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  )
}

export default BlogPost
