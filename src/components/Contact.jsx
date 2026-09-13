import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal.jsx";
import { IconCheck, IconMail, IconPhone, IconPin } from "./icons.jsx";

const INTENTIONS = ["Buy", "Rent", "Sell"];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  intention: "",
  location: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-sand bg-white px-4 py-3 text-sm text-ink placeholder:text-mist outline-none transition-colors focus:border-bronze focus:ring-2 focus:ring-bronze/25";

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!/^[+()0-9][0-9\s()-]{6,}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!form.intention) errors.intention = "Let us know what you're looking to do.";
  if (form.location.trim().length < 2)
    errors.location = "Tell us your preferred location.";
  return errors;
}

export default function Contact({ prefill }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  /* "Schedule a Viewing" from the modal pre-fills the message */
  useEffect(() => {
    if (prefill) {
      setSent(false);
      setForm((f) => ({ ...f, message: prefill }));
    }
  }, [prefill]);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  const field = (id, label, node, span = false) => (
    <div className={span ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-charcoal">
        {label}
      </label>
      {node}
      {errors[id] && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-clay">
          {errors[id]}
        </p>
      )}
    </div>
  );

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal y={36}>
          <div className="grid overflow-hidden rounded-[28px] border border-sand shadow-[0_40px_90px_-50px_rgba(23,20,16,0.45)] lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left — dark lead panel */}
            <div className="bg-charcoal p-9 text-ivory md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-bronze">
                Start a Conversation
              </p>
              <h2 className="mt-4 font-display text-4xl font-light leading-[1.12] tracking-[-0.01em]">
                Let's Find Your Next Property
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/70">
                Tell us what you're looking for and we'll help you find properties worth
                exploring. No pressure, no spam — just a considered reply from a real agent.
              </p>

              <ul className="mt-10 space-y-5 text-sm">
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-bronze">
                    <IconMail className="h-4 w-4" />
                  </span>
                  <a href="mailto:hello@artdalrealty.com" className="transition-colors hover:text-bronze-soft">
                    hello@artdalrealty.com
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-bronze">
                    <IconPhone className="h-4 w-4" />
                  </span>
                  <a href="tel:+2348001234567" className="transition-colors hover:text-bronze-soft">
                    +234 800 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-bronze">
                    <IconPin className="h-4 w-4" />
                  </span>
                  <span>12 Admiralty Way, Lekki Phase 1, Lagos</span>
                </li>
              </ul>

              <p className="mt-10 border-t border-ivory/15 pt-6 text-xs text-ivory/50">
                Office hours: Monday – Saturday, 9:00 – 18:00 WAT
              </p>
            </div>

            {/* Right — form / success state */}
            <div className="bg-ivory p-9 md:p-12">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex h-full flex-col items-start justify-center"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-bronze-deep text-ivory">
                      <IconCheck className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-light text-charcoal">
                      Thank you, {form.name.trim().split(" ")[0]}.
                    </h3>
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone">
                      Your enquiry about{" "}
                      <span className="font-semibold text-charcoal">
                        {form.intention.toLowerCase()}ing in {form.location}
                      </span>{" "}
                      has been prepared. In a live deployment this would reach our team
                      inbox — an agent typically replies within one business day.
                    </p>
                    <p className="mt-4 rounded-xl bg-shell px-4 py-3 text-xs leading-relaxed text-stone">
                      Demo notice: this form runs entirely in your browser. No data was
                      sent, emailed or stored.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(EMPTY);
                        setSent(false);
                      }}
                      className="mt-7 rounded-full border border-charcoal/25 px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    {field(
                      "name",
                      "Full Name",
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Adaeze Okafor"
                        className={inputClass}
                        value={form.name}
                        onChange={set("name")}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                    )}
                    {field(
                      "email",
                      "Email",
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={inputClass}
                        value={form.email}
                        onChange={set("email")}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                    )}
                    {field(
                      "phone",
                      "Phone Number",
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+234 801 234 5678"
                        className={inputClass}
                        value={form.phone}
                        onChange={set("phone")}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                    )}
                    {field(
                      "intention",
                      "I'm Looking To",
                      <div className="flex gap-2" role="radiogroup" aria-label="I'm looking to">
                        {INTENTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            role="radio"
                            aria-checked={form.intention === opt}
                            onClick={() => {
                              setForm((f) => ({ ...f, intention: opt }));
                              setErrors((err) => ({ ...err, intention: undefined }));
                            }}
                            className={`flex-1 rounded-xl border px-3 py-3 text-sm font-semibold transition-colors duration-300 ${
                              form.intention === opt
                                ? "border-bronze-deep bg-bronze-deep text-ivory"
                                : "border-sand bg-white text-stone hover:border-mist"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                    {field(
                      "location",
                      "Preferred Location",
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="e.g. Ikoyi, Lagos"
                        className={inputClass}
                        value={form.location}
                        onChange={set("location")}
                        aria-invalid={!!errors.location}
                        aria-describedby={errors.location ? "location-error" : undefined}
                      />
                    ,
                      true
                    )}
                    {field(
                      "message",
                      "Message",
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about the home you have in mind…"
                        className={`${inputClass} resize-none`}
                        value={form.message}
                        onChange={set("message")}
                      />,
                      true
                    )}
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-bronze-deep px-8 py-4 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-charcoal sm:w-auto"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
