"use client";

import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { TbPhone, TbArrowUpRight, TbDownload } from "react-icons/tb";
import { profile } from "@/lib/data";

const SOCIAL_META = {
  GitHub: { Icon: SiGithub, color: "#E6E6EC" },
  LinkedIn: { Icon: FaLinkedin, color: "#0A66C2" },
  Email: { Icon: SiGmail, color: "#EA4335" },
  Phone: { Icon: TbPhone, color: "#B6A3FF" },
};

function SocialButton({ label, href, i }) {
  const { Icon, color } = SOCIAL_META[label] || {};
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
      className="group inline-flex items-center gap-3 border border-line bg-bg-alt/40 hover:bg-bg-alt hover:border-line-strong transition-colors px-4 py-3"
    >
      {Icon && (
        <Icon className="h-4 w-4 shrink-0" style={color ? { color } : undefined} />
      )}
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg">
        {label}
      </span>
      <TbArrowUpRight className="h-3.5 w-3.5 text-fg-dim group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mono-eyebrow mb-6 flex items-center gap-3"
        >
          <span className="text-accent">§ 06</span>
          <span className="h-px w-8 bg-line-strong" />
          <span>Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="display-huge text-[12vw] md:text-[8vw] lg:text-[6.5vw] text-fg leading-[0.92]"
        >
          Let&apos;s build something
          <br />
          <span className="text-accent">extraordinary</span> together.
        </motion.h2>

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 text-fg-dim text-lg leading-relaxed max-w-2xl"
          >
            I&apos;m open to new opportunities to contribute and grow. If
            something aligns with my skills and experience, don&apos;t hesitate
            to reach out — I reply within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end items-start"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 bg-accent text-bg px-5 py-3 hover:bg-fg transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                {profile.email}
              </span>
              <TbArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              className="group inline-flex items-center gap-3 border border-line-strong px-5 py-3 text-fg hover:bg-fg hover:text-bg transition-colors"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Download CV
              </span>
              <TbDownload className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {profile.socials.map((s, i) => (
            <SocialButton key={s.label} {...s} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-fg-dim"
        >
          Based in {profile.location} · Open to remote worldwide
        </motion.p>
      </div>
    </section>
  );
}
