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
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-6 text-left md:grid-cols-[auto_minmax(0,1fr)_auto] md:py-8"
              >
                <span className="hidden text-eyebrow md:inline">{item.period}</span>
                <span className="min-w-0">
                  <span className="block font-display text-2xl leading-tight text-foreground md:text-4xl">
                    {item.company}
                  </span>
                  <span className="mt-1 block text-eyebrow">{item.role}</span>
                </span>
                <span
                  aria-hidden
                  className={`text-2xl text-silver-dim transition-transform ${
                    isOpen ? "rotate-45" : ""
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
                    transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-10 md:grid-cols-2 md:gap-10 md:pb-12">
                      <Block label="Contexto" body={item.context} />
                      <Block label="Desafio" body={item.challenge} />
                      <Block label="O que eu fiz" body={item.did} />
                      <Block label="Resultado" body={item.result} accent />
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
          accent ? "font-display text-2xl text-foreground md:text-3xl" : "text-silver-dim"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
