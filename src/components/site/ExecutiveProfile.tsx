import { motion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function ExecutiveProfile() {
  const t = useT();
  return (
    <SectionShell
      id="profile"
      label={t.profile.label}
      title={t.profile.title}
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-6 text-silver-dim md:text-lg">
          <p className="text-foreground md:text-xl">{t.profile.p1}</p>
          <p>{t.profile.p2}</p>
        </div>
        <div>
          <div className="text-eyebrow">
            <span className="mr-3 inline-block h-px w-6 align-middle bg-copper" />
            {t.profile.areasLabel}
          </div>
          <ul className="mt-6 hairline-t">
            {t.profile.areas.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
                className="hairline-b flex items-baseline justify-between py-3.5 font-display text-lg text-foreground md:text-xl"
              >
                <span>{a}</span>
                <span className="font-mono text-xs text-silver-dim">0{i + 1}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
