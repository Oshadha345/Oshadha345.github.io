// =============================================================================
// ACHIEVEMENTS PAGE
// =============================================================================
// 
// Timeline-style achievements display with:
// - Filter by type (Certifications, Awards, Recognition, Education)
// - Vertical timeline layout
// - Achievement cards with verification links
//
// =============================================================================

import { useState, useMemo } from 'react'
import { Award, Trophy, Medal, GraduationCap, LayoutGrid } from 'lucide-react'

// Components
import AchievementCard from '../components/cards/AchievementCard'
import SEO from '../components/common/SEO'

// Data
import { achievements, achievementTypes, getLatestAchievements } from '../data'

// ---------------------------------------------------------------------------
// TYPE ICON MAPPING
// ---------------------------------------------------------------------------

const typeIcons = {
  LayoutGrid: LayoutGrid,
  Award: Award,
  Trophy: Trophy,
  Medal: Medal,
  GraduationCap: GraduationCap,
}

// =============================================================================
// ACHIEVEMENTS PAGE COMPONENT
// =============================================================================

const Achievements = () => {
  // State
  const [selectedType, setSelectedType] = useState('all')
  
  // Get filtered achievements
  const filteredAchievements = useMemo(() => {
    const sorted = getLatestAchievements()
    if (selectedType === 'all') return sorted
    return sorted.filter(a => a.type === selectedType)
  }, [selectedType])
  
  // Stats
  const stats = {
    total: achievements.length,
    certifications: achievements.filter(a => a.type === 'certification').length,
    awards: achievements.filter(a => a.type === 'award').length,
    recognition: achievements.filter(a => a.type === 'recognition').length,
  }
  
  return (
    <>
      <SEO 
        title="Achievements" 
        description="Professional certifications, awards, recognitions, and educational achievements showcasing my journey and accomplishments in software development."
      />
      
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ----------------------------------------------------------------------- */}
          {/* PAGE HEADER                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-blue-400 font-medium">Milestones</span>
            <h1 className="section-title mt-2 text-4xl sm:text-5xl">Achievements</h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A timeline of certifications, awards, and recognitions that mark my 
              journey as a developer and continuous learner.
            </p>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* STATS CARDS                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 animate-fade-in-up animation-delay-200">
            <div className="glass-card p-4 text-center">
              <div className="text-3xl font-bold gradient-text-accent">{stats.total}</div>
              <div className="text-gray-400 text-sm">Total</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">{stats.certifications}</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">{stats.awards}</div>
              <div className="text-gray-400 text-sm">Awards</div>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="text-3xl font-bold text-purple-400">{stats.recognition}</div>
              <div className="text-gray-400 text-sm">Recognition</div>
            </div>
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* FILTER TABS                                                             */}
          {/* ----------------------------------------------------------------------- */}
          
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up animation-delay-400">
            {achievementTypes.map((type) => {
              const Icon = typeIcons[type.icon]
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200
                    ${selectedType === type.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'glass-card text-gray-400 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {Icon && <Icon size={18} />}
                  {type.label}
                </button>
              )
            })}
          </div>
          
          {/* ----------------------------------------------------------------------- */}
          {/* TIMELINE                                                                */}
          {/* ----------------------------------------------------------------------- */}
          
          {filteredAchievements.length > 0 ? (
            <div className="relative">
              {/* Timeline Background Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden sm:block"></div>
              
              {/* Achievement Cards */}
              <div className="space-y-2">
                {filteredAchievements.map((achievement, index) => (
                  <div 
                    key={achievement.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <AchievementCard achievement={achievement} index={index} />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-20 glass-card">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-white text-xl font-semibold mb-2">No achievements found</h3>
              <p className="text-gray-400">
                Try selecting a different category
              </p>
              <button
                onClick={() => setSelectedType('all')}
                className="btn-primary mt-6"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Achievements
