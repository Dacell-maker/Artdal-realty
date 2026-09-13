import Reveal from "./Reveal.jsx";
import SmartImage from "./SmartImage.jsx";
import { collageTiles, properties } from "../data/properties.js";
import { IconArrow, IconArea, IconBath, IconBed } from "./icons.jsx";

export default function PropertyMatch({ onOpen }) {
  const featured = properties[0];

  return (
    <section id="match" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        {/* Editorial two-column header */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <h2 className="font-display text-4xl font-light leading-[1.08] tracking-[-0.01em] text-charcoal sm:text-5xl">
              Discover Your Perfect
              <span className="block text-bronze-deep">Property Match</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="max-w-md text-[15px] leading-relaxed text-stone md:ml-auto md:text-right">
              From modern city apartments to spacious family homes, explore properties
              selected with different lifestyles in mind each one visited, checked and
              chosen by our own agents.
            </p>
          </Reveal>
        </div>

        {/* Collage: one large featured property + four ambient tiles */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:auto-rows-[210px] auto-rows-[150px] sm:auto-rows-[180px]">
          <Reveal className="col-span-2 row-span-2" y={36}>
            <button
              type="button"
              onClick={() => onOpen(featured)}
              className="group relative block h-full w-full overflow-hidden rounded-2xl text-left shadow-sm transition-shadow duration-500 hover:shadow-xl focus-visible:outline-2"
              aria-label={`View property: ${featured.name}, ${featured.location}`}
            >
              <SmartImage
                src={featured.image}
                alt={`${featured.name} — modern villa exterior in ${featured.location}`}
                className="h-full w-full"
                imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Price / spec plate */}
              <div className="absolute inset-x-4 bottom-4 rounded-xl border border-sand/60 bg-ivory/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-5 sm:bottom-5 sm:p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-medium text-bronze-deep">
                      {featured.price}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-charcoal">{featured.name}</p>
                    <p className="text-xs text-stone">{featured.location}</p>
                  </div>
                  <span className="mb-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bronze-deep text-ivory transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <IconArrow className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 divide-x divide-sand border-t border-sand pt-3 text-center">
                  <div className="px-1">
                    <p className="text-sm font-semibold text-charcoal">{featured.bedrooms}</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-stone">Beds</p>
                  </div>
                  <div className="px-1">
                    <p className="text-sm font-semibold text-charcoal">{featured.bathrooms}</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-stone">Baths</p>
                  </div>
                  <div className="px-1">
                    <p className="text-sm font-semibold text-charcoal">{featured.area.replace(" Sq Ft", "")}</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-stone">Sq Ft</p>
                  </div>
                </div>
              </div>
            </button>
          </Reveal>

          {collageTiles.map((tile, i) => (
            <Reveal key={tile.id} delay={0.08 * (i + 1)} y={30}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl shadow-sm">
                <SmartImage
                  src={tile.image}
                  alt={tile.alt}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-charcoal shadow-sm transition-transform duration-300 group-hover:rotate-45">
                  <IconArrow className="h-3.5 w-3.5" />
                </span>
                <p className="absolute bottom-3 left-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {tile.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Quiet reassurance line */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-stone">
            <span className="inline-flex items-center gap-2">
              <IconBed className="h-4 w-4 text-bronze-deep" /> Family homes &amp; villas
            </span>
            <span className="inline-flex items-center gap-2">
              <IconBath className="h-4 w-4 text-bronze-deep" /> Considered interiors
            </span>
            <span className="inline-flex items-center gap-2">
              <IconArea className="h-4 w-4 text-bronze-deep" /> Honest floor plans
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
