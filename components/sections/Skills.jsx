"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/lib/data";

function SkillRow({ name, level, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.04 }}
      className="group border-b border-line py-4 hover:bg-bg-alt transition-colors"
    >
      <div className="dot-leader font-mono text-sm">
        <span className="text-fg uppercase tracking-[0.1em]">
          <span className="text-accent mr-3">›</span>
          {name}
        </span>
        <span className="leader" />
        <span className="text-fg-dim tabular-nums">{level}%</span>
      </div>
      <div className="mt-3 h-px w-full bg-line relative overflow-hidden">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.1 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute inset-0 bg-accent"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const cats = Object.keys(skills);

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow="Toolbox"
          title="What I reach for, sharpened by shipping."
          kicker="A working set across the MERN stack, modern frontend tooling, and an expanding AI toolbox."
        />

        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16">
          {cats.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: ci * 0.05 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="display-huge text-3xl md:text-4xl text-fg">
                  {cat}
                </h3>
                <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg-dim">
                  0{ci + 1} / 0{cats.length}
                </div>
              </div>
              <div className="border-t border-line">
                {skills[cat].map((s, i) => (
                  <SkillRow key={s.name} {...s} i={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
