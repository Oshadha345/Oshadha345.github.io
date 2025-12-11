// =============================================================================
// BLOGS DATA
// =============================================================================
//
// HOW TO ADD A NEW BLOG POST:
// 1. Copy an existing blog object
// 2. Generate a new unique ID 
// 3. Create a URL-friendly slug (lowercase, hyphens instead of spaces)
// 4. Fill in all the fields
// 5. Add blog images to /public/images/blogs/ folder
//
// FIELDS EXPLAINED:
// - id: Unique identifier
// - slug: URL-friendly identifier (used in URLs: /blog/your-slug)
// - title: Blog post title
// - excerpt: Short preview text (shown on cards) - max 150 chars
// - content: Full blog content (supports Markdown-like formatting)
// - coverImage: Main blog image path
// - author: Author name (usually your name)
// - category: "tech" | "life" | "tutorials" | "other"
// - tags: Array of relevant tags
// - publishedAt: Publication date (ISO format)
// - readTime: Estimated reading time in minutes
// - featured: true/false - Featured posts appear in hero section
// - likes: Initial like count (will be updated by users)
// - comments: Array of comments (starts empty, users will add)
//
// CONTENT FORMATTING:
// Use these markers in content for formatting:
// ## Heading 2
// ### Heading 3
// **bold text**
// *italic text*
// `inline code`
// ```language
// code block
// ```
// - bullet point
// 1. numbered list
// [link text](url)
// ![image alt](image-url)
//
// =============================================================================

export const blogs = [
  {
    id: 1,
    slug: "getting-started-with-react-hooks",
    title: "Getting Started with React Hooks: A Complete Guide",
    excerpt: "Learn the fundamentals of React Hooks and how they can simplify your component logic and state management.",
    content: `
## Introduction

React Hooks revolutionized the way we write React components. Introduced in React 16.8, hooks allow you to use state and other React features without writing a class.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Why Use Hooks?

Hooks solve several problems that developers faced with class components:

- **Reusable Logic**: Custom hooks allow you to extract component logic into reusable functions
- **Simplified Code**: No more dealing with 'this' keyword confusion
- **Better Organization**: Related code stays together instead of being split across lifecycle methods

## The useState Hook

The \`useState\` hook is the most basic hook. It allows you to add state to functional components.

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## The useEffect Hook

The \`useEffect\` hook handles side effects in your components. It combines \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` into a single API.

\`\`\`javascript
import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []); // Empty dependency array = run once on mount
  
  return <div>{data ? data.message : 'Loading...'}</div>;
}
\`\`\`

## Custom Hooks

One of the most powerful features of hooks is the ability to create your own custom hooks.

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}
\`\`\`

## Conclusion

Hooks are now the recommended way to write React components. They provide a cleaner, more intuitive API for managing state and side effects.

Start using hooks in your projects today and experience the benefits of cleaner, more maintainable code!
    `,
    coverImage: "/images/blogs/react-hooks.jpg",
    author: "Your Name",
    category: "tech",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
    publishedAt: "2024-08-15",
    readTime: 8,
    featured: true,
    likes: 142,
    comments: [
      {
        id: 1,
        author: "Jane Developer",
        avatar: "/images/avatars/default.jpg",
        content: "Great article! Really helped me understand useEffect better.",
        date: "2024-08-16",
        likes: 12,
      },
      {
        id: 2,
        author: "Code Enthusiast",
        avatar: "/images/avatars/default.jpg",
        content: "The custom hooks example is exactly what I needed. Thanks!",
        date: "2024-08-17",
        likes: 8,
      },
    ],
  },
  {
    id: 2,
    slug: "building-responsive-layouts-tailwind",
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Master responsive design using Tailwind CSS utility classes and create beautiful layouts for all screen sizes.",
    content: `
## Introduction

Tailwind CSS has changed the way developers approach styling. Its utility-first approach makes building responsive layouts incredibly intuitive.

## The Mobile-First Approach

Tailwind uses a mobile-first breakpoint system. This means unprefixed utilities apply to all screen sizes, while prefixed utilities apply at specific breakpoints and above.

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half on medium, third on large -->
</div>
\`\`\`

## Breakpoints

Tailwind provides five default breakpoints:

- \`sm\`: 640px and up
- \`md\`: 768px and up
- \`lg\`: 1024px and up
- \`xl\`: 1280px and up
- \`2xl\`: 1536px and up

## Flexbox & Grid

Tailwind makes Flexbox and Grid layouts simple:

\`\`\`html
<!-- Flexbox -->
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Item 1</div>
  <div class="flex-1">Item 2</div>
</div>

<!-- Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
\`\`\`

## Conclusion

With Tailwind CSS, responsive design becomes second nature. Start building beautiful, responsive layouts today!
    `,
    coverImage: "/images/blogs/tailwind-css.jpg",
    author: "Your Name",
    category: "tutorials",
    tags: ["CSS", "Tailwind", "Responsive Design", "Frontend"],
    publishedAt: "2024-07-28",
    readTime: 6,
    featured: true,
    likes: 98,
    comments: [
      {
        id: 1,
        author: "Design Lover",
        avatar: "/images/avatars/default.jpg",
        content: "Tailwind has made my workflow so much faster!",
        date: "2024-07-29",
        likes: 5,
      },
    ],
  },
  {
    id: 3,
    slug: "my-journey-into-tech",
    title: "My Journey Into Tech: From Beginner to Developer",
    excerpt: "A personal story about how I transitioned into tech and the lessons I learned along the way.",
    content: `
## The Beginning

Lorem ipsum dolor sit amet, consectetur adipiscing elit. My journey into technology started with curiosity and a desire to create.

## The Challenges

Like many beginners, I faced numerous obstacles:

- Imposter syndrome
- Information overload
- Choosing the right path
- Staying motivated

## Key Lessons Learned

1. **Consistency beats intensity**: Coding every day, even for 30 minutes, compounds over time
2. **Build projects**: Tutorial hell is real. Building your own projects is the fastest way to learn
3. **Community matters**: Finding your tribe makes the journey enjoyable
4. **Embrace failure**: Every bug is a learning opportunity

## Advice for Beginners

If you're just starting out:

- Pick one language and stick with it
- Don't compare your Chapter 1 to someone else's Chapter 20
- Document your journey
- Ask for help when stuck

## Conclusion

The tech journey is a marathon, not a sprint. Enjoy the process and celebrate small wins!
    `,
    coverImage: "/images/blogs/journey.jpg",
    author: "Your Name",
    category: "life",
    tags: ["Career", "Personal", "Motivation", "Beginner"],
    publishedAt: "2024-06-10",
    readTime: 5,
    featured: false,
    likes: 256,
    comments: [
      {
        id: 1,
        author: "Aspiring Dev",
        avatar: "/images/avatars/default.jpg",
        content: "This is so inspiring! Thank you for sharing your story.",
        date: "2024-06-11",
        likes: 23,
      },
      {
        id: 2,
        author: "Fellow Coder",
        avatar: "/images/avatars/default.jpg",
        content: "The part about imposter syndrome really resonated with me.",
        date: "2024-06-12",
        likes: 15,
      },
    ],
  },
  {
    id: 4,
    slug: "nodejs-api-best-practices",
    title: "Node.js API Best Practices for Production",
    excerpt: "Essential patterns and practices for building robust, scalable Node.js APIs ready for production.",
    content: `
## Introduction

Building a Node.js API that can handle production traffic requires careful consideration of various factors.

## Project Structure

A well-organized project structure is crucial:

\`\`\`
src/
├── controllers/    # Request handlers
├── services/       # Business logic
├── models/         # Data models
├── middleware/     # Custom middleware
├── routes/         # Route definitions
├── utils/          # Helper functions
├── config/         # Configuration
└── app.js          # Application entry
\`\`\`

## Error Handling

Always implement centralized error handling:

\`\`\`javascript
// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
\`\`\`

## Validation

Always validate incoming data:

\`\`\`javascript
import Joi from 'joi';

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
\`\`\`

## Security

- Use helmet for HTTP headers
- Implement rate limiting
- Sanitize user input
- Use HTTPS in production

## Conclusion

Following these best practices will help you build reliable, maintainable APIs.
    `,
    coverImage: "/images/blogs/nodejs.jpg",
    author: "Your Name",
    category: "tech",
    tags: ["Node.js", "API", "Backend", "Best Practices"],
    publishedAt: "2024-05-20",
    readTime: 10,
    featured: false,
    likes: 187,
    comments: [],
  },
  {
    id: 5,
    slug: "work-life-balance-developers",
    title: "Finding Work-Life Balance as a Developer",
    excerpt: "Tips and strategies for maintaining a healthy balance between coding and personal life.",
    content: `
## The Burnout Problem

Developer burnout is real. The constant pressure to learn, ship, and keep up can be overwhelming.

## Setting Boundaries

- Define your working hours and stick to them
- Turn off work notifications after hours
- Create a dedicated workspace

## Taking Breaks

The Pomodoro Technique works wonders:
- 25 minutes focused work
- 5 minutes break
- After 4 sessions, take a longer 15-30 minute break

## Hobbies Outside Tech

Having non-tech hobbies is essential:
- Exercise and physical activities
- Creative pursuits (music, art, writing)
- Spending time in nature

## Conclusion

Your worth isn't measured by your commits. Take care of yourself!
    `,
    coverImage: "/images/blogs/balance.jpg",
    author: "Your Name",
    category: "life",
    tags: ["Wellness", "Career", "Productivity", "Mental Health"],
    publishedAt: "2024-04-15",
    readTime: 4,
    featured: false,
    likes: 312,
    comments: [
      {
        id: 1,
        author: "Tired Dev",
        avatar: "/images/avatars/default.jpg",
        content: "I needed to read this today. Thank you!",
        date: "2024-04-16",
        likes: 45,
      },
    ],
  },
  {
    id: 6,
    slug: "complete-guide-git-workflow",
    title: "Complete Guide to Git Workflow for Teams",
    excerpt: "Learn professional Git workflows, branching strategies, and collaboration techniques for development teams.",
    content: `
## Introduction

Git is essential for modern development. This guide covers professional workflows for team collaboration.

## Branching Strategy

A clean branching strategy keeps your repository organized:

- \`main\`: Production-ready code
- \`develop\`: Integration branch
- \`feature/*\`: New features
- \`bugfix/*\`: Bug fixes
- \`hotfix/*\`: Urgent production fixes

## Commit Messages

Write meaningful commit messages:

\`\`\`
type(scope): subject

body

footer
\`\`\`

Types: feat, fix, docs, style, refactor, test, chore

## Pull Request Best Practices

- Keep PRs small and focused
- Write clear descriptions
- Include screenshots for UI changes
- Request reviews from relevant team members

## Conclusion

Good Git practices lead to smoother collaboration and cleaner history.
    `,
    coverImage: "/images/blogs/git.jpg",
    author: "Your Name",
    category: "tutorials",
    tags: ["Git", "DevOps", "Collaboration", "Best Practices"],
    publishedAt: "2024-03-08",
    readTime: 7,
    featured: false,
    likes: 156,
    comments: [],
  },
]

// =============================================================================
// BLOG CATEGORIES
// =============================================================================

export const blogCategories = [
  { id: "all", label: "All Posts", icon: "LayoutGrid" },
  { id: "tech", label: "Tech", icon: "Code" },
  { id: "life", label: "Life", icon: "Heart" },
  { id: "tutorials", label: "Tutorials", icon: "BookOpen" },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all blogs sorted by date (newest first)
 */
export const getLatestBlogs = () => {
  return [...blogs].sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  )
}

/**
 * Get featured blogs
 */
export const getFeaturedBlogs = () => {
  return blogs.filter(blog => blog.featured)
}

/**
 * Get blog by slug
 */
export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug)
}

/**
 * Get blog by ID
 */
export const getBlogById = (id) => {
  return blogs.find(blog => blog.id === parseInt(id))
}

/**
 * Get blogs by category
 */
export const getBlogsByCategory = (category) => {
  if (category === "all") return getLatestBlogs()
  return blogs.filter(blog => blog.category === category)
}

/**
 * Get blogs by tag
 */
export const getBlogsByTag = (tag) => {
  return blogs.filter(blog => 
    blog.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

/**
 * Get all unique tags
 */
export const getAllTags = () => {
  const allTags = blogs.flatMap(blog => blog.tags)
  return [...new Set(allTags)]
}

/**
 * Get most popular blogs (by likes)
 */
export const getPopularBlogs = (limit = 5) => {
  return [...blogs]
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit)
}

/**
 * Search blogs by title or content
 */
export const searchBlogs = (query) => {
  const lowercaseQuery = query.toLowerCase()
  return blogs.filter(blog => 
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
