// =============================================================================
// BLOGS DATA - Oshadha Samarakoon
// =============================================================================
// 
// This file contains blog posts (tech, research, life, tutorials)
// Book Sunday has its own separate data file: books.js
//
// =============================================================================

export const blogs = [
  // ---------------------------------------------------------------------------
  // RESEARCH & TECHNICAL BLOGS
  // ---------------------------------------------------------------------------
  {
    id: 1,
    slug: "understanding-mamba-state-space-models",
    title: "Understanding Mamba: State-Space Models for Sequence Modeling",
    excerpt: "A deep dive into the Mamba architecture and why state-space models are revolutionizing how we process sequences.",
    content: `## Introduction to Mamba

Transformers have dominated deep learning for years, but they come with a significant limitation: quadratic complexity with sequence length. Enter **Mamba** and State-Space Models (SSMs).

### The Problem with Transformers

\`\`\`
Attention Complexity: O(n²)
For a sequence of length 10,000: 100,000,000 operations!
\`\`\`

This makes long-sequence modeling computationally expensive and memory-intensive.

### State-Space Models: The Alternative

SSMs are inspired by continuous-time dynamical systems:

\`\`\`
h'(t) = Ah(t) + Bx(t)
y(t) = Ch(t) + Dx(t)
\`\`\`

Where:
- **A**: State transition matrix
- **B**: Input projection
- **C**: Output projection
- **h(t)**: Hidden state

### Why Mamba is Special

Mamba introduces **selective state spaces**—the ability to dynamically adjust how information is retained or forgotten based on input content.

Key innovations:
1. **Selective Scan**: Input-dependent state transitions
2. **Hardware-Aware Algorithm**: Optimized for modern GPUs
3. **Linear Complexity**: O(n) instead of O(n²)

### Applications in My Research

At MARC, we're applying Mamba to:
- **Solar Irradiance Forecasting**: Time-series prediction with long sequences
- **Remote Sensing**: Efficient processing of satellite imagery sequences

### Conclusion

State-space models represent a paradigm shift in sequence modeling. While Transformers excel in many tasks, SSMs like Mamba offer compelling advantages for long-sequence applications.

*Stay curious. The architecture landscape is evolving rapidly.*`,
    coverImage: "/images/blogs/mamba-ssm.jpg",
    author: "Oshadha Samarakoon",
    category: "tech",
    tags: ["deep-learning", "mamba", "state-space-models", "transformers", "AI"],
    publishedAt: "2025-11-15",
    readTime: 8,
    featured: true,
    likes: 0,
    comments: [],
  },
  {
    id: 2,
    slug: "my-research-journey-nifs-supercapacitors",
    title: "My Research Journey at NIFS: Exploring Supercapacitors",
    excerpt: "Reflecting on my experience as a volunteer researcher at the National Institute of Fundamental Studies, working on energy storage devices.",
    content: `## The Beginning

In October 2022, fresh out of A/Levels with a national rank of 98, I had the incredible opportunity to work at NIFS (National Institute of Fundamental Studies) in Hanthana.

### The Team

I worked under:
- **Prof. Ashoka Kumara** - Department Head
- **Mr. Asiri** - Assistant Researcher
- **Miss Ishara** - Assistant Researcher

### The Research Focus

Our work centered on **supercapacitors using activated carbon**—energy storage devices that bridge the gap between batteries and conventional capacitors.

### What I Learned

**1. Device Fabrication**
Hands-on experience building devices from raw materials, understanding the importance of precision and safety standards.

**2. Data Analysis**
Mastered Origin software for analyzing experimental data, ensuring accuracy in results.

**3. Literature Review**
Developed skills in reading research papers, proper referencing, and maintaining academic integrity.

**4. Research Methodology**
Learned the systematic approach to scientific inquiry.

### The Demonstration

One memorable moment was powering a DC motor with our fabricated supercapacitor, demonstrating:
- High power density for short bursts
- Rapid charge/discharge capabilities
- Potential for renewable energy applications

### Impact on My Path

This experience confirmed my passion for research and the intersection of fundamental science with practical applications. It set the foundation for my current work in AI/ML at MARC.

*The lessons from NIFS continue to shape how I approach every research problem.*`,
    coverImage: "/images/blogs/nifs-research.jpg",
    author: "Oshadha Samarakoon",
    category: "research",
    tags: ["research", "NIFS", "supercapacitors", "materials-science", "energy-storage"],
    publishedAt: "2025-10-20",
    readTime: 6,
    featured: false,
    likes: 0,
    comments: [],
  },
  {
    id: 3,
    slug: "competitive-programming-three-year-journey",
    title: "Three Years of Competitive Programming: Lessons and Growth",
    excerpt: "From knowing zero Python to grand finals - my journey through competitive programming competitions.",
    content: `## The Beginning: Season 1 (2023)

Our first step into the coding arena came at the ACES Pre-Coders competition. We jumped in with **zero prior knowledge of Python**.

### Learning on the Fly

We sat down, learned on the spot, and managed to secure a spot among the **Top 25 teams** from our university!

From Pre-Coders to Coders V10.0—the experience was unmatched.

### Season 2: The Grind (2024)

IEEEXtreme, Coders V11, Pre-Coders, MoraXtreme, ReidXtreme...

Countless hours of problem-solving, debugging, and pushing limits. We fell short of the ranks we aimed for—a season of heartache, but also growth.

### The AI Revolution in CP

In a rapidly evolving world, AI is reshaping competitive programming. Tools like AI copilots have opened new possibilities. But at its core, CP remains about:
- **Logical thinking**
- **Structured learning**
- **Hard work**

The synergy of human problem-solving combined with AI tools can unlock new heights.

### Season 3: Breakthrough (2025)

This year, everything clicked. Selected for **5+ grand finals out of 6-7 competitions**!

### Key Lessons

1. **Consistency beats intensity** - Daily practice > sporadic marathons
2. **Understand, don't memorize** - Build intuition for patterns
3. **Learn from failures** - Every wrong answer teaches something
4. **Team synergy matters** - Communication is key in team contests

### Looking Forward

The grind continues. Each competition is an opportunity to learn, improve, and push boundaries.

*Failure isn't final. It's just the next step towards something better.*`,
    coverImage: "/images/blogs/competitive-programming.jpg",
    author: "Oshadha Samarakoon",
    category: "life",
    tags: ["competitive-programming", "algorithms", "personal-growth", "coding"],
    publishedAt: "2025-10-01",
    readTime: 5,
    featured: true,
    likes: 0,
    comments: [],
  },
  {
    id: 4,
    slug: "first-year-engineering-reflections",
    title: "Reflections on First Year Engineering: Rank 41 out of 457",
    excerpt: "Looking back at my first year at University of Peradeniya's Faculty of Engineering - the challenges, the growth, and joining DEEE.",
    content: `## The Journey Begins

In June 2023, I entered the prestigious Faculty of Engineering at University of Peradeniya. Little did I know what an incredible year awaited.

### The Numbers

- **Final GPA**: 3.7545/4.0
- **Rank**: 41 out of 457 students
- **Department**: Selected for DEEE (Electrical & Electronic Engineering)

### What Made the Difference

**1. First Principles Thinking**
I don't follow conventional study paths. I prefer to dismantle ideas, rebuild them from scratch, and truly understand the underlying principles.

**2. Balanced Approach**
While many focused solely on academics, I maintained involvement in:
- Research at MARC
- Competitive programming
- Organizing committees (Predicta)
- Reading and philosophy

**3. Deep Work**
Quality over quantity. Focused study sessions beat long, distracted hours.

### The GP118 Line Following Robot

One highlight was our first year project—a line following robot with PID control. Despite circuit issues at the competition, the learning was invaluable.

Demonstrated at "Let My Country Awaken 2024"!

### Joining DEEE

Being selected for the Department of Electrical and Electronic Engineering opened doors to:
- Signal Processing courses
- Power Systems fundamentals
- Control Theory
- Research opportunities

### Advice for Future First Years

1. **Build strong foundations** - Don't skip the basics
2. **Find your community** - Collaborate and learn together
3. **Start exploring early** - Don't wait to find your interests
4. **Balance is key** - Academics aren't everything

*Currently maintaining 3.7/4.0 in third year. The journey continues.*`,
    coverImage: "/images/blogs/first-year.jpg",
    author: "Oshadha Samarakoon",
    category: "life",
    tags: ["university", "engineering", "Peradeniya", "DEEE", "personal"],
    publishedAt: "2025-08-15",
    readTime: 5,
    featured: false,
    likes: 0,
    comments: [],
  },
  {
    id: 5,
    slug: "introduction-to-jax-functional-ml",
    title: "Getting Started with JAX: Functional Machine Learning",
    excerpt: "An introduction to Google's JAX framework - why it matters and how to get started with functional ML programming.",
    content: `## Why JAX?

JAX is Google's high-performance numerical computing library. It combines:
- **NumPy's familiar interface**
- **XLA compilation** for speed
- **Automatic differentiation**
- **GPU/TPU acceleration**

### The Functional Paradigm

Unlike PyTorch or TensorFlow, JAX encourages functional programming:

\`\`\`python
import jax
import jax.numpy as jnp

# Pure function - no side effects
def loss_fn(params, x, y):
    predictions = model(params, x)
    return jnp.mean((predictions - y) ** 2)

# Automatic gradient computation
grad_fn = jax.grad(loss_fn)
\`\`\`

### Key JAX Transformations

**1. jit - Just-In-Time Compilation**
\`\`\`python
@jax.jit
def fast_function(x):
    return jnp.dot(x, x.T)
\`\`\`

**2. grad - Automatic Differentiation**
\`\`\`python
gradient = jax.grad(loss_fn)(params, x, y)
\`\`\`

**3. vmap - Automatic Vectorization**
\`\`\`python
# Apply function to batch automatically
batched_fn = jax.vmap(single_fn)
\`\`\`

**4. pmap - Parallelization**
\`\`\`python
# Distribute across devices
parallel_fn = jax.pmap(fn)
\`\`\`

### When to Use JAX

- Research requiring custom gradients
- High-performance inference
- Scientific computing
- When you need fine-grained control

### Getting Started

\`\`\`bash
pip install jax jaxlib
\`\`\`

Check out my [JAX repository](https://github.com/Oshadha345/JAX) for examples and experiments!

*JAX is reshaping how we think about ML frameworks.*`,
    coverImage: "/images/blogs/jax-intro.jpg",
    author: "Oshadha Samarakoon",
    category: "tutorials",
    tags: ["JAX", "machine-learning", "python", "tutorial", "deep-learning"],
    publishedAt: "2025-09-10",
    readTime: 7,
    featured: false,
    likes: 0,
    comments: [],
  },
]

// =============================================================================
// BLOG CATEGORIES
// =============================================================================

export const blogCategories = [
  { id: 'all', label: 'All Posts', icon: 'LayoutGrid' },
  { id: 'tech', label: 'Tech', icon: 'Code' },
  { id: 'research', label: 'Research', icon: 'Brain' },
  { id: 'tutorials', label: 'Tutorials', icon: 'GraduationCap' },
  { id: 'life', label: 'Life', icon: 'Heart' },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export const getLatestBlogs = () => {
  return [...blogs].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export const getFeaturedBlogs = () => {
  return blogs.filter(b => b.featured).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export const getBlogBySlug = (slug) => blogs.find(b => b.slug === slug)

export const getBlogsByCategory = (category) => {
  if (category === 'all') return getLatestBlogs()
  return blogs.filter(b => b.category === category).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

export const getPopularBlogs = (limit = 5) => {
  return [...blogs].sort((a, b) => b.likes - a.likes).slice(0, limit)
}

export const getAllTags = () => {
  const tagSet = new Set()
  blogs.forEach(b => b.tags.forEach(t => tagSet.add(t)))
  return Array.from(tagSet).sort()
}
