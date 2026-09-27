import SEO from "../components/common/SEO";
import { CompactCard, ProjectCard } from "../components/common/Projects";
import { FilterChips, PageHeader, Section, useFilterParam } from "../components/common/SiteBlocks";
import { areas, engineeringProjects, otherProjects, researchProjects } from "../data/site";

export default function Projects() {
  const [area, setArea] = useFilterParam("area", areas.map((a) => a.id));
  const options = [{ id: "all", label: "All" }, ...areas.map((a) => ({ id: a.id, label: a.name }))];
  const research = researchProjects.filter((item) => area === "all" || item.area === area);
  return (
    <>
      <SEO title="Projects" description="Research projects, engineering builds, coursework, and self-directed work by Oshadha Samarakoon." />
      <div className="shell page">
        <PageHeader kicker="Projects" title="Projects">Research work first, then engineering systems, coursework, and self-directed study.</PageHeader>
        <Section number="01" title="Research projects" subtitle="Unpublished work is described at a high level." id="research">
          <FilterChips label="Filter research projects by area" options={options} value={area} onChange={setArea} />
          <div className="project-grid">{research.map((item) => <ProjectCard key={item.slug} item={item} />)}</div>
        </Section>
        <Section number="02" title="Engineering projects" id="engineering">
          <div className="project-grid">{engineeringProjects.map((item) => <ProjectCard key={item.slug} item={item} />)}</div>
        </Section>
        <Section number="03" title="Coursework" id="coursework">
          <div className="compact-grid">{otherProjects.filter((item) => item.group === "coursework").map((item) => <CompactCard key={item.slug} item={item} />)}</div>
        </Section>
        <Section number="04" title="Self-directed work" id="self-directed">
          <div className="compact-grid">{otherProjects.filter((item) => item.group === "self-directed").map((item) => <CompactCard key={item.slug} item={item} />)}</div>
        </Section>
      </div>
    </>
  );
}
