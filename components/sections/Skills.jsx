"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/lib/data";
import { getTech } from "@/lib/techIcons";

function tierFromLevel(level) {
  if (level >= 90) return "core";
  if (level >= 82) return "daily";
  return "familiar";
}

// Subtle hierarchy via opacity only — no extra borders, dots, or color washes.
const TIER_OPACITY = {
  core: "opacity-100",
  daily: "opacity-90",
  familiar: "opacity-55 hover:opacity-100",
};

function SkillTag({ name, level, i }) {
  const tier = tierFromLevel(level);
  const { Icon, color } = getTech(name);
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: i * 0.03 }}
      className={`inline-flex items-center gap-2.5 border border-line bg-bg-alt/40 hover:bg-bg-alt hover:border-line-strong transition-all px-3.5 py-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] text-fg cursor-default ${TIER_OPACITY[tier]}`}
    >
      <span
        className="inline-flex items-center justify-center h-5 w-5 rounded-[3px]"
        style={{ background: `${color}1F` }}
      >
        <Icon className="h-3.5 w-3.5" style={{ color }} />
      </span>
      {name}
    </motion.span>
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
          kicker="A working set across the MERN stack, modern frontend tooling, and an expanding AI toolbox. Faded chips are tools I'm familiar with but reach for less often."
        />

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-14">
          {cats.map((cat, ci) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: ci * 0.05 }}
            >
              <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-line">
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-accent">
                    § 0{ci + 1}
                  </span>
                  <h3 className="display-huge text-2xl md:text-4xl text-fg">
                    {cat}
                  </h3>
                </div>
                <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-fg-dim">
                  {skills[cat].length} tools
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {skills[cat].map((s, i) => (
                  <SkillTag key={s.name} {...s} i={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
