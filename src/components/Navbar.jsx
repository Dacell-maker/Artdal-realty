import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IconClose, IconMenu } from "./icons.jsx";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Wordmark() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Artdal Realty — home">
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="#171410" />
        <path d="M20 8 L32 19 V32 H23.5 V24 H16.5 V32 H8 V19 Z" fill="#B08A4F" />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[19px] font-medium tracking-[0.16em] text-charcoal">
          ARTDAL
        </span>
        <span className="mt-1 block text-[9px] font-semibold tracking-[0.46em] text-bronze-deep">
          REALTY
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lightweight scroll-spy for the animated active underline */
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6">
      <div
        className={`mx-auto mt-3 flex max-w-[1240px] items-center justify-between rounded-2xl px-5 transition-all duration-500 sm:mt-5 sm:px-7 ${
          scrolled
            ? "border border-sand/80 bg-ivory/90 py-2.5 shadow-[0_16px_44px_-18px_rgba(23,20,16,0.28)] backdrop-blur-md"
            : "border border-transparent bg-ivory/60 py-4 backdrop-blur-sm"
        }`}
      >
        <Wordmark />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative py-1 text-sm font-medium transition-colors ${
                active === link.href ? "text-bronze-deep" : "text-ink hover:text-charcoal"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-bronze transition-transform duration-300 ${
                  active === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.96 }}
            className="hidden rounded-full bg-bronze-deep px-6 py-2.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-charcoal sm:inline-block"
          >
            Contact Us
          </motion.a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full border border-sand bg-ivory p-2.5 text-charcoal transition-colors hover:border-bronze lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-sand bg-ivory p-6 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active === link.href
                        ? "bg-shell text-bronze-deep"
                        : "text-ink hover:bg-shell"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-bronze-deep px-6 py-3 text-center text-sm font-semibold text-ivory transition-colors hover:bg-charcoal"
            >
              Contact Us
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
