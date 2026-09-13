import { useState } from "react";

/* Graceful fallback if a remote photo ever fails: soft beige plate with a house line-mark */
const FALLBACK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#EFE9DF'/><path d='M400 210 L520 310 V430 H440 V350 H360 V430 H280 V310 Z' fill='none' stroke='#B08A4F' stroke-width='6'/><text x='400' y='490' text-anchor='middle' font-family='Georgia,serif' font-size='26' fill='#6B6459'>Artdal Realty</text></svg>`
  );

/**
 * Lazy, fade-in image with error fallback.
 * Hover-zoom is applied by parents via `imgClassName` (e.g. group-hover:scale-105).
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={failed ? FALLBACK : src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${
          loaded || failed ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
