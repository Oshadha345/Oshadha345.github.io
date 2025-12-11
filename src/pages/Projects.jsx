// =============================================================================
// PROJECTS PAGE
// =============================================================================
// 
// Displays all projects in a filterable grid
// Features:
// - Filter by status (All, Completed, In Progress)
// - Filter by tech stack
// - Search functionality
//
// =============================================================================

import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'

// Components
import ProjectCard from '../components/cards/ProjectCard'
import SEO from '../components/common/SEO'

// Data
import { projects, getAllTechStack } from '../data'

// =============================================================================
// PROJECTS PAGE COMPONENT
// =============================================================================

const Projects = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedTech, setSelectedTech] = useState('all')
  
  // Get all unique tech stack items for filter
  const allTech = getAllTechStack()
  
  // Status filter options
  const statusOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
  ]
  
  // ---------------------------------------------------------------------------
  // FILTERED PROJECTS
  // ---------------------------------------------------------------------------
  
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => 
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )
      
      // Status filter
      const matchesStatus = 
        selectedStatus === 'all' || project.status === selectedStatus
      
      // Tech filter
      const matchesTech = 
        selectedTech === 'all' || project.techStack.includes(selectedTech)
      
      return matchesSearch && matchesStatus && matchesTech
    })
  }, [searchQuery, selectedStatus, selectedTech])
  
  return (
    <>
      <SEO 
        title="Projects" 
        description="Explore my portfolio of web development projects including full-stack applications, UI/UX designs, and open source contributions."
      />
      
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PAGE HEADER                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-blue-400 font-medium">Portfolio</span>
            <h1 className="section-title mt-2 text-4xl sm:text-5xl">My Projects</h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A collection of projects I've worked on, ranging from web applications 
              to open source contributions. Each project represents a unique challenge 
              and learning experience.
            </p>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* FILTERS                                                                 */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="glass-card p-6 mb-8 animate-fade-in-up animation-delay-200">
            <div className="flex flex-col lg:flex-row gap-4">
              
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="glass-input pl-12"
                />
              </div>
              
              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-500" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="glass-input cursor-pointer"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Tech Filter */}
              <div>
                <select
                  value={selectedTech}
                  onChange={(e) => setSelectedTech(e.target.value)}
                  className="glass-input cursor-pointer"
                >
                  <option value="all" className="bg-gray-900">All Technologies</option>
                  {allTech.map((tech) => (
                    <option key={tech} value={tech} className="bg-gray-900">
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Active Filters Display */}
            {(searchQuery || selectedStatus !== 'all' || selectedTech !== 'all') && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="text-gray-500 text-sm">Active filters:</span>
                
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="tag flex items-center gap-1"
                  >
                    Search: {searchQuery}
                    <span className="ml-1">×</span>
                  </button>
                )}
                
                {selectedStatus !== 'all' && (
                  <button
                    onClick={() => setSelectedStatus('all')}
                    className="tag flex items-center gap-1"
                  >
                    Status: {selectedStatus}
                    <span className="ml-1">×</span>
                  </button>
                )}
                
                {selectedTech !== 'all' && (
                  <button
                    onClick={() => setSelectedTech('all')}
                    className="tag flex items-center gap-1"
                  >
                    Tech: {selectedTech}
                    <span className="ml-1">×</span>
                  </button>
                )}
                
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedStatus('all')
                    setSelectedTech('all')
                  }}
                  className="text-gray-400 hover:text-white text-sm ml-2"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* PROJECTS GRID                                                           */}
          {/* ----------------------------------------------------------------------- */}
          
          {filteredProjects.length > 0 ? (
            <>
              <p className="text-gray-500 text-sm mb-6">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id} 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* No Results */
            <div className="text-center py-20 glass-card">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-white text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedStatus('all')
                  setSelectedTech('all')
                }}
                className="btn-primary mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
