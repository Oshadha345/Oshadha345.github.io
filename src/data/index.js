// =============================================================================
// DATA INDEX - Central Export Point
// =============================================================================
// 
// This file exports all data modules from a single location
// Import data in components like: import { profile, projects } from '../data'
//
// =============================================================================

// Profile, Education, Research & SEO Data
export { 
  profile, 
  seoData, 
  education, 
  research 
} from './profile'

// Projects Data & Helpers
export { 
  projects,
  projectCategories,
  getFeaturedProjects, 
  getProjectById, 
  getProjectsByCategory,
  getAllTechStack 
} from './projects'

// Blog Data & Helpers
export { 
  blogs,
  blogCategories,
  getLatestBlogs,
  getFeaturedBlogs,
  getBlogBySlug,
  getBlogsByCategory,
  getAllTags,
  getPopularBlogs,
  getBookSundayPosts
} from './blogs'

// Books Data & Helpers (Book Sunday)
export {
  books,
  bookCategories,
  getAllBooks,
  getFeaturedBooks,
  getBookBySlug,
  getBooksByCategory,
  getBooksByRating,
  getAllBookTags,
  getRecentBooks,
  getBookStats
} from './books'

// Achievements Data & Helpers
export { 
  achievements,
  achievementTypes,
  getLatestAchievements,
  getAchievementsByType,
  getAchievementsByYear
} from './achievements'
