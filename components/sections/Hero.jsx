"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import RevealText from "@/components/RevealText";

function RoleCycler({ roles }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, [roles.length]);

  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
      {roles.map((r, idx) => (
        <motion.span
          key={r}
          initial={{ y: "100%" }}
          animate={
            idx === i
              ? { y: "0%" }
              : { y: idx < i ? "-110%" : "110%" }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap text-accent"
        >
          {r}
        </motion.span>
      ))}
      <span className="invisible whitespace-nowrap">
        {roles.reduce((a, b) => (a.length > b.length ? a : b), "")}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col md:justify-end overflow-hidden pt-20"
    >
      {/* Top meta band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="relative md:absolute md:top-20 inset-x-0 px-6 md:px-10 lg:px-14"
      >
        <div className="hairline" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-5 md:py-6 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-fg-dim">
          <div>
            <div className="text-fg-dim/60">[ Position ]</div>
            <div className="text-fg mt-1.5">{profile.location}</div>
          </div>
          <div>
            <div className="text-fg-dim/60">[ Discipline ]</div>
            <div className="text-fg mt-1.5">Full-Stack Engineer</div>
          </div>
          <div>
            <div className="text-fg-dim/60">[ Stack ]</div>
            <div className="text-fg mt-1.5">MERN · Next.js</div>
          </div>
          <div>
            <div className="text-fg-dim/60">[ Status ]</div>
            <div className="text-accent mt-1.5">Open to Opportunities</div>
          </div>
        </div>
        <div className="hairline" />
      </motion.div>

      <div className="container-x relative w-full pt-10 md:pt-0 pb-12 md:pb-16">
        {/* Greeting / index */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mono-eyebrow mb-6 md:mb-8 flex items-center gap-3"
        >
          <span className="text-accent">§ 00</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>Index / Hello</span>
        </motion.div>

        {/* Name — gigantic */}
        <div className="relative">
          <RevealText
            as="h1"
            text={profile.firstName}
            delay={1.6}
            duration={1}
            staggerChildren={0.06}
            splitBy="char"
            className="display-huge text-[18vw] md:text-[15vw] text-fg leading-[0.95]"
          />
          <div className="flex items-baseline gap-4 md:gap-8 flex-wrap">
            <RevealText
              as="h1"
              text={profile.lastName + "."}
              delay={1.8}
              duration={1}
              staggerChildren={0.06}
              splitBy="char"
              className="display-huge text-[18vw] md:text-[15vw] text-fg leading-[0.95]"
            />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="font-mono text-[11px] md:text-xs uppercase tracking-[0.3em] text-fg-dim hidden md:inline"
            >
              [ EST. 2021 — PORTFOLIO v3 ]
            </motion.span>
          </div>
        </div>

        {/* Bottom row: rolecycler + cta */}
        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.3, duration: 0.7 }}
              className="font-display text-3xl md:text-5xl leading-tight text-fg"
            >
              Currently shaping —<br />
              <RoleCycler roles={profile.roles} />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.7 }}
              className="mt-6 max-w-lg text-fg-dim leading-relaxed"
            >
              {profile.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            <a
              href="#projects"
              className="group relative flex items-center justify-between border border-line-strong px-6 py-5 text-fg hover:bg-accent hover:text-bg hover:border-accent transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                ↳ View Projects
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group relative flex items-center justify-between border border-line-strong px-6 py-5 text-fg hover:bg-fg hover:text-bg hover:border-fg transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                ↳ Get in touch
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Footer of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 hairline"
        />
        <div className="mt-4 flex items-center justify-between font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-fg-dim">
          <span>Scroll for case studies</span>
          <span className="hidden md:inline">{profile.firstName.toLowerCase()}.raiyani.dev / 2026</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  );
}
