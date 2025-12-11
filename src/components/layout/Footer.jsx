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
import { Heart, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../../data'

// ---------------------------------------------------------------------------
// QUICK LINKS CONFIGURATION
// ---------------------------------------------------------------------------

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Book Sunday', path: '/book-sunday' },
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
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content - Centered */}
        <div className="flex flex-col items-center text-center">
          {/* Logo & Tagline */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Oshadha<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              {profile.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail size={16} />
              <span>{profile.email}</span>
            </a>
            
            <a
              href="tel:+94775323232"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Phone size={16} />
              <span>+94 77 532 3232</span>
            </a>
            
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-400 hover:text-white" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-400 hover:text-blue-400" />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} className="text-gray-400 hover:text-sky-400" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 glass-card hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-400 hover:text-green-400" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Oshadha Samarakoon. Built with
              <Heart size={14} className="text-red-400 fill-red-400" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
