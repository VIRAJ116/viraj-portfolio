"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Index", href: "#top", id: "00" },
  { label: "About", href: "#about", id: "01" },
  { label: "Skills", href: "#skills", id: "02" },
  { label: "Work", href: "#projects", id: "03" },
  { label: "Journey", href: "#experience", id: "04" },
  { label: "Contact", href: "#contact", id: "05" },
];

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      const opts = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(d) + " IST");
    };
    fmt();
    const id = setInterval(fmt, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("00");
  const time = useClock();

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const onScroll = () => {
      let current = "00";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - 120 <= 0) current = links.find((l) => l.href === `#${id}`).id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 bg-bg/90 border-b border-line backdrop-blur-[2px]"
    >
      <div className="px-6 md:px-10 lg:px-14 h-14 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em]">
        <a href="#top" className="text-fg flex items-center gap-3">
          <span className="text-accent">●</span>
          <span>Viraj.Raiyani</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group px-3 py-2 transition-colors ${
                active === l.id ? "text-fg" : "text-fg-dim hover:text-fg"
              }`}
            >
              <span className="text-accent/70 mr-1.5">{l.id}</span>
              <span className="link-underline">{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 text-fg-dim">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full bg-accent opacity-60 animate-ping rounded-full" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-accent rounded-full" />
            </span>
            Available
          </span>
          <span className="text-fg">{time}</span>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-px bg-fg transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-fg transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-fg transition-transform ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-line"
          >
            <div className="px-6 py-3 flex flex-col font-mono text-sm">
              {links.slice(1).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-line text-fg"
                >
                  <span className="uppercase tracking-[0.2em]">{l.label}</span>
                  <span className="text-accent">{l.id}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
