// =============================================================================
// PROJECT CARD COMPONENT
// =============================================================================
// 
// Reusable glass-morphism card for displaying project information
// Used in both the Projects page grid and Featured section
//
// PROPS:
// - project: Object containing project data (from projects.js)
// - featured: Boolean to show larger featured variant
//
// =============================================================================

import { Link } from 'react-router-dom'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

// =============================================================================
// PROJECT CARD COMPONENT
// =============================================================================

const ProjectCard = ({ project, featured = false }) => {
  return (
    <div 
      className={`
        glass-card glass-card-hover overflow-hidden group
        ${featured ? 'md:col-span-2 lg:col-span-1' : ''}
      `}
    >
      {/* ----------------------------------------------------------------------- */}
      {/* PROJECT IMAGE                                                           */}
      {/* ----------------------------------------------------------------------- */}
      
      <div className="relative h-48 overflow-hidden">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback gradient if image fails
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        
        {/* Fallback Gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 items-center justify-center hidden"
        >
          <span className="text-4xl">🚀</span>
        </div>
        
        {/* Overlay with Links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-blue-500/30 transition-colors"
              aria-label="View demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-blue-500/30 transition-colors"
              aria-label="View repository"
            >
              <Github size={20} />
            </a>
          )}
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${project.status === 'completed' 
              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
              : project.status === 'in-progress'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
            }
          `}>
            {project.status === 'completed' ? '✓ Completed' : 
             project.status === 'in-progress' ? '🚧 In Progress' : 'Archived'}
          </span>
        </div>
      </div>
      
      {/* ----------------------------------------------------------------------- */}
      {/* PROJECT INFO                                                            */}
      {/* ----------------------------------------------------------------------- */}
      
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 text-sm line-clamp-2">
          {project.shortDescription}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="tag text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="tag text-xs">+{project.techStack.length - 4}</span>
          )}
        </div>
        
        {/* View More Link */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors pt-2"
        >
          View Details
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
