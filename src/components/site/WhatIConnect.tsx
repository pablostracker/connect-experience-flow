import { useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function WhatIConnect() {
  const t = useT();
  const [active, setActive] = useState<string | null>(null);

  return (
    <SectionShell
      id="connect"
      label={t.connect.label}
      title={t.connect.title}
      intro={t.connect.intro}
    >
      <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
        {t.connect.territories.map((ter) => {
          const isActive = active === ter.id;
          const dim = active && !isActive;
          return (
            <motion.button
              key={ter.id}
              type="button"
              onMouseEnter={() => setActive(ter.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(ter.id)}
              onBlur={() => setActive(null)}
              animate={{ opacity: dim ? 0.35 : 1 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-background p-8 text-left transition-colors hover:bg-graphite focus:bg-graphite focus:outline-none md:p-10"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-eyebrow">{ter.code}</span>
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    isActive ? "bg-copper" : "bg-silver-dim/40"
                  }`}
                />
              </div>
              <div className="mt-6 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                {ter.name}
              </div>
              <ul className="mt-6 space-y-1.5 text-silver-dim">
                {ter.items.map((i) => (
                  <li key={i} className="text-sm md:text-base">
                    {i}
                  </li>
                ))}
              </ul>
              <div
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-px origin-left bg-copper transition-transform duration-500 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </motion.button>
          );
        })}
      </div>
    </SectionShell>
  );
}
