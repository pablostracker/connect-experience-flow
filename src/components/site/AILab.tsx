import { useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function AILab() {
  const t = useT();
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Record<string, Set<string>>>({});

  const toggleTool = (clusterId: string, tool: string) => {
    setSelected((prev) => {
      const next = new Set(prev[clusterId] ?? []);
      if (next.has(tool)) next.delete(tool);
      else next.add(tool);
      return { ...prev, [clusterId]: next };
    });
  };

  return (
    <SectionShell id="lab" label={t.lab.label} title={t.lab.title} intro={t.lab.intro}>
      <div className="space-y-px bg-hairline">
        {t.lab.clusters.map((c, i) => {
          const isActive = active === c.id;
          const dim = active && !isActive;
          const picks = selected[c.id] ?? new Set<string>();
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
              className={`grid grid-cols-1 gap-10 bg-background p-8 transition-opacity duration-500 md:grid-cols-[minmax(0,0.9fr)_minmax(0,2.4fr)_minmax(0,0.9fr)] md:items-start md:gap-20 md:p-14 ${
                dim ? "opacity-40" : "opacity-100"
              }`}
            >
              <div className="min-w-0">
                <div className="text-eyebrow">Cluster</div>
                <div className="mt-3 font-display text-2xl leading-tight text-foreground md:text-3xl">
                  {c.name}
                </div>
              </div>
              <div className="flex min-w-0 flex-wrap gap-2.5 font-mono text-xs">
                {c.tools.map((tool) => {
                  const isPicked = picks.has(tool);
                  return (
                    <button
                      key={tool}
                      type="button"
                      onClick={() => toggleTool(c.id, tool)}
                      aria-pressed={isPicked}
                      className={`inline-flex items-center rounded-full border px-3 py-1.5 leading-none transition-all duration-300 ${
                        isPicked
                          ? "border-transparent text-black shadow-[0_0_18px_rgba(219,180,120,0.35)]"
                          : isActive
                            ? "border-copper/60 bg-copper/10 text-foreground"
                            : "border-hairline text-silver-dim hover:border-copper/40 hover:text-foreground"
                      }`}
                      style={
                        isPicked
                          ? {
                              backgroundImage:
                                "linear-gradient(135deg, oklch(0.92 0.06 90) 0%, oklch(0.78 0.11 60) 45%, oklch(0.62 0.10 40) 100%)",
                            }
                          : undefined
                      }
                    >
                      {tool}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-3 md:justify-end">
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
