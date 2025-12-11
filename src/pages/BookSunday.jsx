// =============================================================================
// BOOK SUNDAY PAGE
// =============================================================================
// 
// A dedicated page for book reviews and reading reflections
// Features:
// - Book review cards with cover images
// - Category filtering
// - Reading stats
// - Search functionality
//
// =============================================================================

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Search, Star, Calendar, Clock, Filter } from 'lucide-react'

// Components
import SEO from '../components/common/SEO'

// Data
import { 
  getAllBooks, 
  getBooksByCategory, 
  bookCategories, 
  getBookStats,
  profile 
} from '../data'

// =============================================================================
// BOOK CARD COMPONENT
// =============================================================================

const BookCard = ({ book, featured = false }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}
      />
    ))
  }
  
  return (
    <Link 
      to={`/book-sunday/${book.slug}`}
      className={`glass-card glass-card-hover overflow-hidden group ${featured ? 'p-0' : ''}`}
    >
      {featured ? (
        // Featured layout - horizontal
        <div className="flex flex-col sm:flex-row">
          {/* Book Cover */}
          <div className="sm:w-48 h-64 sm:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
          
          {/* Content */}
          <div className="p-6 flex flex-col justify-between flex-grow">
            <div>
              {/* Category Badge */}
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 mb-3 inline-block">
                {bookCategories.find(c => c.id === book.category)?.label || book.category}
              </span>
              
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                {book.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">by {book.author}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mt-3">
                {renderStars(book.rating)}
              </div>
              
              <p className="text-gray-400 text-sm mt-3 line-clamp-3">
                {book.excerpt}
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {new Date(book.dateRead).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {book.readTime} min read
              </span>
              {book.pages && (
                <span>{book.pages} pages</span>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Compact layout - vertical
        <div className="p-4">
          <div className="flex gap-4">
            {/* Small Cover */}
            <div className="w-16 h-24 flex-shrink-0 rounded overflow-hidden bg-gray-800">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            
            <div className="flex-grow min-w-0">
              <h4 className="text-white font-medium line-clamp-2 group-hover:text-blue-400 transition-colors">
                {book.title}
              </h4>
              <p className="text-gray-500 text-xs mt-1">{book.author}</p>
              <div className="flex items-center gap-1 mt-2">
                {renderStars(book.rating)}
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  )
}

// =============================================================================
// BOOK SUNDAY PAGE COMPONENT
// =============================================================================

const BookSunday = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  
  const allBooks = getAllBooks()
  const stats = getBookStats()
  
  // Filter books by category and search
  const filteredBooks = getBooksByCategory(activeCategory).filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  
  return (
    <>
      <SEO 
        title="Book Sunday" 
        description="Weekly reflections on books - philosophy of mind, mathematics, physics, neuroscience, sci-fi, and more. Exploring ideas that shape understanding."
      />
      
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PAGE HEADER                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card mb-6">
              <BookOpen className="text-blue-400" size={24} />
              <span className="text-xl">📚</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Book Sunday</span>
            </h1>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every Sunday, I reflect on the books I read—wrestling with ideas, 
              connecting concepts, and extracting insights that reshape thinking.
            </p>
            
            <div className="mt-6 text-gray-500 italic">
              "{profile.tagline}"
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* READING STATS                                                           */}
          {/* ----------------------------------------------------------------------- */}
          
          {allBooks.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 animate-fade-in-up animation-delay-200">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{stats.totalBooks}</div>
                <div className="text-gray-500 text-xs">Books Reviewed</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">{stats.totalPages.toLocaleString()}</div>
                <div className="text-gray-500 text-xs">Pages Read</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">{stats.averageRating}</div>
                <div className="text-gray-500 text-xs">Avg Rating</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">{bookCategories.length - 1}</div>
                <div className="text-gray-500 text-xs">Categories</div>
              </div>
            </div>
          )}
          
          {/* ----------------------------------------------------------------------- */}
          {/* CATEGORY FILTERS                                                        */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="mb-8 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} className="text-gray-500" />
              <span className="text-gray-400 text-sm">Filter by category</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {bookCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'glass-card text-gray-400 hover:text-white hover:border-blue-500/50'
                  }`}
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* SEARCH BAR                                                              */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="max-w-xl mb-12 animate-fade-in-up animation-delay-400">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search books by title, author, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-input pl-12"
              />
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* BOOK REVIEWS                                                            */}
          {/* ----------------------------------------------------------------------- */}
          
          {filteredBooks.length > 0 ? (
            <div className="space-y-6">
              <p className="text-gray-500 text-sm">
                {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} 
                {activeCategory !== 'all' && ` in ${bookCategories.find(c => c.id === activeCategory)?.label}`}
              </p>
              
              {filteredBooks.map((book, index) => (
                <div 
                  key={book.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BookCard book={book} featured />
                </div>
              ))}
            </div>
          ) : allBooks.length === 0 ? (
            /* No Books Yet - Show Getting Started */
            <div className="text-center py-16 glass-card">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-400 max-w-md mx-auto mb-6">
                The first Book Sunday reviews are being written. Check back soon for reflections on philosophy, AI, mathematics, and more.
              </p>
              
              {/* Categories Preview */}
              <div className="mt-8">
                <h4 className="text-gray-400 text-sm mb-4">Topics I'll be covering:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {bookCategories.slice(1).map((cat) => (
                    <span 
                      key={cat.id}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm"
                    >
                      <span>{cat.emoji}</span>
                      {cat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Search returned no results */
            <div className="text-center py-16 glass-card">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-white text-xl font-semibold mb-2">
                No books found
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Try a different search term or category
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="btn-primary mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* ----------------------------------------------------------------------- */}
          {/* HOW TO ADD BOOKS INFO                                                   */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="mt-16 glass-card p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            <h3 className="text-white font-semibold text-xl mb-4">
              📖 What Each Review Includes
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
              <div>
                <h4 className="text-white font-medium mb-2">Review Structure:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400" />
                    Book details & why I picked it
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400" />
                    Key ideas and core concepts
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400" />
                    Critical reflections and analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400" />
                    Connections to engineering, AI & philosophy
                  </li>
                  <li className="flex items-center gap-2">
                    <Star size={14} className="text-yellow-400" />
                    Rating and recommendation
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Categories:</h4>
                <ul className="space-y-2 text-sm">
                  {bookCategories.slice(1).map((cat) => (
                    <li key={cat.id} className="flex items-center gap-2">
                      <span>{cat.emoji}</span>
                      {cat.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookSunday
