// =============================================================================
// PROJECTS DATA
// =============================================================================
//
// HOW TO ADD A NEW PROJECT:
// 1. Copy an existing project object
// 2. Generate a new unique ID (use Date.now() or increment)
// 3. Fill in all the fields
// 4. Add project images to /public/images/projects/ folder
//
// FIELDS EXPLAINED:
// - id: Unique identifier (number or string)
// - title: Project name
// - shortDescription: Brief overview (shown on card) - max 100 chars
// - fullDescription: Detailed description (shown on project page)
// - image: Main project image path (place in /public/images/projects/)
// - techStack: Array of technologies used
// - features: Array of key features
// - demoUrl: Live demo link (optional - set to null if none)
// - repoUrl: GitHub repository link (optional - set to null if private)
// - status: "completed" | "in-progress" | "archived"
// - featured: true/false - Featured projects appear first
// - date: Project completion date
//
// =============================================================================

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDescription: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    fullDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

This project features:
- User authentication and authorization
- Product catalog with search and filters
- Shopping cart and checkout flow
- Payment processing with Stripe
- Admin dashboard for inventory management
- Order tracking and notifications

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: "/images/projects/ecommerce.jpg",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: [
      "User Authentication",
      "Payment Integration",
      "Admin Dashboard",
      "Real-time Notifications",
      "Responsive Design",
    ],
    demoUrl: "https://demo-ecommerce.example.com",
    repoUrl: "https://github.com/yourusername/ecommerce",
    status: "completed",
    featured: true,
    date: "2024-06-15",
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription: "Collaborative task management with real-time updates and team features.",
    fullDescription: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Key highlights:
- Drag and drop task organization
- Team collaboration features
- Real-time synchronization
- Calendar integration
- Progress tracking and analytics

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "/images/projects/taskapp.jpg",
    techStack: ["React", "Firebase", "Material-UI", "WebSocket"],
    features: [
      "Drag & Drop",
      "Real-time Sync",
      "Team Collaboration",
      "Analytics Dashboard",
    ],
    demoUrl: "https://demo-tasks.example.com",
    repoUrl: "https://github.com/yourusername/taskapp",
    status: "completed",
    featured: true,
    date: "2024-04-20",
  },
  {
    id: 3,
    title: "AI Image Generator",
    shortDescription: "Generate stunning images using AI with custom prompts and styles.",
    fullDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. This AI-powered application allows users to generate unique images based on text descriptions.

Features include:
- Text-to-image generation
- Style presets and customization
- Image history and favorites
- Download in multiple formats
- API integration with DALL-E

Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: "/images/projects/ai-generator.jpg",
    techStack: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "AI Generation",
      "Custom Styles",
      "Image History",
      "Export Options",
    ],
    demoUrl: "https://ai-images.example.com",
    repoUrl: "https://github.com/yourusername/ai-generator",
    status: "completed",
    featured: false,
    date: "2024-02-10",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    shortDescription: "Real-time weather data visualization with forecasts and alerts.",
    fullDescription: `A comprehensive weather application providing real-time data and forecasts.

This dashboard includes:
- Current weather conditions
- 7-day forecast
- Weather alerts and notifications
- Interactive maps
- Historical data analysis
- Multiple location support

Built with performance and user experience in mind.`,
    image: "/images/projects/weather.jpg",
    techStack: ["React", "Chart.js", "OpenWeather API", "Leaflet"],
    features: [
      "Real-time Data",
      "Interactive Maps",
      "Weather Alerts",
      "Data Visualization",
    ],
    demoUrl: "https://weather-dash.example.com",
    repoUrl: "https://github.com/yourusername/weather-dashboard",
    status: "completed",
    featured: false,
    date: "2023-12-05",
  },
  {
    id: 5,
    title: "Portfolio Website",
    shortDescription: "Modern portfolio with glassmorphism design and blog functionality.",
    fullDescription: `The very website you're looking at! Built with modern technologies and design principles.

Features:
- Glassmorphism UI design
- Responsive across all devices
- Blog system with comments
- SEO optimized
- Fast performance
- Easy content management

This project showcases my design and development skills.`,
    image: "/images/projects/portfolio.jpg",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    features: [
      "Glassmorphism Design",
      "Blog System",
      "SEO Optimized",
      "Responsive",
    ],
    demoUrl: null,
    repoUrl: "https://github.com/yourusername/portfolio",
    status: "in-progress",
    featured: false,
    date: "2024-08-01",
  },
  {
    id: 6,
    title: "Chat Application",
    shortDescription: "Real-time messaging app with end-to-end encryption and file sharing.",
    fullDescription: `A secure chat application with modern features and privacy-first approach.

Highlights:
- End-to-end encryption
- Real-time messaging
- File and media sharing
- Group chat support
- Message reactions
- Read receipts

Built with security and user privacy as top priorities.`,
    image: "/images/projects/chat.jpg",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    features: [
      "E2E Encryption",
      "File Sharing",
      "Group Chats",
      "Real-time",
    ],
    demoUrl: "https://secure-chat.example.com",
    repoUrl: null, // Private repository
    status: "completed",
    featured: true,
    date: "2024-01-15",
  },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all featured projects
 */
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

/**
 * Get project by ID
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id))
}

/**
 * Get projects by status
 */
export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status)
}

/**
 * Get all unique tech stack items
 */
export const getAllTechStack = () => {
  const allTech = projects.flatMap(project => project.techStack)
  return [...new Set(allTech)]
}
