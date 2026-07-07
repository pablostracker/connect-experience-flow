import { motion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function Education() {
  const t = useT();
  return (
    <SectionShell
      id="education"
      label={t.edu.label}
      title={t.edu.title}
      intro={t.edu.intro}
    >
      <ol className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {t.edu.primary.map((e, i) => (
          <motion.li
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] }}
            className="flex min-h-[180px] flex-col justify-between bg-background p-7"
          >
            <div className="flex items-baseline justify-between text-eyebrow">
              <span>0{i + 1}</span>
              <span className="text-copper">{e.period}</span>
            </div>
            <div className="mt-6">
              <div className="font-display text-lg leading-tight text-foreground md:text-xl">
                {e.title}
              </div>
              <div className="mt-2 text-sm text-silver-dim">{e.inst}</div>
            </div>
          </motion.li>
        ))}
      </ol>
    </SectionShell>
  );
}
