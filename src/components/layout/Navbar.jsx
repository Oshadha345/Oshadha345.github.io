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

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FolderOpen, Trophy, BookOpen, FileText, BookHeart } from "lucide-react";

// ---------------------------------------------------------------------------
// Navigation items configuration
// ---------------------------------------------------------------------------
const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderOpen },
  { name: "Achievements", path: "/achievements", icon: Trophy },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Book Sunday", path: "/book-sunday", icon: BookHeart },
  { name: "Resume", path: "/resume", icon: FileText },
];

// ---------------------------------------------------------------------------
// NAVBAR COMPONENT
// ---------------------------------------------------------------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // -------------------------------------------------------------------------
  // Handle scroll effect
  // -------------------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------------------------------------------------------------------------
  // Close mobile menu on route change
  // -------------------------------------------------------------------------
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // -------------------------------------------------------------------------
  // Prevent body scroll when mobile menu is open
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* --------------------------------------------------------------------
          DESKTOP NAVBAR - Floating glass bar
      -------------------------------------------------------------------- */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "top-2" : "top-4"
        }`}
      >
        <div
          className={`glass-card px-6 py-3 flex items-center gap-8 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-black/20" : ""
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Oshadha<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --------------------------------------------------------------------
          MOBILE MENU OVERLAY - Dark backdrop
      -------------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* --------------------------------------------------------------------
          MOBILE MENU PANEL - Slide from right (FIXED: More opaque background)
      -------------------------------------------------------------------- */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 
          FIXED: Changed from semi-transparent to solid dark background
          - bg-gray-900/98 = almost fully opaque dark background
          - Added border for depth
        */}
        <div className="h-full bg-gray-900/98 backdrop-blur-xl border-l border-white/10 shadow-2xl shadow-black/50 p-6 pt-20">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-500 text-sm text-center">
                © 2024 Oshadha Samarakoon
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
