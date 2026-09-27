import { useRef, useState } from "react";
import { Box, Check, CodeXml, Copy, FileText, Globe, Images, Link2, Presentation, Quote, X } from "lucide-react";
import Img from "./Img";
import { useLightbox } from "./Lightbox";
import { AreaLabel, Authors, SmartLink, StatusBadge } from "./SiteBlocks";
import { publicationMedia } from "../../lib/media";
import { albumsForPaper } from "../../data/gallery";

const icons = { Paper: FileText, Code: CodeXml, Models: Box, Project: Globe, DOI: Link2, Report: FileText, Site: Globe };

function Pill({ href, label, icon: Icon, onClick }) {
  const content = <><Icon size={15} aria-hidden="true" />{label}</>;
  if (onClick) return <button type="button" className="pill" onClick={onClick}>{content}</button>;
  return <SmartLink href={href} className="pill">{content}</SmartLink>;
}

function BibtexButton({ href, title }) {
  const dialogRef = useRef(null);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const openDialog = async () => {
    dialogRef.current.showModal();
    if (!text) setText((await (await fetch(href)).text()).trim());
  };
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Pill label="BibTeX" icon={Quote} onClick={openDialog} />
      <dialog ref={dialogRef} className="bib-dialog" aria-label={`BibTeX for ${title}`} onClick={(event) => event.target === dialogRef.current && dialogRef.current.close()}>
        <div className="bib-head">
          <strong>BibTeX</strong>
          <div>
            <button type="button" className="button secondary small" onClick={copy} disabled={!text}>{copied ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy</>}</button>
            <button type="button" className="icon-button" onClick={() => dialogRef.current.close()} aria-label="Close"><X size={18} /></button>
          </div>
        </div>
        <pre><code>{text || "Loading…"}</code></pre>
      </dialog>
    </>
  );
}

export function PaperLinks({ item }) {
  const media = publicationMedia(item.slug);
  const openLightbox = useLightbox();
  const albums = albumsForPaper(item.slug);
  const posterItems = media.poster && [{ src: media.poster, alt: `Poster: ${item.title}`, href: media.posterPdf, hrefLabel: "Poster PDF" }];
  return (
    <div className="pill-row">
      {item.links.map(([label, href]) => <Pill key={label} href={href} label={label} icon={icons[label] || Globe} />)}
      {media.bibtex && <BibtexButton href={media.bibtex} title={item.title} />}
      {posterItems && <Pill label="Poster" icon={Presentation} onClick={() => openLightbox(posterItems)} />}
      {!media.poster && media.posterPdf && <Pill href={media.posterPdf} label="Poster" icon={Presentation} />}
      {media.slides && <Pill href={media.slides} label="Slides" icon={Presentation} />}
      {albums[0] && <Pill href={`/gallery#${albums[0].slug}`} label="Photos" icon={Images} />}
    </div>
  );
}

const paperHref = (item) => item.links.find(([label]) => label === "Paper" || label === "DOI")?.[1];

export function PaperTile({ item, headingLevel = 3 }) {
  const media = publicationMedia(item.slug);
  const openLightbox = useLightbox();
  const image = media.cover || media.teaser;
  const Heading = `h${headingLevel}`;
  const href = paperHref(item);
  const gallery = [media.cover, media.teaser].filter(Boolean).map((src) => ({
    src,
    alt: src === media.teaser ? `Figure from ${item.title}` : `Overview figure for ${item.title}`,
  }));
  return (
    <article className={image ? "paper-tile" : "paper-tile no-image"} id={item.slug}>
      {image && (
        <button type="button" className="paper-figure" onClick={() => openLightbox(gallery)} aria-label={`Enlarge figure for ${item.title}`}>
          <Img src={image} alt={gallery[0].alt} sizes="(min-width: 768px) 300px, 100vw" />
        </button>
      )}
      <div className="paper-body">
        <div className="paper-meta">
          <span className="venue">{item.venue}</span>
          <StatusBadge status={item.status} />
          <AreaLabel area={item.area} />
        </div>
        <Heading className="paper-title">{href ? <a href={href} target="_blank" rel="noreferrer">{item.title}</a> : item.title}</Heading>
        <Authors authors={item.authors} />
        {item.tldr && <p className="tldr"><strong>TL;DR</strong> {item.tldr}</p>}
        {item.contribution && <p className="contribution">My contribution: {item.contribution}</p>}
        <PaperLinks item={item} />
      </div>
    </article>
  );
}

export function PaperRow({ item }) {
  const media = publicationMedia(item.slug);
  const image = media.cover || media.teaser;
  return (
    <article className="paper-row">
      {image && <SmartLink href={`/publications#${item.slug}`} className="paper-row-thumb" aria-hidden="true" tabIndex={-1}><Img src={image} alt="" sizes="120px" /></SmartLink>}
      <div>
        <h3><SmartLink href={`/publications#${item.slug}`}>{item.title}</SmartLink></h3>
        <Authors authors={item.authors} />
        <p className="paper-row-meta"><span className="venue">{item.venue}</span> <StatusBadge status={item.status} /></p>
      </div>
    </article>
  );
}

export function Manuscripts({ items }) {
  const hasEqual = items.some((item) => item.equalContribution);
  return (
    <div className="manuscripts">
      <p className="section-note">High-level descriptions only; these manuscripts are unpublished.</p>
      {items.map((item) => (
        <article className="manuscript" key={item.slug}>
          <div className="paper-meta"><StatusBadge status="in-preparation" /><AreaLabel area={item.area} /></div>
          <h3 className="paper-title">{item.title}</h3>
          <Authors authors={item.authors} />
          <p className="manuscript-target">{item.venue}</p>
          {item.links.length > 0 && <div className="pill-row">{item.links.map(([label, href]) => <Pill key={label} href={href} label={label} icon={icons[label] || Globe} />)}</div>}
        </article>
      ))}
      {hasEqual && <p className="footnote">† Equal contribution.</p>}
    </div>
  );
}
