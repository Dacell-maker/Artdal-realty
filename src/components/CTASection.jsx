import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal.jsx";
import SmartImage from "./SmartImage.jsx";
import { ctaImage } from "../data/properties.js";
import { IconArrowRight } from "./icons.jsx";

export default function CTASection() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-32 sm:px-6 md:py-44">
      <motion.div
        className="absolute inset-0 scale-110"
        style={reduce ? undefined : { y }}
        aria-hidden="true"
      >
        <SmartImage
          src={ctaImage}
          alt=""
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/72" aria-hidden="true" />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-soft">
          Begin the Search
        </p>
        <h2 className="mt-5 font-display text-4xl font-light leading-[1.12] tracking-[-0.01em] text-ivory sm:text-5xl md:text-[56px]">
          Your Next Address Could Be Closer Than You Think.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ivory/80">
          Explore properties carefully selected for the way you want to live.
        </p>
        <motion.a
          href="#properties"
          whileTap={{ scale: 0.97 }}
          className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-bronze px-8 py-4 text-sm font-bold text-charcoal transition-colors duration-300 hover:bg-ivory"
        >
          Explore Properties
          <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </Reveal>
    </section>
  );
}
