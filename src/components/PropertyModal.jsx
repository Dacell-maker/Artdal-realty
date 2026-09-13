import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import { IconArea, IconArrowRight, IconBath, IconBed, IconClose, IconPin } from "./icons.jsx";

/**
 * Accessible property detail modal.
 * Esc closes, backdrop closes, focus is moved in and restored out, body scroll locks.
 */
export default function PropertyModal({ property, onClose, onSchedule }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const panelRef = useRef(null);
  const restoreRef = useRef(null);

  useEffect(() => {
    if (!property) return;
    restoreRef.current = document.activeElement;
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'button, a[href], select, textarea, input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      restoreRef.current?.focus?.();
    };
  }, [property, onClose]);

  return (
    <AnimatePresence>
      {property && (
        <div className="fixed inset-0 z-[70]">
          <motion.button
            type="button"
            aria-label="Close property details"
            className="absolute inset-0 h-full w-full cursor-default bg-charcoal/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="pointer-events-none absolute inset-0 overflow-y-auto p-4 sm:p-6">
            <div className="flex min-h-full items-center justify-center">
              <motion.div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="property-modal-title"
                initial={reduce ? false : { opacity: 0, y: 48, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-auto relative grid w-full max-w-4xl overflow-hidden rounded-3xl bg-ivory shadow-2xl md:grid-cols-2"
              >
                <button
                  ref={closeRef}
                  type="button"
                  onClick={onClose}
                  aria-label="Close"
                  className="absolute right-4 top-4 z-10 rounded-full bg-ivory/90 p-2.5 text-charcoal shadow-sm transition-colors hover:bg-charcoal hover:text-ivory"
                >
                  <IconClose className="h-4 w-4" />
                </button>

                <SmartImage
                  src={property.image}
                  alt={`${property.name} — ${property.type} in ${property.location}`}
                  className="h-64 w-full md:h-full md:min-h-[520px]"
                />

                <div className="max-h-[70vh] overflow-y-auto p-7 md:max-h-[80vh] md:p-9">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-charcoal px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ivory">
                      {property.status}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-bronze-deep">
                      {property.type}
                    </span>
                  </div>

                  <h3
                    id="property-modal-title"
                    className="mt-4 font-display text-3xl font-light leading-tight text-charcoal"
                  >
                    {property.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-stone">
                    <IconPin className="h-4 w-4 text-mist" />
                    {property.location}
                  </p>

                  <p className="mt-5 font-display text-3xl font-medium text-bronze-deep">
                    {property.price}
                  </p>

                  <dl className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-shell p-4 text-center">
                    <div>
                      <dd className="flex items-center justify-center gap-1.5 font-semibold text-charcoal">
                        <IconBed className="h-4 w-4 text-bronze-deep" /> {property.bedrooms}
                      </dd>
                      <dt className="mt-1 text-[10px] uppercase tracking-[0.14em] text-stone">Bedrooms</dt>
                    </div>
                    <div>
                      <dd className="flex items-center justify-center gap-1.5 font-semibold text-charcoal">
                        <IconBath className="h-4 w-4 text-bronze-deep" /> {property.bathrooms}
                      </dd>
                      <dt className="mt-1 text-[10px] uppercase tracking-[0.14em] text-stone">Bathrooms</dt>
                    </div>
                    <div>
                      <dd className="flex items-center justify-center gap-1.5 font-semibold text-charcoal">
                        <IconArea className="h-4 w-4 text-bronze-deep" /> {property.area.replace(" Sq Ft", "")}
                      </dd>
                      <dt className="mt-1 text-[10px] uppercase tracking-[0.14em] text-stone">Sq Ft</dt>
                    </div>
                  </dl>

                  <p className="mt-6 text-[15px] leading-relaxed text-stone">
                    {property.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => onSchedule(property)}
                      className="group inline-flex items-center gap-2 rounded-full bg-bronze-deep px-6 py-3 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-charcoal"
                    >
                      Schedule a Viewing
                      <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-full border border-charcoal/25 px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal hover:bg-shell"
                    >
                      Keep Browsing
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
