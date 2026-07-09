import { useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function AILab() {
  const t = useT();
  const [active, setActive] = useState<string | null>(null);

  return (
    <SectionShell id="lab" label={t.lab.label} title={t.lab.title} intro={t.lab.intro}>
      <div className="space-y-px bg-hairline">
        {t.lab.clusters.map((c, i) => {
          const isActive = active === c.id;
          const dim = active && !isActive;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
              className={`grid grid-cols-1 gap-6 bg-background p-8 transition-opacity duration-500 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] md:items-center md:p-10 ${
                dim ? "opacity-40" : "opacity-100"
              }`}
            >
              <div>
                <div className="text-eyebrow">Cluster</div>
                <div className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                  {c.name}
                </div>
              </div>
              <div className="flex min-w-0 flex-wrap gap-2 font-mono text-xs">
                {c.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`inline-flex items-center rounded-full border px-3 py-1 leading-none transition-colors duration-300 ${
                      isActive
                        ? "border-copper/60 bg-copper/10 text-foreground"
                        : "border-hairline text-silver-dim"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-hairline md:w-12" />
                <span
                  className={`font-display text-xl transition-colors duration-500 md:text-2xl ${
                    isActive ? "text-copper" : "text-foreground"
                  }`}
                >
                  {c.outcome}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionShell>
  );
}
