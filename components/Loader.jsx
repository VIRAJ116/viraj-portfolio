"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "Booting portfolio.v3",
  "Loading typeface stack...",
  "Hydrating sections...",
  "Calibrating motion...",
  "Ready.",
];

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    let p = 0;
    const tick = () => {
      p += Math.random() * 14 + 5;
      if (p >= 100) {
        setProgress(100);
        setLine(lines.length - 1);
        setTimeout(() => setDone(true), 480);
        return;
      }
      setProgress(Math.floor(p));
      setLine(Math.min(lines.length - 2, Math.floor((p / 100) * (lines.length - 1))));
      setTimeout(tick, 110);
    };
    tick();
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] bg-bg overflow-hidden"
        >
          <div className="absolute inset-0 flex flex-col">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-line px-6 md:px-10 py-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-fg-dim">
              <span>VIRAJ.RAIYANI / portfolio.system</span>
              <span className="hidden md:inline">v3.0.1 · build {new Date().getFullYear()}</span>
              <span className="md:hidden">v3.0.1</span>
            </div>

            {/* center */}
            <div className="flex-1 grid place-items-center px-6">
              <div className="w-full max-w-[680px]">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="display-huge text-[16vw] md:text-[10vw] text-fg"
                >
                  Viraj<span className="text-accent">_</span>
                </motion.div>

                <div className="mt-12 space-y-3 font-mono text-[13px] text-fg-dim">
                  {lines.slice(0, line + 1).map((l, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-accent">›</span>
                      <span>{l}</span>
                      {i === line && progress < 100 && (
                        <span className="blink text-accent">▌</span>
                      )}
                      {i < line && <span className="text-fg/60">OK</span>}
                      {i === line && progress >= 100 && (
                        <span className="text-accent">OK</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-line px-6 md:px-10 py-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-fg-dim flex items-center gap-4">
              <span>LOAD</span>
              <span className="relative flex-1 h-px bg-line">
                <motion.span
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                  className="absolute inset-y-0 left-0 bg-accent"
                />
              </span>
              <span className="text-accent w-12 text-right">
                {progress.toString().padStart(3, "0")}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
