"use client";

import { motion } from "framer-motion";

/**
 * Word/character stagger reveal. Pass `as` for the wrapping element.
 */
export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  duration = 0.8,
  staggerChildren = 0.05,
  splitBy = "word",
  once = true,
}) {
  const parts = splitBy === "word" ? text.split(" ") : text.split("");

  const parent = {
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren: delay },
    },
  };

  const child = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.3 }}
        className="inline-block"
        aria-label={text}
      >
        {parts.map((p, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.2em", marginBottom: "-0.2em" }}
            aria-hidden
          >
            <motion.span variants={child} className="inline-block">
              {p}
              {splitBy === "word" && i < parts.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
