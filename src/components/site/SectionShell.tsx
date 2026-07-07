import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function SectionShell({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
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
              {title}
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
