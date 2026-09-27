import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Play } from "lucide-react";
import SEO from "../components/common/SEO";
import Img from "../components/common/Img";
import { AreaLabel, FigureCard, StatusBadge, TextLinks } from "../components/common/SiteBlocks";
import { getProject } from "../data/site";
import { getAlbum } from "../data/gallery";
import { projectCover, projectFigures } from "../lib/media";
import NotFound from "./NotFound";

function Video({ video, title }) {
  const [playing, setPlaying] = useState(false);
  if (playing) return <video className="project-video" src={video.src} controls autoPlay playsInline />;
  return (
    <button type="button" className="video-poster" onClick={() => setPlaying(true)} aria-label={`Play ${title} video`}>
      <Img src={video.poster} alt="" />
      <span className="play-badge"><Play size={22} aria-hidden="true" /> Play video</span>
    </button>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  if (!project) return <NotFound />;
  const cover = projectCover(project);
  const figures = projectFigures(project);
  const gallery = figures.map((src, i) => ({ src, alt: `${project.title}, figure ${i + 1}` }));
  const album = project.album && getAlbum(project.album);
  return (
    <>
      <SEO title={project.title} description={project.description} />
      <article className="shell page project-detail">
        <Link className="back-link" to="/projects">← Projects</Link>
        <header className="page-header">
          <span className="kicker">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="page-lede">{project.description}</p>
        </header>
        <div className="detail-layout">
          <div className="detail-main">
            {cover && <FigureCard src={cover} alt={`${project.title} cover image`} eager />}
            <p className="detail-text">{project.details || project.description}</p>
            {project.video && <Video video={project.video} title={project.title} />}
            {figures.length > 0 && (
              <section className="figure-gallery" aria-label="Figures">
                {figures.map((src, i) => <FigureCard key={src} src={src} alt={gallery[i].alt} gallery={gallery} index={i} />)}
              </section>
            )}
          </div>
          <aside className="detail-meta">
            <dl>
              {project.period && <><dt>Period</dt><dd>{project.period}</dd></>}
              {project.area && <><dt>Area</dt><dd><AreaLabel area={project.area} /></dd></>}
              {project.status && <><dt>Status</dt><dd><StatusBadge status={project.status} /></dd></>}
              {project.tags?.length > 0 && <><dt>Topics</dt><dd>{project.tags.join(", ")}</dd></>}
              {project.links.length > 0 && <><dt>Links</dt><dd><TextLinks links={project.links} /></dd></>}
              {album && <><dt>Photos</dt><dd><Link to={`/gallery#${album.slug}`}>{album.title}</Link></dd></>}
            </dl>
          </aside>
        </div>
      </article>
    </>
  );
}
