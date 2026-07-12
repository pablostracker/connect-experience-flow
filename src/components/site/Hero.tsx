import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { ContactStrip } from "./ContactStrip";
import { StarfieldBackground } from "./StarfieldBackground";



const words = ["PEOPLE", "OPERATIONS", "DATA", "AI"] as const;

function CosmicBodies() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="saturn-body" cx="0.4" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="oklch(0.85 0.09 70)" />
          <stop offset="55%" stopColor="oklch(0.55 0.09 55)" />
          <stop offset="100%" stopColor="oklch(0.18 0.02 45)" />
        </radialGradient>
        <radialGradient id="planet-blue" cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="oklch(0.72 0.12 240)" />
          <stop offset="70%" stopColor="oklch(0.30 0.06 250)" />
          <stop offset="100%" stopColor="oklch(0.14 0.02 250)" />
        </radialGradient>
        <radialGradient id="planet-copper" cx="0.5" cy="0.5" r="0.6">
          <stop offset="0%" stopColor="oklch(0.78 0.14 45)" />
          <stop offset="100%" stopColor="oklch(0.20 0.02 45)" />
        </radialGradient>
        <radialGradient id="nebula" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="oklch(0.60 0.15 300 / 0.35)" />
          <stop offset="100%" stopColor="oklch(0.14 0 0 / 0)" />
        </radialGradient>
      </defs>

      {/* Nebula */}
      <ellipse cx="1100" cy="220" rx="360" ry="220" fill="url(#nebula)" />

      {/* Distant blue planet */}
      <circle cx="220" cy="180" r="28" fill="url(#planet-blue)" opacity="0.85" />

      {/* Copper micro-planet */}
      <circle cx="1320" cy="720" r="14" fill="url(#planet-copper)" opacity="0.9" />

      {/* Saturn with rings */}
      <g transform="translate(1180 640)" opacity="0.9">
        <ellipse cx="0" cy="0" rx="110" ry="14" fill="none" stroke="oklch(0.75 0.09 60 / 0.55)" strokeWidth="2" />
        <ellipse cx="0" cy="0" rx="86" ry="10" fill="none" stroke="oklch(0.85 0.06 70 / 0.35)" strokeWidth="1" />
        <circle cx="0" cy="0" r="46" fill="url(#saturn-body)" />
        <ellipse cx="0" cy="4" rx="110" ry="14" fill="none" stroke="oklch(0.28 0.02 45 / 0.7)" strokeWidth="1" />
      </g>

      {/* Constellation lines */}
      <g stroke="oklch(0.86 0.008 250 / 0.22)" strokeWidth="0.6" fill="none">
        <path d="M 90 500 L 190 560 L 310 520 L 380 620 L 470 590" />
        <path d="M 780 120 L 860 180 L 940 140 L 1000 220" />
      </g>
      {[
        [90, 500], [190, 560], [310, 520], [380, 620], [470, 590],
        [780, 120], [860, 180], [940, 140], [1000, 220],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="oklch(0.92 0.01 80)" opacity="0.85" />
      ))}
    </svg>
  );
}


export function Hero() {
  const t = useT();
  const prefersReduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = !mounted || prefersReduce;


  return (
    <section
      id="top"
      className="grain relative overflow-hidden px-6 pb-32 pt-36 md:px-10 md:pb-40 md:pt-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, oklch(0.22 0.01 260 / 0.6), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.20 0.02 45 / 0.25), transparent 55%)",
        }}
      />
      <StarfieldBackground className="opacity-80" />
      <CosmicBodies />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
          className="text-eyebrow"
        >
          {t.hero.eyebrow}
        </motion.div>

        <h1
          className="mt-6 font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(2.75rem, 12vw, 11rem)" }}
        >
          <motion.span
            initial={reduce ? undefined : { opacity: 0, y: 24, filter: "blur(12px)" }}
            animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="block"
          >
            Pablo
          </motion.span>
          <span className="block">
            <motion.span
              initial={reduce ? undefined : { opacity: 0, x: -20, filter: "blur(10px)" }}
              animate={reduce ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-block text-silver-dim"
            >
              Silva
            </motion.span>{" "}
            <span className="inline-block align-baseline">
              {Array.from("Dutra").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={
                    reduce
                      ? undefined
                      : { opacity: 0, y: 40, filter: "blur(14px)", scaleY: 0.6 }
                  }
                  animate={
                    reduce
                      ? undefined
                      : { opacity: 1, y: 0, filter: "blur(0px)", scaleY: 1 }
                  }
                  transition={{
                    duration: 0.9,
                    delay: 1.1 + i * 0.18,
                    ease: [0.2, 0.7, 0.2, 1],
                  }}
                  className="metallic-letter inline-block"
                  style={{ transformOrigin: "50% 100%" }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          </span>
        </h1>


        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-display text-2xl leading-tight text-foreground md:col-span-7 md:text-3xl"
          >
            {t.hero.headline}
          </motion.p>

          <div className="md:col-span-5">
            <motion.p
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="max-w-md text-silver-dim md:text-lg"
            >
              {t.hero.support}
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#impact"
                className="group inline-flex items-center gap-3 border border-silver px-5 py-3 text-eyebrow text-foreground transition-colors hover:bg-silver hover:text-primary-foreground"
              >
                <span>{t.hero.ctaPrimary}</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-2 py-3 text-eyebrow text-silver-dim transition-colors hover:text-foreground"
              >
                <span className="h-px w-8 bg-current" aria-hidden />
                {t.hero.ctaSecondary}
              </a>
            </div>

            <ContactStrip />
          </div>
        </div>

        <ConnectedKeywords reduce={!!reduce} words={words} />

        <div className="hairline-t mt-20 pt-6 text-eyebrow text-silver-dim">
          {t.hero.positioning}
        </div>
      </div>
    </section>
  );
}

function ConnectedKeywords({
  words,
  reduce,
}: {
  words: readonly string[];
  reduce: boolean;
}) {
  const pts = [
    { x: 12, y: 22 },
    { x: 88, y: 30 },
    { x: 18, y: 82 },
    { x: 82, y: 78 },
  ];
  const pairs: Array<[number, number]> = [
    [0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3],
  ];
  return (
    <div className="relative mt-20 aspect-[16/7] w-full">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {pairs.map(([a, b], i) => (
          <line
            key={i}
            x1={pts[a].x}
            y1={pts[a].y}
            x2={pts[b].x}
            y2={pts[b].y}
            stroke="var(--silver)"
            strokeOpacity="0.25"
            strokeWidth="0.15"
            className={reduce ? undefined : "pulse-line"}
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="0.6" fill="var(--copper)" />
        ))}
      </svg>
      {words.map((w, i) => (
        <span
          key={w}
          className="absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[0.7rem] tracking-[0.3em] text-foreground md:text-sm"
          style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%` }}
        >
          <span className="mr-2 text-silver-dim">0{i + 1}</span>
          {w}
        </span>
      ))}
    </div>
  );
}
