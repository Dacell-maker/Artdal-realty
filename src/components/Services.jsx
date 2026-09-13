import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { IconArrowRight, IconBuilding, IconChat, IconKey, IconTag } from "./icons.jsx";

const SERVICES = [
  {
    icon: IconKey,
    title: "Property Buying",
    copy: "Find the right property with guidance throughout the buying process, from first shortlist to signed deed.",
  },
  {
    icon: IconTag,
    title: "Property Sales",
    copy: "Present and market your property to the right buyers, with photography, pricing and negotiation handled properly.",
  },
  {
    icon: IconBuilding,
    title: "Property Management",
    copy: "Reliable support for owners who want their properties properly managed, tenanted and maintained.",
  },
  {
    icon: IconChat,
    title: "Property Consultation",
    copy: "Get professional guidance when making your next property decision, valuations, areas and long-term value.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-deep">
            Services
          </p>
          <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.01em] text-charcoal sm:text-5xl">
            How We Can Help
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-stone">
            Four disciplines, one standard of care. Whether you're buying your first home or
            managing a portfolio, we work the way a good advisor should.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.09} y={32}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-sand bg-ivory p-7 shadow-sm transition-shadow duration-500 hover:shadow-[0_26px_60px_-30px_rgba(23,20,16,0.35)]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-bronze/45 text-bronze-deep transition-colors duration-400 group-hover:border-bronze-deep group-hover:bg-bronze-deep group-hover:text-ivory">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-normal text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{s.copy}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bronze-deep transition-all duration-300 hover:gap-3.5"
                >
                  Find out more
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
