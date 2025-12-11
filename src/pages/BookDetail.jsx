// =============================================================================
// BOOK DETAIL PAGE
// =============================================================================
// 
// Individual book review page with full content
//
// =============================================================================

import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Calendar, Clock, BookOpen, ExternalLink, Share2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// Components
import SEO from '../components/common/SEO'

// Data
import { getBookBySlug, bookCategories, getAllBooks } from '../data'

// =============================================================================
// BOOK DETAIL COMPONENT
// =============================================================================

const BookDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const book = getBookBySlug(slug)
  
  // Get related books (same category, excluding current)
  const relatedBooks = getAllBooks()
    .filter(b => b.category === book?.category && b.id !== book?.id)
    .slice(0, 3)
  
  // If book not found
  if (!book) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card p-12">
            <div className="text-6xl mb-4">📚</div>
            <h1 className="text-2xl font-bold text-white mb-4">Book Not Found</h1>
            <p className="text-gray-400 mb-6">The book review you're looking for doesn't exist.</p>
            <Link to="/book-sunday" className="btn-primary">
              Back to Book Sunday
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
      />
    ))
  }
  
  const category = bookCategories.find(c => c.id === book.category)
  
  return (
    <>
      <SEO 
        title={`${book.title} - Book Review`}
        description={book.excerpt}
      />
      
      <article className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Book Sunday
          </button>
          
          {/* ----------------------------------------------------------------------- */}
          {/* BOOK HEADER                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <header className="glass-card p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-8">
              {/* Book Cover */}
              <div className="sm:w-48 flex-shrink-0">
                <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
                          <span class="text-white text-center font-semibold">${book.title}</span>
                        </div>
                      `
                    }}
                  />
                </div>
              </div>
              
              {/* Book Info */}
              <div className="flex-grow">
                {/* Category */}
                <Link 
                  to={`/book-sunday?category=${book.category}`}
                  className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors mb-4"
                >
                  <span>{category?.emoji}</span>
                  {category?.label}
                </Link>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {book.title}
                </h1>
                
                <p className="text-xl text-gray-400 mb-4">
                  by {book.author}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(book.rating)}
                  </div>
                  <span className="text-gray-400">({book.rating}/5)</span>
                </div>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    Read: {new Date(book.dateRead).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {book.readTime} min read
                  </span>
                  {book.pages && (
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {book.pages} pages
                    </span>
                  )}
                  {book.yearPublished && (
                    <span>Published: {book.yearPublished}</span>
                  )}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* External Links */}
                {book.bookLinks && (
                  <div className="flex gap-3 mt-4">
                    {book.bookLinks.amazon && (
                      <a
                        href={book.bookLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button text-sm flex items-center gap-2"
                      >
                        Amazon <ExternalLink size={14} />
                      </a>
                    )}
                    {book.bookLinks.goodreads && (
                      <a
                        href={book.bookLinks.goodreads}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-button text-sm flex items-center gap-2"
                      >
                        Goodreads <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </header>
          
          {/* ----------------------------------------------------------------------- */}
          {/* BOOK EXCERPT                                                            */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card p-6 mb-8 border-l-4 border-blue-500">
            <p className="text-gray-300 text-lg italic">
              "{book.excerpt}"
            </p>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* REVIEW CONTENT                                                          */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card p-6 sm:p-8 mb-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4 first:mt-0">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-semibold">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-white/10 px-2 py-1 rounded text-blue-300">
                      {children}
                    </code>
                  ),
                }}
              >
                {book.content}
              </ReactMarkdown>
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* SHARE & NAVIGATION                                                      */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="flex justify-between items-center mb-12">
            <Link
              to="/book-sunday"
              className="glass-button flex items-center gap-2"
            >
              <ArrowLeft size={18} />
              All Books
            </Link>
            
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }}
              className="glass-button flex items-center gap-2"
            >
              <Share2 size={18} />
              Share
            </button>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* RELATED BOOKS                                                           */}
          {/* ----------------------------------------------------------------------- */}
          
          {relatedBooks.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-white mb-6">
                More in {category?.label}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedBooks.map((relatedBook) => (
                  <Link
                    key={relatedBook.id}
                    to={`/book-sunday/${relatedBook.slug}`}
                    className="glass-card glass-card-hover p-4 group"
                  >
                    <div className="flex gap-3">
                      <div className="w-12 h-16 rounded overflow-hidden flex-shrink-0 bg-gray-800">
                        <img
                          src={relatedBook.coverImage}
                          alt={relatedBook.title}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.style.display = 'none' }}
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-blue-400 transition-colors">
                          {relatedBook.title}
                        </h3>
                        <p className="text-gray-500 text-xs mt-1">{relatedBook.author}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  )
}

export default BookDetail
