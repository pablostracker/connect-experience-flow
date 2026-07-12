import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";
import { useMounted } from "@/hooks/use-mounted";

// Native greetings + cultural tribute per language
const CULTURE: Record<
  string,
  {
    greeting: string;
    phonetic?: string;
    tribute: string;
    accent: string; // oklch
    stripes: string[]; // simplified flag stripes for waving flag
    orientation: "horizontal" | "vertical";
  }
> = {
  PT: {
    greeting: "E aí, tudo certo?",
    tribute: "Da bossa ao samba, do sertão à laje — a língua que me criou.",
    accent: "oklch(0.72 0.19 145)",
    stripes: ["oklch(0.55 0.16 145)", "oklch(0.82 0.17 90)", "oklch(0.45 0.14 250)"],
    orientation: "horizontal",
  },
  IT: {
    greeting: "Ciao, come stai?",
    phonetic: "tchau, kome stai",
    tribute: "Roma, Firenze, Napoli — a herança de família que virou segunda casa.",
    accent: "oklch(0.68 0.18 145)",
    stripes: [
      "oklch(0.72 0.17 145)",
      "oklch(0.98 0.005 90)",
      "oklch(0.62 0.22 25)",
    ],
    orientation: "vertical",
  },
  EN: {
    greeting: "Hey, how are you doing?",
    tribute: "A língua do produto global, do compliance e da mesa executiva.",
    accent: "oklch(0.68 0.15 245)",
    stripes: [
      "oklch(0.55 0.18 260)",
      "oklch(0.98 0.005 90)",
      "oklch(0.62 0.22 25)",
    ],
    orientation: "horizontal",
  },
  ES: {
    greeting: "¡Hola! ¿Qué tal?",
    tribute: "LATAM inteira em uma conversa — do México ao Cone Sul.",
    accent: "oklch(0.72 0.20 45)",
    stripes: [
      "oklch(0.62 0.22 25)",
      "oklch(0.86 0.18 85)",
      "oklch(0.62 0.22 25)",
    ],
    orientation: "horizontal",
  },
  LIBRAS: {
    greeting: "👋 Olá — sinal aberto",
    tribute:
      "A língua brasileira de sinais: acessibilidade não é acessório, é ponto de partida.",
    accent: "oklch(0.78 0.14 200)",
    stripes: [
      "oklch(0.38 0.10 260)",
      "oklch(0.72 0.15 200)",
      "oklch(0.92 0.02 80)",
    ],
    orientation: "horizontal",
  },
};

function WavingFlag({
  stripes,
  orientation,
  reduce,
}: {
  stripes: string[];
  orientation: "horizontal" | "vertical";
  reduce: boolean;
}) {
  // A tiny SVG flag that waves via animated path displacement.
  return (
    <svg
      viewBox="0 0 80 56"
      className="h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="flag-wave">
          <motion.path
            initial={{
              d: "M0 4 Q20 0 40 4 T80 4 L80 52 Q60 56 40 52 T0 52 Z",
            }}
            animate={
              reduce
                ? undefined
                : {
                    d: [
                      "M0 4 Q20 0 40 4 T80 4 L80 52 Q60 56 40 52 T0 52 Z",
                      "M0 4 Q20 8 40 4 T80 4 L80 52 Q60 48 40 52 T0 52 Z",
                      "M0 4 Q20 0 40 4 T80 4 L80 52 Q60 56 40 52 T0 52 Z",
                    ],
                  }
            }
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </clipPath>
        <linearGradient id="flag-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0)" />
          <stop offset="50%" stopColor="oklch(1 0 0 / 0.25)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0)" />
        </linearGradient>
      </defs>
      <g clipPath="url(#flag-wave)">
        {orientation === "horizontal"
          ? stripes.map((c, i) => (
              <rect
                key={i}
                x="0"
                y={(56 / stripes.length) * i}
                width="80"
                height={56 / stripes.length + 0.5}
                fill={c}
              />
            ))
          : stripes.map((c, i) => (
              <rect
                key={i}
                x={(80 / stripes.length) * i}
                y="0"
                width={80 / stripes.length + 0.5}
                height="56"
                fill={c}
              />
            ))}
        {/* wind sheen */}
        {!reduce && (
          <motion.rect
            x="-40"
            y="0"
            width="30"
            height="56"
            fill="url(#flag-sheen)"
            initial={{ x: -40 }}
            animate={{ x: 100 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1.6,
              ease: "easeInOut",
            }}
          />
        )}
      </g>
      {/* pole */}
      <line x1="0" y1="0" x2="0" y2="56" stroke="oklch(0.4 0.005 260)" strokeWidth="1.4" />
    </svg>
  );
}

export function Languages() {
  const t = useT();
  const reducedPref = !!useReducedMotion();
  const mounted = useMounted();
  const reduce = reducedPref || !mounted;
  const [open, setOpen] = useState<string | null>(null);

  return (
    <SectionShell
      id="languages"
      label={t.languages.label}
      title={t.languages.title}
      intro={t.languages.intro}
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.languages.items.map((lang, i) => {
          const meta = CULTURE[lang.code] ?? CULTURE.EN;
          const isOpen = open === lang.code;
          return (
            <motion.li
              key={lang.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden border border-hairline bg-graphite/30 p-6 backdrop-blur-sm md:p-7"
              style={{ ["--hc" as string]: meta.accent } as React.CSSProperties}
            >
              {/* hover glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(120% 80% at 100% 0%, ${meta.accent.replace(")", " / 0.14)")}, transparent 60%)`,
                }}
              />
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : lang.code)}
                aria-expanded={isOpen}
                className="relative flex w-full items-start justify-between gap-4 text-left"
              >
                <div className="flex min-w-0 items-center gap-4">
                  {/* Waving flag replaces static emoji */}
                  <span
                    aria-hidden
                    className="grid h-14 w-20 shrink-0 place-items-center overflow-hidden rounded-sm border border-hairline bg-background/60 shadow-inner md:h-16 md:w-24"
                  >
                    <WavingFlag
                      stripes={meta.stripes}
                      orientation={meta.orientation}
                      reduce={reduce}
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-display text-2xl leading-none text-foreground md:text-3xl">
                      {lang.name}
                    </div>
                    <div
                      className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.24em]"
                      style={{ color: meta.accent }}
                    >
                      {lang.code}
                    </div>
                  </div>
                </div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-silver-dim">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>

              <div className="relative mt-3 text-sm text-silver-dim">{lang.level}</div>

              <div className="relative mt-6 h-[3px] w-full overflow-hidden bg-hairline">
                <motion.div
                  initial={{ scaleX: reduce ? lang.pct : 0 }}
                  whileInView={{ scaleX: lang.pct }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.2 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                  style={{
                    transformOrigin: "left",
                    background: `linear-gradient(90deg, ${meta.accent}, oklch(0.86 0.008 250))`,
                  }}
                  className="h-full w-full"
                />
              </div>

              <div className="relative mt-3 flex items-baseline justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-silver-dim">
                <span>Fluência aplicada</span>
                <span style={{ color: meta.accent }}>{Math.round(lang.pct * 100)}%</span>
              </div>

              {/* Native greeting + tribute — expands on click */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative overflow-hidden"
              >
                <div className="mt-6 border-t border-hairline pt-5">
                  <div
                    className="font-display text-xl leading-tight md:text-2xl"
                    style={{ color: meta.accent }}
                  >
                    “{meta.greeting}”
                  </div>
                  {meta.phonetic && (
                    <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-silver-dim">
                      {meta.phonetic}
                    </div>
                  )}
                  <p className="mt-3 text-sm text-silver-dim">{meta.tribute}</p>
                </div>
              </motion.div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: meta.accent }}
              />
              {/* corner glow on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 0 1px ${meta.accent}, 0 0 30px ${meta.accent.replace(")", " / 0.25)")}`,
                }}
              />
            </motion.li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
