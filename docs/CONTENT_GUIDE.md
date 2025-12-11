# 📄 Content Guide

This guide explains how to update all content on your portfolio website. All content is stored in the `src/data/` folder - you don't need to modify any component files!

## 📁 Data Files Overview

| File | Content |
|------|---------|
| `profile.js` | Your personal info, social links, skills |
| `projects.js` | Your portfolio projects |
| `blogs.js` | Blog posts and articles |
| `achievements.js` | Certifications, awards, education |

---

## 👤 Updating Your Profile (`profile.js`)

### Basic Information

```javascript
export const profile = {
  // Your name (displayed everywhere)
  name: "John Doe",
  
  // Your job title
  title: "Full Stack Developer",
  
  // Short tagline for footer
  tagline: "Building digital experiences that matter",
  
  // Short bio (2-3 sentences for hero section)
  shortBio: "I'm a passionate developer crafting beautiful web applications...",
  
  // Longer bio (for about section if added)
  fullBio: `Your detailed biography here...`,
}
```

### Avatar & Resume

1. **Avatar Image**:
   - Place your photo at: `public/images/avatar.jpg`
   - Recommended size: 400x400px (square)
   - Supported formats: JPG, PNG, WebP

2. **Resume/CV**:
   - Place your PDF at: `public/resume.pdf`
   - The "Download CV" button links to this file

### Social Links

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  // Add more as needed:
  // instagram: "https://instagram.com/yourusername",
  // youtube: "https://youtube.com/@yourusername",
}
```

### Skills

```javascript
skills: [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  // Add your skills...
]
```

### Animated Roles (Typewriter Effect)

```javascript
animatedRoles: [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
  // These cycle in the hero section
]
```

### SEO Data

```javascript
export const seoData = {
  siteTitle: "John Doe | Portfolio",
  siteDescription: "Full Stack Developer portfolio...",
  siteUrl: "https://johndoe.github.io",
  siteImage: "/images/og-image.jpg",
  keywords: ["developer", "portfolio", "react"],
  twitterHandle: "@johndoe",
}
```

---

## 🚀 Adding Projects (`projects.js`)

### Project Structure

```javascript
{
  id: 1,                              // Unique ID (increment for new projects)
  title: "Project Name",              // Project title
  shortDescription: "Brief desc...",  // Max 100 chars (shown on card)
  fullDescription: `Detailed...`,     // Full description (shown on detail page)
  image: "/images/projects/name.jpg", // Project screenshot
  techStack: ["React", "Node.js"],    // Technologies used
  features: [                         // Key features list
    "User Authentication",
    "Real-time Updates",
  ],
  demoUrl: "https://demo.example.com", // Live demo (null if none)
  repoUrl: "https://github.com/...",   // GitHub repo (null if private)
  status: "completed",                 // "completed" | "in-progress" | "archived"
  featured: true,                      // Show on homepage?
  date: "2024-06-15",                  // Completion date
}
```

### Adding a New Project

1. Open `src/data/projects.js`
2. Add a new object to the `projects` array:

```javascript
export const projects = [
  // ... existing projects
  {
    id: 7,  // Next available ID
    title: "My New Project",
    shortDescription: "A brief description of what it does.",
    fullDescription: `
A detailed description of your project.

Features:
- Feature 1
- Feature 2
- Feature 3

This project was built to solve...
    `,
    image: "/images/projects/new-project.jpg",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    features: [
      "Feature One",
      "Feature Two",
      "Feature Three",
    ],
    demoUrl: "https://my-project.vercel.app",
    repoUrl: "https://github.com/username/my-project",
    status: "completed",
    featured: true,
    date: "2024-12-01",
  },
]
```

3. Add project image to `public/images/projects/new-project.jpg`

### Project Image Guidelines

- **Size**: 800x600px recommended (4:3 ratio)
- **Format**: JPG or PNG
- **Location**: `public/images/projects/`
- **Naming**: Use kebab-case (e.g., `my-project.jpg`)

---

## 🏆 Adding Achievements (`achievements.js`)

### Achievement Structure

```javascript
{
  id: 1,                              // Unique ID
  title: "AWS Certified Developer",   // Achievement title
  organization: "Amazon Web Services", // Issuing organization
  description: "Professional cert...", // Brief description
  date: "2024-06-15",                 // Date achieved
  type: "certification",              // "certification" | "award" | "recognition" | "education"
  icon: "Award",                      // Lucide icon name
  image: "/images/achievements/aws.png", // Badge/certificate image
  link: "https://verify.aws.com/...", // Verification link (optional)
  skills: ["AWS", "Cloud"],           // Related skills
}
```

### Available Icons

- `Award` - Certifications
- `Trophy` - Major awards
- `Medal` - Recognition
- `GraduationCap` - Education
- `Star` - Special recognition
- `Lightbulb` - Innovation awards
- `Database` - Technical certifications

### Adding a New Achievement

```javascript
export const achievements = [
  // ... existing achievements
  {
    id: 9,
    title: "Google Cloud Professional",
    organization: "Google",
    description: "Cloud architecture certification...",
    date: "2024-11-20",
    type: "certification",
    icon: "Award",
    image: "/images/achievements/gcp.png",
    link: "https://google.com/verify/...",
    skills: ["GCP", "Cloud", "DevOps"],
  },
]
```

---

## 🔄 Quick Update Checklist

### When You Start

- [ ] Update `profile.js` with your info
- [ ] Add your avatar to `public/images/avatar.jpg`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Update `seoData` in `profile.js`
- [ ] Update meta tags in `index.html`

### Adding Content

- [ ] **New Project**: Add to `projects.js` + add image
- [ ] **New Blog**: Add to `blogs.js` + add cover image
- [ ] **New Achievement**: Add to `achievements.js` + add badge

### Before Deploying

- [ ] Replace all "Lorem Ipsum" placeholder text
- [ ] Test all links (demo, repo, social)
- [ ] Add real project images
- [ ] Add your og-image.jpg for social sharing
- [ ] Update siteUrl in seoData

---

## 💡 Tips

1. **Keep descriptions concise**: Short descriptions should be under 100 characters
2. **Use high-quality images**: Compress images for web (use tools like TinyPNG)
3. **Update featured items**: Set `featured: true` for your best 3 projects/blogs
4. **Consistent dates**: Use ISO format (YYYY-MM-DD) for all dates
5. **Test locally**: Always run `npm run dev` to preview changes before deploying

---

Next: [📝 Blog Guide](./BLOG_GUIDE.md)
