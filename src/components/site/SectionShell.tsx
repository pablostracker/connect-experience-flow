import type { ReactNode } from "react";

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
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="hairline-t scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="text-eyebrow mb-6">{label}</div>
            <h2
              id={`${id}-title`}
              className="font-display text-3xl leading-[1.05] tracking-tight text-foreground md:text-5xl"
            >
              {title}
            </h2>
            {intro && (
              <p className="mt-6 max-w-md text-silver-dim md:text-lg">{intro}</p>
            )}
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
