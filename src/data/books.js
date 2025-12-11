// =============================================================================
// BOOKS DATA - Book Sunday Reviews
// =============================================================================
//
// HOW TO ADD A NEW BOOK REVIEW:
// 1. Add a new object to the `books` array below
// 2. Place the book cover image in: /public/images/books/
//    - Recommended size: 400x600px (book cover ratio)
//    - Name format: book-slug.jpg (e.g., "godel-escher-bach.jpg")
// 3. Fill in all the required fields
//
// IMAGES:
// - coverImage: The book's cover - place in /public/images/books/
// - You can use placeholder if no image: "/images/books/placeholder.jpg"
//
// =============================================================================

export const books = [
  // ---------------------------------------------------------------------------
  // EXAMPLE BOOK REVIEW - Replace with your actual reviews
  // ---------------------------------------------------------------------------
  {
    id: 1,
    slug: "example-book-review",
    title: "Gödel, Escher, Bach: An Eternal Golden Braid",
    author: "Douglas Hofstadter",
    
    // Book cover image - place in /public/images/books/
    coverImage: "/images/books/godel-escher-bach.jpg",
    
    // Category - choose from bookCategories below
    category: "philosophy-consciousness",
    
    // Your rating out of 5
    rating: 5,
    
    // Short excerpt for cards (max 150 chars)
    excerpt: "A masterpiece exploring the nature of consciousness, self-reference, and strange loops through mathematics, art, and music.",
    
    // Full review content (supports markdown-like formatting)
    content: `## Why I Picked This Up

This book has been on my reading list for years. As someone fascinated by consciousness, mathematics, and the nature of intelligence, GEB seemed like essential reading.

## Key Ideas

### Strange Loops
The central concept - systems that loop back on themselves in unexpected ways, creating emergent properties like consciousness.

### Formal Systems
How mathematical systems can be both powerful and limited (Gödel's Incompleteness Theorems).

### Isomorphism
The deep structural similarities between music (Bach), art (Escher), and mathematics (Gödel).

## Critical Reflections

**What I Loved:**
- The playful dialogues between Achilles and the Tortoise
- Deep yet accessible explanations of Gödel's theorems
- Connections between seemingly unrelated fields

**Where I Struggled:**
- Some chapters are dense and require multiple readings
- The book is long (700+ pages) and demands commitment

## Connections to My Work

This book directly relates to my interest in:
- **AI/ML**: Understanding what it means for a system to be "intelligent"
- **Consciousness Studies**: The nature of self-reference and awareness
- **Mathematics**: The limits of formal systems

## Verdict

⭐⭐⭐⭐⭐ A life-changing read for anyone interested in the nature of mind and meaning.

**Who Should Read This:** Anyone curious about consciousness, AI, mathematics, or the deep structure of reality.`,
    
    // Tags for filtering
    tags: ["consciousness", "mathematics", "philosophy", "AI", "self-reference"],
    
    // When you finished reading
    dateRead: "2025-12-01",
    
    // When you published the review
    publishedAt: "2025-12-08",
    
    // Reading time for your review (in minutes)
    readTime: 8,
    
    // Is this a featured/recommended book?
    featured: true,
    
    // Optional: Where to buy/find the book
    bookLinks: {
      amazon: "https://amazon.com/...",
      goodreads: "https://goodreads.com/...",
    },
    
    // Optional: Page count
    pages: 777,
    
    // Optional: Year published
    yearPublished: 1979,
  },
  
  // ---------------------------------------------------------------------------
  // ADD MORE BOOKS BELOW - Copy the template above
  // ---------------------------------------------------------------------------
  
  // {
  //   id: 2,
  //   slug: "your-book-slug",
  //   title: "Book Title",
  //   author: "Author Name",
  //   coverImage: "/images/books/your-book.jpg",
  //   category: "category-id",
  //   rating: 4,
  //   excerpt: "Short description...",
  //   content: `Your full review...`,
  //   tags: ["tag1", "tag2"],
  //   dateRead: "2025-12-15",
  //   publishedAt: "2025-12-15",
  //   readTime: 5,
  //   featured: false,
  // },
]

// =============================================================================
// BOOK CATEGORIES
// =============================================================================

export const bookCategories = [
  { id: 'all', label: 'All Books', emoji: '📚' },
  { id: 'philosophy-consciousness', label: 'Philosophy of Mind & Consciousness', emoji: '🧠' },
  { id: 'mathematics', label: 'Mathematics', emoji: '🔢' },
  { id: 'physics-cosmology', label: 'Physics, Cosmology & Astronomy', emoji: '🌌' },
  { id: 'productivity', label: 'Productivity', emoji: '⚡' },
  { id: 'neuroscience', label: 'Neuroscience & Brain', emoji: '🧬' },
  { id: 'novels', label: 'Novels', emoji: '📖' },
  { id: 'sci-fi', label: 'Sci-Fi', emoji: '🚀' },
  { id: 'engineering', label: 'Engineering', emoji: '⚙️' },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export const getAllBooks = () => {
  return [...books].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export const getFeaturedBooks = () => {
  return books.filter(b => b.featured).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export const getBookBySlug = (slug) => books.find(b => b.slug === slug)

export const getBooksByCategory = (category) => {
  if (category === 'all') return getAllBooks()
  return books.filter(b => b.category === category).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export const getBooksByRating = (minRating) => {
  return books.filter(b => b.rating >= minRating).sort((a, b) => b.rating - a.rating)
}

export const getAllBookTags = () => {
  const tagSet = new Set()
  books.forEach(b => b.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}

export const getRecentBooks = (limit = 5) => {
  return getAllBooks().slice(0, limit)
}

export const getBookStats = () => {
  return {
    totalBooks: books.length,
    totalPages: books.reduce((sum, b) => sum + (b.pages || 0), 0),
    averageRating: books.length > 0 
      ? (books.reduce((sum, b) => sum + b.rating, 0) / books.length).toFixed(1)
      : 0,
    categoryCounts: bookCategories.slice(1).map(cat => ({
      ...cat,
      count: books.filter(b => b.category === cat.id).length
    })),
  }
}
