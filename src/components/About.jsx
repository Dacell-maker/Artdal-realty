import Reveal from "./Reveal.jsx";
import SmartImage from "./SmartImage.jsx";
import CountUp from "./CountUp.jsx";
import { aboutImage } from "../data/properties.js";
import { IconArrowRight } from "./icons.jsx";

const STATS = [
  { value: 15, suffix: "+", label: "Locations Served" },
  { value: 94, suffix: "%", label: "Client Satisfaction" },
  { value: 25, suffix: "+", label: "Trusted Agents" },
];

export default function About() {
  return (
    <section id="about" className="bg-shell px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photograph */}
        <Reveal y={40} className="relative">
          <div className="relative">
            <div
              className="absolute -bottom-5 -right-5 hidden h-44 w-44 rounded-2xl border border-bronze/50 sm:block"
              aria-hidden="true"
            />
            <SmartImage
              src={aboutImage}
              alt="Artdal Realty agent celebrating a completed purchase with a client"
              className="aspect-[4/5] w-full rounded-[24px] shadow-[0_36px_80px_-40px_rgba(23,20,16,0.5)]"
              imgClassName="scale-[1.02]"
            />
            <div className="absolute -bottom-7 left-6 rounded-2xl border border-sand bg-ivory px-6 py-4 shadow-lg">
              <p className="font-display text-3xl font-medium leading-none text-bronze-deep">
                <CountUp to={12} />
              </p>
              <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone">
                Years of Experience
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze-deep">
              About Artdal Realty
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] tracking-[-0.01em] text-charcoal sm:text-5xl">
              More Than Property.
              <span className="block text-bronze-deep">It's About Where You Belong.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-stone">
              At Artdal Realty, we believe finding a property is about more than square
              footage and price. It's about finding a place that fits your lifestyle, your
              plans, and the way you want to live.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-stone">
              That's why we keep our portfolio deliberately small: every home we present has
              been visited, photographed and questioned by our own team so what you see is
              what you'll get on viewing day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-9 grid max-w-lg grid-cols-3 gap-6 border-t border-sand pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dd className="font-display text-3xl font-medium text-charcoal">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-stone">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
            <a
              href="#why"
              className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-bronze-deep"
            >
              Learn More About Us
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
