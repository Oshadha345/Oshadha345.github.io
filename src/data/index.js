// =============================================================================
// DATA INDEX - Central Export Point
// =============================================================================
// 
// This file exports all data modules from a single location
// Import data in components like: import { profile, projects } from '../data'
//
// =============================================================================

// Profile & SEO Data
export { profile, seoData } from './profile'

// Projects Data & Helpers
export { 
  projects, 
  getFeaturedProjects, 
  getProjectById, 
  getProjectsByStatus,
  getAllTechStack 
} from './projects'

// Blog Data & Helpers
export { 
  blogs,
  blogCategories,
  getLatestBlogs,
  getFeaturedBlogs,
  getBlogBySlug,
  getBlogById,
  getBlogsByCategory,
  getBlogsByTag,
  getAllTags,
  getPopularBlogs,
  searchBlogs
} from './blogs'

// Achievements Data & Helpers
export { 
  achievements,
  achievementTypes,
  getLatestAchievements,
  getAchievementsByType,
  getAchievementById,
  getCertifications,
  getAwards
} from './achievements'
