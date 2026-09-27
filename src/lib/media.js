import manifest from "../data/media-manifest.json";

export const hasMedia = (path) => Boolean(path && manifest[path]);

export const mediaSize = (path) => (Array.isArray(manifest[path]) ? manifest[path] : null);

export const listMedia = (prefix) => Object.keys(manifest).filter((path) => path.startsWith(prefix)).sort();

export function projectCover(project) {
  const cover = `/media/projects/${project.slug}/cover.webp`;
  return hasMedia(cover) ? cover : null;
}

export const projectFigures = (project) =>
  listMedia(`/media/projects/${project.slug}/fig-`).filter((path) => path.endsWith(".webp"));

export function publicationMedia(slug) {
  const base = `/media/publications/${slug}`;
  const pick = (name) => (hasMedia(`${base}/${name}`) ? `${base}/${name}` : null);
  return {
    cover: pick("cover.webp"),
    teaser: pick("teaser.webp"),
    poster: pick("poster.webp"),
    posterPdf: pick("poster.pdf"),
    slides: pick("slides.pdf"),
    bibtex: pick("citation.bib"),
  };
}

export const writingCover = (slug) => {
  const cover = `/media/writing/${slug}/cover.webp`;
  return hasMedia(cover) ? cover : null;
};
