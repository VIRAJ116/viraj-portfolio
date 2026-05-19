"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/lib/data";

function TerminalInput({ prefix, name, type = "text", multiline, required }) {
  const [val, setVal] = useState("");
  const [focused, setFocused] = useState(false);
  const Tag = multiline ? "textarea" : "input";

  return (
    <div className="border-b border-line py-4 group focus-within:border-accent transition-colors">
      <label className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-fg-dim mb-2">
        <span className="text-accent">›</span>
        <span>{prefix}</span>
        {required && <span className="text-accent">*</span>}
      </label>
      <Tag
        name={name}
        type={multiline ? undefined : type}
        required={required}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={multiline ? 4 : undefined}
        className="w-full bg-transparent text-fg text-lg md:text-xl font-display placeholder-fg-dim focus:outline-none resize-none"
        placeholder={focused ? "_" : ""}
      />
    </div>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeader
          index="06"
          eyebrow="Contact"
          title="Have an idea worth shipping?"
          kicker="I take on a small number of projects per quarter. Drop a line — I reply within 24 hours."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 border border-line p-6 md:p-10"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim mb-8 pb-4 border-b border-line">
              <span className="h-2 w-2 bg-accent" />
              <span>~ / hello.txt</span>
              <span className="ml-auto">EDITING</span>
            </div>

            <TerminalInput prefix="name --your" name="name" required />
            <TerminalInput prefix="email --reply" name="email" type="email" required />
            <TerminalInput prefix="subject --about" name="subject" />
            <TerminalInput prefix="message --content" name="message" multiline required />

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs text-fg-dim">
                {sent ? (
                  <span className="text-accent">› transmitted ok</span>
                ) : sending ? (
                  <span>› sending<span className="blink">▌</span></span>
                ) : (
                  <span>› awaiting input</span>
                )}
              </p>
              <button
                type="submit"
                disabled={sending}
                className="group inline-flex items-center gap-3 border border-line-strong px-6 py-4 text-fg hover:bg-accent hover:text-bg hover:border-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
                  {sent ? "Sent ✓" : sending ? "Sending..." : "Transmit message"}
                </span>
                {!sending && !sent && (
                  <span className="text-xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-10"
          >
            <div>
              <div className="mono-eyebrow mb-4">Direct line</div>
              <a
                href={`mailto:${profile.email}`}
                className="font-display text-2xl md:text-3xl text-fg link-underline break-all"
              >
                {profile.email}
              </a>
              <p className="mt-4 text-fg-dim text-sm">
                Based in {profile.location} · Open to remote worldwide
              </p>
            </div>

            <div>
              <div className="mono-eyebrow mb-4">Elsewhere</div>
              <ul className="border-t border-line">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between py-4 border-b border-line hover:bg-bg-alt transition-colors px-2 -mx-2"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg-dim">
                          0{profile.socials.indexOf(s) + 1}
                        </span>
                        <span className="text-fg font-medium">{s.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-fg-dim">
                          {s.handle}
                        </span>
                        <span className="text-fg-dim group-hover:text-accent group-hover:translate-x-1 transition-all">
                          ↗
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
