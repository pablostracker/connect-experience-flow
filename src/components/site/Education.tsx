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
          <li key={e.title} className="bg-background p-6">
            <div className="flex items-baseline justify-between text-eyebrow">
              <span>0{i + 1}</span>
              <span className="text-copper">{e.inst}</span>
            </div>
            <div className="mt-4 font-display text-xl leading-tight text-foreground md:text-2xl">
              {e.title}
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <div className="text-eyebrow">Formação de base</div>
        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display text-lg text-silver-dim md:text-xl">
          {t.edu.secondary.map((s, i) => (
            <span key={s} className="flex items-baseline gap-6">
              {i > 0 && <span aria-hidden className="text-hairline">·</span>}
              <span>{s}</span>
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
