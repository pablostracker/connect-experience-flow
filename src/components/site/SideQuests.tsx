import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/i18n";
import { SectionShell } from "./SectionShell";

export function SideQuests() {
  const t = useT();
  const q = t.quests.items;
  return (
    <SectionShell id="projects" label={t.quests.label} title={t.quests.title}>
      <div className="space-y-24">
        <QuestBlock name={q.falcoes.name} role={q.falcoes.role} theme={q.falcoes.theme} body={q.falcoes.body}>
          <PullRow items={q.falcoes.pulls} />
        </QuestBlock>

        <QuestBlock name={q.loud.name} role={q.loud.role} theme={q.loud.theme} body={q.loud.body}>
          <PullRow items={q.loud.pulls} mono />
        </QuestBlock>

        <NarutoScene
          name={q.naruto.name}
          role={q.naruto.role}
          theme={q.naruto.theme}
          body={q.naruto.body}
          value={q.naruto.value}
        />

        <QuestBlock name={q.sports.name} role={q.sports.role} theme={q.sports.theme} body={q.sports.body}>
          <PullRow items={q.sports.pulls} />
        </QuestBlock>
      </div>
    </SectionShell>
  );
}

function QuestBlock({
  name,
  role,
  theme,
  body,
  children,
}: {
  name: string;
  role: string;
  theme: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="hairline-t pt-10">
      <div className="text-eyebrow">{theme}</div>
      <h3 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-5xl">
        {name}
      </h3>
      <div className="mt-3 font-mono text-sm text-copper">{role}</div>
      <p className="mt-6 max-w-2xl text-silver-dim md:text-lg">{body}</p>
      {children && <div className="mt-8">{children}</div>}
    </article>
  );
}

function PullRow({ items, mono }: { items: readonly string[]; mono?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {items.map((i) => (
        <span
          key={i}
          className={
            mono
              ? "font-mono text-sm text-silver-dim"
              : "font-display text-xl text-foreground"
          }
        >
          {i}
        </span>
      ))}
    </div>
  );
}

function NarutoScene({
  name,
  role,
  theme,
  body,
  value,
}: {
  name: string;
  role: string;
  theme: string;
  body: string;
  value: readonly string[];
}) {
  const reduce = useReducedMotion();
  return (
    <article className="relative overflow-hidden bg-black">
      <div className="grain absolute inset-0" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, oklch(0.72 0.11 45 / 0.25), transparent 55%)",
        }}
      />
      <div className="relative grid gap-10 p-8 md:grid-cols-2 md:gap-16 md:p-14">
        <div>
          <div className="text-eyebrow text-copper">{theme}</div>
          <h3 className="mt-3 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
            {name}
          </h3>
          <div className="mt-3 font-mono text-sm text-silver-dim">{role}</div>
          <p className="mt-6 max-w-md text-silver-dim md:text-lg">{body}</p>
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {value.map((v) => (
              <li key={v} className="flex items-baseline gap-2 text-eyebrow">
                <span aria-hidden className="text-copper">◆</span>
                <span className="text-foreground normal-case tracking-normal">{v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex min-h-[320px] items-center justify-center md:min-h-[480px]">
          <motion.svg
            viewBox="0 0 200 200"
            className="h-full w-full max-w-[440px]"
            initial={reduce ? undefined : { rotate: -6, opacity: 0 }}
            whileInView={reduce ? undefined : { rotate: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
            aria-hidden
          >
            <defs>
              <linearGradient id="leaf-metal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.9 0.02 250)" />
                <stop offset="55%" stopColor="oklch(0.55 0.02 250)" />
                <stop offset="100%" stopColor="oklch(0.72 0.11 45)" />
              </linearGradient>
              <radialGradient id="leaf-glow" cx="0.5" cy="0.55" r="0.55">
                <stop offset="0%" stopColor="oklch(0.72 0.11 45 / 0.55)" />
                <stop offset="100%" stopColor="oklch(0.72 0.11 45 / 0)" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="105" r="80" fill="url(#leaf-glow)" />
            <path
              d="M100 25 C 150 55, 165 120, 100 180 C 45 130, 55 60, 100 25 Z"
              fill="none"
              stroke="url(#leaf-metal)"
              strokeWidth="1.2"
            />
            <path
              d="M100 25 C 118 70, 118 140, 100 180"
              fill="none"
              stroke="oklch(0.9 0.02 250 / 0.6)"
              strokeWidth="0.6"
            />
            <path
              d="M100 110 m -18 0 a 18 18 0 1 0 36 0 a 14 14 0 1 1 -28 0 a 10 10 0 1 0 20 0 a 6 6 0 1 1 -12 0"
              fill="none"
              stroke="url(#leaf-metal)"
              strokeWidth="0.9"
            />
            {[40, 60, 80, 100, 120, 140].map((y, i) => (
              <path
                key={y}
                d={`M100 ${y} Q ${110 + i * 2} ${y + 4} ${120 + i * 3} ${y + 10}`}
                stroke="oklch(0.9 0.02 250 / 0.35)"
                strokeWidth="0.4"
                fill="none"
              />
            ))}
          </motion.svg>
        </div>
      </div>
    </article>
  );
}
