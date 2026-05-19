"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { profile, marqueeTech } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Engineer first. Aesthete on weekdays."
          kicker="Three years of shipping production MERN stacks taught me that great products live at the intersection of taste, performance, and craft. I sweat the easings and the indexes."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-fg/85 leading-relaxed text-xl"
          >
            <p>
              I&apos;m a full-stack engineer specializing in the{" "}
              <span className="text-accent">MERN stack</span>, with a strong
              lean toward motion-driven, design-led products. I&apos;ve shipped
              commerce sites, AI tools, real-time dashboards, and marketing
              experiences across remote teams.
            </p>
            <p>
              I obsess over the seams others skip: scroll easings, perceived
              latency, layout shift, the rhythm of a hover state. The result is
              software that doesn&apos;t just work — it feels right.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-x-10 gap-y-3 font-mono text-xs text-fg-dim">
              <div className="flex justify-between border-b border-line py-2">
                <span>Based in</span>
                <span className="text-fg">{profile.location}</span>
              </div>
              <div className="flex justify-between border-b border-line py-2">
                <span>Working</span>
                <span className="text-fg">Remote · IST</span>
              </div>
              <div className="flex justify-between border-b border-line py-2">
                <span>Email</span>
                <span className="text-fg">{profile.email}</span>
              </div>
              <div className="flex justify-between border-b border-line py-2">
                <span>Availability</span>
                <span className="text-accent">Open Q3 / 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-px bg-line border border-line"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="bg-bg p-7 md:p-9 flex flex-col justify-between min-h-[160px]"
              >
                <div className="mono-eyebrow">{s.label}</div>
                <div className="display-huge text-5xl md:text-6xl text-fg">
                  {s.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee tech band */}
      <div className="mt-28 relative border-y border-line py-10 overflow-hidden">
        <div className="marquee-row gap-16 font-display text-4xl md:text-6xl text-fg/80 whitespace-nowrap">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span key={i} className="flex items-center gap-16">
              <span>{t}</span>
              <span className="text-accent text-3xl">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
