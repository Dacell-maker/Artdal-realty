import { motion, useReducedMotion } from "framer-motion";

/** Scroll-triggered reveal wrapper (fade + rise), reduced-motion aware. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  once = true,
  className = "",
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
