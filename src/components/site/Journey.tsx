import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function Journey() {
  const t = useT();
  const [open, setOpen] = useState<string | null>(t.journey.items[0]?.id ?? null);

  return (
    <SectionShell
      id="journey"
      label={t.journey.label}
      title={t.journey.title}
      intro={t.journey.intro}
    >
      <div className="hairline-t">
        {t.journey.items.map((item) => {
          const isOpen = open === item.id;
          return (
            <div key={item.id} className="hairline-b">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-8 text-left md:grid-cols-[8rem_minmax(0,1fr)_auto] md:py-10"
              >
                <span className="hidden text-eyebrow md:inline">{item.period}</span>
                <span className="min-w-0">
                  <span className="block font-display text-2xl leading-tight text-foreground md:text-4xl">
                    {item.company}
                  </span>
                  <span className="mt-2 block text-eyebrow">{item.role}</span>
                </span>
                <span
                  aria-hidden
                  className={`text-2xl text-silver-dim transition-transform duration-500 ${
                    isOpen ? "rotate-45 text-copper" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-10 pb-12 md:grid-cols-2 md:gap-14 md:pb-16">
                      <div className="space-y-8">
                        <Block label="Contexto" body={item.context} />
                        <Block label="Resultado" body={item.result} accent />
                      </div>
                      <div>
                        <div className="text-eyebrow">{item.scopeLabel}</div>
                        <ul className="mt-4 space-y-3">
                          {item.scope.map((s, i) => (
                            <motion.li
                              key={s}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.15 + i * 0.06,
                                ease: [0.2, 0.7, 0.2, 1],
                              }}
                              className="flex gap-3 text-silver-dim md:text-lg"
                            >
                              <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-copper" />
                              <span>{s}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Full trajectory timeline */}
      <div className="mt-24">
        <div className="flex items-baseline justify-between gap-6">
          <div>
            <div className="text-eyebrow text-copper">{t.journey.trajectoryLabel}</div>
            <p className="mt-3 max-w-2xl text-silver-dim md:text-lg">
              {t.journey.trajectoryIntro}
            </p>
          </div>
          <div aria-hidden className="font-mono text-xs text-silver-dim">
            {String(t.journey.trajectory.length).padStart(2, "0")} passagens
          </div>
        </div>

        <ol className="relative mt-10 border-l border-hairline pl-6 md:pl-10">
          {t.journey.trajectory.map((item, i) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative py-4"
            >
              <span
                aria-hidden
                className="absolute -left-[27px] top-6 h-2 w-2 rounded-full bg-silver-dim/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-copper md:-left-[43px]"
                style={{ boxShadow: "0 0 0 3px hsl(var(--background))" }}
              />
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 md:grid-cols-[9rem_minmax(0,1fr)_auto]">
                <span className="hidden font-mono text-xs uppercase tracking-[0.14em] text-silver-dim md:inline">
                  {item.period}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-tight text-foreground md:text-xl">
                    {item.company}
                  </span>
                  <span className="mt-1 block text-sm text-silver-dim md:text-[0.95rem]">
                    {item.role}
                  </span>
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-silver-dim md:hidden">
                    {item.period}
                  </span>
                </span>
                <span className="shrink-0 border border-hairline px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-copper">
                  {item.tag}
                </span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}


function Block({ label, body, accent }: { label: string; body: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-eyebrow">{label}</div>
      <p
        className={`mt-3 leading-relaxed md:text-lg ${
          accent ? "font-display text-xl text-foreground md:text-2xl" : "text-silver-dim"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
