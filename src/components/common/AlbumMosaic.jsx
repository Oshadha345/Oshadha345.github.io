import { useLayoutEffect, useRef, useState } from "react";
import { useLightbox } from "./Lightbox";
import { SmartLink } from "./SiteBlocks";
import { mediaSize } from "../../lib/media";
import { albumEvidence } from "../../data/site";

const MIN_ASPECT = 0.62;
const MAX_ASPECT = 2.2;
const SHORT_ROW = 1.4;

const targetHeight = (width) => (width >= 900 ? 250 : width >= 600 ? 200 : 150);
const textAspect = (width) => (width >= 900 ? 1.5 : 1.25);
const clamp = (a) => Math.min(MAX_ASPECT, Math.max(MIN_ASPECT, a));

function useContainerWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const node = ref.current;
    setWidth(Math.round(node.clientWidth));
    let timer;
    const observer = new ResizeObserver(([entry]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const next = Math.round(entry.contentRect.width);
        setWidth((prev) => (Math.abs(prev - next) >= 1 ? next : prev));
      }, 120);
    });
    observer.observe(node);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);
  return [ref, width];
}

const rowHeight = (tiles, width) => width / tiles.reduce((s, t) => s + t.a, 0);

// Greedy fill: close a row as soon as the height that exactly fills the width drops to the target.
function greedyBreaks(tiles, width, target) {
  const starts = [0];
  let sum = 0;
  tiles.forEach((tile, i) => {
    sum += tile.a;
    if (width / sum <= target && i < tiles.length - 1) { starts.push(i + 1); sum = 0; }
  });
  return starts;
}

// Choose row breaks that keep every row (including the last) as close to the target height as possible.
function justify(tiles, width, target) {
  const n = tiles.length;
  const best = [0, ...Array(n).fill(Infinity)];
  const from = Array(n + 1).fill(0);
  for (let j = 1; j <= n; j++) {
    let sum = 0;
    for (let i = j - 1; i >= 0 && j - i <= 8; i--) {
      sum += tiles[i].a;
      const h = width / sum;
      const cost = best[i] + ((h - target) / target) ** 2 + (h < target * 0.55 || h > target * SHORT_ROW ? 10 : 0);
      if (cost < best[j]) { best[j] = cost; from[j] = i; }
    }
  }
  const rows = [];
  for (let j = n; j > 0; j = from[j]) {
    const slice = tiles.slice(from[j], j);
    rows.unshift({ tiles: slice, h: rowHeight(slice, width), full: true });
  }
  return rows;
}

// Too few photos to fill even one row: keep the target height and let the text tile absorb the leftover width.
function settleShortRows(rows, target) {
  for (const row of rows) {
    if (row.h <= target * SHORT_ROW) continue;
    row.h = target;
    const text = row.tiles.find((t) => t.kind === "text");
    if (text) text.fill = true;
    else row.full = false;
  }
  return rows;
}

function buildLayout(photos, width, recipe) {
  const target = targetHeight(width);
  const text = { kind: "text", a: textAspect(width) };
  if (width < 600) return { rows: settleShortRows(justify(photos, width, target), target), textPlacement: "top" };
  if (recipe === 3) {
    const rows = justify(photos, width, target);
    if (rows.length === 1 && rows[0].h > target * SHORT_ROW) return { rows: settleShortRows(justify([...photos, text], width, target), target), textPlacement: "inline" };
    return { rows: settleShortRows(rows, target), textPlacement: "bar" };
  }
  const starts = greedyBreaks(photos, width, target);
  const at = recipe === 0 ? 0 : recipe === 1 ? (starts[1] ?? photos.length) : starts[starts.length - 1];
  const sequence = [...photos.slice(0, at), text, ...photos.slice(at)];
  return { rows: settleShortRows(justify(sequence, width, target), target), textPlacement: "inline" };
}

function tileWidths(row, width) {
  const widths = row.tiles.map((t) => Math.round(t.a * row.h));
  const fill = row.tiles.findIndex((t) => t.fill);
  if (fill >= 0) {
    const others = widths.reduce((s, w, i) => (i === fill ? s : s + w), 0);
    widths[fill] = Math.max(0, width - others);
  } else if (row.full) {
    widths[widths.length - 1] += width - widths.reduce((s, w) => s + w, 0);
  }
  return widths;
}

function TextTile({ album, headingLevel, className = "", style }) {
  const Heading = `h${headingLevel}`;
  const count = `${album.photos.length} photo${album.photos.length === 1 ? "" : "s"}`;
  const proof = albumEvidence(album.slug);
  const location = album.mapsUrl ? <a href={album.mapsUrl} target="_blank" rel="noreferrer">{album.location}</a> : album.location;
  return (
    <div className={`mosaic-text ${className}`} style={style}>
      <Heading className="mosaic-title">{album.url ? <a href={album.url} target="_blank" rel="noreferrer">{album.title}</a> : album.title}</Heading>
      <p className="mosaic-where">{location} · {album.dateLabel || album.date}</p>
      {album.description && <p className="mosaic-desc">{album.description}</p>}
      <p className="mosaic-count">{count}</p>
      {(album.relatedHref || proof) && (
        <p className="mosaic-links">
          {album.relatedHref && <SmartLink href={album.relatedHref} className="mosaic-related">{album.relatedLabel || "Related →"}</SmartLink>}
          {proof && <a href={proof.file} target="_blank" rel="noreferrer" className="mosaic-related">{proof.type === "certificate" ? "Certificate" : "Results"} →</a>}
        </p>
      )}
    </div>
  );
}

const srcSetFor = (src) => {
  const small = src.replace(/\.webp$/, "-sm.webp");
  const [a, b] = [mediaSize(small), mediaSize(src)];
  return a && b ? `${small} ${a[0]}w, ${src} ${b[0]}w` : undefined;
};

export default function AlbumMosaic({ album, index = 0, headingId, headingLevel = 3, eager = false }) {
  const openLightbox = useLightbox();
  const [ref, width] = useContainerWidth();
  const recipe = index % 4;
  const lightboxItems = album.photos.map((photo) => ({ ...photo, caption: photo.alt }));
  const photos = album.photos.map((photo, i) => {
    const size = mediaSize(photo.src);
    const real = size ? size[0] / size[1] : 1.5;
    return { kind: "photo", photo, i, a: clamp(real), contain: real < MIN_ASPECT || real > MAX_ASPECT };
  });
  const layout = width > 0 ? buildLayout(photos, width, recipe) : null;
  const align = recipe === 1 ? "right" : recipe === 3 ? "center" : "left";

  return (
    <div className="mosaic" id={headingId || album.slug} ref={ref}>
      {layout?.textPlacement === "top" && <TextTile album={album} headingLevel={headingLevel} className="text-block" />}
      {layout?.rows.map((row, r) => {
        const widths = tileWidths(row, width);
        return (
          <div className="mosaic-row" key={r} style={{ height: Math.round(row.h) }}>
            {row.tiles.map((tile, t) => {
              const style = { width: `${(widths[t] / width) * 100}%` };
              if (tile.kind === "text") return <TextTile key="text" album={album} headingLevel={headingLevel} className={`align-${align}`} style={style} />;
              return (
                <button key={tile.photo.src} type="button" className={tile.contain ? "mosaic-photo contain" : "mosaic-photo"} style={style} onClick={() => openLightbox(lightboxItems, tile.i)} aria-label={`View ${tile.photo.alt}`}>
                  <img
                    src={tile.photo.src}
                    srcSet={srcSetFor(tile.photo.src)}
                    sizes={`${widths[t]}px`}
                    alt={tile.photo.alt}
                    loading={eager && tile.i < 3 ? "eager" : "lazy"}
                    fetchPriority={eager && tile.i === 0 ? "high" : undefined}
                    decoding="async"
                  />
                </button>
              );
            })}
          </div>
        );
      })}
      {layout?.textPlacement === "bar" && <TextTile album={album} headingLevel={headingLevel} className="text-bar align-center" />}
    </div>
  );
}
