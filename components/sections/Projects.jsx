"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/data";

function ProjectRow({ project, i, onHover, onLeave }) {
  return (
    <motion.a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => onHover(i)}
      onMouseLeave={onLeave}
      className="group block border-b border-line py-10 md:py-14 transition-colors hover:bg-bg-alt"
    >
      <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
        <div className="col-span-2 md:col-span-1 font-mono text-xs text-fg-dim">
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="col-span-10 md:col-span-6">
          <h3 className="display-huge text-4xl md:text-6xl lg:text-7xl text-fg group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-fg-dim hidden md:block">{project.subtitle}</p>
        </div>
        <div className="hidden md:flex md:col-span-4 flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim border border-line px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="hidden md:flex md:col-span-1 justify-end">
          <span className="text-fg-dim group-hover:text-accent group-hover:translate-x-1 transition-all text-2xl">
            ↗
          </span>
        </div>
      </div>
      {/* Mobile preview */}
      <div className="md:hidden mt-5 aspect-[16/10] overflow-hidden border border-line">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const wrapRef = useRef(null);
  const previewRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const onMove = (e) => {
    if (!previewRef.current) return;
    const x = e.clientX;
    const y = e.clientY;
    previewRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  return (
    <section
      id="projects"
      className="section"
      ref={wrapRef}
      onMouseMove={onMove}
    >
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Selected Work"
          title="Case studies where craft met code."
          kicker="A small set of recent builds across commerce, AI, and analytics. Hover to peek — click to dive in."
        />

        <div className="hidden md:block relative">
          {/* Cursor-follow preview */}
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                ref={previewRef}
                key="preview"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none fixed top-0 left-0 z-40 w-[28vw] max-w-[460px] aspect-[16/11] border border-line"
                style={{ willChange: "transform" }}
              >
                <img
                  src={projects[hovered].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-accent/30" />
                <div className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fg bg-bg px-2 py-1 border border-line">
                  {projects[hovered].title} ↗
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="border-t border-line">
            {projects.map((p, i) => (
              <ProjectRow
                key={p.title}
                project={p}
                i={i}
                onHover={setHovered}
                onLeave={() => setHovered(null)}
              />
            ))}
          </div>
        </div>

        {/* Mobile list */}
        <div className="md:hidden border-t border-line">
          {projects.map((p, i) => (
            <ProjectRow
              key={p.title}
              project={p}
              i={i}
              onHover={() => {}}
              onLeave={() => {}}
            />
          ))}
        </div>

        {/* Index footer */}
        <div className="mt-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim">
          <span>End of work index</span>
          <span>{projects.length.toString().padStart(2, "0")} projects shown</span>
        </div>
      </div>
    </section>
  );
}
