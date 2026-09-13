import { useState } from "react";
import { motion } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import { IconArea, IconArrowRight, IconBath, IconBed, IconHeart, IconPin } from "./icons.jsx";

const STATUS_STYLES = {
  Buy: "bg-charcoal/85 text-ivory",
  Rent: "bg-bronze-deep text-ivory",
  Sold: "bg-stone/90 text-ivory",
};

/**
 * Reusable property card.
 * `layout` + exit animations are driven by the parent grid's AnimatePresence.
 */
export default function PropertyCard({ property, onOpen, delay = 0 }) {
  const [fav, setFav] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand/80 bg-white shadow-sm transition-shadow duration-500 hover:shadow-[0_26px_60px_-28px_rgba(23,20,16,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={property.image}
          alt={`${property.name} — ${property.type} in ${property.location}`}
          className="h-full w-full"
          imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.07]"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${STATUS_STYLES[property.status]}`}
        >
          {property.status}
        </span>
        <motion.button
          type="button"
          whileTap={{ scale: 0.8 }}
          onClick={() => setFav((v) => !v)}
          aria-pressed={fav}
          aria-label={fav ? `Remove ${property.name} from favourites` : `Save ${property.name} to favourites`}
          className={`absolute right-3 top-3 rounded-full p-2 shadow-sm transition-colors duration-300 ${
            fav ? "bg-clay text-ivory" : "bg-ivory/90 text-charcoal hover:text-clay"
          }`}
        >
          <IconHeart filled={fav} className="h-4 w-4" />
        </motion.button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-bronze-deep">
          {property.type}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-normal text-charcoal">
          {property.name}
        </h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-stone">
          <IconPin className="h-3.5 w-3.5 text-mist" />
          {property.location}
        </p>

        <p className="mt-3 text-lg font-bold tracking-tight text-bronze-deep">
          {property.price}
        </p>

        <dl className="mt-4 grid grid-cols-3 divide-x divide-sand border-t border-sand pt-3.5 text-center">
          <div className="px-1">
            <dd className="flex items-center justify-center gap-1.5 text-sm font-semibold text-charcoal">
              <IconBed className="h-4 w-4 text-mist" /> {property.bedrooms}
            </dd>
            <dt className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-stone">Beds</dt>
          </div>
          <div className="px-1">
            <dd className="flex items-center justify-center gap-1.5 text-sm font-semibold text-charcoal">
              <IconBath className="h-4 w-4 text-mist" /> {property.bathrooms}
            </dd>
            <dt className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-stone">Baths</dt>
          </div>
          <div className="px-1">
            <dd className="flex items-center justify-center gap-1.5 text-sm font-semibold text-charcoal">
              <IconArea className="h-4 w-4 text-mist" /> {property.area.replace(" Sq Ft", "")}
            </dd>
            <dt className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-stone">Sq Ft</dt>
          </div>
        </dl>

        <button
          type="button"
          onClick={() => onOpen(property)}
          className="group/btn mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-charcoal/25 py-2.5 text-sm font-semibold text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
        >
          View Property
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}
