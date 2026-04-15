// =============================================================================
// PROJECTS PAGE
// =============================================================================

import { useMemo, useState } from "react";
import { Filter, Microscope, Search } from "lucide-react";
import { Link } from "react-router-dom";

import ProjectCard from "../components/cards/ProjectCard";
import SEO from "../components/common/SEO";
import { getAllTechStack, projects } from "../data";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [selectedTrack, setSelectedTrack] = useState("all");

  const allTech = getAllTechStack();
  const researchProjectCount = projects.filter((project) => project.isResearch).length;

  const statusOptions = [
    { value: "all", label: "All Projects" },
    { value: "completed", label: "Completed" },
    { value: "in-progress", label: "In Progress" },
  ];

  const trackOptions = [
    { value: "all", label: "All Tracks" },
    { value: "research", label: "Research Projects" },
    { value: "portfolio", label: "Other Projects" },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = searchQuery.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      const matchesStatus =
        selectedStatus === "all" || project.status === selectedStatus;

      const matchesTech =
        selectedTech === "all" || project.techStack.includes(selectedTech);

      const matchesTrack =
        selectedTrack === "all" ||
        (selectedTrack === "research" && project.isResearch) ||
        (selectedTrack === "portfolio" && !project.isResearch);

      return matchesSearch && matchesStatus && matchesTech && matchesTrack;
    });
  }, [searchQuery, selectedStatus, selectedTech, selectedTrack]);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore engineering builds, research projects, and experimental systems across AI, robotics, embedded systems, power engineering, and competitive programming."
      />

      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-blue-400 font-medium">Portfolio</span>
            <h1 className="section-title mt-2 text-4xl sm:text-5xl">Projects</h1>
            <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
              Technical work across AI/ML, signal processing, embedded systems, robotics,
              power engineering, and a growing research portfolio integrated into the same
              project surface.
            </p>
          </div>

          <div className="glass-card p-6 mb-8 animate-fade-in-up animation-delay-200">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                    <Microscope className="text-blue-300" size={20} />
                  </div>
                  <div>
                    <h2 className="text-white font-semibold text-lg">Research-aware project organization</h2>
                    <p className="text-gray-400 text-sm mt-1">
                      {researchProjectCount} project{researchProjectCount === 1 ? "" : "s"} are
                      marked as research work and connect to the new research portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="tag">Research</span>
                  <span className="tag">Engineering</span>
                  <span className="tag">Coursework</span>
                  <span className="tag">Experiments</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Use the new track filter to isolate research-driven work, or open the
                  dedicated research page for publications, submissions, experience, and media.
                </p>
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-medium mt-4"
                >
                  Open research portfolio
                </Link>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 mb-8 animate-fade-in-up animation-delay-200">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="glass-input pl-12"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-500" />
                <select
                  value={selectedStatus}
                  onChange={(event) => setSelectedStatus(event.target.value)}
                  className="glass-input cursor-pointer"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedTrack}
                  onChange={(event) => setSelectedTrack(event.target.value)}
                  className="glass-input cursor-pointer"
                >
                  {trackOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-900">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={selectedTech}
                  onChange={(event) => setSelectedTech(event.target.value)}
                  className="glass-input cursor-pointer"
                >
                  <option value="all" className="bg-gray-900">
                    All Technologies
                  </option>
                  {allTech.map((tech) => (
                    <option key={tech} value={tech} className="bg-gray-900">
                      {tech}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {(searchQuery ||
              selectedStatus !== "all" ||
              selectedTech !== "all" ||
              selectedTrack !== "all") && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/10">
                <span className="text-gray-500 text-sm">Active filters:</span>

                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="tag flex items-center gap-1">
                    Search: {searchQuery}
                    <span className="ml-1">x</span>
                  </button>
                )}

                {selectedStatus !== "all" && (
                  <button onClick={() => setSelectedStatus("all")} className="tag flex items-center gap-1">
                    Status: {selectedStatus}
                    <span className="ml-1">x</span>
                  </button>
                )}

                {selectedTrack !== "all" && (
                  <button onClick={() => setSelectedTrack("all")} className="tag flex items-center gap-1">
                    Track: {selectedTrack}
                    <span className="ml-1">x</span>
                  </button>
                )}

                {selectedTech !== "all" && (
                  <button onClick={() => setSelectedTech("all")} className="tag flex items-center gap-1">
                    Tech: {selectedTech}
                    <span className="ml-1">x</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedStatus("all");
                    setSelectedTrack("all");
                    setSelectedTech("all");
                  }}
                  className="text-gray-400 hover:text-white text-sm ml-2"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <>
              <p className="text-gray-500 text-sm mb-6">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20 glass-card">
              <div className="text-5xl text-blue-300 mb-4">No matches</div>
              <h3 className="text-white text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStatus("all");
                  setSelectedTrack("all");
                  setSelectedTech("all");
                }}
                className="btn-primary mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
