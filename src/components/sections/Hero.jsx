// =============================================================================
// HERO SECTION COMPONENT
// =============================================================================
// 
// The main hero section featuring:
// - Animated greeting text
// - Profile info and avatar
// - Call-to-action buttons
// - Social links
// - Skills showcase
//
// TO CUSTOMIZE:
// - All content is pulled from profile.js
// - Modify animations by changing the animation classes
//
// =============================================================================

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Download, ArrowRight, Github, Linkedin, Twitter, MapPin, ExternalLink } from 'lucide-react'
import { profile } from '../../data'

// ---------------------------------------------------------------------------
// SOCIAL ICON MAPPING
// ---------------------------------------------------------------------------

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  orcid: ExternalLink, // ORCID icon fallback
}

// =============================================================================
// HERO COMPONENT
// =============================================================================

const Hero = () => {
  // State for animated text
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  
  // ---------------------------------------------------------------------------
  // TYPEWRITER EFFECT
  // ---------------------------------------------------------------------------
  
  useEffect(() => {
    const currentRole = profile.animatedRoles[currentRoleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % profile.animatedRoles.length)
        }
      }
    }, isDeleting ? 50 : 100)
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])
  
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ----------------------------------------------------------------- */}
          {/* LEFT SIDE - TEXT CONTENT                                          */}
          {/* ----------------------------------------------------------------- */}
          
          <div className="space-y-8 animate-fade-in-up">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-300">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-400">Hello, I'm</span>
                <br />
                <span className="gradient-text">{profile.name}</span>
              </h1>
              
              {/* Animated Role */}
              <div className="h-12 flex items-center">
                <span className="text-xl sm:text-2xl text-blue-400">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"></span>
                </span>
              </div>
            </div>
            
            {/* Bio */}
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              {profile.shortBio}
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
              
              <Link
                to="/projects"
                className="glass-button flex items-center gap-2 hover:border-blue-500/50"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-500 text-sm">Find me on:</span>
              {Object.entries(profile.social).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                if (!Icon) return null
                
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                    aria-label={`Visit ${platform}`}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
          
          {/* ----------------------------------------------------------------- */}
          {/* RIGHT SIDE - AVATAR & SKILLS                                      */}
          {/* ----------------------------------------------------------------- */}
          
          <div className="relative animate-fade-in-up animation-delay-200">
            {/* Avatar Container */}
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
              
              {/* Avatar Image */}
              <div className="relative glass-card rounded-full p-2 animate-float">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback Avatar */}
                <div 
                  className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center text-6xl font-bold text-white hidden"
                >
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              {/* Floating Skill Badges */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full animate-float animation-delay-200">
                <span className="text-sm font-medium text-blue-400">PyTorch</span>
              </div>
              
              <div className="absolute top-1/4 -left-8 glass-card px-4 py-2 rounded-full animate-float animation-delay-400">
                <span className="text-sm font-medium text-black-400">Mamba/SSM</span>
              </div>
              
              <div className="absolute bottom-1/4 -right-8 glass-card px-4 py-2 rounded-full animate-float animation-delay-600">
                <span className="text-sm font-medium text-green-400">OpenCV</span>
              </div>
              
              <div className="absolute -bottom-4 left-1/4 glass-card px-4 py-2 rounded-full animate-float animation-delay-800">
                <span className="text-sm font-medium text-brown-400">MATLAB</span>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold gradient-text">3.7</div>
                <div className="text-gray-500 text-xs">GPA/4.0</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">98</div>
                <div className="text-gray-500 text-xs">A/L National Rank</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-gray-500 text-xs">CP Finals</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400">2+</div>
                <div className="text-gray-500 text-xs">Research Projects</div>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="mt-6 glass-card p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
