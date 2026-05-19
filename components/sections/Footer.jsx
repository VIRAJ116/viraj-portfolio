"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative pt-24 md:pt-32 pb-10 border-t border-line overflow-hidden">
      <div className="container-x">
        {/* Big availability */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mono-eyebrow mb-6 flex items-center gap-3">
            <span className="text-accent">●</span>
            <span>Currently available</span>
          </div>
          <h2 className="display-huge text-[14vw] md:text-[10vw] text-fg leading-[0.85]">
            Let&apos;s build<br />
            <span className="text-accent">something</span> good.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 bg-accent text-bg px-7 py-5 hover:bg-fg transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em]">
                {profile.email}
              </span>
              <span className="text-xl transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
            <a
              href={profile.resumeUrl}
              className="group inline-flex items-center gap-3 border border-line-strong px-7 py-5 text-fg hover:bg-fg hover:text-bg transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em]">
                Download CV
              </span>
              <span>↓</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div className="mt-24 border-y border-line py-5 overflow-hidden">
        <div className="marquee-row gap-12 font-mono text-sm uppercase tracking-[0.25em] text-fg-dim whitespace-nowrap">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              {profile.name}
              <span className="text-accent">/</span>
              Full-Stack Engineer
              <span className="text-accent">/</span>
              {profile.location}
              <span className="text-accent">/</span>
              Open for collaborations
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="container-x mt-10 grid md:grid-cols-3 gap-6 items-end">
        <div>
          <a href="#top" className="font-display text-2xl text-fg">
            Viraj.<span className="text-accent">_</span>
          </a>
          <p className="mt-2 font-mono text-xs text-fg-dim">
            © {new Date().getFullYear()} {profile.name} — portfolio.v3
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-center">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim hover:text-accent transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="group md:justify-self-end inline-flex items-center gap-3 border border-line-strong px-5 py-3 hover:bg-fg hover:text-bg transition-colors"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Back to top
          </span>
          <span className="transition-transform group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}
