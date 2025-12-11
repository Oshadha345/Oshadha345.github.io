// =============================================================================
// FOOTER COMPONENT
// =============================================================================
// 
// Site footer with:
// - Social media links
// - Quick navigation
// - Copyright notice
//
// TO CUSTOMIZE:
// - Social links are pulled from profile.js
// - Edit the quickLinks array for footer navigation
//
// =============================================================================

import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { profile } from '../../data'

// ---------------------------------------------------------------------------
// QUICK LINKS CONFIGURATION
// ---------------------------------------------------------------------------

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Achievements', path: '/achievements' },
]

// ---------------------------------------------------------------------------
// SOCIAL ICON MAPPING
// ---------------------------------------------------------------------------

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* ----------------------------------------------------------------- */}
          {/* BRAND SECTION                                                     */}
          {/* ----------------------------------------------------------------- */}
          
          <div className="space-y-4">
            {/* Logo/Name */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                {profile.name.charAt(0)}
              </div>
              <span className="text-xl font-bold gradient-text">
                {profile.name}
              </span>
            </Link>
            
            {/* Tagline */}
            <p className="text-gray-400 text-sm max-w-xs">
              {profile.tagline}
            </p>
            
            {/* Email */}
            <a 
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
            >
              <Mail size={16} />
              {profile.email}
            </a>
          </div>
          
          {/* ----------------------------------------------------------------- */}
          {/* QUICK LINKS                                                       */}
          {/* ----------------------------------------------------------------- */}
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* ----------------------------------------------------------------- */}
          {/* SOCIAL LINKS                                                      */}
          {/* ----------------------------------------------------------------- */}
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
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
            
            {/* Location */}
            <p className="mt-4 text-gray-500 text-sm">
              📍 {profile.location}
            </p>
          </div>
        </div>
        
        {/* ------------------------------------------------------------------- */}
        {/* COPYRIGHT                                                           */}
        {/* ------------------------------------------------------------------- */}
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
