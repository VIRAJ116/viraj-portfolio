"use client";

import { TbArrowUp } from "react-icons/tb";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative pt-10 pb-8 border-t border-line">
      <div className="container-x grid md:grid-cols-3 gap-6 items-center">
        <div>
          <a href="#top" className="font-display text-xl text-fg">
            Viraj.<span className="text-accent">_</span>
          </a>
          <p className="mt-1 font-mono text-[11px] text-fg-dim">
            © {new Date().getFullYear()} {profile.name} — portfolio.v3
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-dim hover:text-accent transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        <a
          href="#top"
          className="group md:justify-self-end inline-flex items-center gap-3 border border-line-strong px-4 py-2.5 hover:bg-fg hover:text-bg transition-colors"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Back to top
          </span>
          <TbArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
