// =============================================================================
// APP.JSX - Main Application Component
// =============================================================================
// 
// This is the root component that:
// - Sets up React Router for navigation
// - Provides global layout (Navbar, Footer)
// - Defines all routes/pages
//
// =============================================================================

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Page Components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BookSunday from "./pages/BookSunday";
import BookDetail from "./pages/BookDetail";
import Achievements from "./pages/Achievements";

// SEO Component
import SEO from "./components/common/SEO";

// =============================================================================
// APP COMPONENT
// =============================================================================

function App() {
  return (
    <Router>
      {/* Global SEO defaults */}
      <SEO />

      {/* Main App Container with mesh gradient background */}
      <div className="relative flex flex-col min-h-screen w-full">
        {/* Navigation - Always visible */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow w-full">
          <Suspense fallback={<div className="p-6 text-gray-300">Loading...</div>}>
            <Routes>
              {/* Home Page - Hero, Featured Projects, Blog Preview */}
              <Route path="/" element={<Home />} />

              {/* Projects Pages */}
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />

              {/* Blog Pages */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />

              {/* Book Sunday - Reading Reflections */}
              <Route path="/book-sunday" element={<BookSunday />} />
              <Route path="/book-sunday/:slug" element={<BookDetail />} />

              {/* Achievements Page */}
              <Route path="/achievements" element={<Achievements />} />

              {/* 404 - Redirect to home for now */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer - Always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App
