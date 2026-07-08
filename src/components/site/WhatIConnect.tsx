import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

// Node positions in a 4x2 grid, in normalized SVG coords (0-100)
const NODES = [
  { id: "people", x: 12, y: 22 },
  { id: "ops", x: 88, y: 30 },
  { id: "data", x: 22, y: 82 },
  { id: "ai", x: 86, y: 78 },
];

// All 6 pairwise connections between 4 nodes
const LINKS: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [1, 3],
  [2, 3],
];

export function WhatIConnect() {
  const t = useT();
  const reduce = !!useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  return (
    <SectionShell
      id="connect"
      label={t.connect.label}
      title={t.connect.title}
      intro={t.connect.intro}
    >
      <div className="relative isolate overflow-hidden border border-hairline bg-black">
        {/* deep-space background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, oklch(0.2 0.02 260 / 0.6), transparent 65%), radial-gradient(circle at 15% 90%, oklch(0.28 0.04 30 / 0.25), transparent 55%)",
          }}
        />
        <Starfield reduce={reduce} />

        {/* Constellation lines overlay */}
        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="line-copper" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0)" />
              <stop offset="45%" stopColor="oklch(0.72 0.11 45 / 0.5)" />
              <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
            </linearGradient>
          </defs>
          {LINKS.map(([a, b], i) => {
            const na = NODES[a];
            const nb = NODES[b];
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={na.x}
                y1={na.y}
                x2={nb.x}
                y2={nb.y}
                stroke="url(#line-copper)"
                strokeWidth="0.18"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: reduce ? 1 : 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 2.2, delay: 0.3 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}
              />
            );
          })}
          {/* Traveling pulses along diagonals */}
          {!reduce &&
            LINKS.slice(0, 3).map(([a, b], i) => {
              const na = NODES[a];
              const nb = NODES[b];
              return (
                <motion.circle
                  key={`pulse-${i}`}
                  r="0.6"
                  fill="oklch(0.9 0.14 60)"
                  initial={{ cx: na.x, cy: na.y, opacity: 0 }}
                  animate={{
                    cx: [na.x, nb.x],
                    cy: [na.y, nb.y],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    delay: 2 + i * 1.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
        </svg>

        {/* Territory nodes absolutely positioned over the constellation */}
        <div className="relative grid grid-cols-1 gap-px sm:grid-cols-2">
          {t.connect.territories.map((ter, i) => {
            const isActive = active === ter.id;
            const dim = active && !isActive;
            const node = NODES[i];
            return (
              <motion.button
                key={ter.id}
                type="button"
                onMouseEnter={() => setActive(ter.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(ter.id)}
                onBlur={() => setActive(null)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
                animate={{ opacity: dim ? 0.4 : 1 }}
                className="group relative bg-transparent p-8 text-left transition-colors hover:bg-graphite/50 focus:bg-graphite/50 focus:outline-none md:p-12"
              >
                {/* Node star glyph aligned to constellation coord */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute flex h-3 w-3 items-center justify-center"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                      isActive ? "bg-copper" : "bg-silver-dim/60"
                    }`}
                    style={{
                      boxShadow: isActive
                        ? "0 0 18px oklch(0.72 0.11 45 / 0.8), 0 0 4px oklch(0.72 0.11 45)"
                        : "0 0 6px oklch(0.86 0.008 250 / 0.4)",
                    }}
                  />
                  {isActive && !reduce && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-copper"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}
                </span>

                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs tracking-[0.24em] text-silver-dim">
                    {ter.code}
                  </span>
                  <span
                    aria-hidden
                    className={`h-1 flex-1 origin-left bg-copper transition-transform duration-700 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ maxWidth: "3rem" }}
                  />
                </div>
                <div className="mt-6 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                  {ter.name}
                </div>
                <ul className="mt-6 space-y-1.5 text-silver-dim">
                  {ter.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.6 + i * 0.15 + ii * 0.05,
                      }}
                      className="text-sm md:text-base"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

function Starfield({ reduce }: { reduce: boolean }) {
  // Deterministic pseudo-random stars so SSR matches client
  const stars = Array.from({ length: 60 }).map((_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const rand = seed / 233280;
    const seed2 = ((i + 17) * 9301 + 49297) % 233280;
    const rand2 = seed2 / 233280;
    const seed3 = ((i + 31) * 9301 + 49297) % 233280;
    const rand3 = seed3 / 233280;
    return {
      x: rand * 100,
      y: rand2 * 100,
      r: 0.3 + rand3 * 1.1,
      delay: rand * 6,
    };
  });
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {stars.map((s, i) => (
        <motion.circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r * 0.15}
          fill="oklch(0.95 0.02 80)"
          initial={{ opacity: 0.2 }}
          animate={reduce ? undefined : { opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: 4 + (i % 5),
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
