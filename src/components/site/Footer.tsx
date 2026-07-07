import { useT } from "@/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="hairline-t mt-32">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="text-eyebrow">{t.footer.cta}</div>
            <a
              href="#projects"
              className="group mt-4 inline-flex items-baseline gap-4 font-display text-3xl text-foreground md:text-5xl"
            >
              <span>{t.footer.ctaAction}</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-2 text-copper">→</span>
            </a>
          </div>
          <div className="text-right text-eyebrow">
            <div className="text-foreground">Pablo Silva Dutra</div>
            <div className="mt-2">{t.footer.tagline}</div>
          </div>
        </div>
        <div className="hairline-t mt-14 flex flex-wrap items-center justify-between gap-3 pt-6 text-eyebrow">
          <span>© {new Date().getFullYear()} · {t.footer.rights}</span>
          <span>{t.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
