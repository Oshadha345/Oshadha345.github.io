// =============================================================================
// PROJECT DETAIL PAGE
// =============================================================================
// 
// Individual project page showing full details:
// - Project image gallery
// - Full description
// - Tech stack
// - Features list
// - Links to demo/repo
//
// =============================================================================

import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle, Microscope, ArrowUpRight } from 'lucide-react'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// Components
import SEO from '../components/common/SEO'

// Data
import { getProjectById, projects } from '../data'

// =============================================================================
// PROJECT DETAIL COMPONENT
// =============================================================================

const ProjectDetail = () => {
  const { id, slug } = useParams()
  const navigate = useNavigate()

  const markdownComponents = {
    img: ({ node, ...props }) => {
      const src = props.src || ''
      if (typeof src === 'string' && src.toLowerCase().endsWith('.mp4')) {
        return (
          <video controls preload="metadata" className="w-full rounded-xl my-4">
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      }
      if (typeof src === 'string' && src.includes('img.shields.io')) {
        return (
          <img
            {...props}
            loading="lazy"
            style={{
              ...(props.style || {}),
              display: 'inline-block',
              margin: '0 8px 8px 0',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 0,
              verticalAlign: 'middle',
            }}
          />
        )
      }
      return <img {...props} loading="lazy" />
    },
    a: ({ node, ...props }) => {
      const href = props.href || ''
      if (typeof href === 'string' && href.toLowerCase().endsWith('.mp4')) {
        return (
          <video controls preload="metadata" className="w-full rounded-xl my-4">
            <source src={href} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      }
      return <a {...props} target="_blank" rel="noopener noreferrer" />
    },
  }
  
  // Get project data
  const project = getProjectById(id ?? slug)
  
  // Handle project not found
  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center glass-card p-12">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-white mb-2">Project Not Found</h1>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    )
  }
  
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    })
  }
  
  // Get related projects (same tech stack)
  const relatedProjects = projects
    .filter(p => 
      p.id !== project.id && 
      p.techStack.some(tech => project.techStack.includes(tech))
    )
    .slice(0, 3)
  
  return (
    <>
      <SEO 
        title={project.title}
        description={project.shortDescription}
        image={project.image}
      />
      
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* BACK BUTTON                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>
          
          {/* ----------------------------------------------------------------------- */}
          {/* PROJECT HEADER                                                          */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card overflow-hidden animate-fade-in-up">
            {/* Project Image */}
            <div className="relative h-64 sm:h-80 lg:h-96">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 items-center justify-center hidden">
                <span className="text-8xl">🚀</span>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <span className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  ${project.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }
                `}>
                  {project.status === 'completed' ? '✓ Completed' : '🚧 In Progress'}
                </span>
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-gray-300 flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(project.date)}
                </p>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button flex items-center gap-2"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
              </div>

              {project.isResearch && project.researchMeta && (
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                      <Microscope size={18} className="text-blue-300" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-blue-300">
                        {project.researchMeta.label}
                      </p>
                      <h2 className="text-white font-semibold text-lg">{project.researchMeta.venue}</h2>
                    </div>
                  </div>
                  <p className="text-gray-300">{project.researchMeta.summary}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                      {project.researchMeta.status}
                    </span>
                    <Link
                      to="/research"
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200"
                    >
                      View research portfolio
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              )}
              
              {/* Tech Stack */}
              <div>
                <h2 className="text-white font-semibold text-lg mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Description */}
              <div>
                <h2 className="text-white font-semibold text-lg mb-4">About This Project</h2>
                <div className="project-markdown prose prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={markdownComponents}
                  >
                    {project.fullDescription}
                  </ReactMarkdown>
                </div>
              </div>
              
              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h2 className="text-white font-semibold text-lg mb-4">Key Features</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 text-gray-400"
                      >
                        <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* RELATED PROJECTS                                                        */}
          {/* ----------------------------------------------------------------------- */}
          
          {relatedProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-white font-semibold text-xl mb-6">Related Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="glass-card glass-card-hover p-4 group"
                  >
                    <div className="h-32 rounded-lg overflow-hidden mb-4">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                      {relatedProject.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectDetail
