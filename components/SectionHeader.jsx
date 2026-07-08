"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";

export default function SectionHeader({ index, eyebrow, title, kicker }) {
  return (
    <div className="mb-16 md:mb-24">
      <div className="hairline mb-10" />
      <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <div className="mono-eyebrow flex items-center gap-3">
            <span className="text-accent">§ {index}</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>{eyebrow}</span>
          </div>
        </motion.div>
        <div className="md:col-span-9">
          <RevealText
            as="h2"
            text={title}
            className="display-huge leading-[0.95] text-[10vw] md:text-[6vw] lg:text-[5vw] text-fg"
          />
          {kicker && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 max-w-2xl text-fg-dim text-lg leading-relaxed"
            >
              {kicker}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
