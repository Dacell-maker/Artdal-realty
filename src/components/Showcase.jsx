import { useRef } from "react";
import Reveal from "./Reveal.jsx";
import SmartImage from "./SmartImage.jsx";
import { properties } from "../data/properties.js";
import { IconChevronLeft, IconChevronRight } from "./icons.jsx";

/** Horizontal snap rail — "Explore Our Properties" showcase. */
export default function Showcase({ onOpen }) {
  const railRef = useRef(null);

  const scrollBy = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 20 : 420;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section id="showcase" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-deep">
              The Portfolio
            </p>
            <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.01em] text-charcoal sm:text-5xl">
              Explore Our Properties
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll showcase left"
              className="rounded-full border border-sand bg-ivory p-3 text-charcoal transition-colors hover:border-bronze hover:text-bronze-deep"
            >
              <IconChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll showcase right"
              className="rounded-full border border-sand bg-ivory p-3 text-charcoal transition-colors hover:border-bronze hover:text-bronze-deep"
            >
              <IconChevronRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.08} y={36}>
        <div
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-4 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(1.5rem,calc((100vw-1240px)/2+1.5rem))] lg:px-[max(1.5rem,calc((100vw-1240px)/2+1.5rem))]"
        >
          {properties.map((p) => (
            <button
              key={p.id}
              data-card
              type="button"
              onClick={() => onOpen(p)}
              aria-label={`View property: ${p.name}, ${p.location}`}
              className="group relative aspect-[16/11] w-[82%] shrink-0 snap-center overflow-hidden rounded-2xl text-left shadow-sm sm:w-[430px]"
            >
              <SmartImage
                src={p.image}
                alt={`${p.name} in ${p.location}`}
                className="h-full w-full"
                imgClassName="transition-transform duration-[1300ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-bronze-soft">
                  {p.location}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-normal text-ivory">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-3 overflow-hidden">
                  <span className="text-sm font-bold text-bronze-soft">{p.price}</span>
                </div>
                <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-xs text-ivory/80">
                      {p.bedrooms} Beds · {p.bathrooms} Baths · {p.area} · {p.type}
                    </p>
                  </div>
                </div>
              </div>
              <span className="absolute right-4 top-4 rounded-full bg-ivory/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ivory backdrop-blur-sm">
                {p.status}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <p className="mx-auto mt-4 max-w-[1240px] px-4 text-xs text-mist sm:px-6">
        Drag or scroll sideways to browse the full portfolio — tap any property for details.
      </p>
    </section>
  );
}
