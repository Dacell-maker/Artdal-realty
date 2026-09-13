import Reveal from "./Reveal.jsx";

const REASONS = [
  {
    n: "01",
    title: "Local Knowledge",
    copy: "We understand the locations, properties and markets we work with street by street, not just city by city.",
  },
  {
    n: "02",
    title: "Personal Approach",
    copy: "Every client has different needs, so we take the time to understand yours before we ever open a brochure.",
  },
  {
    n: "03",
    title: "Carefully Selected Properties",
    copy: "We focus on presenting properties worth your attention. If a home doesn't meet our standard, it doesn't get listed.",
  },
  {
    n: "04",
    title: "Guidance From Start to Finish",
    copy: "From your first search to closing, we're here to help with paperwork, negotiations and the questions in between.",
  },
];

export default function WhyArtdal() {
  return (
    <section
      id="why"
      className="bg-charcoal px-4 py-24 text-ivory sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze">
              The Artdal Standard
            </p>
            <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] tracking-[-0.01em] sm:text-5xl">
              Why Choose Artdal?
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ivory/65">
              Property is personal. These four commitments shape every
              valuation, every viewing and every conversation we have.
            </p>
          </Reveal>
        </div>

        <ol className="border-t border-ivory/15">
          {REASONS.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.08} y={24}>
              <li className="group grid grid-cols-[auto_1fr] gap-6 border-b border-ivory/15 py-8 sm:gap-10">
                <span className="font-display text-lg font-medium text-bronze transition-colors duration-300 group-hover:text-bronze-soft">
                  {r.n}
                </span>
                <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
                  <h3 className="font-display text-2xl font-normal text-ivory">
                    {r.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ivory/60">
                    {r.copy}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
