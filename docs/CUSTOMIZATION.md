# 🎨 Customization Guide

This guide explains how to customize the design, colors, fonts, and layout of your portfolio.

## 🎨 Color Scheme

### Changing the Accent Color

The accent color is used for buttons, links, and highlights. Edit `src/index.css`:

```css
:root {
  /* Electric Blue (default) */
  --color-accent: #3b82f6;
  --color-accent-hover: #2563eb;
  --color-accent-light: #60a5fa;
}
```

### Pre-made Color Themes

#### Neon Purple
```css
:root {
  --color-accent: #8b5cf6;
  --color-accent-hover: #7c3aed;
  --color-accent-light: #a78bfa;
}
```

#### Emerald Green
```css
:root {
  --color-accent: #10b981;
  --color-accent-hover: #059669;
  --color-accent-light: #34d399;
}
```

#### Coral Pink
```css
:root {
  --color-accent: #f43f5e;
  --color-accent-hover: #e11d48;
  --color-accent-light: #fb7185;
}
```

#### Amber Orange
```css
:root {
  --color-accent: #f59e0b;
  --color-accent-hover: #d97706;
  --color-accent-light: #fbbf24;
}
```

#### Cyan Blue
```css
:root {
  --color-accent: #06b6d4;
  --color-accent-hover: #0891b2;
  --color-accent-light: #22d3ee;
}
```

### Background Colors

Modify the dark theme background:

```css
:root {
  /* Background Colors */
  --color-bg-primary: #0f0f1a;    /* Main background */
  --color-bg-secondary: #1a1a2e;  /* Secondary sections */
  --color-bg-tertiary: #16213e;   /* Tertiary elements */
}
```

### Glass Effect Colors

Customize the glassmorphism effect:

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.05);      /* Card background */
  --glass-border: rgba(255, 255, 255, 0.1);   /* Card border */
  --glass-shadow: rgba(0, 0, 0, 0.3);         /* Shadow intensity */
}
```

---

## 🔤 Typography

### Changing the Font

1. **Update Google Fonts** in `index.html`:

```html
<!-- Replace Inter with your font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

2. **Update font-family** in `src/index.css`:

```css
body {
  font-family: 'Poppins', system-ui, sans-serif;
}
```

### Recommended Fonts

| Font | Style | Link |
|------|-------|------|
| Inter | Clean, modern | Default |
| Poppins | Geometric, friendly | [Google Fonts](https://fonts.google.com/specimen/Poppins) |
| Space Grotesk | Technical, unique | [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk) |
| DM Sans | Clean, readable | [Google Fonts](https://fonts.google.com/specimen/DM+Sans) |
| Outfit | Modern, variable | [Google Fonts](https://fonts.google.com/specimen/Outfit) |

### Code Font

For code blocks, add a monospace font:

```html
<link href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap" rel="stylesheet" />
```

```css
code, pre {
  font-family: 'Fira Code', monospace;
}
```

---

## 🖼️ Glassmorphism Effects

### Adjusting Blur Intensity

In `src/index.css`, find the `.glass-card` class:

```css
.glass-card {
  backdrop-filter: blur(12px);  /* Increase for more blur */
  -webkit-backdrop-filter: blur(12px);
}
```

### Glass Intensity

- Light glass: `blur(8px)` + `rgba(255, 255, 255, 0.03)`
- Medium glass: `blur(12px)` + `rgba(255, 255, 255, 0.05)` (default)
- Heavy glass: `blur(20px)` + `rgba(255, 255, 255, 0.08)`

### Border Glow Effect

Add glow on hover:

```css
.glass-card:hover {
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(59, 130, 246, 0.2),  /* Border glow */
    0 0 20px rgba(59, 130, 246, 0.1);   /* Outer glow */
}
```

---

## 🎯 Layout Customization

### Navbar

Edit `src/components/layout/Navbar.jsx`:

**Change navigation links:**
```javascript
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' },  // Add new page
]
```

**Change logo style:**
```jsx
{/* Text Logo */}
<span className="text-xl font-bold gradient-text">
  {profile.name}
</span>

{/* Or use an image */}
<img src="/logo.png" alt="Logo" className="h-10" />
```

### Footer

Edit `src/components/layout/Footer.jsx`:

- Modify `quickLinks` array for footer navigation
- Add or remove social icons in `socialIcons` mapping
- Update the copyright text

### Hero Section

Edit `src/components/sections/Hero.jsx`:

**Change floating skill badges:**
```jsx
<div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-float">
  <span className="text-sm font-medium text-blue-400">Your Skill</span>
</div>
```

**Modify typewriter animation speed:**
```javascript
const timeout = setTimeout(() => {
  // ...
}, isDeleting ? 50 : 100)  // Adjust speed (ms)
```

---

## 🌈 Mesh Gradient Background

The mesh gradient creates the colorful background effect. Customize in `src/index.css`:

```css
.mesh-gradient {
  background: 
    radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
    var(--color-bg-primary);
}
```

**Tips:**
- Adjust percentages to move gradient positions
- Change rgba values to modify colors
- Increase alpha (0.15 → 0.25) for more visible colors

---

## ✨ Animations

### Animation Speeds

Modify animation durations in `src/index.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Distance */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;  /* Duration */
}
```

### Floating Animation

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }  /* Float distance */
}

.animate-float {
  animation: float 3s ease-in-out infinite;  /* Speed */
}
```

### Disable Animations

For users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm:` | 640px | Tablets |
| `md:` | 768px | Small laptops |
| `lg:` | 1024px | Desktops |
| `xl:` | 1280px | Large screens |
| `2xl:` | 1536px | Extra large |

**Example usage:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

---

## 🔧 Advanced Customization

### Adding New Pages

1. **Create page component**: `src/pages/About.jsx`
2. **Add route** in `src/App.jsx`:
```jsx
import About from './pages/About'

<Route path="/about" element={<About />} />
```
3. **Add nav link** in `Navbar.jsx`

### Custom Components

Create reusable components in `src/components/`:

```jsx
// src/components/common/Button.jsx
const Button = ({ children, variant = 'primary', ...props }) => {
  const classes = variant === 'primary' 
    ? 'btn-primary' 
    : 'glass-button'
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
```

### Adding Icons

Using Lucide React:

```jsx
import { IconName } from 'lucide-react'

<IconName size={24} className="text-blue-400" />
```

Browse icons: [lucide.dev/icons](https://lucide.dev/icons)

---

## 🎨 Quick Theming Reference

| Element | File | Class/Variable |
|---------|------|----------------|
| Accent color | `index.css` | `--color-accent` |
| Background | `index.css` | `--color-bg-primary` |
| Glass cards | `index.css` | `.glass-card` |
| Buttons | `index.css` | `.btn-primary` |
| Fonts | `index.html` + `index.css` | `font-family` |
| Animations | `index.css` | `@keyframes` |
| Layout | Components | Tailwind classes |

---

Happy customizing! 🎉
