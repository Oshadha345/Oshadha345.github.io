# ✍️ Blog Writing Guide

This guide explains how to write and manage blog posts on your portfolio. The blog system supports categories, tags, comments, and likes.

## 📁 Blog Data Structure

All blog posts are stored in `src/data/blogs.js`.

### Blog Post Structure

```javascript
{
  id: 1,                                    // Unique ID
  slug: "my-blog-post-title",               // URL-friendly identifier
  title: "My Blog Post Title",              // Post title
  excerpt: "A brief preview of the post...", // Max 150 chars
  content: `Your full blog content...`,     // Full article content
  coverImage: "/images/blogs/cover.jpg",    // Cover image
  author: "Your Name",                      // Author name
  category: "tech",                         // Category
  tags: ["React", "JavaScript"],            // Related tags
  publishedAt: "2024-12-01",               // Publication date
  readTime: 5,                             // Minutes to read
  featured: false,                         // Show on homepage?
  likes: 0,                                // Initial like count
  comments: [],                            // Initial comments array
}
```

## 🆕 Adding a New Blog Post

### Step 1: Create Unique Slug

The slug is used in the URL. Make it:
- Lowercase
- Hyphens instead of spaces
- Descriptive and SEO-friendly

Examples:
- `getting-started-with-react`
- `my-journey-into-tech`
- `building-apis-with-nodejs`

### Step 2: Write Your Content

The content field supports a simple Markdown-like syntax:

```javascript
content: `
## This is a Heading 2

### This is a Heading 3

Regular paragraph text goes here. You can write multiple sentences.

**This text is bold** and *this is italic*.

Use \`inline code\` for technical terms.

Code blocks for longer code:

\`\`\`javascript
function hello() {
  console.log("Hello World!");
}
\`\`\`

Lists work too:
- First item
- Second item
- Third item

Numbered lists:
1. Step one
2. Step two
3. Step three
`
```

### Step 3: Add to blogs.js

```javascript
export const blogs = [
  // ... existing blogs
  {
    id: 7,  // Next available ID
    slug: "my-new-blog-post",
    title: "My New Blog Post Title",
    excerpt: "A compelling preview that makes readers want to click and read more about this topic.",
    content: `
## Introduction

Your introduction paragraph here...

## Main Section

Your main content...

### Subsection

More details...

## Conclusion

Wrap up your thoughts...
    `,
    coverImage: "/images/blogs/my-new-post.jpg",
    author: "Your Name",
    category: "tech",  // tech | life | tutorials
    tags: ["React", "Web Development", "Tutorial"],
    publishedAt: "2024-12-11",
    readTime: 8,
    featured: true,
    likes: 0,
    comments: [],
  },
]
```

### Step 4: Add Cover Image

1. Create an image (1200x630px recommended)
2. Save to `public/images/blogs/my-new-post.jpg`

## 📂 Categories

There are 4 categories available:

| Category | Description | Use For |
|----------|-------------|---------|
| `tech` | Technical articles | Code tutorials, tech deep-dives |
| `life` | Personal stories | Career journey, life experiences |
| `tutorials` | Step-by-step guides | How-to articles, guides |
| `other` | Everything else | Miscellaneous content |

## 🏷️ Tags Best Practices

Tags help readers find related content. Use them wisely:

- **Be specific**: "React Hooks" instead of just "React"
- **Be consistent**: Always use the same format (e.g., "Node.js" not "NodeJS")
- **Limit tags**: 3-5 tags per post is ideal
- **Popular tags**: JavaScript, React, Node.js, CSS, Career, Tutorial

## 📊 Blog Features

### Featured Posts

Set `featured: true` to display posts in:
- Homepage "From the Blog" section
- Featured badge on blog cards

```javascript
featured: true,  // Will appear on homepage
```

### Read Time

Calculate read time based on word count:
- Average reading speed: ~200 words/minute
- Count words in your content
- Round to nearest minute

```javascript
readTime: 5,  // Approximate minutes to read
```

### Comments

Comments start as an empty array. Users can add comments through the UI:

```javascript
comments: [
  {
    id: 1,
    author: "Reader Name",
    avatar: "/images/avatars/default.jpg",
    content: "Great article!",
    date: "2024-12-02",
    likes: 5,
  },
],
```

## 📝 Content Formatting Reference

### Headings
```
## Heading 2 (Main sections)
### Heading 3 (Subsections)
```

### Text Styles
```
**bold text**
*italic text*
`inline code`
```

### Code Blocks
````
```javascript
const code = "highlighted";
```
````

Supported languages: javascript, python, html, css, bash, json, etc.

### Lists
```
- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

## 🖼️ Cover Image Guidelines

| Aspect | Recommendation |
|--------|----------------|
| Size | 1200 x 630 pixels |
| Format | JPG or PNG |
| File size | Under 200KB |
| Style | Relevant to topic, readable title overlay |

### Where to Get Images

- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos
- [Carbon](https://carbon.now.sh) - Beautiful code snippets
- [Canva](https://canva.com) - Create custom graphics

## ✅ Blog Post Checklist

Before publishing:

- [ ] Unique ID and slug assigned
- [ ] Compelling title (50-60 characters)
- [ ] Engaging excerpt (under 150 characters)
- [ ] Content is well-formatted with headings
- [ ] Code blocks have correct language specified
- [ ] Cover image added (1200x630px)
- [ ] Correct category selected
- [ ] 3-5 relevant tags added
- [ ] Read time calculated
- [ ] Date is set correctly
- [ ] Preview locally with `npm run dev`

## 💡 Writing Tips

1. **Start with an outline**: Plan your headings before writing
2. **Hook the reader**: Make your first paragraph compelling
3. **Use code examples**: Developers love working code
4. **Add visuals**: Break up text with images or code blocks
5. **End with value**: Summarize key takeaways or next steps
6. **Proofread**: Check for typos and formatting issues

## 📈 SEO for Blog Posts

Each blog post automatically gets SEO meta tags. To optimize:

1. **Title**: Include main keyword (50-60 chars)
2. **Excerpt**: Natural keyword usage (150 chars)
3. **Slug**: Include keywords, keep it short
4. **Content**: Use keywords in headings naturally
5. **Cover Image**: Use descriptive filename

---

Example SEO-optimized post:
```javascript
{
  slug: "react-hooks-complete-guide-2024",
  title: "React Hooks: Complete Guide for Beginners (2024)",
  excerpt: "Learn React Hooks from scratch with practical examples. Master useState, useEffect, and custom hooks.",
  // Keywords: react hooks, beginners, guide, 2024
}
```

---

Next: [🚀 Deployment Guide](./DEPLOYMENT.md)
