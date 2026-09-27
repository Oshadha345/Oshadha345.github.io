import { Link } from "react-router-dom";
import { Camera, FileText, Image as ImageIcon } from "lucide-react";
import Img from "./Img";
import { useLightbox } from "./Lightbox";
import { mediaSize } from "../../lib/media";

const isPdf = (item) => item.file?.endsWith(".pdf");

const lightboxItem = (item, title) => ({
  src: item.preview,
  alt: `${title}: ${item.label}`,
  caption: `${title} · ${item.detail}`,
  href: isPdf(item) ? item.file : undefined,
  hrefLabel: "Open original PDF",
});

export function EvidenceChips({ evidence = [], title }) {
  const openLightbox = useLightbox();
  const items = evidence.filter((item) => !item.needsRedaction);
  if (!items.length) return null;
  return (
    <div className="pill-row evidence-chips">
      {items.map((item) => {
        if (item.type === "photos") {
          return <Link key={item.album} className="pill small" to={`/gallery#${item.album}`}><Camera size={14} aria-hidden="true" />Photos</Link>;
        }
        if (isPdf(item)) {
          return <a key={item.file} className="pill small" href={item.file} target="_blank" rel="noreferrer"><FileText size={14} aria-hidden="true" />{item.label}</a>;
        }
        return <button key={item.file} type="button" className="pill small" onClick={() => openLightbox([lightboxItem(item, title)])}><ImageIcon size={14} aria-hidden="true" />{item.label}</button>;
      })}
    </div>
  );
}

const typeLabel = (item) => {
  if (isPdf(item)) return item.type === "certificate" ? "PDF certificate" : "PDF results";
  return { flyer: "Flyer", ranking: "Ranking", certificate: "Certificate image" }[item.type] || item.label;
};

const groups = [
  ["placement", "Placements & finals"],
  ["academic", "Academic"],
  ["participation", "Participation"],
];

export function EvidenceArchive({ items }) {
  const openLightbox = useLightbox();
  return groups.map(([category, heading]) => {
    const group = items.filter((item) => item.category === category);
    if (!group.length) return null;
    return (
      <section key={category} className="evidence-group" aria-labelledby={`evidence-${category}`}>
        <h3 className="kicker" id={`evidence-${category}`}>{heading}</h3>
        <div className="evidence-grid">
          {group.map((item) => {
            const size = mediaSize(item.preview);
            const portrait = size ? size[1] > size[0] : true;
            return (
              <article className="evidence-card" key={item.file} id={`evidence-${item.slug}`}>
                <button type="button" className={portrait ? "evidence-thumb portrait" : "evidence-thumb landscape"} onClick={() => openLightbox([lightboxItem(item, item.title)])} aria-label={`Preview ${item.title} ${item.label}`}>
                  <Img src={item.preview} alt={`${item.title}: ${item.label}`} sizes="(min-width: 1024px) 260px, 50vw" />
                </button>
                <h4>{item.title}</h4>
                <p className="evidence-detail">{item.detail}</p>
                <p className="evidence-type">{typeLabel(item)}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  });
}
