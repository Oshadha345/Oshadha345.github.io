// =============================================================================
// NAVBAR COMPONENT
// =============================================================================
// 
// Floating glass navigation bar with:
// - Logo/name on the left
// - Navigation links on the right
// - Mobile responsive hamburger menu
// - Scroll effect (changes opacity on scroll)
//
// TO CUSTOMIZE:
// - Edit navLinks array to change navigation items
// - Modify the logo section to add your own logo
//
// =============================================================================

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../../data'

// ---------------------------------------------------------------------------
// NAVIGATION LINKS CONFIGURATION
// ---------------------------------------------------------------------------
// Add or remove navigation items here

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Blog', path: '/blog' },
  { name: '📚 Book Sunday', path: '/book-sunday' },
]

// =============================================================================
// NAVBAR COMPONENT
// =============================================================================

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // State for scroll effect
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Get current route for active link styling
  const location = useLocation()
  
  // ---------------------------------------------------------------------------
  // SCROLL EFFECT
  // ---------------------------------------------------------------------------
  // Adds background blur when user scrolls down
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // ---------------------------------------------------------------------------
  // CLOSE MENU ON ROUTE CHANGE
  // ---------------------------------------------------------------------------
  
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])
  
  // ---------------------------------------------------------------------------
  // CHECK IF LINK IS ACTIVE
  // ---------------------------------------------------------------------------
  
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }
  
  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300
        ${isScrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ----------------------------------------------------------------- */}
          {/* LOGO / NAME                                                       */}
          {/* ----------------------------------------------------------------- */}
          
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            {/* Logo Icon - You can replace with an image */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              {profile.name.charAt(0)}
            </div>
            
            {/* Name */}
            <span className="text-xl font-bold gradient-text hidden sm:block">
              {profile.name}
            </span>
          </Link>
          
          {/* ----------------------------------------------------------------- */}
          {/* DESKTOP NAVIGATION                                                */}
          {/* ----------------------------------------------------------------- */}
          
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${isActiveLink(link.path)
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Resume Button */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 btn-primary flex items-center gap-2 text-sm"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
          
          {/* ----------------------------------------------------------------- */}
          {/* MOBILE MENU BUTTON                                                */}
          {/* ----------------------------------------------------------------- */}
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* ------------------------------------------------------------------- */}
        {/* MOBILE NAVIGATION MENU                                              */}
        {/* ------------------------------------------------------------------- */}
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="glass-card p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    block px-4 py-3 rounded-lg font-medium transition-all duration-200
                    ${isActiveLink(link.path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Resume Button */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 btn-primary w-full"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
