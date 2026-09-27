import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { LightboxProvider } from "./components/common/Lightbox";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const Publications = lazy(() => import("./pages/Publications"));
const Research = lazy(() => import("./pages/Research"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Writing = lazy(() => import("./pages/Writing"));
const WritingPost = lazy(() => import("./pages/WritingPost"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reading = lazy(() => import("./pages/Reading"));
const ReadingDetail = lazy(() => import("./pages/ReadingDetail"));

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const timer = setInterval(() => {
      const target = document.getElementById(id);
      if (target || ++tries > 20) {
        clearInterval(timer);
        target?.scrollIntoView({ block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash]);
  return null;
}

function RedirectWithParam({ to }) {
  const { slug } = useParams();
  return <Navigate replace to={`${to}/${slug}`} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LightboxProvider>
        <ScrollManager />
        <a className="skip-link" href="#main">Skip to content</a>
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Suspense fallback={<div className="page-loading" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<WritingPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/reading/:slug" element={<ReadingDetail />} />
            <Route path="/education" element={<Navigate replace to="/about#education" />} />
            <Route path="/achievements" element={<Navigate replace to="/about#honors" />} />
            <Route path="/blog" element={<Navigate replace to="/writing" />} />
            <Route path="/blog/:slug" element={<RedirectWithParam to="/writing" />} />
            <Route path="/book-sunday" element={<Navigate replace to="/reading" />} />
            <Route path="/book-sunday/:slug" element={<RedirectWithParam to="/reading" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </LightboxProvider>
    </BrowserRouter>
  );
}
