"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { experience } from "@/lib/data";

function Row({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-line hover:bg-bg-alt transition-colors"
    >
      <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-dim">
        {item.period}
      </div>
      <div className="col-span-12 md:col-span-6">
        <h3 className="font-display text-2xl md:text-3xl text-fg leading-tight">
          {item.role}
        </h3>
        <div className="mt-1 text-fg-dim">
          <span className="text-accent">{item.company}</span>
          <span className="mx-2">·</span>
          <span>{item.location}</span>
        </div>
        <p className="mt-4 text-fg-dim leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 md:justify-end items-start">
        {item.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim border border-line px-2.5 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow="Journey"
          title="A timeline of work, study, and stubborn craft."
          kicker="From first internship to senior engineer in three years — with detours through 3D, AI tooling, and a lot of caffeine."
        />

        <div ref={ref} className="relative">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-line" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-accent"
          />
          <div className="border-t border-line">
            {experience.map((e, i) => (
              <Row key={e.role + e.company} item={e} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
