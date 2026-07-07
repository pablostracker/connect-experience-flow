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
