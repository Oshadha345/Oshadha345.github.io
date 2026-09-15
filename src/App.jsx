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

import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Page Components
import Home from "./pages/Home";
import Research from "./pages/Research";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BookSunday from "./pages/BookSunday";
import BookDetail from "./pages/BookDetail";
import Achievements from "./pages/Achievements";
import Education from "./pages/Education";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

// =============================================================================
// APP COMPONENT
// =============================================================================

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="ambient" aria-hidden="true"><span /><span /><span /><span /></div>
      <div className="flex flex-col min-h-screen w-full">
        {/* Navigation - Always visible */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow w-full">
            <Routes>
              {/* Home Page - Hero, Featured Projects, Blog Preview */}
              <Route path="/" element={<Home />} />

              {/* Projects Pages */}
              <Route path="/research" element={<Research />} />
              <Route path="/education" element={<Education />} />
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
        </main>

        {/* Footer - Always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App
