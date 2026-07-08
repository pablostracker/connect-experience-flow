import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SectionShell({
  id,
  label,
  title,
  intro,
  children,
  titleFx,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  titleFx?: "rainbow-bounce";
}) {
  const reduce = useReducedMotion();
  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-120px" },
          transition: { duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] as const },
        };

  const rainbow = [
    "oklch(0.72 0.20 25)",
    "oklch(0.78 0.19 55)",
    "oklch(0.86 0.18 95)",
    "oklch(0.75 0.19 145)",
    "oklch(0.72 0.17 200)",
    "oklch(0.60 0.22 265)",
    "oklch(0.58 0.25 305)",
    "oklch(0.70 0.22 350)",
  ];

  const renderTitle = () => {
    if (titleFx !== "rainbow-bounce") return title;
    const chars = Array.from(title);
    return (
      <span className="group/title inline-block cursor-default">
        {chars.map((ch, i) => (
          <span
            key={i}
            className="inline-block transition-[color,transform] duration-300 ease-out group-hover/title:-translate-y-2 group-hover/title:[animation:letter-bounce_0.9s_ease-in-out_infinite]"
            style={
              {
                transitionDelay: `${i * 25}ms`,
                animationDelay: `${i * 60}ms`,
                ["--rainbow" as string]: rainbow[i % rainbow.length],
              } as React.CSSProperties
            }
          >
            <span className="inline-block group-hover/title:text-[color:var(--rainbow)]">
              {ch === " " ? "\u00A0" : ch}
            </span>
          </span>
        ))}
      </span>
    );
  };

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="hairline-t scroll-mt-24 px-6 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-4">
            <motion.div {...rise(0)} className="text-eyebrow mb-8">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-copper" />
              {label}
            </motion.div>
            <motion.h2
              {...rise(0.08)}
              id={`${id}-title`}
              className="font-display text-4xl leading-[1.02] tracking-tight text-foreground md:text-6xl"
            >
              {renderTitle()}
            </motion.h2>
            {intro && (
              <motion.p
                {...rise(0.18)}
                className="mt-8 max-w-md text-silver-dim md:text-lg"
              >
                {intro}
              </motion.p>
            )}
          </div>
          <motion.div {...rise(0.24)} className="md:col-span-8">
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
