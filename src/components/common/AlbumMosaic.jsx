import { useEffect, useState } from "react";
import { useLightbox } from "./Lightbox";
import { SmartLink } from "./SiteBlocks";
import { mediaSize } from "../../lib/media";

const MOSAIC_SIZES = "(min-width: 1024px) 560px, (min-width: 640px) 66vw, 100vw";
const srcSetFor = (src) => {
  const small = src.replace(/\.webp$/, "-sm.webp");
  const [a, b] = [mediaSize(small), mediaSize(src)];
  return a && b ? `${small} ${a[0]}w, ${src} ${b[0]}w` : undefined;
};

// Each recipe: text tile position (after N photos), its shape, and each photo's [cols, rows] by index.
const recipes = [
  { textAfter: 0, text: "wide", align: "left", spans: [[2, 2], [1, 1], [1, 1], [2, 1], [1, 2], [1, 1], [1, 1], [2, 1]] },
  { textAfter: Infinity, text: "bar", align: "center", spans: [[2, 2], [1, 2], [1, 1], [1, 1], [2, 1], [1, 1], [1, 1], [2, 1]] },
  { textAfter: 2, text: "wide", align: "right", spans: [[1, 2], [1, 2], [1, 1], [1, 1], [1, 1], [1, 1], [2, 1], [1, 1]] },
  { textAfter: 1, text: "tall", align: "left", spans: [[2, 2], [1, 2], [1, 1], [1, 1], [2, 1], [1, 1], [1, 1], [2, 1]] },
];

const textSpan = (shape, cols) => {
  if (shape === "bar") return [cols, cols === 4 ? 1 : 2];
  if (shape === "tall") return cols > 2 ? [1, 3] : [2, 2];
  return [2, 2];
};

function useColumns() {
  const query = () => (window.matchMedia("(min-width: 1024px)").matches ? 4 : window.matchMedia("(min-width: 640px)").matches ? 3 : 2);
  const [cols, setCols] = useState(query);
  useEffect(() => {
    const update = () => setCols(query());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

// First-fit placement on a cols-wide grid, then grow neighbours into any empty cell so the block has no holes.
function pack(items, cols) {
  const grid = [];
  const free = (r, c) => c >= 0 && c < cols && r >= 0 && !(grid[r] && grid[r][c] !== undefined);
  const mark = (item, id) => {
    for (let r = item.y; r < item.y + item.h; r++) for (let c = item.x; c < item.x + item.w; c++) (grid[r] ||= [])[c] = id;
  };
  const placed = items.map((item) => ({ ...item, w: Math.min(item.w, cols) }));
  placed.forEach((item, id) => {
    for (let r = 0; ; r++) {
      for (let c = 0; c + item.w <= cols; c++) {
        let fits = true;
        for (let dr = 0; dr < item.h && fits; dr++) for (let dc = 0; dc < item.w && fits; dc++) fits = free(r + dr, c + dc);
        if (fits) { item.x = c; item.y = r; mark(item, id); return; }
      }
    }
  });
  const rows = Math.max(...placed.map((item) => item.y + item.h));
  const owner = (r, c) => (r >= 0 && r < rows && c >= 0 && c < cols && grid[r] ? grid[r][c] : undefined);
  const colFree = (item, c) => { for (let r = item.y; r < item.y + item.h; r++) if (!free(r, c)) return false; return true; };
  const rowFree = (item, r) => r < rows && [...Array(item.w).keys()].every((dc) => free(r, item.x + dc));
  let changed = true;
  while (changed) {
    changed = false;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!free(r, c)) continue;
        const left = placed[owner(r, c - 1)], above = placed[owner(r - 1, c)], right = placed[owner(r, c + 1)];
        if (left && colFree(left, c)) { left.w += 1; mark(left, owner(r, c - 1)); changed = true; }
        else if (above && rowFree(above, r)) { const id = owner(r - 1, c); above.h += 1; mark(above, id); changed = true; }
        else if (right && colFree(right, c)) { const id = owner(r, c + 1); right.x -= 1; right.w += 1; mark(right, id); changed = true; }
      }
    }
  }
  return placed;
}

function TextTile({ album, shape, align, style, headingLevel }) {
  const Heading = `h${headingLevel}`;
  const count = `${album.photos.length} photo${album.photos.length === 1 ? "" : "s"}`;
  const location = album.mapsUrl ? <a href={album.mapsUrl} target="_blank" rel="noreferrer">{album.location}</a> : album.location;
  return (
    <div className={`mosaic-text shape-${shape} align-${align}`} style={style}>
      <Heading className="mosaic-title">{album.url ? <a href={album.url} target="_blank" rel="noreferrer">{album.title}</a> : album.title}</Heading>
      <p className="mosaic-where">{location} · {album.dateLabel || album.date}</p>
      {album.description && <p className="mosaic-desc">{album.description}</p>}
      <p className="mosaic-count">{count}</p>
      {album.relatedHref && <SmartLink href={album.relatedHref} className="mosaic-related">{album.relatedLabel || "Related →"}</SmartLink>}
    </div>
  );
}

export default function AlbumMosaic({ album, index = 0, headingId, headingLevel = 3, eager = false }) {
  const openLightbox = useLightbox();
  const cols = useColumns();
  const recipe = recipes[index % recipes.length];
  const photos = album.photos.map((photo, i) => {
    const [w, h] = recipe.spans[i] || [1, 1];
    return { kind: "photo", photo, i, w, h };
  });
  const [tw, th] = textSpan(recipe.text, cols);
  const items = [...photos];
  items.splice(Math.min(recipe.textAfter, photos.length), 0, { kind: "text", w: tw, h: th });
  const lightboxItems = album.photos.map((photo) => ({ ...photo, caption: photo.alt }));
  const place = (item) => ({ gridColumn: `${item.x + 1} / span ${item.w}`, gridRow: `${item.y + 1} / span ${item.h}` });

  return (
    <div className="mosaic" id={headingId || album.slug}>
      {pack(items, cols).map((item) => item.kind === "text"
        ? <TextTile key="text" album={album} shape={recipe.text} align={recipe.align} style={place(item)} headingLevel={headingLevel} />
        : (
          <button key={item.photo.src} type="button" className="mosaic-photo" style={place(item)} onClick={() => openLightbox(lightboxItems, item.i)} aria-label={`View ${item.photo.alt}`}>
            <img src={item.photo.src} srcSet={srcSetFor(item.photo.src)} sizes={MOSAIC_SIZES} alt={item.photo.alt} loading={eager && item.i < 3 ? "eager" : "lazy"} fetchPriority={eager && item.i === 0 ? "high" : undefined} decoding="async" style={item.photo.focus ? { objectPosition: item.photo.focus } : undefined} />
          </button>
        ))}
    </div>
  );
}
