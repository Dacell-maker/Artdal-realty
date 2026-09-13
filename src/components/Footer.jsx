import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconPhone,
  IconPin,
  IconXSocial,
} from "./icons.jsx";

const EXPLORE = [
  { label: "Properties", href: "#properties" },
  { label: "Featured Homes", href: "#showcase" },
  { label: "Services", href: "#services" },
];

const COMPANY = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Our Agents", href: "#about" },
];

const SOCIALS = [
  { label: "Instagram", icon: IconInstagram },
  { label: "LinkedIn", icon: IconLinkedIn },
  { label: "X", icon: IconXSocial },
  { label: "Facebook", icon: IconFacebook },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-4 pb-10 pt-20 text-ivory sm:px-6">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-3"
              aria-label="Artdal Realty — back to top"
            >
              <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
                <rect width="40" height="40" rx="9" fill="#B08A4F" />
                <path
                  d="M20 8 L32 19 V32 H23.5 V24 H16.5 V32 H8 V19 Z"
                  fill="#171410"
                />
              </svg>
              <span className="leading-none">
                <span className="block font-display text-xl font-medium tracking-[0.16em]">
                  ARTDAL
                </span>
                <span className="mt-1 block text-[9px] font-semibold tracking-[0.46em] text-bronze">
                  REALTY
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/60">
              Helping you find spaces worth calling home.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#home"
                  aria-label={`Artdal Realty on ${s.label} (demo link)`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors duration-300 hover:border-bronze-deep hover:bg-bronze-deep hover:text-ivory"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-bronze">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-bronze-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-bronze">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-bronze-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-bronze">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/70">
              <li className="flex items-center gap-3">
                <IconMail className="h-4 w-4 shrink-0 text-bronze" />
                <a
                  href="mailto:hello@artdalrealty.com"
                  className="transition-colors hover:text-bronze-soft"
                >
                  hello@artdalrealty.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-4 w-4 shrink-0 text-bronze" />
                <a
                  href="tel:+2348001234567"
                  className="transition-colors hover:text-bronze-soft"
                >
                  +234 800 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
                <span>12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 border-t border-ivory/10 pt-7 text-xs text-ivory/45 sm:flex-row">
          <p>© 2026 Artdal Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
