"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/lib/data";
import { getTech } from "@/lib/techIcons";

const MAX_VISIBLE_TECH = 6;

function TechChip({ name }) {
  const { Icon, color } = getTech(name);
  return (
    <span className="relative group/chip inline-flex">
      <span className="inline-flex items-center justify-center h-7 w-7 border border-line bg-bg-alt/60 hover:bg-bg-alt hover:border-line-strong transition-colors">
        <Icon className="h-3.5 w-3.5" style={{ color }} />
      </span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-bg border border-line-strong font-mono text-[10px] uppercase tracking-[0.18em] text-fg whitespace-nowrap opacity-0 translate-y-1 group-hover/chip:opacity-100 group-hover/chip:translate-y-0 transition-all duration-150 pointer-events-none z-10 shadow-lg shadow-black/40">
        {name}
      </span>
    </span>
  );
}

function ProjectCard({ project, i }) {
  const visible = project.tech.slice(0, MAX_VISIBLE_TECH);
  const overflow = Math.max(0, project.tech.length - MAX_VISIBLE_TECH);
  const status = project.status;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col border border-line bg-bg-alt/30 hover:bg-bg-alt/60 transition-colors"
    >
      <div className="relative aspect-video overflow-hidden border-b border-line">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <h3 className="display-huge text-lg md:text-xl text-fg truncate">
              {project.title}
            </h3>
            {status && (
              <span className="inline-flex items-center gap-1.5 border border-accent/40 bg-accent/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
                <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
                {status}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — live site`}
                className="h-7 w-7 inline-flex items-center justify-center border border-line text-fg-dim hover:text-accent hover:border-accent transition-colors"
              >
                <FiExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — source on GitHub`}
                className="h-7 w-7 inline-flex items-center justify-center border border-line text-fg-dim hover:text-accent hover:border-accent transition-colors"
              >
                <FiGithub className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {project.subtitle && (
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
            {project.subtitle}
          </p>
        )}

        <p className="mt-3 text-sm text-fg-dim leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto pt-4 flex flex-wrap gap-1.5 items-center">
          {visible.map((t) => (
            <TechChip key={t} name={t} />
          ))}
          {overflow > 0 && (
            <span className="inline-flex items-center justify-center h-7 px-2 border border-line bg-bg-alt/60 font-mono text-[10px] text-fg-dim">
              +{overflow}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Selected Work"
          title="Case studies where craft met code."
          kicker="A small set of recent builds across commerce, AI, and analytics."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] text-fg-dim">
          <span>End of work index</span>
          <span>
            {projects.length.toString().padStart(2, "0")} projects shown
          </span>
        </div>
      </div>
    </section>
  );
}
