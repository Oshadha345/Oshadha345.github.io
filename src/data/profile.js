// =============================================================================
// PROFILE DATA - Your Personal Information
// =============================================================================
// 
// HOW TO UPDATE:
// 1. Replace the placeholder values with your actual information
// 2. For the avatar, place your image in /public/images/ folder
// 3. Update social links with your actual profile URLs
// 4. The resume file should be placed in /public/ folder
//
// =============================================================================

export const profile = {
  // ---------------------------------------------------------------------------
  // BASIC INFO
  // ---------------------------------------------------------------------------
  name: "Your Name",
  title: "Full Stack Developer", // Your job title or role
  tagline: "Building digital experiences that matter",
  
  // Short bio for hero section (2-3 sentences)
  shortBio: "I'm a passionate developer crafting beautiful and functional web applications. I love turning complex problems into simple, elegant solutions.",
  
  // Longer bio for about section
  fullBio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  
  // ---------------------------------------------------------------------------
  // MEDIA
  // ---------------------------------------------------------------------------
  // Place your avatar image in: /public/images/avatar.jpg
  avatar: "/images/avatar.jpg",
  
  // Place your resume PDF in: /public/resume.pdf
  resumeUrl: "/resume.pdf",
  
  // ---------------------------------------------------------------------------
  // CONTACT & SOCIAL LINKS
  // ---------------------------------------------------------------------------
  email: "your.email@example.com",
  location: "City, Country",
  
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    // Add more social links as needed:
    // instagram: "https://instagram.com/yourusername",
    // youtube: "https://youtube.com/@yourusername",
    // dribbble: "https://dribbble.com/yourusername",
  },
  
  // ---------------------------------------------------------------------------
  // SKILLS (displayed in hero/about section)
  // ---------------------------------------------------------------------------
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
  ],
  
  // ---------------------------------------------------------------------------
  // ANIMATED TEXT (for hero section typewriter effect)
  // ---------------------------------------------------------------------------
  animatedRoles: [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Open Source Contributor",
    "Problem Solver",
  ],
}

// =============================================================================
// SEO METADATA
// =============================================================================
// This data is used for search engine optimization
// Update these values to improve your site's visibility on Google

export const seoData = {
  siteTitle: "Your Name | Portfolio",
  siteDescription: "Full Stack Developer portfolio showcasing projects, achievements, and technical blog posts. Expert in React, Node.js, and modern web technologies.",
  siteUrl: "https://yourusername.github.io", // Your deployed site URL
  siteImage: "/images/og-image.jpg", // Social sharing image (1200x630px recommended)
  keywords: [
    "developer",
    "portfolio",
    "react",
    "javascript",
    "web development",
    "full stack",
    // Add more relevant keywords
  ],
  twitterHandle: "@yourusername",
}
