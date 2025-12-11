// =============================================================================
// ACHIEVEMENTS DATA
// =============================================================================
//
// HOW TO ADD A NEW ACHIEVEMENT:
// 1. Copy an existing achievement object
// 2. Generate a new unique ID
// 3. Fill in all the fields
// 4. Add achievement images/icons to /public/images/achievements/ folder
//
// FIELDS EXPLAINED:
// - id: Unique identifier
// - title: Achievement name
// - organization: Issuing organization/company
// - description: Brief description of the achievement
// - date: Date achieved (ISO format)
// - type: "certification" | "award" | "recognition" | "education"
// - icon: Icon name from lucide-react (Award, Trophy, Medal, GraduationCap, etc.)
// - image: Achievement image/badge path (optional)
// - link: Verification link (optional)
// - skills: Related skills (optional)
//
// =============================================================================

export const achievements = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS infrastructure.",
    date: "2024-06-15",
    type: "certification",
    icon: "Award",
    image: "/images/achievements/aws-cert.png",
    link: "https://aws.amazon.com/verification",
    skills: ["AWS", "Cloud Architecture", "DevOps"],
  },
  {
    id: 2,
    title: "1st Place - National Hackathon",
    organization: "TechFest 2024",
    description: "Won first place among 200+ teams for developing an innovative AI-powered healthcare solution in 48 hours.",
    date: "2024-04-20",
    type: "award",
    icon: "Trophy",
    image: "/images/achievements/hackathon.png",
    link: null,
    skills: ["Problem Solving", "Team Leadership", "AI/ML"],
  },
  {
    id: 3,
    title: "Google Developer Expert",
    organization: "Google",
    description: "Recognized as a Google Developer Expert for contributions to the web development community.",
    date: "2024-02-10",
    type: "recognition",
    icon: "Medal",
    image: "/images/achievements/gde.png",
    link: "https://developers.google.com/community/experts",
    skills: ["Web Development", "Community Building", "Public Speaking"],
  },
  {
    id: 4,
    title: "Bachelor's in Computer Science",
    organization: "University of Technology",
    description: "Graduated with honors (GPA: 3.8/4.0). Specialized in Software Engineering and Artificial Intelligence.",
    date: "2023-12-15",
    type: "education",
    icon: "GraduationCap",
    image: "/images/achievements/degree.png",
    link: null,
    skills: ["Computer Science", "Software Engineering", "AI"],
  },
  {
    id: 5,
    title: "Meta Frontend Developer Certificate",
    organization: "Meta (Facebook)",
    description: "Professional certificate covering advanced React patterns, testing, and frontend architecture.",
    date: "2023-09-05",
    type: "certification",
    icon: "Award",
    image: "/images/achievements/meta-cert.png",
    link: "https://coursera.org/verify/professional-cert",
    skills: ["React", "JavaScript", "Frontend Architecture"],
  },
  {
    id: 6,
    title: "Open Source Contributor Award",
    organization: "GitHub",
    description: "Recognized for significant contributions to open source projects with over 500+ contributions in a year.",
    date: "2023-07-20",
    type: "recognition",
    icon: "Star",
    image: "/images/achievements/github.png",
    link: "https://github.com/yourusername",
    skills: ["Open Source", "Collaboration", "Git"],
  },
  {
    id: 7,
    title: "MongoDB Certified Developer",
    organization: "MongoDB Inc.",
    description: "Professional certification validating expertise in MongoDB database design and application development.",
    date: "2023-05-12",
    type: "certification",
    icon: "Database",
    image: "/images/achievements/mongodb-cert.png",
    link: "https://university.mongodb.com/certification",
    skills: ["MongoDB", "Database Design", "NoSQL"],
  },
  {
    id: 8,
    title: "Best Innovation Award",
    organization: "Company Hackathon 2023",
    description: "Awarded for developing an internal tool that improved team productivity by 40%.",
    date: "2023-03-08",
    type: "award",
    icon: "Lightbulb",
    image: "/images/achievements/innovation.png",
    link: null,
    skills: ["Innovation", "Problem Solving", "Productivity"],
  },
]

// =============================================================================
// ACHIEVEMENT TYPES (for filtering)
// =============================================================================

export const achievementTypes = [
  { id: "all", label: "All", icon: "LayoutGrid" },
  { id: "certification", label: "Certifications", icon: "Award" },
  { id: "award", label: "Awards", icon: "Trophy" },
  { id: "recognition", label: "Recognition", icon: "Medal" },
  { id: "education", label: "Education", icon: "GraduationCap" },
]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all achievements sorted by date (newest first)
 */
export const getLatestAchievements = () => {
  return [...achievements].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )
}

/**
 * Get achievements by type
 */
export const getAchievementsByType = (type) => {
  if (type === "all") return getLatestAchievements()
  return achievements.filter(achievement => achievement.type === type)
}

/**
 * Get achievement by ID
 */
export const getAchievementById = (id) => {
  return achievements.find(achievement => achievement.id === parseInt(id))
}

/**
 * Get all certifications
 */
export const getCertifications = () => {
  return achievements.filter(a => a.type === "certification")
}

/**
 * Get all awards
 */
export const getAwards = () => {
  return achievements.filter(a => a.type === "award")
}
