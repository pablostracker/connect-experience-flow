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
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
            className="bg-background p-8"
          >
            <div className="flex items-baseline justify-between text-eyebrow">
              <span>0{i + 1}</span>
              <span className="text-copper">{e.inst}</span>
            </div>
            <div className="mt-5 font-display text-xl leading-tight text-foreground md:text-2xl">
              {e.title}
            </div>
          </motion.li>
        ))}
      </ol>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="mt-12"
      >
        <div className="text-eyebrow">Formação de base</div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-display text-lg text-silver-dim md:text-xl">
          {t.edu.secondary.map((s, i) => (
            <span key={s} className="flex items-baseline gap-6">
              {i > 0 && <span aria-hidden className="text-hairline">·</span>}
              <span>{s}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
