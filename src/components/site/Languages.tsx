import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function Languages() {
  const t = useT();
  const reduce = !!useReducedMotion();

  return (
    <SectionShell
      id="languages"
      label={t.languages.label}
      title={t.languages.title}
      intro={t.languages.intro}
    >
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.languages.items.map((lang, i) => (
          <motion.li
            key={lang.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            className="group relative overflow-hidden border border-hairline bg-graphite/30 p-6 backdrop-blur-sm md:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="grid h-12 w-12 place-items-center rounded-full border border-hairline bg-background/60 text-2xl leading-none shadow-inner md:h-14 md:w-14 md:text-3xl"
                >
                  {lang.flag}
                </span>
                <div>
                  <div className="font-display text-2xl leading-none text-foreground md:text-3xl">
                    {lang.name}
                  </div>
                  <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-copper">
                    {lang.code}
                  </div>
                </div>
              </div>
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-silver-dim">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="mt-3 text-sm text-silver-dim">{lang.level}</div>


            <div className="mt-6 h-[3px] w-full overflow-hidden bg-hairline">
              <motion.div
                initial={{ scaleX: reduce ? lang.pct : 0 }}
                whileInView={{ scaleX: lang.pct }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.2 + i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
                style={{
                  transformOrigin: "left",
                  background:
                    "linear-gradient(90deg, oklch(0.72 0.11 45), oklch(0.86 0.008 250))",
                }}
                className="h-full w-full"
              />
            </div>

            <div className="mt-3 flex items-baseline justify-between font-mono text-[0.65rem] uppercase tracking-[0.2em] text-silver-dim">
              <span>Fluência aplicada</span>
              <span className="text-copper">{Math.round(lang.pct * 100)}%</span>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-0 bg-copper transition-all duration-500 group-hover:w-full"
            />
          </motion.li>
        ))}
      </ul>
    </SectionShell>
  );
}
