import { useState } from "react";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function AILab() {
  const t = useT();
  const [active, setActive] = useState<string | null>(null);

  return (
    <SectionShell id="lab" label={t.lab.label} title={t.lab.title} intro={t.lab.intro}>
      <div className="space-y-px bg-hairline">
        {t.lab.clusters.map((c) => {
          const isActive = active === c.id;
          const dim = active && !isActive;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setActive(c.id)}
              onMouseLeave={() => setActive(null)}
              className={`grid grid-cols-1 gap-6 bg-background p-6 transition-opacity md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] md:items-center md:p-8 ${
                dim ? "opacity-40" : "opacity-100"
              }`}
            >
              <div>
                <div className="text-eyebrow">Cluster</div>
                <div className="mt-2 font-display text-2xl text-foreground md:text-3xl">
                  {c.name}
                </div>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-silver-dim">
                {c.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`transition-colors ${isActive ? "text-foreground" : ""}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-hairline md:w-12" />
                <span
                  className={`font-display text-xl transition-colors md:text-2xl ${
                    isActive ? "text-copper" : "text-foreground"
                  }`}
                >
                  {c.outcome}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
