// =============================================================================
// ACHIEVEMENT CARD COMPONENT
// =============================================================================
// 
// Timeline-style card for displaying achievements
// Supports different types: certification, award, recognition, education
//
// PROPS:
// - achievement: Object containing achievement data (from achievements.js)
// - index: Position index for alternating layout
//
// =============================================================================

import { ExternalLink, Award, Trophy, Medal, GraduationCap, Star, Lightbulb, Database } from 'lucide-react'

// ---------------------------------------------------------------------------
// ICON MAPPING
// ---------------------------------------------------------------------------

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  Medal: Medal,
  GraduationCap: GraduationCap,
  Star: Star,
  Lightbulb: Lightbulb,
  Database: Database,
}

// ---------------------------------------------------------------------------
// TYPE COLORS
// ---------------------------------------------------------------------------

const typeColors = {
  certification: {
    bg: 'bg-blue-500/20',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    icon: 'text-blue-400',
  },
  award: {
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    icon: 'text-yellow-400',
  },
  recognition: {
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    icon: 'text-purple-400',
  },
  education: {
    bg: 'bg-green-500/20',
    border: 'border-green-500/30',
    text: 'text-green-400',
    icon: 'text-green-400',
  },
}

// =============================================================================
// ACHIEVEMENT CARD COMPONENT
// =============================================================================

const AchievementCard = ({ achievement, index }) => {
  const Icon = iconMap[achievement.icon] || Award
  const colors = typeColors[achievement.type] || typeColors.certification
  
  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    })
  }
  
  return (
    <div className="relative flex gap-6 group">
      {/* ----------------------------------------------------------------------- */}
      {/* TIMELINE LINE & ICON                                                    */}
      {/* ----------------------------------------------------------------------- */}
      
      <div className="flex flex-col items-center">
        {/* Icon Circle */}
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center
          ${colors.bg} ${colors.border} border-2
          group-hover:scale-110 transition-transform duration-300
        `}>
          <Icon size={24} className={colors.icon} />
        </div>
        
        {/* Vertical Line */}
        <div className="w-0.5 flex-1 bg-gradient-to-b from-white/20 to-transparent mt-4"></div>
      </div>
      
      {/* ----------------------------------------------------------------------- */}
      {/* CONTENT CARD                                                            */}
      {/* ----------------------------------------------------------------------- */}
      
      <div className="flex-1 pb-12">
        <div className="glass-card glass-card-hover p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Type Badge */}
              <span className={`
                inline-block px-3 py-1 rounded-full text-xs font-medium capitalize mb-3
                ${colors.bg} ${colors.text} ${colors.border} border
              `}>
                {achievement.type}
              </span>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white">
                {achievement.title}
              </h3>
              
              {/* Organization */}
              <p className="text-gray-400 text-sm mt-1">
                {achievement.organization}
              </p>
            </div>
            
            {/* Achievement Image/Badge */}
            {achievement.image && (
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 glass-card">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            )}
          </div>
          
          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Skills */}
          {achievement.skills && achievement.skills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {achievement.skills.map((skill) => (
                <span key={skill} className="tag text-xs">
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            {/* Date */}
            <span className="text-gray-500 text-sm">
              📅 {formatDate(achievement.date)}
            </span>
            
            {/* Verification Link */}
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Verify
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard
