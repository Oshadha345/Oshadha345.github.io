import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

const LightboxContext = createContext(() => {});

export const useLightbox = () => useContext(LightboxContext);

const focusable = 'button, [href], [tabindex]:not([tabindex="-1"])';

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null);
  const dialogRef = useRef(null);
  const returnFocus = useRef(null);

  const open = useCallback((items, index = 0) => {
    returnFocus.current = document.activeElement;
    setState({ items, index });
  }, []);
  const close = useCallback(() => setState(null), []);
  const step = useCallback((delta) => setState((s) => s && { ...s, index: (s.index + delta + s.items.length) % s.items.length }), []);

  useEffect(() => {
    if (!state) {
      returnFocus.current?.focus?.();
      return undefined;
    }
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("[data-autofocus]")?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "Tab") {
        const nodes = [...dialogRef.current.querySelectorAll(focusable)];
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [state, close, step]);

  const item = state?.items[state.index];
  return (
    <LightboxContext.Provider value={open}>
      {children}
      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.alt} ref={dialogRef} onClick={(event) => event.target === event.currentTarget && close()}>
          <button className="lightbox-close" onClick={close} aria-label="Close" data-autofocus><X size={22} /></button>
          {state.items.length > 1 && <button className="lightbox-nav prev" onClick={() => step(-1)} aria-label="Previous image"><ChevronLeft size={26} /></button>}
          <figure className="lightbox-figure">
            <img src={item.full || item.src} alt={item.alt} />
            {(item.caption || item.alt || item.href) && (
              <figcaption>
                {item.caption || item.alt}
                {state.items.length > 1 && <span className="lightbox-count">{state.index + 1} / {state.items.length}</span>}
                {item.href && <a href={item.href} target="_blank" rel="noreferrer">{item.hrefLabel || "Open"} <ExternalLink size={13} /></a>}
              </figcaption>
            )}
          </figure>
          {state.items.length > 1 && <button className="lightbox-nav next" onClick={() => step(1)} aria-label="Next image"><ChevronRight size={26} /></button>}
        </div>
      )}
    </LightboxContext.Provider>
  );
}
