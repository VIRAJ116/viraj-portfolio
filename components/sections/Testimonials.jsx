"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { testimonials, achievements } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="section">
      <div className="container-x">
        <SectionHeader
          index="05"
          eyebrow="Kind Words"
          title="On the record from people I shipped with."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 border-t border-b border-line py-14 md:py-20 relative min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                  ◆ Testimonial {String(i + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </div>
                <p className="font-display text-3xl md:text-5xl leading-[1.1] text-fg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-10 flex items-center gap-5">
                  <div className="h-12 w-12 grid place-items-center border border-line-strong text-fg font-mono text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-fg font-medium">{t.name}</div>
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-fg-dim mt-0.5">
                      {t.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-px transition-all duration-500 ${
                    idx === i ? "w-12 bg-accent" : "w-6 bg-line-strong"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-px bg-line border border-line">
            {achievements.map((a) => (
              <div
                key={a.label}
                className="bg-bg p-6 md:p-7 flex flex-col justify-between min-h-[140px]"
              >
                <div className="mono-eyebrow leading-snug">{a.label}</div>
                <div className="display-huge text-4xl md:text-5xl text-fg">
                  {a.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
