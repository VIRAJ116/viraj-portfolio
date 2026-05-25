"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { TbActivity, TbFlame, TbChartLine, TbCalendar } from "react-icons/tb";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/lib/data";

const calendarTheme = {
  light: ["#1a1b24", "#2d2740", "#5b4e8a", "#8d77d4", "#b6a3ff"],
  dark: ["#1a1b24", "#2d2740", "#5b4e8a", "#8d77d4", "#b6a3ff"],
};

function StatCard({ icon: Icon, label, value, accent, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="border border-line p-5 md:p-6 bg-bg hover:bg-bg-alt transition-colors"
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-9 w-9 items-center justify-center border border-line-strong ${accent}`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-fg-dim">
          {label}
        </span>
      </div>
      <div className="mt-4 display-huge text-3xl md:text-4xl text-fg tabular-nums">
        {value}
      </div>
    </motion.div>
  );
}

export default function GithubActivity() {
  const [stats, setStats] = useState(null);
  const [mounted, setMounted] = useState(false);
  const computedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const computeStats = (data) => {
    if (computedRef.current) return data;
    computedRef.current = true;

    const total = data.reduce((a, d) => a + d.count, 0);

    const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
    let streak = 0;
    for (let i = sorted.length - 1; i >= 0; i--) {
      if (sorted[i].count > 0) streak++;
      else break;
    }

    const best = data.reduce(
      (a, d) => (d.count > a.count ? d : a),
      data[0] || { count: 0 }
    );
    const activeDays = data.filter((d) => d.count > 0);
    const avg = activeDays.length ? (total / activeDays.length).toFixed(1) : "0.0";

    queueMicrotask(() =>
      setStats({
        total,
        streak,
        best: best.count,
        avg,
        year: best.date ? new Date(best.date).getFullYear() : new Date().getFullYear(),
      })
    );

    return data;
  };

  const cards = useMemo(
    () => [
      {
        icon: TbActivity,
        label: "Total contributions",
        value: stats ? stats.total.toLocaleString() : "—",
        accent: "text-accent",
      },
      {
        icon: TbFlame,
        label: "Current streak",
        value: stats ? `${stats.streak} ${stats.streak === 1 ? "day" : "days"}` : "—",
        accent: "text-accent-2",
      },
      {
        icon: TbChartLine,
        label: "Best day",
        value: stats ? `${stats.best} commits` : "—",
        accent: "text-sky-400",
      },
      {
        icon: TbCalendar,
        label: "Avg per active day",
        value: stats ? stats.avg : "—",
        accent: "text-accent",
      },
    ],
    [stats]
  );

  return (
    <section id="github" className="section">
      <div className="container-x">
        <SectionHeader
          index="05"
          eyebrow="Pulse"
          title="GitHub activity."
          kicker="A rolling year of contributions. Some days are sprints, others are sketches — both count."
        />

        <div className="border border-line bg-bg-alt/40 p-5 md:p-8">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {cards.map((c, i) => (
              <StatCard key={c.label} {...c} delay={i * 0.06} />
            ))}
          </div>

          {/* Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-10 overflow-x-auto"
          >
            <div className="min-w-170 md:min-w-0 min-h-45">
              {mounted && (
                <GitHubCalendar
                  username={profile.githubUsername}
                  theme={calendarTheme}
                  colorScheme="dark"
                  blockSize={12}
                  blockMargin={4}
                  blockRadius={2}
                  fontSize={12}
                  hideTotalCount
                  transformData={computeStats}
                  labels={{
                    totalCount: "{{count}} contributions in {{year}}",
                  }}
                />
              )}
            </div>
          </motion.div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-fg-dim">
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              ↳ github.com/{profile.githubUsername}
            </a>
            <span className="hidden md:inline">Synced live · {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
