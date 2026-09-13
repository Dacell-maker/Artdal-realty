import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropertyCard from "./PropertyCard.jsx";
import Reveal from "./Reveal.jsx";
import { locations, priceBands, properties, propertyTypes } from "../data/properties.js";

const TABS = ["Buy", "Rent", "Sold"];

const selectClass =
  "rounded-full border border-sand bg-ivory px-4 py-2.5 text-sm font-medium text-ink outline-none transition-colors focus:border-bronze hover:border-mist cursor-pointer";

export default function FeaturedProperties({ onOpen }) {
  const [tab, setTab] = useState("Buy");
  const [location, setLocation] = useState("all");
  const [type, setType] = useState("all");
  const [band, setBand] = useState("any");

  const filtered = useMemo(() => {
    const bandDef = priceBands.find((b) => b.id === band);
    return properties.filter(
      (p) =>
        p.status === tab &&
        (location === "all" || p.location.split(", ").slice(-2).join(", ") === location) &&
        (type === "all" || p.type === type) &&
        (bandDef ? bandDef.test(p.priceValue) : true)
    );
  }, [tab, location, type, band]);

  const reset = () => {
    setLocation("all");
    setType("all");
    setBand("any");
  };

  return (
    <section id="properties" className="bg-shell px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-deep">
            Current Collection
          </p>
          <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.01em] text-charcoal sm:text-5xl">
            Featured Properties
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-stone">
            Browse homes currently available through Artdal Realty. Filter by intention,
            location, property type and budget, the collection updates instantly.
          </p>
        </Reveal>

        {/* Controls */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
            {/* Status tabs with sliding pill */}
            <div
              className="inline-flex rounded-full border border-sand bg-ivory p-1"
              role="tablist"
              aria-label="Filter by listing status"
            >
              {TABS.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 ${
                    tab === t ? "text-ivory" : "text-stone hover:text-charcoal"
                  }`}
                >
                  {tab === t && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-charcoal"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{t}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <label className="sr-only" htmlFor="filter-location">Location</label>
              <select
                id="filter-location"
                className={selectClass}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="all">All locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>

              <label className="sr-only" htmlFor="filter-type">Property type</label>
              <select
                id="filter-type"
                className={selectClass}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="all">All types</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              <label className="sr-only" htmlFor="filter-price">Price range</label>
              <select
                id="filter-price"
                className={selectClass}
                value={band}
                onChange={(e) => setBand(e.target.value)}
              >
                {priceBands.map((b) => (
                  <option key={b.id} value={b.id}>{b.label}</option>
                ))}
              </select>
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-sm text-stone" aria-live="polite">
          Showing <span className="font-semibold text-charcoal">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "property" : "properties"}
          {tab === "Rent" ? " available to rent" : tab === "Sold" ? " recently sold" : " for sale"}
        </p>

        {/* Results grid */}
        {filtered.length > 0 ? (
          <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} onOpen={onOpen} delay={i * 0.06} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-2xl border border-dashed border-mist/60 bg-ivory p-14 text-center"
          >
            <p className="font-display text-2xl text-charcoal">No matches in this view</p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-stone">
              Try widening your filters — or talk to an agent and we'll search off-market
              listings on your behalf.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 rounded-full bg-charcoal px-6 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-bronze-deep"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
