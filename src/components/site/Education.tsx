import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

const palette = [
  "oklch(0.72 0.20 25)",
  "oklch(0.78 0.19 55)",
  "oklch(0.86 0.18 95)",
  "oklch(0.75 0.19 145)",
  "oklch(0.72 0.17 200)",
  "oklch(0.60 0.22 265)",
  "oklch(0.58 0.25 305)",
  "oklch(0.70 0.22 350)",
  "oklch(0.75 0.15 130)",
];

export function Education() {
  const t = useT();
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(0);

  return (
    <SectionShell
      id="education"
      label={t.edu.label}
      title={t.edu.title}
      intro={t.edu.intro}
    >
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {t.edu.primary.map((e, i) => {
          const color = palette[i % palette.length];
          const isActive = active === i;
          return (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: reduce ? 0 : i * 0.05,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className={
                isActive
                  ? "sm:col-span-2 lg:col-span-3"
                  : ""
              }
            >
              <button
                type="button"
                onClick={() => setActive(isActive ? null : i)}
                aria-expanded={isActive}
                className="group relative flex w-full flex-col justify-between overflow-hidden rounded-lg border p-6 text-left transition-all duration-500 ease-out hover:-translate-y-0.5"
                style={{
                  minHeight: 180,
                  borderColor: isActive
                    ? color
                    : "var(--hairline)",
                  background: isActive
                    ? `linear-gradient(135deg, color-mix(in oklch, ${color} 18%, var(--background)) 0%, var(--background) 70%)`
                    : "var(--background)",
                  boxShadow: isActive
                    ? `0 0 0 1px ${color}, 0 20px 60px -30px ${color}`
                    : "none",
                }}
              >
                {/* accent bar */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{
                    background: color,
                    transform: isActive ? "scaleY(1)" : undefined,
                  }}
                />

                <div className="flex items-baseline justify-between text-eyebrow">
                  <span
                    style={{
                      color: isActive ? color : undefined,
                      transition: "color 300ms",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    style={{
                      color: isActive ? color : "var(--copper)",
                      transition: "color 300ms",
                    }}
                  >
                    {e.period}
                  </span>
                </div>

                <div className="mt-6">
                  <div
                    className="font-display text-lg leading-tight transition-colors duration-300 md:text-xl"
                    style={{ color: isActive ? color : "var(--foreground)" }}
                  >
                    {e.title}
                  </div>
                  <div className="mt-2 text-sm text-silver-dim">{e.inst}</div>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && "focus" in e && e.focus && (
                    <motion.div
                      key="focus"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className="border-l-2 pl-4 text-sm leading-relaxed text-silver"
                        style={{ borderColor: color }}
                      >
                        {e.focus}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className="mt-4 text-eyebrow opacity-60 transition-opacity group-hover:opacity-100"
                  style={{ color: isActive ? color : undefined }}
                >
                  {isActive ? "× fechar" : "+ o que estudo"}
                </div>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
