import { mediaSize } from "../../lib/media";

export default function Img({ src, alt, eager = false, sizes = "(min-width: 900px) 360px, 100vw", className, style }) {
  const size = mediaSize(src);
  const small = src?.endsWith(".webp") ? src.replace(/\.webp$/, "-sm.webp") : null;
  const smallSize = small && mediaSize(small);
  return (
    <img
      src={src}
      srcSet={smallSize && size ? `${small} ${smallSize[0]}w, ${src} ${size[0]}w` : undefined}
      sizes={smallSize && size ? sizes : undefined}
      alt={alt}
      width={size?.[0]}
      height={size?.[1]}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : undefined}
      className={className}
      style={style}
    />
  );
}
