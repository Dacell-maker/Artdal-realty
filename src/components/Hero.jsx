import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import SmartImage from "./SmartImage.jsx";
import CountUp from "./CountUp.jsx";
import { heroImage } from "../data/properties.js";
import { IconArrowRight } from "./icons.jsx";

const EASE = [0.22, 1, 0.36, 1];

const STATS = [
  { value: 120, suffix: "+", label: "Properties Listed" },
  { value: 850, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Locations" },
];

/* Masked line-by-line headline reveal */
function HeadlineLine({ children, delay }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden py-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section id="home" ref={ref} className="px-4 pt-28 sm:px-6 sm:pt-32 md:pt-36">
      <div className="relative mx-auto max-w-[1240px]">
        {/* Cinematic image panel */}
        <div className="relative h-[76vh] max-h-[820px] min-h-[540px] overflow-hidden rounded-[28px] md:h-[80vh]">
          <motion.div
            className="absolute inset-0"
            style={reduce ? undefined : { y: parallaxY }}
          >
            <motion.div
              className="h-full w-full"
              initial={reduce ? false : { scale: 1.14 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3.4, ease: EASE }}
            >
              <SmartImage
                src={heroImage}
                alt="Sunlit modern living room with floor-to-ceiling glazing, oak panelling and designer furniture"
                eager
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>

          {/* Overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/25 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 pb- sm:px-12 md:pb-44 lg:px-20">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-soft"
            >
              Artdal Realty — Private Property Brokerage
            </motion.p>

            <h1 className="max-w-3xl font-display text-[42px] font-light leading-[1.04] tracking-[-0.01em] text-ivory sm:text-6xl lg:text-7xl">
              <HeadlineLine delay={0.4}>Find a Place You'll</HeadlineLine>
              <HeadlineLine delay={0.55}>Love to Call Home</HeadlineLine>
            </h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/85"
            >
              Discover thoughtfully selected properties in some of the most desirable
              locations. Artdal Realty helps you find a home that fits your lifestyle.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#properties"
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-bronze-deep px-7 py-3.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-bronze"
              >
                Explore Properties
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-ivory/50 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-charcoal"
              >
                Talk to an Agent
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Floating "Who We Are" card, overlapping the hero panel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: EASE }}
          className="relative z-10 mx-1 -mt-16 rounded-2xl border border-sand bg-ivory p-7 shadow-[0_28px_70px_-30px_rgba(23,20,16,0.4)] sm:mx-4 md:mx-0 md:-mt-20 md:ml-auto md:max-w-md md:p-8"
        >
          <h2 className="font-display text-2xl font-normal text-charcoal">Who We Are</h2>
          <p className="mt-2.5 text-sm leading-relaxed text-stone">
            We help people find properties that match the way they want to live — with
            honest advice, local knowledge and a carefully kept portfolio.
          </p>
          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-sand pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-[26px] font-medium leading-none text-bronze-deep">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-stone">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
